const express = require('express');
const axios = require('axios');
const cors = require('cors');
const cookieParser = require('cookie-parser'); // Add cookie parser
const bcrypt = require('bcrypt');
const { Server } = require('ws'); // Correct import for WebSocket server
const app = express();
const DB = require('./database.js');

const authCookieName = 'token';
const port = process.argv.length > 2 ? process.argv[2] : 4000;

app.use(cors());
app.use(express.json()); // Use JSON parser to handle POST requests
app.use(cookieParser()); // Use cookie parser to access cookies

app.use(express.static('public'));

var apiRouter = express.Router();
app.use('/api', apiRouter);

// Authentication routes
apiRouter.post('/auth/create', async (req, res) => {
  if (await DB.getUser(req.body.email)) {
    res.status(409).send({ msg: 'Existing user' });
  } else {
    const user = await DB.createUser(req.body.email, req.body.password);
    setAuthCookie(res, user.token);
    res.send({
      id: user._id,
    });
  }
});

apiRouter.post('/auth/login', async (req, res) => {
  const user = await DB.getUser(req.body.email);
  if (user && await bcrypt.compare(req.body.password, user.password)) {
    setAuthCookie(res, user.token);
    res.send({ id: user._id });
  } else {
    res.status(401).send({ msg: 'Unauthorized' });
  }
});

apiRouter.delete('/auth/logout', (_req, res) => {
  res.clearCookie(authCookieName);
  res.status(204).end();
});

// Authentication middleware (applies only to secured routes)
async function requireAuth(req, res, next) {
  const authToken = req.cookies[authCookieName];
  const user = await DB.getUserByToken(authToken);
  if (user) {
    next();
  } else {
    res.status(401).send({ msg: 'Unauthorized' });
  }
}

// Example route: Fetch a random song (no authentication required)
apiRouter.get('/random-song', async (_req, res) => {
  try {
    const response = await axios.get('https://energy.ch/api/channels/bern/playouts');
    const songs = response.data;
    console.log('Fetching data from API...');

    if (!songs || songs.length === 0) {
      return res.status(404).send({ msg: 'No songs found' });
    }

    const randomSong = songs[Math.floor(Math.random() * songs.length)];

    const songDetails = {
      title: randomSong.title,
      artist: randomSong.artist
    };

    return res.send(songDetails);
  } catch (error) {
    console.error('Error fetching songs:', error);
    res.status(500).send({ msg: 'Failed to fetch songs' });
  }
});

// Secured example route (requires authentication)
apiRouter.get('/secure-data', requireAuth, async (_req, res) => {
  res.send({ msg: 'This is secured data only visible to logged-in users.' });
});

// Default catch-all for unknown routes
app.use((_req, res) => {
  res.sendFile('index.html', { root: 'public' });
});

// Set auth cookie in the response
function setAuthCookie(res, authToken) {
  res.cookie(authCookieName, authToken, {
    secure: true,
    httpOnly: true,
    sameSite: 'strict',
  });
}

// WebSocket server integration
const server = app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});

// Create WebSocketServer and integrate with the existing HTTP server
const wss = new Server({ noServer: true });

server.on('upgrade', (request, socket, head) => {
  wss.handleUpgrade(request, socket, head, function done(ws) {
    wss.emit('connection', ws, request);
  });
});

// Keep track of all the connections
let connections = [];
let id = 0;

wss.on('connection', (ws) => {
  const connection = { id: ++id, alive: true, ws: ws };
  connections.push(connection);

  // Forward messages to everyone except the sender
  ws.on('message', function message(data) {
    connections.forEach((c) => {
      if (c.id !== connection.id) {
        c.ws.send(data);
      }
    });
  });

  // Remove the closed connection
  ws.on('close', () => {
    const pos = connections.findIndex((o) => o.id === connection.id);
    if (pos >= 0) {
      connections.splice(pos, 1);
    }
  });

  // Respond to pong messages by marking the connection alive
  ws.on('pong', () => {
    connection.alive = true;
  });
});

// Keep active connections alive by sending ping every 10 seconds
setInterval(() => {
  connections.forEach((c) => {
    if (!c.alive) {
      c.ws.terminate();
    } else {
      c.alive = false;
      c.ws.ping();
    }
  });
}, 10000);

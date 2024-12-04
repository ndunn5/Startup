const express = require('express');
const axios = require('axios');
const cors = require('cors');
const cookieParser = require('cookie-parser'); // Add cookie parser
const bcrypt = require('bcrypt');
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

// Start the server
app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
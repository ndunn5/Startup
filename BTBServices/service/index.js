const express = require('express');
const axios = require('axios'); 
const app = express();

const port = process.argv.length > 2 ? process.argv[2] : 3000;

app.use(express.static('public'));

var apiRouter = express.Router();
app.use('/api', apiRouter);

apiRouter.get('/random-song', async (_req, res) => {
  try {
    const response = await axios.get('https://energy.ch/api/channels/bern/playouts');
    const songs = response.data;

    if (!songs || songs.length === 0) {
      return res.status(404).send({ msg: 'No songs found' });
    }

    const randomSong = songs[Math.floor(Math.random() * songs.length)];
    res.send(randomSong);
  } catch (error) {
    console.error('Error fetching songs:', error);
    res.status(500).send({ msg: 'Failed to fetch songs' });
  }
});

app.use((_req, res) => {
  res.sendFile('index.html', { root: 'public' });
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});

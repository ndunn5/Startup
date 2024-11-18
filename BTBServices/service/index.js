const express = require('express');
const axios = require('axios');
const cors = require('cors'); 
const app = express();

const port = process.argv.length > 2 ? process.argv[2] : 4000;

app.use(cors()); 

app.use(express.static('public'));

var apiRouter = express.Router();
app.use('/api', apiRouter);

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

    res.send(songDetails);
  } catch (error) {
    console.error('Error fetching songs:', error);
    res.status(500).send({ msg: 'Failed to fetch songs' });
  }
});

app.use((_req, res) => {
  res.sendFile('index.html', { root: 'public' });
});

app.listen(4000, () => {
  console.log('Server is running at http://localhost:4000');
});

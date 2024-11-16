const express = require('express');
const axios = require('axios');
const path = require('path');
const cors = require('cors');  

const app = express();
const PORT = 3000;

app.use(cors()); 

app.use(express.static(path.join(__dirname, 'public')));

app.get('/playouts', async (req, res) => {
  try {
    const response = await axios.get('https://energy.ch/api/channels/bern/playouts');
    const songs = response.data;

    const randomIndex = Math.floor(Math.random() * songs.length);
    const randomSong = songs[randomIndex];

    res.json({
      title: randomSong.title,
      artist: randomSong.artist,
      imageUrl: randomSong.imageUrl,
      audioUrl: randomSong.audioUrl,
    });
  } catch (error) {
    console.error('Error fetching songs from the API:', error);
    res.status(500).json({ error: 'Failed to fetch songs' });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});

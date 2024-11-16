async function displayRandomSong() {
    try {
      const response = await fetch("https://energy.ch/api/channels/bern/playouts"); 
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      
      const songs = await response.json();
  
      const randomSong = songs[Math.floor(Math.random() * songs.length)];
  
      const songTitleElement = document.getElementById("song-title");
      const artistElement = document.getElementById("artist");
      
      songTitleElement.textContent = `Title: ${randomSong.title}`;
      artistElement.textContent = `Artist: ${randomSong.artist}`;
    } catch (error) {
      console.error("Error fetching or displaying data:", error);
    }
  }
  
  window.onload = displayRandomSong;
  
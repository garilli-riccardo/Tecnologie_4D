const express = require('express');
const app = express();
const songsData = require('./songs.json');

app.set('view engine', 'pug');
app.use(express.static('public'));

// Rotte per la visualizzazione del menu
app.get('/', (req, res) => {
  res.render('menu');
});

// Rotta per la visualizzazione delle singole canzoni
app.get('/song/:song_id', (req, res) => {
  const songId = req.params.song_id;
  const song = songsData.songs.find(song => song.song_id === songId);
  if (!song) {
  } else {
    res.render('song', { song });
  }
});



// Rotta per restituire i dati delle canzoni come JSON
app.get('/api/album-songs', (req, res) => {
  res.json(songsData);
});

// Avvio del server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

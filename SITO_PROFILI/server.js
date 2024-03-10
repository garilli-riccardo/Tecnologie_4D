const express = require('express');
const app = express();
const port = 3000;

app.use(express.static('public')); // Per servire file statici come immagini e CSS
app.set('view engine', 'pug'); // Usa Pug come motore di template

// Homepage
app.get('/', (req, res) => {
  res.render('index', { title: 'Sito Profili' });
});

// Pagina dei profili
app.get('/profili', (req, res) => {
  res.render('profili', { title: 'Profili' });
});

// Pagina del profilo della persona
app.get('/profili/:persona', (req, res) => {
  const persona = req.params.persona;
  res.render('persona', { title: `Profilo di ${persona}`, persona });
});

app.listen(port, () => {
  console.log(`Server in ascolto su http://localhost:${port}`);
});
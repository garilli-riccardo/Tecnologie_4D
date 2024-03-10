const express = require('express');
const people = require('./people.json'); //Copia il file people.json dentro la variabile people
const app = express();

app.set('view engine', 'pug');   //Dico a express di usare pug come motore di template
app.set('views', '/Tecnologie4D/SITO_PROFILI/views')
app.use(express.static(__dirname + '/public')); // Dico ad express dove recuperare i file statici

app.get('/', function (req, res) {
    res.render('index', {
     title: 'Homepage',
     people: people.profiles
   });
});

app.listen(3000, function () {
 console.log('Example app listening on port 3000!');
}); 
  
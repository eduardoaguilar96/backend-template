const express = require('express');
const app = express();
const port = 3001;

var bodyParser = require('body-parser')
app.use(bodyParser.json()); 
app.use(bodyParser.urlencoded({ extended: false })); 

var cors = require("cors");
app.use(cors());

app.get('/', (req, res) => {
  res.send('Hola Mundo!')
})

app.get('/prueba', (req, res) => {
    res.send('TEXTO DE PRUEBA')
  })

  app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
  });
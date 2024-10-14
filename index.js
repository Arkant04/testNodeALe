
const express = require('express');
const app = express();
let texto = "";

app.get('/', (req, res) => {
  res.send('Holiwi')
})

app.get('/grab', (req, res) => {
    const data = req.query.data
    texto += data
    res.send(data)
  })
  app.get('/read', (req, res) => {
    res.send(texto)
  })
  

app.listen(3001, () => {
  console.log(`Hola mundo`)
})


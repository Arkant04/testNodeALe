const express = require('express');
const app = express();
let texto = "";
let cokkiesQueGuardo = "";
//const cookies = document.cookie

app.get('/', (req, res) => {
  res.send('Holiwi')
})

app.get('/grab', (req, res) => {
    const data = req.query.data
    texto += " " + data
    res.send(data)
  })
  app.get('/read', (req, res) => {
    res.send(texto)
  })
  
  app.get('/cookir', (req, res) => {
      let cookir = document.cookie
      cokkiesQueGuardo += cookir;
      console.log(cookir)
      res.send('Hola wuenas tardes')
  
  })

app.listen(3001, () => {
  console.log(`Hola mundo`)
})





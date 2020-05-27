require('dotenv').config()
const express = require('express')
const bodyParser = require('body-parser')
const app = express()

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

app.get('/', function(req, res) {
  res.send('Olá mundo')
})

// const { Profile, User } = require('./app/models')
// Profile.create({ name: 'Teste', description: 'Ssdg dsgf' })

// Profile.findAll().then((profile) => {
//   console.log(JSON.stringify(profile))
// })

// Profile.findAll({ where: { name: 'administrador' } }).then((profile) => {
//   console.log(profile)
//   User.create({ name: 'Admin', email: 'admin@email.com', password: 'admin', profile_id: profile[0].id })
// })

app.listen(3000, function() {
  console.log('Servidor iniciado na porta 3000')
})

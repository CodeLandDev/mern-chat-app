const express = require('express')
const dotenv = require('dotenv')
const app = express()

// config
dotenv.config()

const { chats } = require('./data/data')

// mount routes
app.get('/', (req, res) => {
  res.send('Api running')
})

app.get('/api/chat', (req, res) => {
  res.send(chats)
})

app.get('/api/chat/:id', (req, res) => {
  let result = chats.find((chat) => chat._id === req.params.id)
  res.send(result)
})

// PORT
const PORT = process.env.PORT || 5000

// server
app.listen(PORT, () => console.log('Server listening at 5000'))

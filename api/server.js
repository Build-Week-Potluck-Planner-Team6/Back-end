const express = require('express')
const helmet = require('helmet')
const cors = require('cors')
const authRouter = require('./auth/auth-router')
const usersRouter = require('./users/users-router')
const potlucksRouter = require('./potlucks/potlucks-router')
const foodsRouter = require('./foods/foods-router')

const server = express()
server.use(express.json())
server.use(helmet())
server.use(cors())

server.use('/api/auth', authRouter)
server.use('/api/users', usersRouter)
server.use('/api/potlucks', potlucksRouter)
server.use('/api/foods', foodsRouter)

server.get('/', (req, res, next) => { // eslint-disable-line
  res.send('<h1>Here\'s the <a href="https://github.com/Build-Week-Potluck-Planner-Team6/Back-end">README</a></h1>')
})

server.use((err, req, res, next) => { // eslint-disable-line
  res.status(err.status || 500).json({
    message: err.message,
    stack: err.stack,
  })
})

module.exports = server

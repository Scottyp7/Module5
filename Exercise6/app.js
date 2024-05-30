const express = require('express')
const cors = require('cors')
const app = express()
const calRouter = require('./routes/calculatorRoutes')


app.use(express.json())
app.use(cors())


app.use('/Calculator', calRouter) // if route of request is '/calculator' it forwards the request to calRouter

module.exports = app
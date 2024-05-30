const express = require('express')

const app = express() // calling express and creating a new web server with the npm express function


const calRouter = require('./routes/calculatorRoutes')


const cors = require('cors')

const port = 3000


app.use(express.json())
app.use(cors())


app.use('/Calculator', calRouter) // if route of request is '/calculator' it forwards the request to calRouter


app.listen(port, ()=> {
    console.log(`Server has started and listening incoming request on port ${port}`)
})

module.exports = app 

/*app2.listen(port2, ()=> {
    console.log(`Server2 has started on port ${port2}`)
})*/
const express = require('express')

const app = express() // calling express and creating a new web server with the npm express function


const calRouter = require('./routes/calculatorRoutes.js')


// The '/' is the route name. if it is just '/' it defaults to locahost:3000
app.get('/',(req, res) => { // app.get gets the webserver we created on line 3. 
    res.send('Hello World')
}) // This is the route path. 

app.get('/Test',(req, res) => { // app.get gets the webserver we created on line 3. 
    res.send('Hello World')
}) // This is the route path. 

//const app2 = express()
const cors = require('cors')

const port = 3000
//const port2 = 3001

app.use(express.json())
app.use(cors())


app.use('/Calculator', calRouter) // if route of request is '/calculator' it forwards the request to calRouter


app.listen(port, ()=> {
    console.log(`Server has started and listening incoming request on port ${port}`)
})

/*app2.listen(port2, ()=> {
    console.log(`Server2 has started on port ${port2}`)
})*/
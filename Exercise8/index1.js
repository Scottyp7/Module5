const express = require('express')

const app = express() // calling express and creating a new web server with the npm express function
const port = 3000
const cors = require('cors')

//const calRouter = require('./routes/calculatorRoutes.js')
const fakeRoute = require('./routes/FakeStoreRoutes.js')

app.use(express.json())
app.use(cors())
//app.use('/Calculator', calRouter) // if route of request is '/calculator' it forwards the request to calRouter
app.use('/', fakeRoute)




const swaggerUi = require('swagger-ui-express');
    swaggerDocument = require('./swagger.json');
    app.use('/api-docs',swaggerUi.serve,swaggerUi.setup(swaggerDocument));



app.listen(port, ()=> {
    console.log(`Server has started and listening incoming request on port ${port}`)
})


const express = require('express')

const fakeRoute = express.Router()

fakeRoute.get('/FakeStore', (req, res)=>{
    
    import('node-fetch').then(({default:fetch}) => fetch(`https://fakestoreapi.com/products?limit=${req.query.limit}`)
        .then((response) => response.json())
        .then((json) => { // json structure
        res.status(200)
        res.send({res: json}) // sending object so the front end application will need to be res.json as well
        }  )  ) // if [json] then it would be json[0] on the front end application

})

module.exports = fakeRoute
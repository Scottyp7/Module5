const express = require('express')

const calRouter = express.Router() // // creates a new router which handles different requests like post and add ect

calRouter.get('/Add', (req, res)=>{
    
    let number1 = parseInt(req.query.num1);
    let number2 = parseInt(req.query.num2);
    let result = number1 + number2;
    res.status(200)
    res.send({res: result})
})

calRouter.get('/Multiply', (req, res)=>{
    
    let number1 = parseInt(req.query.num1);
    let number2 = parseInt(req.query.num2);
    let result = number1 * number2;
    res.status(200)
    res.send({res: result})
})

calRouter.get('/Subtract', (req, res)=>{
    
    let number1 = parseInt(req.query.num1);
    let number2 = parseInt(req.query.num2);
    let result = number1 - number2;
    res.status(200)
    res.send({res: result})
})

calRouter.get('/Divide', (req, res)=>{
    
    let number1 = parseInt(req.query.num1);
    let number2 = parseInt(req.query.num2);
    let result = number1 / number2;
    res.status(200)
    res.send({res: result})
})

module.exports = calRouter
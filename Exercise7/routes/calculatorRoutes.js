const express = require('express')

const calRouter = express.Router() // // creates a new router which handles different requests like post and add ect

const controllers = require('../controllers/calculatorController')

calRouter.get('/Add', (req, res)=>{
    
    controllers.Add(req,res)
})

calRouter.get('/Multiply', (req, res)=>{
    
        controllers.Multiply(req,res)
})

calRouter.get('/Subtract', (req, res)=>{
    
    controllers.Subtract(req,res)
})

calRouter.get('/Divide', (req, res)=>{
    
    controllers.Divide(req,res)
})

module.exports = calRouter
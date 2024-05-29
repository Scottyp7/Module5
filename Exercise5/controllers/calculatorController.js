const Calculator = require('../libraries/CalculatorLibrary')

let myCalc = new Calculator()

function Add(req, res)
{
    let number1 = parseInt(req.query.num1);
    let number2 = parseInt(req.query.num2);
    let result = myCalc.add(number1, number2)
    res.status(200)
    res.send({res: result})
};

function Multiply(req, res)
{
    let number1 = parseInt(req.query.num1);
    let number2 = parseInt(req.query.num2);
    let result = myCalc.multiply(number1, number2)
    res.status(200)
    res.send({res: result})
};

function Subtract(req, res)
{
    let number1 = parseInt(req.query.num1);
    let number2 = parseInt(req.query.num2);
    let result = myCalc.subtract(number1, number2)
    res.status(200)
    res.send({res: result})
};

function Divide(req, res)
{
    let number1 = parseInt(req.query.num1);
    let number2 = parseInt(req.query.num2);
    let result = myCalc.divide(number1, number2)
    res.status(200)
    res.send({res: result})
};

module.exports = {Add, Multiply, Subtract, Divide}
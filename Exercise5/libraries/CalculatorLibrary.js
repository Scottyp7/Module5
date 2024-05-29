class Calculator // calculator acts as a template to be called from other web pages
{
    constructor() //   THIS ACTS AS A TEMPLATE FOR A FUNCTIONAL CALULATOR
    {
        this.id = Date.now()
    }
    #log(value)
    {
        console.log(`[Calculator : ${this.id}]: ${value}`)
    }

    add(num1, num2)
    {
        const value = num1 + num2;
        this.#log(value)
        return value
    }
    multiply(num1, num2)
    {
        const value = num1 * num2;
        this.#log(value)
        return value
    }
    divide(num1, num2)
    {
        const value = num1 / num2;
        this.#log(value)
        return value
    }
    minus(num1, num2)
    {
        const value = num1 - num2;
        this.#log(value)
        return value
    }
}
module.exports = Calculator
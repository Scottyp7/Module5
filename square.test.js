const { square }= require('./square.js')

const {add} = require('./square.js')

test('square 5 to get 25',()=> {
    expect(square(5)).toBe(25);
})

test('add 5 and 5',()=>{
    expect(add(5,5)).toBe(10);
})

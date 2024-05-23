const score=400
console.log(typeof(score));
const balance= new Number(400)
console.log(balance)  // sath mein Number bhi output mein ayega
console.log(typeof balance.toString()) //string
console.log(typeof (balance))       //object
const source=400
console.log(typeof source);  //number but if we declare using new Number then object
console.log(balance.toFixed(2))
console.log(balance.toPrecision(4))
const newbalance= new Number(1400)
console.log(newbalance.toPrecision(3))
const hundreds=1000000
console.log(hundreds.toLocaleString())
console.log(hundreds.toLocaleString('en-IN'))
console.log(Math)  //itself a object with various properties
console.log(Math.abs(-4))
console.log(Math.round(2.6))
console.log(Math.ceil(4.3))
console.log(Math.floor(4.9))
console.log(Math.min(4,5,3,8))
console.log(Math.max(4,5,3,8))
console.log(Math.random())  //value always comes between 0 and 1
console.log(Math.random()*10)
console.log((Math.random()*10)+1) // to avoid values with zero

const min = 10
const max =20
console.log(Math.floor(Math.random()*(max-min+1))+min)
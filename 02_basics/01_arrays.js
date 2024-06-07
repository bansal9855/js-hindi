//arrays
const myArr=[0,1,2,3,4]
// const myheroes=["hulk","ironman","thor","spiderman"]
// const myArr2= new Array(1,4,2,3,6)
// console.log(myArr[0]);
// console.log(myheroes);
// console.log(myArr2);

//array methods
// myArr.push(9)
// myArr.pop()  last value in the array will be deleted
// console.log(myArr)
myArr.unshift(9) // will be added at start but problem is we have to shift all the values.
// myArr.shift()
// console.log(myArr.includes(9));
// console.log(myArr.indexOf(8)) //-1 because it is not present 
// console.log(myArr.indexOf(9))
// const newArr= myArr.join()  //will make it string
// console.log(myArr);
// console.log(newArr)
// console.log(typeof(newArr))

// //slice and splice
console.log("A",myArr)
const myn1=myArr.slice(1,3)
console.log(myn1)
console.log("B",myArr)
const myn2=myArr.splice(1,3)
console.log("C",myArr)
console.log(myn2)

//agar array ko string mein convert krna hai to use join
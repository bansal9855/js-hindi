//accumulator first time initial value leleta hai uske baad jo bhi calculate krke value ati rehti hai usse leta rehta hai
const myNums=[1,2,3]
const myTotal=myNums.reduce((accumulator,currentvalue )=>{
    console.log(`acc value is ${accumulator} and currval is ${currentvalue}`);
    return accumulator+currentvalue
},0)//0 is initial value 
// const myTotal=myNums.reduce((acc,currval)=>acc+currval,0)
console.log(myTotal);
// const myval=myNums.reduce((acc,currval)=>{
//     console.log(`acc value is ${acc} and currval is ${currval}`);
//     return acc+currval
// },3)
// console.log(myval);
const shoppingcart=[
    {
        itemname:"js course",
        price:2999
    },
    {
        itemname:"mobile dev course",
        price:5999
    },
    {
        itemname:"dsa course",
        price:12999
    }
]
// const sumtotal=shoppingcart.reduce((acc,item)=>acc+item.price,0)
// console.log(sumtotal);


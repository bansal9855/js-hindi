const myNumbers=[1,2,3,4,5,6,7,8,9,10]
// const newNums=myNumbers.map((num)=>num >5)  will return true false only not like filter 
// const newNums=myNumbers.filter((num)=>num >5)
//jab bhi chaining hoti hai uska result second chain mein pass hota hai
//map mein sbhi return hota hai filter mein sirf true values return hoti hai
const newNums=myNumbers
            .map((num)=>num*10)
            .map((num)=>num+1)
            .filter((num)=>num>40)
console.log(newNums);

const descripter=Object.getOwnPropertyDescriptor(Math,'PI')
console.log(descripter);
console.log(Math.PI);
Math.PI=5
console.log(Math.PI);
console.log(Math.round(Math.PI));
const chai={
    name:"ginger chai",
    price:250,
    isAvailable:true,
    orderchai:function(){
        console.log("chai nhi bni");
    }

}
console.log(Object.getOwnPropertyDescriptor(chai,"name"));

// Object.defineProperty(chai,"name",{
//     writable:false,
//     enumerable:false  //agr enumerable false huya to hum loop nhi lga payenge sirf price aur isavailable print hoga
// })
// console.log(Object.getOwnPropertyDescriptor(chai,"name"));
// for (let key in chai) {
//     console.log(chai[key]);
// }
for (let [key,value] of Object.entries(chai)) {  //to make object iteratable
    if (typeof value!== 'function') {
        console.log(`${key}: ${value}`);
        
    } 
}
//check bhi lgana pdhega bcz jab function add krenge object mein to problem dega code chlega jroor to avoid this use if else
// for of 
["","",""]
[{},{},{}]
const arr=[1,2,3,4,5]
// for (const num of arr) {
//     console.log(num);
// }
// for (let index = 0; index < arr.length; index++) {
//     const element = arr[index];
//     console.log(element);
    
// }
const greetings="hello world"
// for (const greet of greetings) {
//     console.log(`Each char is ${greet}`);
// }
// for (let index = 0; index < greetings.length; index++) {
//     const element = greetings[index];
//     // console.log(element);
//     console.log(`Each char is ${element}`);
    
// }

//maps  koi duplicate value ni hoti isme
 const map= new Map()
 map.set('IN',"INDIA")
 map.set('USA',"UNITED STATES OF AMERICA")
 map.set('FR',"France")
 map.set('IN',"INDIA")
// console.log(map)
for(const key of map){
    console.log(key);
}
for(const [key,value] of map){
    console.log(key,":-",value);
}



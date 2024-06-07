const myobj={
    js:"javascript",
    cpp:"c++",
    rb:"ruby",
    swift:"swift by apple"
}
for (const key in myobj) {
    console.log(key);
    // console.log(myobj[key]);
    // console.log(`${key} shortcut is for ${myobj[key]}`);
}
const programming=["js","rb","py","java"]
for(const key in programming){
    // console.log(key); //0 1 2 3  array ki jo keys hoti hai vo by default 0 se start hoti hai aur number hi hoti hai
    // console.log(programming[key]);  //js rb py java
    
}
const map= new Map()
map.set('IN',"INDIA")
map.set('USA',"UNITED STATES OF AMERICA")
map.set('FR',"France")
map.set('IN',"INDIA")
for (const key in map) {
    console.log(key); //nothing will be printed
    // console.log(map[key]);
}
 //objects k liye for in loop arrays k liye for of loop

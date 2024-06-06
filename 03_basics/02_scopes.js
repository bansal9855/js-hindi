let a=300
var c=300
if(true){
    let a= 10
const b=20
var c=30
// console.log(a);
}
console.log(a);//error if not globally defined
// console.log(b);//error
// console.log(c); //30

function one(){
    const username="lovely"
    function two(){
        const website="youtube"
        console.log(username);
    }
    // console.log(website)//will give error out of scope
    two()
}
// one()
if (true){
    const username="lovely"
    if(username=== "lovely"){
        const website=" youtube"
        // console.log(username + website);
    }
    // console.log(website);  //will give error
} 
// console.log(username) error

// *********************interesting***************

// addone(5) possible
function addone(num){
    return num+1
}
addtwo(5)// will give error because declare k saath saath variable mein hold bhi kiya hai
const addtwo=function(num){
    return num+2
}
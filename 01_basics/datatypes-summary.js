//primitive
//string number bigint,boolean,undefined null symbol
const id=Symbol('123')
const anotherid=Symbol('123')
console.log(id===anotherid)
const bignumber=3444567895678n
//non primitive arrays,objects,functions
const heros=["ironman","hulk","thor"] //array
console.log(heros)
let myobj={         //object
    name:"lovely", 
    age:21,
}
const myfunction=function(){
    console.log("hello world");
}
myfunction();



//+++++++++++++++++++++++++++++++++++++
let myYoutubeName="bansal9855.com"
let anotherName=myYoutubeName
anotherName="bansal2905"
console.log(myYoutubeName)
console.log(anotherName);
let userone={
    email:"user@google.com",
    upi:"user@sbi",
}
let usertwo=userone
usertwo.email="bansal@google.com"
console.log(userone.email);
console.log(usertwo.email);
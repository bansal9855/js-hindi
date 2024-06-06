const user={
    username:"lovely",
    price:999,
    welcomemessage:function(){
        console.log(`${this.username},welcome to website`);
        // console.log(this)  current context ki value
    }
}
user.welcomemessage()
// user.username="sam"
user["username"]="sam"
user.welcomemessage()
// console.log(this)  //browser k andar global object hai vo hai windpw object browser mein iska answer window ayega aur yha pr {}
// function chai(){
//     let username="lovely"
//     // console.log(this);
//     console.log(this.username); //function k andar akar this use nhi kr pa rha hu mein objects k andr kr pa rha hoon
// }
// chai()
// const chai=function(){
//     let username="lovely"
//     console.log(this.username);
// }
const chai=()=>{
    let username="lovely"
    // console.log(this.username); //undefined
    console.log(this); //  {}
    }
chai()
// const addtwo=(num1,num2)=>{
//     return num1+num2
// }
//const addtwo=(num1,num2)=>num1+num2//implicit return ek hi line mein likh diya return likhne k jroorat nhi hai
// const addtwo=(num1,num2)=>(num1+num2) //{} isme return keyword likhna hi pdhega ()nhi likhna pdhega
// const addtwo=(num1,num2)=>{username:"lovely"}  //undefined
// const addtwo=(num1,num2)=>({username:"lovely"})  //{username:"lovely"}
const addtwo=(num1,num2)=>{num1+num2} //undefined
// const addtwo=(num1,num2)=>({num1+num2}) error 
console.log(addtwo(3,4))
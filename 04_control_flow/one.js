//if
const isuserloogedin=true
const temperature=41
// if(2!=3){
//     console.log("executed");
// }
// else{
//     console.log("not executed");
// }
const balance=1000
if(balance>500) console.log("test");
// if(balance>500) console.log("test"),
// console.log("test2"); //not a good practice

// if(balance<500){
//     console.log("less than 500");
// }
// else if(balance<750){
//     console.log("less than 750");
// }
// else{
//     console.log("less than 1200");
// }
const userloggedin=true
const debitcard= true
const loggedinfromemail=true
const loggedinfromgoogle=false

if(userloggedin&&debitcard ){
    console.log("allow to  buy course");
}
if(loggedinfromemail || loggedinfromgoogle){
    console.log("user logged in");
}

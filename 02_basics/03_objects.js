//objects can be declared in 2 ways using literal and constructors
//object.create constructor
//singleton -apne trah ka ek hi object hai literals ki trah declare krne pr singleton nhi bnta hai
//using constructors always singleton
//object literals
const mysym=Symbol("mykey1")
const Jsuser={
    name:"Lovely", //"name" hai jo string ki trah liya ja rha hai
    age:21,
    "full name":"Lovely Bansal",
    location:"Bathinda",
    [mysym]:"mykey1", //to declare symbol
    email:"bansallovely179@gmail.com",
    isloggedin:"false",
    lastloggedin:["Monday","Saturday"]
}
// console.log(Jsuser.email)
// console.log(Jsuser["email"]);  
// console.log(Jsuser["full name"]) //full name cannot be accesed using dot
// console.log(Jsuser[mysym]);
// console.log(Jsuser.fullname)//can be accessed bcz no gap bw full and name

Jsuser.email="bansallovely985@google.com"
// Object.freeze(Jsuser)
// Jsuser.email="bansal9855@yahoo"
// console.log(Jsuser)
Jsuser.greeting= function(){
    console.log("hello js user");
}
Jsuser.greetingtwo= function(){
    console.log(`hello js user ,${this.name}`);
}
console.log(Jsuser.greeting) //undefined
console.log(Jsuser.greeting());//not a function will gove error this is because we freze the object initially
console.log(Jsuser.greetingtwo())

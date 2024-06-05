 function sayMyName(){
    console.log("L");
    console.log("O");
    console.log("V");
    console.log("E");
    console.log("L");
    console.log("Y");
 }
 sayMyName();
//  function addTwoNumbers(number1,number2){
//    console.log(`sum of two numbers is ${number1+number2}`);
//  }
// addTwoNumbers(-5,9);
// addTwoNumbers(3,"4");
// addTwoNumbers(3,null);
const result=addTwoNumbers(2,3)
// console.log("Result is",result) //undefined because return type nhi di
 function addTwoNumbers(number1,number2){
   // const result=number1+number2
   // return result //agar return k neeche kuch likhoge to vo kbhi execute nhi hoga
   return number1+number2
 }
// console.log(result);
function loginusermsg(username){
   if(username=== undefined){     //or we can write !username
      console.log("please enter the username");
      return //use here return so that other return will not be executed
   }
   return`${username} just logged in`
}
// const message=loginusermsg("lovely")
// console.log(message);
console.log(loginusermsg("lovely"))
// console.log(loginusermsg()) //undefined just logged in to remove this we will add if else 
console.log(loginusermsg()); //after adding if else
// to set default value
// function loginusermsg(username="sam"){
//    if(username=== undefined){     //or we can write !username
//       console.log("please enter the username");
//       return //use here return so that other return will not be executed
//    }
//    return`${username} just logged in`
// }//will never enter if condition
// console.log(loginusermsg());

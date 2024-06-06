//immediately invoked function expression(iife)
//immediately execute hojaye aur global scope se pollute na ho
(function chai(){
    //named iife
    console.log(`DB CONNECTED`);
})();//immediately invoked function ko end krne k liye ; lgana jroori hai vrna isse pta nhi chlega aur agla iife nhi chlega
// ()() first paranthesis definition and second execution

((name)=>{
    //simple iife
    console.log(`DB CONNECTED TWO ${name}`) 
})('lovely');
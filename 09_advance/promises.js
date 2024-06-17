// const promiseone=new Promise(function(resolve,reject){
//     //do any async task
//     //db calls,cryptography,network
//     setTimeout(function(){
//         console.log('async task completed');
//         resolve()//yeh hamesha last pr ayega chahe log k upar likho chahe neeche
//     },1000)
// })
// promiseone.then(function(){
//     console.log('promise is consumed');
// })

new Promise(function(resolve,reject){
    //do any async task
    //db calls,cryptography,network
    setTimeout(function(){
        console.log('async task2 completed');
        resolve()//yeh hamesha last pr ayega chahe log k upar likho chahe neeche
    },1000)
}).then(function(){
    console.log("async 2 resolved");
})

const promiseThree=new Promise(function(resolve,reject){
    setTimeout(function(){
        resolve({username:"lovely",email:"bansallovely179@gmail.com"})
    },1000)
})
promiseThree.then(function(user){
    console.log(user);
})

const promiseFour=new Promise(function(resolve,reject){
    setTimeout(function(){
        let error=true
        if(!error){
            resolve({username:"lovely",password:"123"})
        }
        else{
            reject('ERROR:Something went wrong')
        }
    },1000)
})
promiseFour.then(function(user){
    console.log(user);
    return user.username
}).then((username)=>{
    console.log(username);
}).catch(function(error){
    console.log(error);
}).finally(()=>console.log('The promise is either resolved or rejected'))

const promiseFive=new Promise(function(resolve,reject){
    setTimeout(function(){
        let error=true
        if(!error){
            resolve({username:"javascript",password:"123"})
        }
        else{
            reject('ERROR:JS went wrong')
        }
    },1000)
})
// console.log(typeof promiseFive);
async function consumePromiseFive(){
    try {
        const response=await promiseFive
        console.log(response)
    } catch (error) {
        console.log(error);
    }
}
consumePromiseFive()

// async function getallusers(){
//     try {
//         const response=await fetch('https://api.github.com/users/bansal9855')
//         const data=await response.json()
//         console.log(data);
//     } catch (error) {
//         console.log("E:",error);
//     }
// }
// getallusers()

fetch('https://api.github.com/users/bansal9855')
.then((response)=>{
    return response.json()
})
.then((data)=>{
    console.log(data);
})
.catch((error)=>{
    console.log(error);
})

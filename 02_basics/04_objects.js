// const tinderUser= new Object() //singleton object
const tinderUser= {} // non singleton object
console.log(tinderUser)
tinderUser.id=123
tinderUser.name="Rahul"
tinderUser.isLoggedIn= false
console.log(tinderUser)
const regularUser={
    email:"bansal179@google.com",
    fullname:{
        userfullname:{
            firstname:"lovely",
            lastname:"bansal"
        }
    }
}
console.log(regularUser.fullname);
console.log(regularUser.fullname.userfullname.firstname);

const obj1={1:"a",2:"b"}
const obj2={3:"a",4:"b"}
const obj4={5:"a",6:"b"}
// const obj3={obj1,obj2}
// const obj3=Object.assign({},obj1,obj2,obj4)
const obj3={...obj1,...obj2,...obj4}
console.log(obj3);
// array of objects 
const user=[
    {
        id:1,
        name:"Rahul"
    },
    {
        id:2,
        name:"rohit"
    },
    "address"
]
console.log(user[1].id)
console.log(tinderUser)
console.log(Object.keys(tinderUser))  //datatype array
console.log(Object.values(tinderUser))  //datatype array
console.log(Object.entries(tinderUser))  //array within array first entry will be key second will be its value
console.log(tinderUser.hasOwnProperty("isLoggedIn"));
console.log(user.includes("address"));


// destructuring of objects
const course={
    coursename:"js in hindi",
    price:"999",
    courseinstructor:"hitesh"
}
// course.courseinstructor
const{courseinstructor:instructor}=course
// console.log(courseinstructor);  
console.log(instructor);//if you want to give another name use courseinstructor:instructor

// json api// {
//     "name":"Nitin",
//     "coursename":"js in hindi",
//     "price":"free"
// }
//json=javascript object notation
// api can be array of objects too
[
    {},
    {},
    {}
]  
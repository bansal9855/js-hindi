// const coding=["js","ruby","java","python","cpp"]
// const values=coding.forEach((item)=>{
//     // console.log(item);
//     return item;
// })
// console.log(values);

const myNums=[1,2,3,4,5,6,7,8,9,10]
// const newNums=myNums.filter((num)=>{   //filter apko values return krta hai for each nhi krta
//     return num>4
// })
const newNums=[]
myNums.forEach((num)=>{
    if(num>4){
        newNums.push(num);
    }
})
// console.log(newNums);
const books=[
    {title:"Book one" ,genre:"fiction",publish:1981,
    edition:2004},
    {title:"Book two" ,genre:"non-fiction",publish:1999,
    edition:2014},
    {title:"Book three" ,genre:"fiction",publish:1991,
    edition:2024},
    {title:"Book four" ,genre:"history",publish:1987,
    edition:2013},
    {title:"Book five" ,genre:"history",publish:1998,
    edition:2011},
]
// agar scope open kroge to return keyword jroor likhna hai
// let userBooks=books.filter((bk)=>bk.genre==="history")
 userBooks=books.filter((bk)=>bk.publish>=1995)
 userBooks=books.filter((bk)=>{
    return bk.publish>=1995 && bk.genre==="history"
 })    
console.log(userBooks);

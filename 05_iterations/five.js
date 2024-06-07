const coding=["js","ruby","java","python","cpp"]
coding.forEach( function (val){
    // console.log(val);
})
    
// coding.forEach((item)=>{
//      console.log(item);
// })

// function printme(item){
//     console.log(item);
// }

// coding.forEach(printme) //only reference dena hai printme() ese nhi likhna
coding.forEach((item,index,arr)=>{
    // console.log(item,index,arr);
    // console.log(arr);
})

const myCoding=[
    {
        languagename:"javascript",
        languagefilename:"js"
    },
    {
        languagename:"java",
        languagefilename:"java"
    },
    {
        languagename:"python",
        languagefilename:"py"
    }
]
myCoding.forEach((item)=>{
    console.log(item);
    // console.log(item.languagefilename);
    // console.log(item.languagename);
})
// let mydate= new Date()
// console.log(mydate.toString())
// console.log(mydate.toDateString())
// console.log(mydate.toISOString())
// console.log(mydate.toJSON())
// console.log(mydate.toLocaleDateString())
// console.log(mydate.toLocaleString())
// // let mycreateddate= new Date(2023,0,23)
// // let mycreateddate= new Date("2023-01-14")
// let mycreateddate= new Date("01-14-2023")
// console.log(mycreateddate.toLocaleString())
// console.log(mycreateddate.toDateString());
// let newcreateddate=new Date(2023,0,23,5,3)
// console.log(newcreateddate.toLocaleString());
// let mytimeStamp=Date.now()
// console.log(mytimeStamp)
// console.log(mycreateddate.getTime());
// console.log(Math.floor(Date.now()/1000));
let newdate= new Date()
console.log(newdate)
console.log(newdate.getMonth());
newdate.toLocaleString('default',{
    weekday:"long"
})

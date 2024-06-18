// prop=properties

class User{
    constructor(username){
        this.username=username
    }
    logMe(){
        console.log(`username: ${this.username}`);
    }
    static createId(){       //taki sabko access na mile static isiliye use kiya
        return`123`         
    }
}
const lovely=new User("lovely")
// console.log(lovely.createId()); 

class Teacher extends User{
    constructor(username,email){
        super(username)
        this.email=email
    }
}
const iphone=new Teacher('iphone',"i@phone.com")
// console.log(iphone.createId());
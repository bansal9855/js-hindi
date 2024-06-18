class User{
    constructor(username){
        this.username=username
    }
    logMe(){
        console.log(`Usename is ${this.username}`);
    }
}

class Teacher extends User{
    constructor(username,email,password){
        super(username)
        this.email=email
        this.password=password
    }
    addCourse(){
        console.log(`a new course was added by  ${this.username}`);
    }
}

const one=new Teacher('rahul',"rahul@gmail.com","123abx")
one.addCourse()
one.logMe()
const masalachai=new User('masalachai')
masalachai.logMe()
console.log(one===masalachai);
console.log(one===Teacher);
console.log(one instanceof Teacher);
console.log(one instanceof User);

class User{
    constructor(email,password){
        this.email=email
        this.password=password
    }
    get password(){
        return this.password.toUpperCase()
    }
    set password(value){
        this.password=value.toUpperCase()
    }
}
const lovely=new User("lovely2905@gmail.com","1234")
console.log(lovely.password);
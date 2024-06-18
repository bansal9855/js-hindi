class User{
    constructor(email,password){
        this.email=email
        this.password=password
    }
    get password(){
        // return this._password.toUpperCase()
        return `${this._password}lovely`
    }
    set password(value){
        this._password=value  //agr this.password likhenge to error dega constr sur setter k beech race lgegi ki kaun set krega
       jo value hum set kr rhe hai vo nhi dikhegi jo usko access kr rha hai usko getter vali value dikhegi
    }
}
const lovely=new User("lovely2905@gmail.com","1234")
console.log(lovely.password);

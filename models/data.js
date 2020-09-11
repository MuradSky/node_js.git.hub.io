const users = [];
 
module.exports= class User{
 
    constructor(firstname,lastname , age, email){
        this.firstname = firstname;
        this.lastname = lastname;
        this.age = age;
        this.email = email;
    }
    save(){
        users.push(this);
    }
    static getAll(){
        return users;
    }
}
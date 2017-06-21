class user {
    name: string;
    public email: string;
    private age: number;

    constructor (myname: string, myemail: string, myage: number){
        this.name = myname;
        this.email = myemail;
        this.age = myage;

        console.log('User Created:' +this.name);
    }

    register(){
        console.log(this.name +" is registered");
    }
}
var anish = new user("Bikash", "akumar", 28);

anish.register();

//console.log(anish.age);  Cannot access age outside class as it is private property of class user

console.log(anish.email); // Can access email outside class as email is a public property

console.log(anish.name); // Can access name outside class as name is public by default
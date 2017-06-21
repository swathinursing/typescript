class newUser {
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

    payInvoice(){
        console.log(this.name +" paid invoice")
    }
}

class oldUser extends newUser  {
    id: number;

    constructor(id: number, myname: string, myemail: string, myage: number){
        super(myname, myemail, myage);
    }
    
}

let mike: newUser = new oldUser(2, "Anish", 'akumar@gmail.com', 28);
console.log(mike.payInvoice());
console.log(mike.name);
console.log(mike.register());
var user = (function () {
    function user(myname, myemail, myage) {
        this.name = myname;
        this.email = myemail;
        this.age = myage;
        console.log('User Created:' + this.name);
    }
    user.prototype.register = function () {
        console.log(this.name + " is registered");
    };
    return user;
}());
var anish = new user("Bikash", "akumar", 28);
anish.register();
//console.log(anish.age);  Cannot access age outside class as it is private property of class user
console.log(anish.email); // Can access email outside class as email is a public property
console.log(anish.name); // Can access name outside class as name is public by default
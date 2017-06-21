var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var newUser = (function () {
    function newUser(myname, myemail, myage) {
        this.name = myname;
        this.email = myemail;
        this.age = myage;
        console.log('User Created:' + this.name);
    }
    newUser.prototype.register = function () {
        console.log(this.name + " is registered");
    };
    newUser.prototype.payInvoice = function () {
        console.log(this.name + " paid invoice");
    };
    return newUser;
}());
var oldUser = (function (_super) {
    __extends(oldUser, _super);
    function oldUser(id, myname, myemail, myage) {
        return _super.call(this, myname, myemail, myage) || this;
    }
    return oldUser;
}(newUser));
var mike = new oldUser(2, "Anish", 'akumar@gmail.com', 28);
console.log(mike.payInvoice());
console.log(mike.name);
console.log(mike.register());
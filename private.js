var BankAccount = /** @class */ (function () {
    function BankAccount(initial_balance) {
        this.acc_balance = initial_balance;
    }
    BankAccount.prototype.getBalance = function () {
        return this.acc_balance;
    };
    return BankAccount;
}());
var account = new BankAccount(2000);
// console.log(account.acc_balance) 
// --property acc_balance is private and only accessible within the class
console.log(account.getBalance());

class BankAccount{
    private acc_balance : number;


    constructor(initial_balance : number){
        this.acc_balance = initial_balance;
    }

    getBalance(): number{
        return this.acc_balance
    }
}

const account = new BankAccount(2000);
// console.log(account.acc_balance) 
// --property acc_balance is private and only accessible within the class

console.log(account.getBalance())
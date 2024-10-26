class BankAccount {
    constructor(balance) {
        this.balance = balance;
    }

    getBalance() {
        return this.balance;
    }

    deposit(plus) {
        return this.balance + plus;
    }
    withdraw(minus) {
        return this.balance - minus;
    }
}

const account1 = new BankAccount("1000");

console.log(account1.getBalance());
account1.deposit(500);
console.log(account1.getBalance());
class BankAccount {
    balance = 0;

    constructor(balance) {
        this.balance += balance;
    }

    getBalance() {
        return this.balance;
    }

    deposit(plus) {
        if (plus >= 50000) {
            console.log("When topping up a balance in the amount of more than 50000 " +
                "it is necessary to provide documents confirming the legal origin of the funds");
        } else {
            return this.balance += plus;
        }
    }
    withdraw(minus) {
        if (this.balance < minus) {
            console.log("Your balance doesn't have enough funds!");
        } else if (minus > 20000){
            console.log("The maximum withdrawal amount is 20000");
        } else {
            return this.balance -= minus;
        }
    }
}

const account1 = new BankAccount(1000);

console.log(account1.getBalance());
account1.deposit(500);
console.log(account1.getBalance());
account1.withdraw(200);
console.log(account1.getBalance());
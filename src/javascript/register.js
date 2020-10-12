export class Register {
    constructor(balance) {
        this.balance = balance;
    }

    addBalance(amount) {
        this.balance += amount;
    }
    removeBalance(amount) {
        this.balance -= amount;
    }

}
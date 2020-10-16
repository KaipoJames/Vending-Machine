import { Register } from "./register.js";
import { Dispenser } from "./dispenser.js";

export class Vending {
    constructor(name) {
        this.name = name;
        this.dispensers = [];
        this.register = new Register(100);
    }

    addDispenser(id, name, price, quantity) {
        const dispensers = this.dispensers;
        const dispenser = new Dispenser(id, name, price, quantity);
        dispensers.push(dispenser);
    }

    showContents() {
        const dispensers = this.dispensers;
        console.log("Current Items For Sale: ");
        for (var dispenser of dispensers) {
            console.log("ID: " + dispenser.id);
            console.log("Item: " + dispenser.item);
            console.log("Price: " + dispenser.price + "\n");
        }
    }
}
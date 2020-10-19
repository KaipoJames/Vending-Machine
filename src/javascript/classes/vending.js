import { Register } from "./register.js";
import { Dispenser } from "./dispenser.js";

export class Vending {
    constructor(name) {
        this.name = name;
        this.dispensers = [];
        this.register = new Register(100);
    }

    addDispenser(itemCode, name, price, quantity) {
        const dispensers = this.dispensers;
        const dispenser = new Dispenser(itemCode, name, price, quantity);
        dispensers.push(dispenser);
    }

    returnAllDispensers() {
        return this.dispensers;
    }

    showContents() {
        const dispensers = this.dispensers;
        console.log("Current Items For Sale: ");
        for (var dispenser of dispensers) {
            console.log("Item Code: " + dispenser.itemCode);
            console.log("Item: " + dispenser.item);
            console.log("Price: " + dispenser.price + "\n");
        }
    }
}
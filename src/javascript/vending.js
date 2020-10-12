import { Register } from "./register.js";
import { Dispenser } from "./dispenser.js";

class Vending {
    constructor(name) {
        this.name = name;
        this.dispensers = [];
        this.register = new Register(100);
    }

    addDispenser(dispenserObj) {
        const dispensers = this.dispensers;
        dispensers.push(dispenserObj);
    }

    showContents() {
        const dispensers = this.dispensers;
        console.log("Current Items For Sale: ");
        for (var dispenser of dispensers) {
            console.log("Item: " + dispenser.item);
            console.log("Price: " + dispenser.price + "\n");
        }
    }
}
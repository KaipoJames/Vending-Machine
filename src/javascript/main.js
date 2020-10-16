import { Vending } from "./vending.js";

const dispensersContainer = document.querySelector(".dispensers-container");

// CODE TO HELP BUILD THE USER INTERFACE
const DispenserBuild = {
    init() {
        this.createDispenserContainer(16);
    },

    // Crate Dispenser Container
    createDispenserContainer(dispenserCount) {
        for (let i=1; i < dispenserCount + 1; i++) {
            const container = document.createElement("div");
            this.createDispenserLabel(container);
            container.classList.add("dispenser-container");
            container.classList.add("dispenser-container-" + i);
            dispensersContainer.appendChild(container);
        }
    },
    // Create A Label Box for each Dispenser
    createDispenserLabel(container) {
        const dispenserLabel = document.createElement("div");
        dispenserLabel.classList.add("dispenser-label")
        container.appendChild(dispenserLabel);
    }
}

DispenserBuild.init();


const machine = new Vending("Kaipo's Machine");
machine.addDispenser('C1', 'pizza', 2.50, 10);
machine.addDispenser('C2', 'burger', 2.50, 10);
machine.addDispenser('A3', 'apple', 1.00, 10);
machine.addDispenser('A4', 'banana', 1.00, 10);
machine.addDispenser('H5', 'bala', 1.25, 10);

machine.showContents();
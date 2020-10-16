import { Vending } from "./vending.js";


const machine = new Vending("Kaipo's Machine");
machine.addDispenser('C1', 'pizza', 2.50, 10);
machine.addDispenser('C2', 'burger', 2.50, 10);
machine.addDispenser('A3', 'soda', 1.00, 10);
machine.addDispenser('A4', 'water-bottle', 1.00, 10);
machine.addDispenser('H5', 'bala', 1.25, 10);
machine.addDispenser('H5', 'apple', 1.25, 10);
machine.addDispenser('H5', 'banana', 1.25, 10);
machine.addDispenser('H5', 'pear', 1.25, 10);
machine.addDispenser('H5', 'mango', 1.25, 10);

//machine.showContents();

const dispensers = machine.returnAllDispensers();
console.log(dispensers[0]);

const dispensersContainer = document.querySelector(".dispensers-container");

// CODE TO HELP BUILD THE USER INTERFACE
const DispenserBuild = {
    init() {
        this.createDispenserContainer(16);
    },

    // Crate Dispenser Container
    createDispenserContainer(dispenserCount) {
        for (let i=0; i < dispenserCount; i++) {
            const container = document.createElement("div");
            this.createDispenserImage(container, dispensers[i].src);
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
    },
    // Create An Img for each Dispenser
    createDispenserImage(container, imageSrc) {
        let dispenserImage = document.createElement("img");
        dispenserImage.classList.add("dispenser-img");
        dispenserImage.src = imageSrc;
        container.appendChild(dispenserImage);
    }


}

DispenserBuild.init();

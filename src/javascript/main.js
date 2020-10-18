import { Vending } from "./vending.js";


const machine = new Vending("Kaipo's Machine");
machine.addDispenser('C1', 'pizza', 2.50, 10);
machine.addDispenser('C2', 'burger', 2.50, 10);
machine.addDispenser('C3', 'cookie', 1.50, 10);
machine.addDispenser('K1', 'cheese', 1.75, 10);
machine.addDispenser('A3', 'juice', 1.75, 10);
machine.addDispenser('A4', 'water', 1.25, 10);
machine.addDispenser('A2', 'soda', 1.00, 10);
machine.addDispenser('Z3', 'bala', 1.00, 10);
machine.addDispenser('H1', 'apple', 1.25, 10);
machine.addDispenser('H2', 'banana', 1.25, 10);
machine.addDispenser('H3', 'pear', 1.25, 10);
machine.addDispenser('H4', 'mango', 1.25, 10);

//machine.showContents();

const dispensers = machine.returnAllDispensers();
console.log("Dispensers Length: " + dispensers.length);

const dispensersContainer = document.querySelector(".dispensers-container");

let imgClass = 0;

// CODE TO HELP BUILD THE USER INTERFACE
const DispenserBuild = {
    init() {
        this.createDispenserContainer(16);
    },

    // Crate Dispenser Container
    createDispenserContainer(dispenserCount) {
        for (let i=0; i < dispenserCount-4; i++) {
            const container = document.createElement("div");
            console.log(dispensers[i]);
            this.createDispenserImage(container, dispensers[i].src);
            this.createDispenserLabel(container, dispensers[i]);
            container.classList.add("dispenser-container");
            container.classList.add("dispenser-container-" + i);
            dispensersContainer.appendChild(container);
        }
    },
    // Create A Label Box for each Dispenser
    createDispenserLabel(container, dispenserObj) {
        const dispenserLabel = document.createElement("div");
        dispenserLabel.innerHTML = dispenserObj.itemCode + " $" + dispenserObj.price;
        dispenserLabel.classList.add("dispenser-label");
        container.appendChild(dispenserLabel);
    },
    // Create An Img for each Dispenser
    createDispenserImage(container, imageSrc) {
        let dispenserImage = document.createElement("img");
        dispenserImage.classList.add("dispenser-img");
        dispenserImage.classList.add("dispenser-img-" + imgClass);
        dispenserImage.src = imageSrc;
        container.appendChild(dispenserImage);
        imgClass++;
    }
}

DispenserBuild.init();

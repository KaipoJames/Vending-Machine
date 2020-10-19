import { dispensers  } from "../contents.js"

export const dispensersContainer = document.querySelector(".dispensers-container");
let imgClass = 0;


// CODE TO HELP BUILD THE USER INTERFACE
export const DispenserBuild = {
    init() {
        this.createDispenserContainer(16);
        //BuildDispenser.init();
    },

    // Crate Dispenser Container
    createDispenserContainer(dispenserCount) {
        for (let i=0; i < dispenserCount-4; i++) {
            const container = document.createElement("div");
            //console.log(dispensers[i]);
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
        container.classList.add(dispenserObj.item + "-container");
        container.classList.add(dispenserObj.item);
        container.classList.add(dispenserObj.price);
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
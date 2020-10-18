import { dispensersContainer } from "./dispensers_build.js"

//const registerContainer = document.querySelector(".register-container");
const keyPadContainer = document.querySelector("#keypad");
const inputCodeString = document.querySelector("#input-code");
const dispensers = dispensersContainer.children;

const keyCharacters = ["A", "C", "H", "K", "Z", "1", "2", "3", "4", "5"];
const itemCodes = [];
let inputCode = "";

export const BuildRegister = {
    init() {
        for (var key of keyCharacters) {
            this.appendKey(key);
        }
        console.log(this.getItemcodes());
    },
    appendKey(keyName) {
        const key = document.createElement("div");
        key.classList.add("key");
        key.classList.add(keyName + "-key");
        this.createKeyText(key, keyName);
        this.toggleKeyClickClass(key);
        keyPadContainer.appendChild(key);
    },
    createKeyText(keyContainer, keyName) {
        const keyText = document.createElement("p");
        keyText.innerHTML = keyName;
        keyText.classList.add("key-text");
        keyContainer.appendChild(keyText);
    },

    toggleKeyClickClass(keyElement) {
        keyElement.addEventListener("click", () => {
            if (inputCode.length <= 1 && !keyElement.classList.contains("key-click")) {
                inputCode += keyElement.children[0].innerHTML;
            } else {
                inputCode = "";
            }
            inputCodeString.innerHTML = inputCode;
            keyElement.classList.toggle("key-click");
            const selectedDispenser = this.getDispenserByCode(inputCode);
            if (selectedDispenser) {
                inputCodeString.innerHTML = "Selected Item: " + selectedDispenser.classList[1];
                console.log(selectedDispenser);
            }
        });
    },

    getDispenserByCode(inputCode) {
        for (const dispenser of dispensers) {
            let itemCode = dispenser.children[1].innerHTML.substr(0,2);
            if (itemCode == inputCode) {
                return dispenser;
            }
        }
    },

    getItemcodes() {
        for (const dispenser of dispensers) {
            let itemCode = dispenser.children[1].innerHTML.substr(0,2);
            itemCodes.push(itemCode);
        }
        return itemCodes;
    },

}
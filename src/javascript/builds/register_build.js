import { dispensersContainer } from "./dispensers_build.js"
//import { money } from "./coins_build.js"

const registerContainer = document.querySelector(".register-container");
const keyPadContainer = document.querySelector("#keypad");
const inputCodeString = document.querySelector("#input-code");
const dispenseButton = document.querySelector("#dispense-btn");
const moneyEnteredString = document.querySelector("#current-money");
const dispensers = dispensersContainer.children;

const keyCharacters = ["A", "C", "H", "K", "Z", "1", "2", "3", "4", "5"];
const selectedKeyCodes = [];
let inputCode = "";
let itemPrice = "";

let money = "";

export const BuildRegister = {
    init() {
        for (var key of keyCharacters) {
            this.appendKey(key);
        }
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
                selectedKeyCodes.push(keyElement.children[0].innerHTML);
            } else {
                inputCode = "";
                selectedKeyCodes.pop();
            }
            inputCodeString.innerHTML = inputCode;
            keyElement.classList.toggle("key-click");
            const selectedDispenser = this.getDispenserByCode(inputCode);
            if (selectedDispenser) {
                inputCodeString.innerHTML = "Selected Item: " + selectedDispenser.classList[1] + "<br />" + "Please Deposit: $" + selectedDispenser.classList[2];
                itemPrice = parseFloat(selectedDispenser.classList[2]);
                console.log(selectedDispenser);
            }
            this.updateMoneyEntered();
            console.log("Item Price: " + itemPrice);
            console.log("Length Of Key Codes Selected: " + selectedKeyCodes.length);
            if (money >= itemPrice && selectedKeyCodes.length == 2) {
                this.dispenseItem(money, itemPrice.toFixed(2));
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

    dispenseItem(moneyEntered, itemPrice) {
        dispenseButton.addEventListener("click", () => {
            console.log("Item Dispensed. Now Returning Your Change!");
            this.returnChange(moneyEntered, itemPrice);
        });
    },

    returnChange(moneyEntered, itemPrice) {
        let change = moneyEntered - itemPrice;
        const changeEl = document.createElement("h3");
        changeEl.classList.add("change-element");
        changeEl.innerHTML = "Returned your change of $" + change.toFixed(2);
        registerContainer.appendChild(changeEl);
    },

    updateMoneyEntered() {
        money = parseFloat(moneyEnteredString.innerHTML.substr(1, 5));
        console.log("Money Entered: " + money);
        //money += amount;
        money = money.toString();
    }

    /* getItemcodes() {
        for (const dispenser of dispensers) {
            let itemCode = dispenser.children[1].innerHTML.substr(0,2);
            itemCodes.push(itemCode);
        }
        return itemCodes;
    }, */

}
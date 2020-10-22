import { BuildRegister } from "./register_build.js"

const coinsContainer = document.querySelector(".coins-container");
let moneyString = document.querySelector("#current-money");
let clearButton = document.querySelector("#clear-button");

const coins = ["penny", "nickel", "dime", "quarter"];
const coinValues = [0.01, 0.05, 0.10, 0.25];

export let money = parseFloat(moneyString.innerHTML.substr(1, 5));

export const CoinsBuild = {
    init() {
        this.createCoinContainers();
        this.addEventListeners();
    },

    createCoinContainers() {
        for (var coin of coins) {
            this.createCoinContainer(coin);
        }
    },

    //create coin container
    createCoinContainer(coinName) {
        const container = document.createElement("div");
        container.classList.add("coin-container");
        container.setAttribute("id", coinName + "-container");
        this.addCoinImage(container, coinName);
        coinsContainer.appendChild(container);
    },
    //Add coin image to coinContainer
    addCoinImage(container, coinName) {
        const coinImg = document.createElement("img");
        coinImg.classList.add("coinImg");
        coinImg.classList.add("coinImg-" + coinName);
        coinImg.src = "/icon/coins/" + coinName + ".png"
        container.appendChild(coinImg);
    },

    addEventListeners() {
        for (var coin of coins) {
            const elName = "coinImg-" + coin;
            const coinElement = document.querySelector("." + elName);
            this.addCoinEventListener(coinElement, coin);
        }
        this.clearMoneyString();
    },

    addCoinEventListener(coinElement, coin) {
        coinElement.addEventListener("click", () => {
            switch (coin) {
                case "penny":
                    money +=  coinValues[0];
                    moneyString.innerHTML = "$ " + money.toFixed(2);
                    BuildRegister.updateMoneyEntered();
                    break;
                case "nickel":
                    money += coinValues[1];
                    moneyString.innerHTML = "$ " + money.toFixed(2);
                    BuildRegister.updateMoneyEntered();
                    break;
                case "dime":
                    money += coinValues[2];
                    moneyString.innerHTML = "$ " + money.toFixed(2);
                    BuildRegister.updateMoneyEntered();
                    break;
                case "quarter":
                    money += coinValues[3];
                    moneyString.innerHTML = "$ " + money.toFixed(2);
                    BuildRegister.updateMoneyEntered();
                    break;
            }
        });
    },

    clearMoneyString() {
        clearButton.addEventListener("click",() => {
            money = 0.00;
            moneyString.innerHTML = "$ " + money.toFixed(2);
        });
    }

}
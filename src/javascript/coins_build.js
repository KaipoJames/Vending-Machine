const coinsContainer = document.querySelector(".coins-container");
let moneyString = document.querySelector("#current-money");
let clearButton = document.querySelector("#clear-button");

const coins = ["penny", "nickel", "dime", "quarter"];
const coinValues = ["0.01", "0.05", "0.10", "0.25"];

let money;
money = parseFloat(moneyString.innerHTML.substr(1, 5));

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

    /* currentMoneyValue() {
        let amount = 0;
        amount = parseFloat(moneyString.innerHTML.substr(1, 5));
        return amount;
    }, */

    addCoinEventListener(coinElement, coin) {
        coinElement.addEventListener("click", () => {
            switch (coin) {
                case "penny":
                    money +=  0.01;
                    moneyString.innerHTML = "$ " + money.toFixed(2);
                    break;
                case "nickel":
                    money += 0.05;
                    moneyString.innerHTML = "$ " + money.toFixed(2);
                    break;
                case "dime":
                    money += 0.10;
                    moneyString.innerHTML = "$ " + money.toFixed(2);
                    break;
                case "quarter":
                    money += 0.25;
                    moneyString.innerHTML = "$ " + money.toFixed(2);
                    break;
            }
            console.log("Current Value: " + money.toFixed(2));
        });
    },

    clearMoneyString() {
        clearButton.addEventListener("click",() => {
            money = 0.00;
            moneyString.innerHTML = "$ " + money.toFixed(2);
        });
    }

}
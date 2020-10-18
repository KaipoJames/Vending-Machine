const coinsContainer = document.querySelector(".coins-container");
let moneyString = document.querySelector("#current-money");
let clearButton = document.querySelector("#clear-button");

const coins = ["penny", "nickel", "dime", "quarter"];
const coinValues = ["0.01", "0.05", "0.10", "0.25"];

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
            console.log("clicked " + coin);
            switch (coin) {
                case "penny":
                    moneyString.innerHTML = "$ " + 0.01.toFixed(2);
                    break;
                case "nickel":
                    moneyString.innerHTML = "$ " + 0.05.toFixed(2);
                    break;
                case "dime":
                    moneyString.innerHTML = "$ " + 0.10.toFixed(2);
                    break;
                case "quarter":
                    moneyString.innerHTML = "$ " + 0.25.toFixed(2);
                    break;
            }
        });
    },

    clearMoneyString() {
        clearButton.addEventListener("click",() => {
            moneyString.innerHTML = "$ " + 0.00.toFixed(2);
        });
    }

}
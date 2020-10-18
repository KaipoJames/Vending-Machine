const coinsContainer = document.querySelector(".coins-container");

const coins = ["penny", "nickel", "dime", "quarter"];

export const CoinsBuild = {
    init() {
        this.createCoinContainers();
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
        coinImg.src = "/icon/coins/" + coinName + ".png"
        container.appendChild(coinImg);
    }
}
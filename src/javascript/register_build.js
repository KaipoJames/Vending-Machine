const registerContainer = document.querySelector(".register-container");
const keyPadContainer = document.querySelector("#keypad");

const keyCharacters = ["A", "C", "H", "K", "Z", "1", "2", "3", "4", "5"];

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
        keyPadContainer.appendChild(key);
    },
    createKeyText(keyContainer, keyName) {
        const keyText = document.createElement("p");
        keyText.innerHTML = keyName;
        keyText.classList.add("key-text");
        keyContainer.appendChild(keyText);
    }
}
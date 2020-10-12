export class Dispenser {
    constructor(id, item, price, quantity) {
        this.id = id;
        this.item = item;
        this.price = price.toFixed(2);
        this.quantity = quantity;
        this.src = "/img/" + this.item + ".png"
    }

    addQuantity() {
        this.quantity += 1;
    }
    removeQuantity() {
        this.quantity -= 1;
    }

}
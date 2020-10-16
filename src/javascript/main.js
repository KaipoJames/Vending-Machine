import { Vending } from "./vending.js";

const machine = new Vending("Kaipo's Machine");

machine.addDispenser('1', 'pizza', 2.50, 10);
machine.addDispenser('2', 'hamburger', 2.50, 10);
machine.addDispenser('3', 'apple', 1.00, 10);
machine.addDispenser('4', 'banana', 1.00, 10);
machine.addDispenser('5', 'starburst', 1.25, 10);

machine.showContents();
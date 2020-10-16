import { Vending } from "./vending.js";

const machine = new Vending("Kaipo's Machine");

machine.addDispenser('C1', 'pizza', 2.50, 10);
machine.addDispenser('C2', 'hamburger', 2.50, 10);
machine.addDispenser('A3', 'apple', 1.00, 10);
machine.addDispenser('A4', 'banana', 1.00, 10);
machine.addDispenser('H5', 'starburst', 1.25, 10);

machine.showContents();
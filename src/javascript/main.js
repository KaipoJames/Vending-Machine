import { Vending } from "./vending.js";

const machine = new Vending("Kaipo's Machine");

machine.addDispenser('01', 'pizza', 2.50, 10);
machine.addDispenser('02', 'hamburger', 2.50, 10);
machine.addDispenser('03', 'apple', 1.00, 10);
machine.addDispenser('04', 'banana', 1.00, 10);
machine.addDispenser('05', 'starburst', 1.25, 10);

machine.showContents();
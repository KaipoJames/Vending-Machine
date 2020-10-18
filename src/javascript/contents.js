import { Vending } from "./vending.js";

const machine = new Vending("Kaipo's Machine");
machine.addDispenser('C1', 'pizza', 2.50, 10);
machine.addDispenser('C2', 'burger', 2.50, 10);
machine.addDispenser('C3', 'cookie', 1.50, 10);
machine.addDispenser('K1', 'cheese', 1.75, 10);
machine.addDispenser('A3', 'juice', 1.75, 10);
machine.addDispenser('A4', 'water', 1.25, 10);
machine.addDispenser('A2', 'soda', 1.00, 10);
machine.addDispenser('Z3', 'bala', 1.00, 10);
machine.addDispenser('H1', 'apple', 1.25, 10);
machine.addDispenser('H2', 'banana', 1.25, 10);
machine.addDispenser('H3', 'pear', 1.25, 10);
machine.addDispenser('H4', 'mango', 1.25, 10);

export const dispensers = machine.returnAllDispensers();
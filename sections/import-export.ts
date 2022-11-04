import { add, divide, multiply, subtract } from "../helpers/math-helpers";

function greet(name: string) {
    console.log(`Hello ${name}`);
}

let a:number = 10;
let b:number = 20;

greet('Wal');

add(a, b);
subtract(a, b);
multiply(a, b);
divide(a, b);


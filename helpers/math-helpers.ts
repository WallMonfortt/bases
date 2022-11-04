export function add (a: number, b: number): number {
    console.log(`Sum ${a} + ${b} is : ${a+b}`);
    return a + b;
}

export function subtract (a: number, b: number): number {
    console.log(`Difference ${a} - ${b} is : ${a-b}`);
    return a - b;
}

export function multiply (a: number, b: number): number {
    console.log(`Product ${a} * ${b} is : ${a*b}`);
    return a * b;
}

export function divide (a: number, b: number): number {
    console.log(`Quotient ${a} / ${b} is : ${a/b}`);
    return a / b;
}
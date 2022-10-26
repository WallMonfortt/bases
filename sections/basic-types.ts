export let firstName:string = 'Wal';
let lastName:string  = 'Monfortte';

let fullName:string  = `${firstName} ${lastName}`;

console.log(`Hello ${fullName}`);

let number1:number = 10;
let number2:number = 20;

let total:number = number1 + number2;

console.log(`The total is: ${total}`);

let isTrue:boolean    = true;
let isRunning:boolean = false;
let negative:boolean  = false;

console.log(`Is true? ${isTrue}`);
console.log(`Is running? ${isRunning}`);
console.log(`Is negative? ${!negative}`);
console.log(`Is double negative? ${!!negative}`);
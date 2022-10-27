

export let base = 10;
let limit = 50;
let operator = 1;


do{
    console.log(`${base} * ${operator} = ${base * operator}`);
    operator++;
}while(operator * base  <= limit);
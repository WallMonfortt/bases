
export let employees = [ { name: "John", age: 30 }, { name: "Jane", age: 25 }, { name: "Jim", age: 55 } ]; 
let names = employees . map ( employee => employee . name ); console . log ( names ); // [ 'John', 'Jane', 'Jim' ]

let salaries = [ 60000 , 120000 , 75000 ]; 
let total = salaries . reduce ( ( sum , salary ) => sum + salary , 0 ); console . log ( total ); // 240000

for ( let i = 0 ; i < employees . length ; i ++ ) { console . log ( `El sueldo de ${employees [ i ].name } es: ${salaries[i]} Usd al anio`); }
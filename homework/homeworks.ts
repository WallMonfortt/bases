export let pound = 150;
let Kg: number;

Kg = pound * 0.45359237;

console.log(` ${pound} pound is equal to ${Kg} Kg`);

let km = 100;
let miles: number;

miles = km * 0.621371;

console.log(` ${km} km is equal to ${miles} miles`);

let base = 10;
let height = 5;
let area: number;

area = (base * height) / 2;

console.log(`The area of the triangle is ${area}`);

let numbers: number[] = [1, 6, 8, 4, 2, 7, 10, 3, 5, 9];
let max: number = numbers[0];

for (let index = 0; index < numbers.length; index++) {
    const element = numbers[index];
    if (element > max) {
        max = element;
    }
    console.log((element % 2 == 0) ? `${element} is even` : `${element} is odd`);
    
}
console.log(`The maximum number is ${max}`);

let axisX: number[] = [1,2,3,4,5];
let axisY: number[] = [1,2,3,4,5];

axisY.forEach((value) => {
    let axisX1 = axisX.map((value1) => value1 * value);
    console.log(`${axisX1.splice(0, axisX1.length - 1).join(" ")}`);
});

function maximun(a:number,b:number,c:number):number {
    let max: number = a;
    if (b > max) {
        max = b;
    }
    if (c > max) {
        max = c;
    }
    return max;
}

let maxValue = maximun(5, 2, 6);
console.log(`The maximum number is ${maxValue}`);

let heroes = [
    { name: "Batman", franchise: "DC" },
    { name: "Superman", franchise: "DC" },
    { name: "Spiderman", franchise: "Marvel" },
    { name: "Ironman", franchise: "Marvel" },
    { name: "Wolverine", franchise: "Marvel" },
    { name: "Flash", franchise: "DC" },
    { name: "Thor", franchise: "Marvel" },
];

function largestName(heroes: any[]): string {
    let largest: string = heroes[0].name;
    heroes.forEach((value) => {
        if (value.name.length >= largest.length) {
            largest = value.name;
        }
    });
    return largest;
}

let hero = largestName(heroes);
console.log(`The largest name is ${hero}`);


function starsWith( array: any [], letter: string) : object[] {
    let newArray: object[] = [];
    array.forEach((value) => {
        if (value.name[0] == letter) {
            newArray.push(value);
        }
    });
    return newArray;
}

let heroesWithLetterS = starsWith(heroes, "S");
console.log(heroesWithLetterS);
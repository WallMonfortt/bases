

export let gasTank = 50;

while (gasTank > 0) {
    console.log(gasTank);
    gasTank--;
}

console.log("Out of gas");


do {
    console.log(gasTank);
    gasTank--;
} while (gasTank > 0);
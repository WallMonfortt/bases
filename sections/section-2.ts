

let numberOfLines = 1;

export function increaseLineNumbers() {

numberOfLines++;

}

while (numberOfLines <= 10) {
    console.log('Linea #',numberOfLines);
    increaseLineNumbers();
}






// Calcular el promedio e informar:
// A >= 90 Excelente
// B >= 80 Muy bien
// C >= 70 Bien
// D >= 60 Regular
// E < 60 Insuficiente

export let grade: number = 70;

function toPrint ( note:string){
    console.log('Su nota es: ', note);
}

if (grade >= 90) {
    toPrint('Excelente');
}else if( grade >= 80) {
    toPrint('Muy bien');
}else if(grade >= 70) {
    toPrint('Bien');
}else if( grade >= 60){
    toPrint('Regular');
}else{
    toPrint('Insuficiente');
}
// Definizione della funzione con il rest operator
function somma(...numeri) {
    return numeri.reduce((totale, num) => totale + num, 0);
}

console.log(somma(10,20,30));
console.log(somma(1+2+3+4+5+6+7+8+9));
console.log(somma());
console.log(somma(1));
console.log(somma(4, -8, 24, -15));
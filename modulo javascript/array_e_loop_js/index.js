//array numeri
let numeri = [5, 12, 8, 23, 42];
console.log(numeri);


//Uso del ciclo for
let numbers = [5, 12, 8, 23, 42];
let somma = 0;

for (let i = 0; i < numbers.length; i++) {
    somma += numbers[i];
}

console.log("La somma dei numeri è: " + somma);


//Trovare il numero massimo in un array usando un ciclo
let Numeri = [98, 12, 49, 23, 42];
let massimo = Numeri[0]; // inizializziamo massimo con il primo numero dell'array

for (let i = 1; i < Numeri.length; i++) {
    if (Numeri[i] > massimo) {
        massimo = Numeri[i];
    }
}

console.log("Il numero massimo è: " + massimo);


//Array di numeri casuali
let numeriCasuali = [];

for (let i = 0; i < 5; i++) {
    numeriCasuali.push(Math.floor(Math.random() * 100) + 1); // genera numeri tra 1 e 100
}

console.log(numeriCasuali);
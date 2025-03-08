// Creazione dell'array expenses
const expenses = [120, 50, 30, 200, 80];

// Calcolo della somma totale utilizzando reduce
const totalExpenses = expenses.reduce((acc, curr) => acc + curr, 0);

// Creazione dell'array words
const words = ["banana", "apple", "cherry", "date"];

// Ordinamento dell'array words in ordine alfabetico
words.sort();

// Stampa dei risultati sulla console
console.log("Somma totale delle spese:", totalExpenses);
console.log("Array ordinato:", words);
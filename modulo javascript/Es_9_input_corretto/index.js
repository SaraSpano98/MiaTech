let word;

do{
    word = prompt ("Inserisci una parola di almeno 5 caratteri");
} while (word === null || word.trim () . length <5);

console.log("Hai inserito la parola:", word); 


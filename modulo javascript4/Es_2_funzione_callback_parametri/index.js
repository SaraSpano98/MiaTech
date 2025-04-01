function somma (a, b, callback) {
    let risultato = a+b;
    console.log("Risultato della somma è:", risultato);

    callback(risultato)
}

//FUNZIONE DI CALLBACK
function stampa(valore) {
    console.log("Operazione completata! Il risultato è:", valore);
   
}

//PASSO LA FUNZIONE STAMPA COME CALLBACK
somma(9, 13, stampa)
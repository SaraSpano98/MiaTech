function eseguiOperazione(a, b, callback) {
    let risultato = a + b;
    console.log("Risultato della somma:", risultato);
    
    // Eseguo la callback
    callback();
}

// Callback che viene eseguito dopo l'operazione
function dopoOperazione() {
    console.log("Operazione completata! Eseguita la callback.");
}

// Chiamata alla funzione con callback
eseguiOperazione(5, 10, dopoOperazione);

//Una callback è semplicemente una funzione che viene passata come argomento a un'altra funzione e che
//viene eseguita in un secondo momento (dopo che l'operazione principale è terminata).

//COME SI CREA UNA CALLBACK:
//1. Dichiarare una funzione principale che accetta un'altra funzione come argomento
//2. All'interno della funzione principale, chiamare la funzione passata come argomento, eventualmente passando dei valori
//3. Passare una funzione come argomento quando si chiama la funzione principale. 
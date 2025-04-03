function primaPromessa() {
    return new Promise(resolve => {
        setTimeout(() => resolve("Promessa 1 completata dopo 2 secondi"), 2000);
    });
}


function secondaPromessa() {
    return new Promise(resolve => {
        setTimeout(() => resolve("Promessa 2 completata dopo 4 secondi"), 4000);
    });
}

console.log("Avvio delle varie promesse");

Promise.all([primaPromessa(), secondaPromessa()])
    .then(risultati => {
        console.log("Tutte le promesse completate:", risultati);
    })
    .catch(error => {
        console.error("Errore in una delle promesse:", error);
    });


//SPIEGAZIONE CONCETTUALE DI PROMISE.ALL:
// Promise.all() è un metodo in Javascript che accetta un array di promesse e le esegue in parallelo. 
//Restituisce una singola promessa che:
// 1- SI RISOLVE quando TUTTE le promesse nell'array sono risolte, restituendo un array con i loro risultati.
// 2- SI RIFIUTA immediatamente se UNA QUALSIASI PROMESSA FALLISCE, restituendo l'errore della prima promessa rifiutata.

//QUINDI:
// esegue in parallelo, l'ordine dei risultati corrisponde all'ordine delle promesse nell'array (indipendetemente da quale si risolve per prima) e, 
//Se una promessa viene rifiutata, l'intera promise.all fallisce subito: infatti, NESSUN'ALTRO RISULTATO VERRA' RESTITUITO, 
//PROPRIO PERCHè FALLISCE. 
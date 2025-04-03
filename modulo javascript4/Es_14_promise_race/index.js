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

Promise.race([primaPromessa(), secondaPromessa()])
    .then(risultato => {
        console.log("Una delle promesse è risolta:", risultato);
    })
    .catch(error => {
        console.error("Errore in una delle promesse:", error);
    });


//SPIEGAZIONE:
//Promise.race() accetta un array di promesse e restituisce una nuova promessa che: 
//Si RISOLVE o si RIFIUTA NON APPENA la prima promessa tra quelle fornite si completa (indipendentemente dal fatto che abbia successo o fallisce).

//DIFFERENZA CON PROMISE.ALL():
//Promise.all() ATTENDE TUTTE LE PROMESSE E FALLISCE SE UNA DI ESSE FALLISCE.
//Promise.race() SI RISOLVE O SI RIFIUTA APPENA LA PRIMA PROMESSA E' COMPLETATA.
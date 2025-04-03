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

function terzaPromessa() {
    return new Promise(reject => {
        setTimeout(() => reject("Promessa 3 completata dopo 5 secondi"), 5000);
    });
}

console.log("Avvio delle varie promesse");

Promise.allSettled([primaPromessa(), secondaPromessa(), terzaPromessa()])
    .then(risultati => {
        console.log("Tutte le promesse completate:", risultati);
    })

//SPIEGAZIONE:
//Promise.allSettled() raccoglierà tutti gli stati delle promesse (sia risolte che rifiutate) e 
//restituirà un array contenente gli oggetti con il campo status che può essere fulfilled (completato con successo)
//o rejected (fallito), insieme al valore o errore associato.


//QUINDI:
//Promise.allSettled() accetta un array di promesse e attende che tutte si completino, 
//restituendo un array con lo stato di ciascuna promessa, senza interrompere il flusso in caso di errori.

//DIFFERENZA CON PROMISE.ALL():
//Promise.all() si interrompe immediatamente se una promessa viene rifiutata.
//Promise.allSettled() attende tutte le promesse, restituendo lo stato di ognuna (risolta o rifiutata).

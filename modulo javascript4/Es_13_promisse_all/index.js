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
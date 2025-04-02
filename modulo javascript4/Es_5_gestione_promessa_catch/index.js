function operazione() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            let successo = Math.random() > 0.5; // Genera un valore casuale true/false
            if (successo) {
                resolve("Operazione completata dopo 2 secondi")
            } else {
                reject("Operazione fallita: si è verificato un errore!")
            }
        }, 2000);
    });
}

operazione()
    .then(messaggio => console.log(messaggio))
    .catch(errore => console.log("Errore:", errore));

//resolve(...) è una funzione che viene chiamata quando la promise si completa con successo
//Dopo aver creato una Promise, possiamo eseguirla e usare .then() per ottenere il valore quando la promessa viene risolta.
//Se una promessa fallisce, possiamo gestire l'errore con .catch().

//CONSIDERAZIONI:
//alla parte dell'if(): math.random > 0.5 simula un successo o un fallimento in moodo casuale
//A riguardo di questa parte (sopra), la Promise risolve o rifiuta il tutto dopo 2 secondi in modo casuale. 
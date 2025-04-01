function operazione() {
    return new Promise((reject) => {
        setTimeout(() => {
            reject("Errore durante l'operazione!"); // Simuliamo un errore
        }, 2000);
    });
}

operazione()
    .then(messaggio => console.log(messaggio))
    .catch(errore => console.log("Errore:", errore));

//resolve(...) è una funzione che viene chiamata quando la promise si completa con successo
//Dopo aver creato una Promise, possiamo eseguirla e usare .then() per ottenere il valore quando la promessa viene risolta.
//Se una promessa fallisce, possiamo gestire l'errore con .catch().
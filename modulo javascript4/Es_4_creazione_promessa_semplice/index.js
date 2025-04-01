function operazione() {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve("operazione completata dopo 2 secondi")
        }, 2000);
    })
    
}
    
operazione().then(messaggio => {
    console.log(messaggio);
});

//resolve(...) è una funzione che viene chiamata quando la promise si completa con successo
//Dopo aver creato una Promise, possiamo eseguirla e usare .then() per ottenere il valore quando la promessa viene risolta.
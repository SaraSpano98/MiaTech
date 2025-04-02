function operazione() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            let successo = Math.random() > 0.5; // Genera un valore casuale true/false
            if (successo) {
                resolve("Operazione fatta dopo 2 secondi");
            } else {
                reject("Operazione fallita: si è verificato un errore!");
            }
        }, 2000);
    });
}

operazione()
    .then(messaggio => console.log(messaggio))
    .catch(errore => console.log("Errore:", errore))
    .finally(() => console.log("Operazione conclusa!"));


//QUANDO SI USA FINALLY?
//Nascondere una schermata di caricamento
//Chiudere una connessione a un database
//Ripulire risorse, come file temporanei
//Registrare che un'operazione è terminata, indipendente dal risultato

//Il blocco .finally() VIENE SEMPRE ESEGUITO DOPO IL BLOCCO .THEN() E DOPO IL BLOCCO .CATCH(), ed è utile per operazioni di cleanup, 
// come nascondere un loader o chiudere una connessione.
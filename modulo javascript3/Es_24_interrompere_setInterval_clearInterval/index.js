function stampaMessaggio() {
    console.log("Messaggio stampato ogni secondo");
}

let intervallo = setInterval(stampaMessaggio, 1000);   //stampa ogni millisecondi: 1 secondo

setTimeout(function() {
    clearInterval(intervallo); // Ferma l'intervallo
    console.log("Intervallo fermato dopo 5 secondi!");
}, 5000);


function messaggio() {   //Dichiarare una funzione che contenga il messaggio che vuoi stampare nella console.
    console.log("Questo messaggio viene stampato dopo 2 secondi")  
};

setInterval(messaggio, 2000);  //come argomento metto il nome della funzione e il tempo in millisecondi

//setInterval: è utile quando devi eseguire ripetutamente un'azione, come: AGGIORNARE DATI, CREARE UN OROLOGIO, FARE UN'ANIMAZIONE O UN CONTO ALLA ROVESCIA.
//COME SI FERMA? Con ClearINTERVAL
//E' Asincrono: NON BLOCCA IL CODICE. 

//LA DIFFERENZA DI setTimeout() & setInterval(), è che il primo esegue la funzione solo una volta dopo un ritardo, 
//il secondo, esegue la funzione più volte a intervalli regolari finchè non VIENE FERMATO MANUALMENTE. 
function messaggio() {   //Dichiarare una funzione che contenga il messaggio che vuoi stampare nella console.
    console.log("Questo messaggio viene stampato dopo 3 secondi")  
};

setTimeout(messaggio, 3000);  //come argomento metto il nome della funzione e il tempo in millisecondi

//setTimeout: FUNZIONE, che viene usata per ESEGUIRE UNA FUNZIONE o BLOCCO DI CODICE dopo un determinato intervallo di tempo.
//Questo intervallo viene specificato in MILLISECONDI. 

//L'ESEMPIO VALE COME SINTASSI PER SETTIMEOUT

// A COSA SERVE?
//Serve per ritardare l'esecuzione di una funzione dopo un certo intervallo di tempo. 
//Questo è utile quando vuoi eseguire un'azione dopo un certo tempo, senza bloccare l'esecuzione del codice principale. 

//Viene spesso usato per simulare ritardi, caricare dati, creare animazioni temporizzate o,
//aggiornare il contenuto di una pagina web dopo un certo tempo.
//È asincrono, il che significa che non interrompe il resto del codice.


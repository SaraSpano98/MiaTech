function dividi(a, b) {
    try {
        if (b === 0) {
            throw new Error("Divisione per zero non consentita!");
        }
        console.log("Risultato:", a / b);
    } catch (errore) {
        console.error("Errore:", errore.message);
    }
}

dividi(10, 2);
dividi(10, 0);

//I blocchi try e catch vengono utilizzati in JavaScript per gestire gli errori ed evitare che il codice si interrompa in modo improvviso.
// Obiettivo: Se il codice dentro try genera un errore, invece di bloccare tutto lo script, l'errore viene catturato dal catch, 
// permettendo al programma di continuare a funzionare.

//CODICE DENTRO TRY: viene eseguito normalmente, 
//Se c'è un errore, il CODICE DENTRO CATCH, viene  eseguito e l'errore viene gestito.
//Senza TRY...CATCH, un errore potrebbe fermare tutto lo script.
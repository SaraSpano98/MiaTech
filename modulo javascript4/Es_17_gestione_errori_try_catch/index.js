function nuovaPromessa() {
    return new Promise(resolve => {
        setTimeout(() => resolve("Promessa risolta dopo 2 secondi"), 2000);
    });
}

async function attendiPromessa() {
    try {
        const messaggio = await nuovaPromessa();
        console.log(messaggio);
    } catch (errore) {
        console.log("Errore trovato:", errore);
    }

    try {
        const erroreMessaggio = await nuovaPromessa();
        console.log(erroreMessaggio);
    } catch (errore) {
        console.log("Errore catturato nella seconda Promessa", errore);
    }

}

attendiPromessa();

//SPIEGAZIONE:
//In JavaScript, try...catch è una struttura di controllo che ti permette di gestire gli errori che potrebbero verificarsi 
//durante l'esecuzione del codice. È utile quando si prevede che una parte del codice possa generare un errore e si vuole 
//gestirlo in modo sicuro, evitando che l'intero programma si fermi.

//SINTASSI BASE: 
// try {
//     CODICE CHE POTREBBE GENERARE UN ERRORE
// } catch (errore ) {
//     CODICE PER GESTIRE L'ERRORE
// }
//TRY: Contiene il codice che potrebbe generare un errore. JavaScript eseguirà il codice all'interno di questo blocco.
//CATCH: Se si verifica un errore all'interno del blocco try, il controllo passerà automaticamente al blocco catch, 
//dove l'errore verrà gestito. L'errore viene passato come argomento (di solito chiamato errore o e) e può essere utilizzato per
//analizzare o loggare l'errore.


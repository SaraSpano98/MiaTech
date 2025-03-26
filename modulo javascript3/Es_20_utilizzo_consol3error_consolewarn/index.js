//ESEMPIO CONCRETO:

//Dati di accesso (username e password corretti)
const usernameCorretto = "utente123";
const passwordCorretta = "password@123";

// Variabili che rappresentano l'input dell'utente
let usernameInserito = "utente123";   // Prova a cambiare questi valori per testare diversi scenari
let passwordInserita = "wrongpass";   // Puoi cambiare a "" per testare un campo vuoto

// Controllo delle credenziali
if (usernameInserito === "" || passwordInserita === "") {
    console.warn("Avviso: Uno o più campi sono vuoti. Assicurati di inserire username e password.");
} else if (usernameInserito !== usernameCorretto || passwordInserita !== passwordCorretta) {
    console.error("Errore: Username o password errati. Riprova.");
} else {
    console.log("Login effettuato con successo! Benvenuto.");
}


/*let stato = "errore"; // Può essere "errore", "avviso" o "ok"

if (stato === "errore") {
    console.error("Errore: Qualcosa è andato storto!");
} else if (stato === "avviso") {
    console.warn("Attenzione: Questo potrebbe causare problemi in futuro.");
} else {
    console.log("Tutto è a posto, nessun problema.");
};*/

//LOGICA ESERCIZIO:
//1. dichiaro variabile che può causare un errore o un avviso, dipende dalle condizioni.. (con IF, ELSE IF & ELSE)
//2. uso il console.error per segnale l'errore se la variabile ha un valore specifico (tipo: la variabile contiene null o un valore non valido)
//3. uso il console.warn per segnare un avviso se la variabile ha un altro valore che non potrebbe essere ottimale...
//Esempio: quando la variabile può contentenere un valore o più valori che potrebbe causare comportamenti indesiderati.)

//CONCETTI:
//1. CONSOLE.ERROR() : è un metodo che viene utilizzato per segnalare errori. Quando lo usi,
// il messaggio verrà mostrato in rosso nella console (in genere, in modo più visibile rispetto agli altri messaggi di log), 
// per segnalare che qualcosa è andato storto nel tuo codice.
//USI: (1: QUANDO SI VERIFICA UN EORRRE CRITICO NEL PROGRAMMA), (2: QUANDO SI VUOLE SEGNALARE UN PROBLEMA CHE INPEDISCE CHE IL CODICE FUNZIONA CORRETTAMENTE)

//2. CONSOLE.WARN() : è un metodo che viene utilizzato per Il metodo console.error() è utilizzato per segnalare errori. Quando lo usi, 
// il messaggio verrà mostrato in rosso nella console (in genere, in modo più visibile rispetto agli altri messaggi di log), 
// per segnalare che qualcosa è andato storto nel tuo codice.
//USI: (1: QUANDO SI VUOLE AVVERTIRE CHE QUALCOSA NON è OTTIMALE MA NON IMPEDISCE AL CODICE DI FUNZIONARE), 
// (2: QUANDO SI VUOLE ATTIRARE L'ATTENZIONE SU UN POSSIBILE COMPORTAMENTO INASPETTATO)

//IMPORTANTE: Entrambi sono molto utili per gestire il flusso di esecuzione del codice e rendere il debugging più chiaro, 
// segnalandoti eventuali problemi o cose che potrebbero non andare bene.


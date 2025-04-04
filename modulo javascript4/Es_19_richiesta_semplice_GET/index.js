async function richiestaDati() {  //codice asincrono: restituisce una promessa, per questo serve await o .then()
    try {
        const risposta = await fetch("https://jsonplaceholder.typicode.com/posts/1");  //la parte dell'url, fa una richiesta HTTP GET all’URL
        if(!risposta.ok) {   //risposta.ok è un booleano che vale true solo se lo status è tra 200 e 299.
            throw new Error(`Errore nella richiesta: ${risposta.status}`);  //inserisce il codice di stato http in una stringa, serve per capire se la richiesta è andata o meno a buon fine.
        }

        const dati = await risposta.json();  //CONVERTE LA RISPOSTA IN OGGETTO JSON
        console.log("Dati ricevuti:", dati);
    } catch (Errore) {
        console.error("Si è verificato un errore, attenzione:", Errore);
    }
}

richiestaDati();

//Il blocco TRY...CATCH: è per eventuali errori in modo da gestirli nel caso in cui un API non risponde o restituisce un errore.

//Quando fai una richiesta con fetch(), ottieni un oggetto chiamato Response, ti restituisce una risposta "grezza" dal server.
//Per ottenere i dati veri, spesso in formato JSON, devi "leggere" questa risposta.
//E lo si fa chiamando .json() su di essa, che trasforma il contenuto della risposta in un oggetto JavaScript.
//risposta.status è una proprietà di quell’oggetto che ti dice il codice di stato HTTP della risposta.
//COSA STAMPA RISPOSTA.STATUS? Dipende dal risultato della richiesta.

// cod: 200  --> OK(richiesta riuscita)
// cod: 201  --> Creato(Es: nuovo oggetto creato)
// cod: 400  --> Richiesta non valida(Bad Request)
// cod: 401  --> Non autorizzato(Unauthorized)
// cod: 404  --> Non trovato(Not Found)
// cod: 500  --> Errore del server(Server Error)

//GET: richista HTTP  usata per ottenere dati da un server (controllo che usano i browser per comunicare con i server)
//API: interfaccia per comunicare tra programmi o servizi tramite codice.
//API WEB: permette di ottenere o inviare dati tramite internet.
//Esempio:
//si usa un'app del meteo. L'app chiama l'API del meteo con una richiesta tipo: GET meteo per Milano,l'API risponde con dati(temperatura, vento, ecc).




//JSON: formato dati leggero o leggibile usato nel web ||formato di testo usato per rappresentare dati in modo strutturato, molto simile agli oggetti JavaScript.
//THROW ERROR: serve per lanciare un errore intenzionalmente(segnalare qualcosa che è andato storto, fermare esecuzione in un punto critico..
//far partire la gestione degli errori (catch)).




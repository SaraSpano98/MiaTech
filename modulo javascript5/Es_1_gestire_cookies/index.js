// Imposta un cookie
document.cookie = "username=Fabio; expires=Sun, 20 Apr 2025 14:00:00 UTC; path=/";

// Mostra i cookie
let cookies = document.cookie;
console.log(cookies);

// Cancella il cookie
document.cookie = "username=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/";

//SPIEGAZIONE:
//I cookie sono piccoli file di testo che un sito web può salvare nel browser dell'utente per memorizzare informazioni.

//A COSA SERVONO?
//SALVARE LOGIN: Per ricordare che sei loggato, così non bisogna fare login ogni volta
//MEMORIZZARE PREFERENZE: esempio: tema chiaro/scuro, lingua, layout, ecc.. 
//TRACCIAMENTO/ANALISI: I siti(e le pubblicità), li usano per capire cosa si fa sul sito o per mostrare annunci mirati
//GESTIONE DEL CARRELLO: Nei siti e-commerce, si usano i cookies per tenere in memoria cosa si ha messo dentro il carrello

//LIMITAZIONI DEI COOKIES:
//Ogni cookie ha una dimensione max di 4KB
//Il browser limita il numero di cookie per dominio (es. max 20)
//Sono visibili in chiaro (quindi non metterci dati sensibili!)
//Possono essere bloccati o cancellati dall’utente

//TIPI DI COOKIES: 
// PERSISTENTI: hanno una data di scadenza, restare anche dopo la chiusura
// DI SESSIONE: spariscono quando si chiude il browser
// DI TERZE PARTI: inseriti da altri domini(Es.pubblicità)
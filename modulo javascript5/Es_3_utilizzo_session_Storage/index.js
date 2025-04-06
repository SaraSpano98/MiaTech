sessionStorage.setItem('username', "Mariella")
sessionStorage.setItem('password', 2087) //(password) è la CHIAVE, (2087) è il VALORE 

let username = sessionStorage.getItem('username') //Recupera il valore associato alla chiave 'username' e lo assegna alla variabile username.

console.log(username)  //stampa in console il valore

//Elimina la chiave 'username' dal sessionStorage
sessionStorage.removeItem('username')

//sessionStorage è una memoria temporanea nel browser che ti permette di salvare dati solo per la durata della sessione corrente.

//una sessione dura: 
//finchè l tab o la finestra del browser resta aperta.
//se l'utente chiude il tab, i dati salvati con sessionStorage spariscono. 
//se si ricarica la pagina, i dati restano: se si chiude la tab o il browser --> i dati vengono cancellati. 

//METODI (UGUALI A LOCALSTORAGE):
//SESSIONSTORAGE.SETITEM(KEY, VALUE): salva un dato(stringa)
//SESSIONSTORAGE.GETITEM(KEY): recupera un dato
//SESSIONSTORAGE.REMOVEITEM(KEY): rimuovere un singolo dato
//SESSIONSTORAGE.CLEAR(): rimuove TUTTI i dati
//SESSIONSTORAGE.KEY(INDEX): restituisce il nome della chiave
//SESSIONSTORAGE.LENGHT: numero di elementi salvati

//QUANDO USARE SESSIONSTORAGE? Si usa quando si vogliono SALAVARE DATI TEMPORANEI:
//servono solo mentre l'utente è sul sito(in quella scheda)
//NON devono restare se chiude il browser o cambia tab

//ESEMPI: Stato di un form a più passaggi, Dati di una ricerca temporanea, Variabili tra pagine senza usare URL  o query string,
//Bloccare l'invio multiplo di un form nello stesso tab 

//DIFFERENZA CON LOCALSTORAGE:
// durata: localStorage(FINO A CANCELLAZIONE MANUALE) sessionStorage(FINCHE' IL TAB E' APERTO)
// visibilità: localStorage(TRA PIù TAB/FINESTRE) sessionStorage(SOLO NEL TAB ATTIVO)
// utilizzo tipico: localStorage(PREFERENZE, LOGIN) sessionStorage(DATI TEMPORANEI, FORM)
async function richiestaDati() {
    try {
        const risposta = await fetch("https://jsonplaceholder.typicode.com/posts", {
            method: "POST", // Metodo HTTP
            headers: {
                "Content-Type": "application/json" // Tipo di contenuto
            },
            body: JSON.stringify({
                title: "Titolo esempio",
                body: "Contenuto del messaggio",
                userId: 123
                
            }) // Dati inviati nel corpo della richiesta
        });

        // Controllo se la risposta è andata a buon fine
        if (!risposta.ok) {
            throw new Error(`Errore nella richiesta: ${risposta.status}`);
        }

        const dati = await risposta.json(); // Converto la risposta in oggetto JS
        console.log("Risposta dal server:", dati);
    } catch (errore) {
        console.error("Si è verificato un errore:", errore.message);
    }
}

richiestaDati();

//SPIEGAZIONE:
//method:POST= specifica che vuoi fare una richiesta POST 
//headers: dichiara che si vuola manipolare JSON(obbligatorio per molte API)
//body: i dati che si voglio inviare, convertiti in JSON con JSON.stringfy()
//.json: converte la risposta del server in un oggetto Javascript






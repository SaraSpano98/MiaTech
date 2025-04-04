async function richiestaDati() {
    try {
        const risposta = await fetch("https://jsonplaceholder.typicode.com/posts/1", {
            method: "GET", // Metodo HTTP
            headers: {
                "Content-Type": "application/json" // Tipo di contenuto
            },
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
//method: GET = Questo fa una richiesta GET per ottenere il post con ID 1 e stampare il contenuto nella console.









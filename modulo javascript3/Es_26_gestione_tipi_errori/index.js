function manipolaStringa(valore) {
    try {
        if (typeof valore !== 'string') {
            throw new TypeError("Il valore deve essere una stringa.");
        }
        
        // Prova a convertire il valore in maiuscolo
        let risultato = valore.toUpperCase();
        console.log("Risultato:", risultato);
    } catch (error) {
        if (error instanceof TypeError) {
            console.error("Errore di tipo: ", error.message);
        } else {
            console.error("Errore generico:", error.message);
        }
    }
}

// Esempi di utilizzo
manipolaStringa("ciao");  // Funziona correttamente
manipolaStringa(123);      // Genera un TypeError
manipolaStringa(null);     // Genera un TypeError
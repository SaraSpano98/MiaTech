function valoriBooleani(esito) {
    return new Promise((resolve, reject) => {
        if (esito) {
            resolve("Operazione completata con successo!");
        } else {
            reject("Operazione andata male: c'è un errore");
        }
    })
};


valoriBooleani(true)
    .then(risultato => console.log("Promessa risolta:", risultato))
    .catch(errore => console.log("Errore:", errore));

valoriBooleani(false)
    .then(risultato => console.log("Promessa risolta:", risultato))
    .catch(errore => console.log("Errore:", errore))
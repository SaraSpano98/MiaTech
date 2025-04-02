function randomPromessa() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const random = Math.random();

            if (random > 0.5) {
                resolve(random * 10);
            } else {
                reject("Numero troppo basso");
            }
        }, 1000);
    });
}

randomPromessa()
    .then((valore) => {
        console.log("Valore iniziale:", valore);
        return valore * 50; 
    })
    .then((valore) => {
        console.log("Dopo moltiplicazione:", valore);
        return valore + 5; 
    })
    .then((risultatoFinale) => {
        console.log("Risultato finale:", risultatoFinale);
    })
    .catch((errore) => {
        console.error("ERRORE:", errore); 
    })
    .finally(() => {
        console.log("Operazione completata (con successo o errore).");
    });
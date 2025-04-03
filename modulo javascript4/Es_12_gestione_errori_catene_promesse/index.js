function promessaCasuale() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const esito = Math.random() > 0.5
            if (esito) {
                resolve("Operazione riuscita!");
            } else {
                reject("Operazione fallita!");
            }
        }, 1000);
    });
}

promessaCasuale()
    .then((risultato) => {
        console.log("Fase 1:", risultato);
        return promessaCasuale();
    })
    .then((risultato) => {
        console.log("Fase 2:", risultato);
        return promessaCasuale(); 
    })
    .then((risultato) => {
        console.log("Fase 3:", risultato);
    })
    .catch((errore) => {
        console.error("ERRORE:", errore); 
    });
    
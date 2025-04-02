function operazione() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const numero = Math.random();

            if(numero < 1) {
                resolve(numero);
            } else {
                reject("Numero troppo basso");
            }
        }, 1000);
    });
}

operazione()
    .then(valore => valore * 100)
    .then(valore => valore + 2)
    .then(risultato => {
        console.log("Successo:", risultato);
    })
    .catch(errore => {
        console.log("Errore:", errore)
    });
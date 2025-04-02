function operazione() {
    return new Promise((resolve) => {
        setTimeout(() => {
            let numero = Math.floor(Math.random() * 10) + 1;
            console.log ("Numero generato:", numero); 
            resolve(numero);
        }, 1000);
    });
}

operazione()
    .then(numero => {
    let risultato = numero * 2;
    console.log("moltiplicato per 2:", risultato);
    return risultato;
}) 
    .then(numero => {
    let finale = numero * 2;
    console.log("Aggiunto per 3:", finale);
    return finale;
})


.then(finale => console.log("Risultato finale:", finale))
.catch(errore => console.log("Errore:", errore));
    

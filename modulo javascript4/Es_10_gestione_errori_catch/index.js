function randomPromessa() {
    return new Promise((_, reject) => {
        reject(new Error("Si è verificato un errore, attenzione!"));
    });
}

randomPromessa()
    .catch((errore) => {console.error("ERRORE:", errore.message)});

//In questo caso, nella parte del return new Promise ci andrebbe di solito anche resolve (sempre), ma visto che l'esercizio non lo richiede, 
//abbiamo messo un "_", in modo tale che mantiene la posizione e il tutto funzioni visto che la regola vuole che ci siano sia resolve e reject.
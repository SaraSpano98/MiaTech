function nuovaPromessa() {
    return new Promise(resolve => {
        setTimeout (() => resolve("Promessa risolta dopo 2 secondi"), 2000);
    });
}


async function attendiPromessa() {
    const messaggio = await nuovaPromessa();
    console.log(messaggio);
}

attendiPromessa();

//SPIEGAZIONE:
//AWAIT è UN OPERATORE USATO INSIEME AD ASYNC per scrivere codice asincrono in modo sincrono, 
//migliorando la leggibilità e semplificando la gestione delle promesse. In pratica, 
//con await, puoi "aspettare" che una promessa venga risolta o rifiutata prima di continuare l'esecuzione del codice.

//SINTASSI BASE:
//L'operatore await può essere usato SOLO ALL'INTERNO DI UNA FUNZIONE DICHIARATA "ASYNC"!
//ASYNC: Dichiara una funzione asincrona. Le funzione asincrone, restituiscono SEMPRE una promessa
//AWAIT: Aspetta che la promessa venga risolta o rifiutata prima di eseguire.

//COSA SUCCEDE DIETRO LE QUINTE?
//Quando usi await su una promessa:
//JavaScript pausa l'esecuzione della funzione finché la promessa non è risolta o rifiutata.
//Il codice successivo viene eseguito solo dopo che la promessa è stata completata.
//Durante l'attesa, JavaScript non blocca l'intero programma. Continua a eseguire altre operazioni, mantenendo il codice asincrono non bloccante.

//COSE IMPORTANTI:
//GESTIONE ERRORI: Usa try...catch per gestire gli errori nelle funzioni asincrone.
//È più leggibile rispetto a .then() quando si tratta di codice asincrono complesso.
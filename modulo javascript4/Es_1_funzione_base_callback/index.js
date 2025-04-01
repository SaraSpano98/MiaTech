//FUNZIONE PRINCIPALE 
function somma (a, b, callback) {
    let risultato = a+b;
    callback(risultato);   //CHIAMO LA CALLBACK CON IL RISULTATO
}

//FUNZIONE DI CALLBACK
function stampa(valore) {
    console.log("Il risultato della somma è:"  + valore);
   
}

//PASSO LA FUNZIONE STAMPA COME CALLBACK
somma(9, 13, stampa)

//Una callback è semplicemente una funzione che viene passata come argomento a un'altra funzione e che
//viene eseguita in un secondo momento (dopo che l'operazione principale è terminata).

//COME SI CREA UNA CALLBACK:
//1. Dichiarare una funzione principale che accetta un'altra funzione come argomento
//2. All'interno della funzione principale, chiamare la funzione passata come argomento, eventualmente passando dei valori
//3. Passare una funzione come argomento quando si chiama la funzione principale. 
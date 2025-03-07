function createCounter() {
    let count = 0;  //variabile locale che tiene traccia del conteggio

    return {
        increment: function() {
            count += 1; //aumenta count
            return count; 
        },
        decrement: function() {
            count -= 1; //diminuisce count 
            return count; 
        }
    };
        
}

const contatore = createCounter(); //restituisce l'oggetto
console.log(contatore.increment()); //1
console.log(contatore.increment()); //2
console.log(contatore.decrement()); //1
console.log(contatore.decrement()); //0

//risultati di tutto questo...: 1, 2, 1, 0 (questo perchè fa riferimento a let count= 0). 
// in tal caso, se al posto dello 0 ci fosse stato un'altro numero, cambiavano i numeri, ma il metodo era lo stesso.
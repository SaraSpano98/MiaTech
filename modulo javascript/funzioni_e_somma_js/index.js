//creare una funzione somma(a,b) che ritorna la somma di due numeri
function somma(a, b) {
    return a + b;
}

let result = somma(3, 5);
console.log(result);  


//Funzione per verificare se un numero è primo e restituisce truè se n è primo, altrimenti false. 
function isPrimo(numero) {
    if (numero <= 1) {
        return false;  // I numeri minori o uguali a 1 non sono primi
    }
    for (let i = 2; i <= Math.sqrt(numero); i++) {
        if (numero % i === 0) {
            return false;  // Se il numero è divisibile per un altro numero, non è primo
        }
    }
    return true;  // Se non ci sono divisori, il numero è primo
}

let numeroDaVerificare = 10;  // Ad esempio, il numero 10
let risultato = isPrimo(numeroDaVerificare);

console.log(`Il numero ${numeroDaVerificare} è primo? ${risultato}`);  // Stampa: Il numero 10 è primo? false
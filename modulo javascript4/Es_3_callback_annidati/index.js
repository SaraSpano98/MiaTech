//CALLBACK ANNIDATE

//Le callback annidate si verificano quando una funzione asincrona chiama un'altra funzione asincrona, 
//che a sua volta ne chiama un'altra, e così via. 
//Questo crea una struttura "a cascata" o "piramidale" di callback, spesso chiamata callback hell.

function one(callback) {
    setTimeout(() => {
        console.log("Operazione 1 completata");
        callback();
    }, 1000);
    
}
    
    
function two(callback) {
    setTimeout(() => {
        console.log("Operazione 2 completata");
        callback();
    }, 1000);

}

one(() => {
    two(() => {
        console.log("tutte le operazioni sono state eseguite")
    });
});


//SPIEGAZIONE: 
//1. ONE(CALLBACK): dopo 1 secondo stampa (operazione 1 completata) e chiama la callback --->  (ovvero two)
//2. Stessa cosa vale per TWO (CALLBACK) chiamando la callback finale --> quando finisce stampa il messaggio finale
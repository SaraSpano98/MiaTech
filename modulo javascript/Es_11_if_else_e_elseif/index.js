let score = parseInt(prompt("Inserisci il tuo punteggio:"));

if (!isNaN(score)) { // Controllo che l'input sia un numero valido
    if (score >= 90 && score <= 100) {
        console.log("voto ottimo");
    } else if (score >= 70 && score < 90) { 
        console.log("voto buono");
    } else if (score >= 60 && score < 70) { 
        console.log("voto sufficiente");
    } else if (score < 60) { 
        console.log("voto insufficiente");
    }
} else {
    console.log("Valore non valido, inserisci un numero.");
}
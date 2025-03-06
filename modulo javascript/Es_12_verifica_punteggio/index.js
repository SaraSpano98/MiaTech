let score = parseInt(prompt("Inserisci il tuo punteggio:"));

if (!isNaN(score)) { // Controllo che l'input sia un numero valido
    switch (true) {
        case (score >= 90 && score <= 100):
            console.log("voto ottimo");
            break;
        case (score >= 70 && score < 90):
            console.log("voto buono");
            break;
        case (score >= 60 && score < 70):
            console.log("voto sufficiente");
            break;
        case (score < 60):
            console.log("voto insufficiente");
            break;
        default:
            console.log("Valore non valido");
    }
} else {
    console.log("Valore non valido, inserisci un numero.");
}
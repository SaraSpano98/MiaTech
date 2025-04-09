// Selezioniamo il form
const form = document.getElementById('myForm');

// Aggiungiamo l'evento submit al form
form.addEventListener('submit', function(event) {
    // Preveniamo l'invio del form di default
    event.preventDefault();

    // Se i campi sono vuoti, mostriamo un alert
    const nome = document.getElementById('nome').value;
    const cognome = document.getElementById('cognome').value;

    if (nome === "" || cognome === "") {
        alert("Per favore, compila entrambi i campi (Nome e Cognome).");
    } else {
        // Se i campi sono compilati, inviamo il form
        alert("Form inviato correttamente!");
        form.submit(); // Invia il form
    }
});

const p = document.getElementById("paragrafo");

// Leggo il testo
console.log(p.innerText); // Stampa: Ciao!

// Cambio il testo
p.innerText = "Questo è il mio paragrafo che è stato cambiato!";

//SPIEGAZIONE:
//innerText: solo il testo che l'utente vede sulla pagina
//E' utile se si vuole mostrare o aggiornare messaggi visibili all'utente
//Rispetta lo stile CSS che può nascondere elementi

//SINTASSI BASE: 
//let testo = elemento.innerText --> legge il testo
//elemento.innerText = "Nuovo testo" --> modifica il testo

//DIFFERENZE CON ALTRE PROPRIETA' SIMILI:
// innerText: cosa fa? Solo il testo visibile (rispetta lo stile CSS come display: none)
// textContent: cosa fa? Tutto il testo, anche quello nascosto
// innerHTML: cosa fa? Legge o scrive HTML completo, non solo testo
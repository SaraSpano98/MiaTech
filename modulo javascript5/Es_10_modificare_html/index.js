const p = document.getElementById("paragrafo");
const btn = document.getElementById("Change");

btn.addEventListener("click", function() {
    p.innerHTML = "<button>Bottone</button>";
    console.log(p.innerHTML);
})

//SPIEGAZIONE:
//In questo caso, cliccando su “Aggiungi bottone nel paragrafo”, il contenuto del paragrafo viene sovrascritto e contiene ora un bottone funzionante.

//INNER HTML: proprietà di JavaScript che ti permette di:
// LEGGERE il contenuto html interno di un elemento
// SCRIVERE O MODIFICARE il contenuto html interno di un elemento 

//In parole semplici: ti permette di inserire o cambiare del vero HTML all’interno di un elemento come un <div>, <p>, <span>, ecc.

//DIFFERENZE: 
//innerText: il contenuto è restituito solo il testo visibile, non interpreta html, non include elementi nascosti
//textContent: il contenuto restituisce tutto il testo, non interpreta html, ma include elementi nascosti
//innerHTML: il contenuto restituisce l'HTML completo, interpreta html e include elementi nascosti.

//ATTENZIONE: 
//SOVRASCRIVE TUTTO IL CONTENUTO INTERNO DELL'ELEMENTO
// SE SI USA DATI PRESI DALL'UTENTE, NON BISOGNA INSERIRE DIRETTAMENTE NELL'HTML SENZA CONTROLLI: PUò ESSERE UN RISCHIO DI XSS(CROSS SITE SCRIPTING)

//QUINDI..:
//innerHTML è super utile per: 
//AGGIUNGERE elementi dinamicamente(come bottoni, immagini, parafrafi, ecc)
//COSTRUIRE interfacce modificabili
//INSERIRE markup HTML dentro un elemento via Javascript

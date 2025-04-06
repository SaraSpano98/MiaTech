const titolo = document.querySelector('#titolo');
const paragrafo = document.querySelector('#paragrafo');
const button = document.querySelector('#ChangeTitle'); 

button.addEventListener('click', function() {
    paragrafo.textContent = "Il testo del paragrafo è stato cambiato!";
    console.log('Testo del paragrafo cambiato');
});


//SPIEGAZIONE: 
//Con querySelector, i selettori si scrivono come in CSS:
// #id per ID
// .classe per classi
// tag per elementi HTML
//Se l' id contiene spazi, come "Change Title", devi escaparlo con doppio backslash: '#Change\\ Title'

//COS'E' DOCUMENT.QUERYSELECTOR:
//Il metodo document.querySelector() è uno dei modi più moderni e flessibili per selezionare elementi HTML con JavaScript.

//E' UN METODO CHE:
// Cerca il primo elemento che corrisponde a un selettore CSS che gli passi come argomento.
// Restituisce un elemento DOM (cioè un riferimento reale all’elemento HTML nella pagina).
// Se non trova nulla, restituisce null.

//ESEMPI PRATICI: 

// SELEZIONARE PER ID: const titolo = document.querySelector("#titolo"); // come getElementById("titolo")
// SELEZIONARE PER CLASSE: const box = document.querySelector(".contenitore");
// SELEZIONARE PER TAG: const paragrafo = document.querySelector("p"); // il primo <p>
// SELETTORI PIU' SPECIFICI: const inputEmail = document.querySelector("form input[type='email']");

//DIFFERENZE CON getElementById:
//GetElementByID("id"): Seleziona SOLO elementi con ID, UN SOLO elemento, NON E' UN SELETTORE COME CSS
//querySelector("#id"): Seleziona QUALSIASI SELETTORE CSS, PRIMO TROVATO (quanti elementi), Sì, E' UN SELETTORE COME CSS.

//p.s: Se vuoi selezionare più elementi, puoi usare document.querySelectorAll() (restituisce una NodeList, tipo array)


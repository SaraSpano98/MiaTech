const titolo = document.getElementById('titolo');
const paragrafo = document.getElementById('paragrafo');
const button = document.getElementById('Change Title');

button.addEventListener('click', function() {
    paragrafo.textContent = "Il testo del paragrafo è stato cambiato!";
    console.log('Testo del paragrafo cambiato');
});

//SPIEGAZIONE:
//document.getElementById() è un metodo JavaScript che serve per selezionare un elemento HTML tramite il suo attributo id.

//COSA FA?
//RESTITUISCE il primo elemento della pagina che ha l'id indicato.
//Se non trova nulla, RESTITUISCE NULL.

//ATTENZIONE!: 
//Ogni ID nella pagina dovrebbe essere unico. Se ci sono più elementi con lo stesso id, getElementbyId PRENDERA' SOLO IL PRIMO!

//IN BREVE:
//getElementById("id"): non usa selettore css, restituisce un singolo elemento, e bisogna usarlo quando si conosce esattamente l'id
//querySelector("#id"): usa selettore css, restituisce un singolo elemento, e bisogna usarlo perchè è più flessibile per selettori CSS
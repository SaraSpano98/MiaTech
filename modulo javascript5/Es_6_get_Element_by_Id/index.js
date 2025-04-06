const titolo = document.getElementById('titolo');
const paragrafo = document.getElementById('paragrafo');
const button = document.getElementById('Change Title');

button.addEventListener('click', function() {
    paragrafo.textContent = "Il testo del paragrafo è stato cambiato!";
    console.log('Testo del paragrafo cambiato');
});

//crea una funzione che accetta un array di stringhe e restituisce la stringa più lunga

const parole = ["ciao", "elefante", "JS", "programmazione", "web"];

function TrovaparolaLunga(item) {
    let parolaLunga = item [0];
    for(let i = 0; i < item.length; i++) {
     if (item[i].length > parolaLunga.length) {
        parolaLunga = item[i];
     }
    }
    return parolaLunga;
} 

const risultato = TrovaparolaLunga(parole);

console.log(risultato);


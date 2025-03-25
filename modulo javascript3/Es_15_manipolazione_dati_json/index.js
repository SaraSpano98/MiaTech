//Dichiarare un array di oggetti rappresentante una lista di persone in formato JSON
const personeJSON = '[{"nome": "Mario", "età": 30, "città": "Roma"}, {"nome": "Lucia", "età": 25, "città": "Milano"}]';

//Convertire la stringa JSON in un array di oggetti JavaScript
const persone = JSON.parse(personeJSON);

//Aggiungere una nuova persona all'array
const nuovaPersona = { nome: "Giovanni", età: 35, città: "Torino" };
persone.push(nuovaPersona); // Aggiunge "Giovanni" all'array

// 4. Riconvertire l'array aggiornato in una stringa JSON
const personeAggiornateJSON = JSON.stringify(persone);

console.log(personeAggiornateJSON);

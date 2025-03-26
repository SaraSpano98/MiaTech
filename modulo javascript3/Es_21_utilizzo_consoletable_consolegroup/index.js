//ARRAY O OGGETTO IN FORMATO TABELLA:

const persone = [
    { nome: "Giuseppe", cognome: "Ghirardi", eta: 28},
    { nome: "Alessandra", cognome: "Violace", eta: 42},
    { nome: "Priscilla", cognome: "Nuncara", eta: 37},
];

console.table(persone);  //stampa la tabella

persone.forEach((persona, index) => {
    console.group(`Persona ${index + 1}: ${persona.nome}`);
    console.log(`nome: ${persona.nome}`);
    console.log(`eta: ${persona.eta}`);
    console.groupEnd();  //serve per finire il gruppo
});

//CONSOLE.TABLE: 
//Il metodo console.table() permette di stampare un array o un oggetto in un formato tabellare nella console. 
// Invece di visualizzare i dati come una semplice stringa, viene creata una tabella con le chiavi (proprietà) come intestazioni 
// delle colonne e i valori come righe.

//USO:
//Questo è particolarmente utile quando si ha un array di oggetti, poiché rende i dati più leggibili e ordinati. 
// Ogni oggetto dell'array diventa una riga della tabella, e ogni proprietà dell'oggetto diventa una colonna.


//CONSOLE.GROUP:
//Il metodo console.group() permette di raggruppare i messaggi della console in modo che siano più leggibili. 
// Quando si utilizza console.group(), tutti i messaggi successivi vengono annidati sotto il gruppo, 
// finché non viene chiamato console.groupEnd(), che chiude il gruppo.

//USO:
//Questo è utile quando si vogliono organizzare i messaggi in categorie o gruppi, rendendo la console più ordinata e facile da leggere.

localStorage.setItem('username', "Mariella")
localStorage.setItem('password', 2087) //(password) è la CHIAVE, (2087) è il VALORE (SI CONVERTIRà IN STRINGA, PERCHè LOCALSTORAGE SALVA SOLO IN STRINGHE)

let username = localStorage.getItem('username') //Recupera il valore associato alla chiave 'username' e lo assegna alla variabile username.

console.log(username)  //stampa in console il valore

//Elimina la chiave 'username' dal local.Storage
localStorage.removeItem('username')


//SPIEGAZIONE:

//METODI:
// SetItem(key, vlaue) = SALVA UN VALORE
// getItem(key) = RECUPERA UN VALORE
// removeItem(key) = ELIMINA UNA CHIAVE
// clear() = ELIMINA TUTTO DAL LOCALSTORAGE
// key(index) = RITORNA IL NOME DELLA CHIAVE IN UNA CERTA POSIZIONE(UTILE PER CICLARE TUTTO IL LOCALSTORAGE)
// lenght = PROPRIETA' CHE TI DICE QUANTI ELEMENTI CI SONO NEL LOCALSTORAGE

//SINTASSI BASE PER CICLARE TUTTO IL LOCALSTORAGE:
/*for (let i = 0; i < localStorage.length; i++) {
    const chiave = localStorage.key(i);
    const valore = localStorage.getItem(chiave);
    console.log(`${chiave}: ${valore}`);
}*/

// SALVARE OGGETTI E ARRAY:
/*// Salva un oggetto
const user = { nome: "Giulia", eta: 28 };
localStorage.setItem("utente", JSON.stringify(user));

// Recupera l’oggetto
const dati = JSON.parse(localStorage.getItem("utente"));
console.log(dati.nome); // Giulia*/

//Ricorda che localStorage salva solo stringhe, quindi se vuoi salvare oggetti o array devi usare JSON.stringify() e JSON.parse():


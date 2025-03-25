//I template literals sono racchiusi da backticks (`), anziché dalle virgolette tradizionali (" o '). 
// All'interno del template literal, puoi inserire variabili ed espressioni utilizzando la notazione $

const nome = "Giovanna";
const cognome = "di Dio";

//Utilizzo del template literals

const  presentazione = `Ciao, sono ${nome} ${cognome}`;

console.log(presentazione);
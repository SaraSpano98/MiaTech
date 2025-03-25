//I template literals sono racchiusi da backticks (`), anziché dalle virgolette tradizionali (" o '). 
// All'interno del template literal, puoi inserire variabili ed espressioni utilizzando la notazione $

//Questa è una stringa multilinea con la parte del template literals.
//Per creare una stringa multilinea in JavaScript usando i template literals, basta racchiudere la stringa tra i caratteri di backtick (`) 
//e scrivere direttamente su più righe. 

const nome = "Giovanna";
const cognome = "di Dio";
const eta = "30 anni";



const  presentazione = `Ciao, sono ${nome} ${cognome},
 e ho ${eta},
 Te invece come ti chiami?
 E quanti anni hai?`

console.log(presentazione);
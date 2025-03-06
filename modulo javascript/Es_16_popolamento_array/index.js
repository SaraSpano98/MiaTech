const parole =  []; //array vuoto
for (let i = 0; i < 5; i++){
    let parola = prompt ('Inserisci la parola  ${i +1}:');
    parole.push(parola); //aggiunge la parola all'array
}

console.log("Parole con un numero dispari di lettere");
for(let i = 0; i < parole.length; i++){
    if (parole [i].length % 2 !==0) {  //controlla se la lunghezza è dispari
        console.log(parole [i]);
    }
}
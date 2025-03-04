let outside = 56;

{
    let inside = 90;
    console.log(outside);
    console.log(inside); 
}

console.log(outside);
console.log(inside);

//Nel terminale: ci stampa per prima la variabile esterna al blocco, poi le due variabili all'interno del blocco e si ferma lì. 
// La variabile let inside fuori dal blocco, non verrà stampata da console.log perchè non è presente all'esterno del blocco. 
//Se fosse stata messa, allora in questo caso, sarebbe stata stampata anche lei!
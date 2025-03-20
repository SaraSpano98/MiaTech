const numeri = [10, 20, 30, 40, 50];

//utilizzo dello spread operator
const copiaNumeri = [...numeri]; 

//modifica l'array originale
numeri.push(6); 

console.log(numeri);
console.log(copiaNumeri);
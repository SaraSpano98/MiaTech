const num = ["1", "2", "3"];
let numLen = num.length;
let sum = 0; 

for(let i = 0; i < numLen; i++) {
    sum += parseInt(num [i]); 
}

console.log("La somma è:", sum); 

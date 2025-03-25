const numbers = [12, 24, 36, 48, 60, 72, 84];

const [primo, secondo, ... resto] = numbers;

console.log("Primo elemento", primo);
console.log("Secondo elemento", secondo);
console.log("Resto dell'array", resto);


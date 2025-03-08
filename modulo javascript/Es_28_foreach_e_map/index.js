const numbers = [1, 2, 3, 4, 5];
numbers.forEach(myFunction);

function myFunction(num) {
    return num * 2;
};

console.log(numbers);

const squaredNumbers = numbers.map(myFunction);
console.log(squaredNumbers); 
function outerFunction(x) {
    function innerFunction(y) {
        return x +y; 
    }
    return innerFunction;
}

const sommaCon10 = outerFunction(10); //restituisce innerFunction con x= 5
console.log(sommaCon10(4)); //10+4 = 14
console.log(sommaCon10(6)); //10+6 = 16
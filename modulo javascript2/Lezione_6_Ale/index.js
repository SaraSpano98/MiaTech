class Operations {
    #result;
    constructor (initialNumber = 0) {
        this.#result = initialNumber;
    }

    sum = (number) => {
        this.#result += number;
        return this;
    }

    substract = (number) => {
        this.#result -= number;
        return this;
    }

    multiply = (number) => {
        this.#result *= number;
        return this;
    }

    divide = (number) => {
        this.#result /= number;
        return this;
    }
    
    getResult = () => {
        return this.#result; 
    }
}

class Calculator extends Operations {
    constructor (initialNumber = 0) { 
        super(initialNumber)     
    }
}

const calculator = new Calculator(0);
calculator.sum(3).sum(7).substract(2).multiply(5).divide(4);

const result = calculator.getResult();
console.log(result);


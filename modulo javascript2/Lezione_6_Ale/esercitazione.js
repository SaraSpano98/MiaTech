//classe che ci permette di calcolare l'area di una figura geometrica x
//figure geometriche 3: triangolo, quadrato, rettangolo  x
//3 parametri al costruttore: figura geometrica, base, altezza obbligatorio 1 solo: figura geometrica. gli altri due li possiamo mettere dove vogliamo. 
//metodo chiamato: Area, deve RESTITUIRE IL VALORE DELL'AREA CORRETTA IN BASE ALLA FIGURA CHE ABBIAMO SCELTO.  x

class Shape {
    constructor(figure = "TRIANGLE", base = 0, height = 0) {
        this.result = figure;
        this.result = base;
        this.result = height;
    }

    area = () => {
        if (this.figure == "TRIANGLE") {
            // return area triangolo
            return this.base * this.height / 2;
        }
        // else if per SQUARE e RECTANGLE
        else if (this.figure == "SQUARE" || this.figure == "RECTANGLE") {
            return this.base * this.height; 
        }
    }
}

const shape = new Shape("quadrato", 4 ,4);

console.log(shape.area());

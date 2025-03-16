class Automobile {
    constructor(marca, modello, anno) {
    this.marca = marca; 
    this.modello = modello;
    this.anno = anno; 
    }
    descrizione() {
        return `Automobile: ${this.marca} ${this.modello}, Anno: ${this.anno}`; 
    }
}
const auto = new Automobile("Fiat", 2016, "Grande Punto");
console.log(auto.descrizione());
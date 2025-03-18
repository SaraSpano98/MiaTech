class Automobile {
    constructor(marca, modello, anno) {
    this.marca = marca; 
    this.modello = modello;
    this.anno = anno; 
    this.chilometraggio = chilometraggio;
    }

    descrizione() {
        return `Automobile: ${this.marca} ${this.modello}, Anno: ${this.anno}`; 
    }

    aggiungiChilometri(km) {
        if (km > 0) {
            this.chilometraggio += km;
        } else {
            console.log("Il valore dei chilometri deve essere positivo.");
        }
    }

    mostraChilometraggio() {
        return `Chilometraggio attuale: ${this.chilometraggio} km`;
    }
}

const auto = new Automobile("Fiat", 2016, "Grande Punto");
auto.aggiungiChilometri(150);
console.log(auto.descrizione());
console.log(mostraChilometraggio());
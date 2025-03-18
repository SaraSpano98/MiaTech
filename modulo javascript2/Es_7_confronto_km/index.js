class Automobile {
    constructor(marca, modello, anno, chilometraggio = 0) {
        this.marca = marca;
        this.modello = modello;
        this.anno = anno;
        this.chilometraggio = chilometraggio;
    }

    // Metodo pubblico per ottenere la descrizione dell'auto
    descrizione() {
        return `Automobile: ${this.marca} ${this.modello}, Anno: ${this.anno}, Chilometraggio: ${this.chilometraggio} km`;
    }

    // Metodo per aggiungere chilometri
    aggiungiChilometri(km) {
        if (km > 0) {
            this.chilometraggio += km;
        } else {
            console.log("Il valore dei chilometri deve essere positivo.");
        }
    }

    // Metodo statico per confrontare il chilometraggio di due automobili
    static confrontaChilometraggio(auto1, auto2) {
        if (!(auto1 instanceof Automobile) || !(auto2 instanceof Automobile)) {
            return "Entrambi gli oggetti devono essere istanze della classe Automobile.";
        }

        if (auto1.chilometraggio > auto2.chilometraggio) {
            return `${auto1.marca} ${auto1.modello} ha un chilometraggio maggiore (${auto1.chilometraggio} km) rispetto a ${auto2.marca} ${auto2.modello} (${auto2.chilometraggio} km).`;
        } else if (auto1.chilometraggio < auto2.chilometraggio) {
            return `${auto2.marca} ${auto2.modello} ha un chilometraggio maggiore (${auto2.chilometraggio} km) rispetto a ${auto1.marca} ${auto1.modello} (${auto1.chilometraggio} km).`;
        } else {
            return `${auto1.marca} ${auto1.modello} e ${auto2.marca} ${auto2.modello} hanno lo stesso chilometraggio (${auto1.chilometraggio} km).`;
        }
    }
}

// Creazione di due istanze di Automobile
const auto1 = new Automobile("Fiat", "Panda", 2018, 50000);
const auto2 = new Automobile("Ford", "Focus", 2020, 75000);

// Confronto del chilometraggio usando il metodo statico
console.log(Automobile.confrontaChilometraggio(auto1, auto2));

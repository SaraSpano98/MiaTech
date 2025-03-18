class Automobile {
    constructor(marca, modello, anno, chilometraggio = 0) {
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

// Aggiunta del metodo saluta tramite la prototype chain
Automobile.prototype.saluta = function() {       
    return `Ciao! Sono una ${this.marca} ${this.modello}.`;
};

class Elettrica extends Automobile {
    constructor(marca, modello, anno, chilometraggio= 0, batteria, autonomia) {
        super(marca, modello, anno, chilometraggio);
        this.batteria = batteria;
        this.autonomia = autonomia;
    }

    descrizione() {
        return `Automobile Elettrica: ${this.marca} ${this.modello}, Anno: ${this.anno}, Autonomia: ${this.autonomia} km`;
    }

    mostraBatteria() {
        return `Livello batteria: ${this.batteria} %`;
    }

    mostraAutonomia() {
        return `Autonomia residua: ${this.residua} km`;
    }

    ricarica(km) {
        if (km > 0) {
            this.autonomia += km;
        } else {
            console.log("Il valore dell'autonomia da ricaricare deve essere positivo.");
        }
    }
}

const auto = new Automobile("Fiat", 2016, "Grande Punto");
auto.aggiungiChilometri(150);
console.log(auto.descrizione());
console.log(auto.mostraChilometraggio());
console.log(auto.saluta());

const autoElettrica = new Elettrica("Fiat", 2016, "Grande Punto", 5000, 85, 400);
console.log(autoElettrica.descrizione());
console.log(autoElettrica.mostraChilometraggio());
console.log(autoElettrica.mostraBatteria());
console.log(autoElettrica.mostraAutonomia());
console.log(autoElettrica.saluta()); // Verifica che anche la sottoclasse possa accedere al metodo
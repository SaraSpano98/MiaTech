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

    // Metodo privato per calcolare l'età dell'automobile
    #calcolaEtà() {
        const annoCorrente = new Date().getFullYear();
        return annoCorrente - this.anno;
    }

    // Metodo pubblico per mostrare l'età dell'automobile
    mostraEtà() {
        const età = this.#calcolaEtà(); // Usa il metodo privato per calcolare l'età
        console.log(`L'età dell'automobile ${this.marca} è: ${età} anni.`);
    }
}

// Aggiunta del metodo saluta tramite la prototype chain
Automobile.prototype.saluta = function() {       
    return `Ciao! Sono una ${this.marca} ${this.modello}.`;
}

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
        return `Autonomia residua: ${this.autonomia} km`;
    }

    ricarica(km) {
        if (km > 0) {
            this.autonomia += km;
        } else {
            console.log("Il valore dell'autonomia da ricaricare deve essere positivo.");
        }
    }
}

// Creazione di un oggetto della classe Automobile
const auto = new Automobile("Fiat", "Grande Punto", 2016);
auto.aggiungiChilometri(150);
console.log(auto.descrizione());
console.log(auto.mostraChilometraggio());
console.log(auto.saluta());
auto.mostraEtà(); // Mostra l'età dell'automobile

// Creazione di un oggetto della classe Elettrica
const autoElettrica = new Elettrica("Fiat", "Grande Punto", 2016, 5000, 85, 400);
console.log(autoElettrica.descrizione());
console.log(autoElettrica.mostraChilometraggio());
console.log(autoElettrica.mostraBatteria());
console.log(autoElettrica.mostraAutonomia());
console.log(autoElettrica.saluta()); // Verifica che anche la sottoclasse possa accedere al metodo
autoElettrica.mostraEtà(); // Mostra l'età dell'automobile elettrica
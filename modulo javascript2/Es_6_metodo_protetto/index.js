class Automobile {
    constructor(marca, modello, anno, chilometraggio = 0) {
        this.marca = marca;
        this.modello = modello;
        this.anno = anno;
        this.chilometraggio = chilometraggio;
    }

    // Metodo pubblico che restituisce una descrizione dell'auto
    descrizione() {
        return `Automobile: ${this.marca} ${this.modello}, Anno: ${this.anno}`;
    }

    // Metodo pubblico che aggiunge chilometri all'automobile
    aggiungiChilometri(km) {
        if (km > 0) {
            this.chilometraggio += km;
            // Chiamata al metodo protetto per controllare se il chilometraggio supera il limite
            this._controllaChilometri();
        } else {
            console.log("Il valore dei chilometri deve essere positivo.");
        }
    }

    // Metodo protetto per controllare se il chilometraggio supera 100.000 km
    _controllaChilometri() {
        const limite = 100000;
        if (this.chilometraggio > limite) {
            console.log(`Avviso: il chilometraggio di ${this.marca} ${this.modello} ha superato il limite di ${limite} km!`);
        }
    }
}

class Elettrica extends Automobile {
    constructor(marca, modello, anno, chilometraggio = 0, batteria, autonomia) {
        super(marca, modello, anno, chilometraggio);
        this.batteria = batteria;
        this.autonomia = autonomia;
    }

    // Sovrascrittura della descrizione per includere i dettagli dell'auto elettrica
    descrizione() {
        return `Automobile Elettrica: ${this.marca} ${this.modello}, Anno: ${this.anno}, Autonomia: ${this.autonomia} km`;
    }

    // Metodo specifico per ricaricare l'auto elettrica
    ricarica(km) {
        if (km > 0) {
            this.autonomia += km;
        } else {
            console.log("Il valore dell'autonomia da ricaricare deve essere positivo.");
        }
    }

    // Chiamata al metodo protetto della classe padre per controllare i chilometri
    aggiungiChilometri(km) {
        super.aggiungiChilometri(km);  // Chiamata al metodo della classe base
    }
}

// Creazione di un oggetto della classe Elettrica
const autoElettrica = new Elettrica("Fiat", "500E", 2020, 95000, 85, 400);

// Aggiunta di chilometri
autoElettrica.aggiungiChilometri(6000);  
autoElettrica.aggiungiChilometri(2000);  
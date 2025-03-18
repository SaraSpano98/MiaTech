class Automobile {
    #contatoreChiamate = 0; // Proprietà privata per contare le chiamate
    #chilometraggio = 0; // Proprietà privata per proteggere il chilometraggio

    constructor(marca, modello, anno, chilometraggio = 0) {
        this.marca = marca;
        this.modello = modello;
        this.anno = anno;
        this.#chilometraggio = chilometraggio;
    }

    // Metodo privato per incrementare il contatore delle chiamate
    #incrementaContatore() {
        this.#contatoreChiamate++;
    }

    // Metodo pubblico per aggiungere chilometri e incrementare il contatore
    aggiungiChilometri(km) {
        if (km > 0) {
            this.#chilometraggio += km;
            this.#incrementaContatore();
        } else {
            console.log("Il valore dei chilometri deve essere positivo.");
        }
    }

    // Getter per ottenere il chilometraggio attuale
    get chilometraggio() {
        return this.#chilometraggio;
    }

    // Setter per aggiornare il chilometraggio solo se il nuovo valore è maggiore o uguale a quello attuale
    set chilometraggio(nuovoChilometraggio) {
        if (nuovoChilometraggio >= this.#chilometraggio) {
            this.#chilometraggio = nuovoChilometraggio;
        } else {
            console.log("Errore: il chilometraggio non può diminuire!");
        }
    }

    // Metodo pubblico per mostrare il numero di chiamate al metodo aggiungiChilometri()
    mostraContatoreChiamate() {
        return `Il metodo 'aggiungiChilometri' è stato chiamato ${this.#contatoreChiamate} volte.`;
    }

    // Metodo pubblico per descrivere l'automobile
    descrizione() {
        return `Automobile: ${this.marca} ${this.modello}, Anno: ${this.anno}, Chilometraggio: ${this.#chilometraggio} km`;
    }

    // Metodo statico per verificare se un oggetto è un'istanza di una classe
    static verificaIstanza(obj, classe) {
        if (obj instanceof classe) {
            return `L'oggetto è un'istanza della classe ${classe.name}.`;
        } else {
            return `L'oggetto NON è un'istanza della classe ${classe.name}.`;
        }
    }
}

// Nuova classe Camion che estende Automobile
class Camion extends Automobile {
    constructor(marca, modello, anno, chilometraggio = 0, caricoMassimo = 0) {
        super(marca, modello, anno, chilometraggio); // Richiama il costruttore della classe padre
        this.caricoMassimo = caricoMassimo; // Carico massimo in kg
        this.caricoAttuale = 0; // Carico attuale del camion
    }

    // Metodo per descrivere il camion (override del metodo descrizione della classe Automobile)
    descrizione() {
        return `Camion: ${this.marca} ${this.modello}, Anno: ${this.anno}, Chilometraggio: ${this.chilometraggio} km, 
        Carico Attuale: ${this.caricoAttuale} kg, Carico Massimo: ${this.caricoMassimo} kg`;
    }

    // Metodo per caricare il camion senza superare il carico massimo
    carica(kg) {
        if (kg > 0 && (this.caricoAttuale + kg) <= this.caricoMassimo) {
            this.caricoAttuale += kg;
            return `Carico di ${kg} kg aggiunto con successo. Carico attuale: ${this.caricoAttuale} kg.`;
        } else {
            return `Errore: il carico totale non può superare ${this.caricoMassimo} kg.`;
        }
    }
}

// Creazione di un'istanza della classe Automobile
const auto1 = new Automobile("Toyota", "Yaris", 2015, 120000);

// Creazione di un'istanza della classe Camion
const camion1 = new Camion("Volvo", "FH16", 2019, 300000, 20000);

// Utilizzo dell'operatore instanceof
console.log(auto1 instanceof Automobile); // true
console.log(camion1 instanceof Camion); // true
console.log(camion1 instanceof Automobile); // true (perché Camion eredita da Automobile)
console.log(auto1 instanceof Camion); // false

// Utilizzo del metodo statico verificaIstanza()
console.log(Automobile.verificaIstanza(auto1, Automobile)); // "L'oggetto è un'istanza della classe Automobile."
console.log(Automobile.verificaIstanza(camion1, Camion)); // "L'oggetto è un'istanza della classe Camion."
console.log(Automobile.verificaIstanza(camion1, Automobile)); // "L'oggetto è un'istanza della classe Automobile."
console.log(Automobile.verificaIstanza(auto1, Camion)); // "L'oggetto NON è un'istanza della classe Camion."

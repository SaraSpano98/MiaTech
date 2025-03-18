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
            this.#incrementaContatore(); // Incrementa il contatore ogni volta che viene chiamato
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

// Creazione di un'istanza di Camion
const camion1 = new Camion("Scania", "R500", 2020, 200000, 15000);

console.log(camion1.descrizione()); // Mostra le informazioni del camion
console.log(camion1.carica(12000)); // Carico accettato
console.log(camion1.carica(4000));  // Carico troppo alto
console.log(camion1.descrizione()); // Mostra i dati aggiornati del camion

// Verifica dell'ereditarietà
camion1.aggiungiChilometri(5000);
console.log(camion1.descrizione()); // Chilometraggio aggiornato
console.log(camion1.mostraContatoreChiamate()); // Mostra quante volte il chilometraggio è stato aggiornato

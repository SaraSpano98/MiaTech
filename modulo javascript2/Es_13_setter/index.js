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

// Creazione di un'istanza di Automobile
const auto1 = new Automobile("Fiat", "Panda", 2018, 50000);

auto1.aggiungiChilometri(1000);
auto1.aggiungiChilometri(500);
auto1.aggiungiChilometri(2000);

console.log(auto1.descrizione());
console.log(auto1.mostraContatoreChiamate());

// Test del getter
console.log(`Chilometraggio attuale: ${auto1.chilometraggio} km`);

// Test del setter con un valore valido
auto1.chilometraggio = 55000;
console.log(`Nuovo chilometraggio: ${auto1.chilometraggio} km`);

// Test del setter con un valore non valido (più basso del valore attuale)
auto1.chilometraggio = 40000; // Questo dovrebbe mostrare un errore

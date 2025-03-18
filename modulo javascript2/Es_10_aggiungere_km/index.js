class Automobile {
    #contatoreChiamate = 0; // Proprietà privata per contare le chiamate

    constructor(marca, modello, anno, chilometraggio = 0) {
        this.marca = marca;
        this.modello = modello;
        this.anno = anno;
        this.chilometraggio = chilometraggio;
    }

    // Metodo privato per incrementare il contatore delle chiamate
    #incrementaContatore() {
        this.#contatoreChiamate++;
    }

    // Metodo pubblico per aggiungere chilometri e incrementare il contatore
    aggiungiChilometri(km) {
        if (km > 0) {
            this.chilometraggio += km;
            this.#incrementaContatore(); // Chiamata al metodo privato per incrementare il contatore
        } else {
            console.log("Il valore dei chilometri deve essere positivo.");
        }
    }

    // Metodo per ottenere il numero di chiamate al metodo aggiungiChilometri()
    getNumeroChiamate() {
        return `Il metodo 'aggiungiChilometri' è stato chiamato ${this.#contatoreChiamate} volte.`;
    }

    // Metodo pubblico per descrivere l'automobile
    descrizione() {
        return `Automobile: ${this.marca} ${this.modello}, Anno: ${this.anno}, Chilometraggio: ${this.chilometraggio} km`;
    }
}

// Creazione di un'istanza di Automobile
const auto1 = new Automobile("Fiat", "Panda", 2018, 50000);

auto1.aggiungiChilometri(1000);
auto1.aggiungiChilometri(500);
auto1.aggiungiChilometri(2000);

console.log(auto1.descrizione());
console.log(auto1.getNumeroChiamate()); // Mostra il numero di volte che il metodo è stato chiamato

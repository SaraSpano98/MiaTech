function primaPromessa() {
    return new Promise(resolve => {
        setTimeout(() => resolve("Promessa risolta dopo 2 secondi"), 2000);
    });
}

function secondaPromessa() {
    return new Promise(resolve => {
        setTimeout(() => resolve("Promessa risolta dopo 3 secondi"), 3000);
    });
}

async function serieDiPromesse() {
    try {
        const risultato1 = await primaPromessa();
        console.log(risultato1);

        const risultato2 = await secondaPromessa();
        console.log(risultato2);
    } catch (errore) {
        console.log("Errore trovato:", errore);
    }
}

serieDiPromesse();
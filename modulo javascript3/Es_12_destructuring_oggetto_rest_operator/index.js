const topTenVincitori = {
    primo: "Danilo",
    secondo: "Alessia",
    terzo: "Clara",
    quarto: "Gioanna",
    quinto: "Lorenzo",
    sesto: "Paola",
    settimo: "Riccardo",
    ottavo: "Eleonora",
    nono: "Roberto",
    decimo: "Luca",
};

const {primo, secondo, terzo, ... resto} = topTenVincitori;

console.log("Primo vincitore:", primo);
console.log("Secondo vincitore:", secondo);
console.log("Terzo:", terzo);
console.log("Il resto della Top Ten:", resto);
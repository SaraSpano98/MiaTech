const persona = {
    nome: "Mario",
    eta: 31,
    //manca la proprità cognome
    //manca la proprietà città
};

const { nome, cognome = "Non specificato", eta, città = "Sconosciuta" } = persona;

console.log(nome, cognome, eta, città);
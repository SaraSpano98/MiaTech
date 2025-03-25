const operatore = {
    nome: "Anna",
    eta: 28,
    job: "Segretaria",
    città: "Roma",

}

const copiaOperatore = {
    ...operatore, cognome: "Fioretto",
}

console.log(operatore);
console.log(copiaOperatore);
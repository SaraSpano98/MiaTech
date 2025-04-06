//SALVARE I DATI
function salvareDati() {   //creata una funzione che permette di salvare, recuperare e rimuovere i dati 
    localStorage.setItem('username', "Mario")
    localStorage.setItem('password', 4502)
    localStorage.setItem('età', 45)
    console.log("Valori salvati nel localStorage:")
    console.log('username:', localStorage.getItem('username'));
    console.log('password:', localStorage.getItem('password'));
    console.log('età:', localStorage.getItem('età'));
    
    sessionStorage.setItem('username', "Mariella")
    sessionStorage.setItem('password', 2087)
    sessionStorage.setItem('età', 26)
    console.log("Valori salvait nella sessionStorage:")
    console.log('username:', sessionStorage.getItem('username'));
    console.log('password:', sessionStorage.getItem('password'));
    console.log('età:', sessionStorage.getItem('età'));
}


//RECUPERARE I DATI
function recuperareDati() {
    console.log("Recupero dati:")
    
    console.log('localStorage età:',localStorage.setItem('età'));

    console.log('sessionStorage età:', sessionStorage.setItem('età'));
}



//RIMUOVERE I DATI
function rimuovereDati() {
    localStorage.removeItem('età');
    console.log("Dati rimosssi dal localStorage!")

    sessionStorage.removeItem('età');
    console.log("Dati rimossi dalla sessionStorage!")
}
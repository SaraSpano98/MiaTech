const db = {
    users: [
        { id: 1, role: "admin", email: "ale@gmail.com", password: "1234", first_name: "Alessandro", birth_date: "10-6-1991" },
        { id: 2, role: "guest", email: "manuel@gmail.com", password: "2345", first_name: "Manuel", birth_date: "3-2-1992" },
        { id: 3, role: "admin", email: "alessia@gmail.com", password: "3456", first_name: "Alessia", birth_date: "28-3-1993" },
        { id: 4, role: "guest", email: "silvia@gmail.com", password: "4567", first_name: "Silvia", birth_date: "11-55-2002" },
        { id: 5, role: "guest", email: "sara@gmail.com", password: "5678", first_name: "Sara", birth_date: "19-3-1998" },
    ]
}

// 1. Scriviamo una funzione che chiede in un prompt l'id dell'utente e lo restituisce cercandolo da db

//1.1.Scriviamo un prompt per ottenere e chiedere l'id all'utente
//1.2.Converto l'id di un prompt in un numero
//1.3.Scrivo la funzione: deve cercare all'interno dell'array l'id per ottenere l'oggetto dell'utente corrispondente
//1.4.Restituisco l'utente trovato (la funzione)
//1.5.Vogliamo una callback? Sì: sia per l'errore e per il Success

const getOneUserById = (onSuccess, onError) => {
    if (typeof onSuccess !== "function") {
        throw new Error("onSuccess must be a function")
    }

    if (typeof onError !== "function") {
        throw new Error("onError must be a function")
    }

    const id = prompt("Inserisci l'id del tuo utente");

    const user_id = Number(id);

    const user = db.users.find((item) => {
        return item.id == user_id; 
    });

    if (user == null) {
        return onError(new Error("User not found"))
    }

    return onSuccess(user)
}


/*getOneUserById(
    (user) => {
        console.log(user)
    },
    (error) => {
        console.log(error)
    }
)*/

// 2. Scriviamo una funzione che restituisce l'array degli utenti in ordine crescente per first_name

//2.1. Scriviamo una funzione sortUsersByFirstNameASC
//2.2. Usiamo sort sull'array Users per riordinare e salviamo i dati riordinati all'interno di una costante
//2.3. Facciamo la return della costante dei dati riordinati
//2.4.Vogliamo le callback? sì! sia x errore e per il success
//2.5.Ci servono altri dati? no. 

const sortUsersByFirstNameASC = (onSuccess, onError) => {
    if (typeof onSuccess !== "function") {
        throw new Error("onSuccess must be a fuction")
    }
    if (typeof onError !== "function") {
        throw new Error("onError must be a fuction")
    }
    const sortedUsers = db.users.sort((a,b) => {
        return a.first_name.localeCompare(b.first_name)
    })

    return onSuccess(sortedUsers);
}

/*sortUsersByFirstNameASC(
    (sortedUsers) => {
        console.log(sortedUsers);
    },
    (error) => {
        console.log(error);
    }
)*/


// 3. Scriviamo una funzione che restituisce l'array degli utenti con in più la chiave age calcolata a partire dalla data di nascita

//3.1. Scrivere una funzione injectUsersAge
//3.2. Abbiamo tutti i dati esterni? no! ci Servirà solo Users. 
//3.3. Scriviamo la manipolazione degli elementi usando il metodo map
//3.4. Convertiamo la data dal formato italiano a quello inglese
//3.5. Otteniamo l'anno della data attuale
//3.6. Otteniamo l'anno di nascita
//3.7. Operazione: calcoliamo age sottranedo l'anno corrrente all'anno di nascita
//3.8. Aggiungiamo age al nostro item
//3.9. Vogliamo inserire le callback? sì! onSuccess ed onError

const injectUsersAge = (onSuccess, onError) => {
    if(typeof onSuccess !== "function") {
        throw new Error("onSuccess must be a function")
    }
    if(typeof onError !== "function") {
        throw new Error("onError must be a function")
    }

    const injectedUsers = db.users.map((item) => {
        const formattedDate = item.birth_date.split("-").reverse().join("-");
        const yearNow = new Date().getFullYear();
        const yearBirth = new Date(formattedDate).getFullYear();
        const age = yearNow - yearBirth;
        return {
            ...item,
            age   
        }
    })
    return onSuccess(injectedUsers); 
}

injectUsersAge(
    (injectedUsers) => {
        console.log(injectedUsers);
    },
    (error) => {
        console.log(error);
    }
)


/*console.log(new Date("1991-6-10").getFullYear());
console.log(new Date().getFullYear()); 
console.log("11-5-2002".split("-").reverse().join("-"));*/






// 4. Scriviamo una funzione che restituisce un array che contiene solo gli utenti che corrispondono al role name chiesto tramite prompt
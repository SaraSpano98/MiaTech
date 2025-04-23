import { useEffect, useState } from "react"

const App = () => {
    // State per il salvataggio dei dati
    const [data, setData] = useState(null);
    // State che traccia lo stato di loading
    const [loading, setLoading] = useState(false);
    // State che traccia eventuali errori, sia di sintassi che si risposta del server
    const [error, setError] = useState(false); 

    // Funzione asincrona per il fetch dei dati
    const fetchData = async () => {
        // Se era presente un errore lo andiamo ad azzerare
        if(error) setError(false);
        // Se lo stato di caricamente era settato a false, allora lo avviamo
        // Questo serve a evitare update inutili
        if(!loading) setLoading(true);

        try {
            const response = await fetch("https://jsonplaceholder.typicode.com/posts");

            // Se la risposta del serve è ok salviamo i dati nello state data
            if(response.ok) {
                setData(await response.json());
            } else{
                // Altrimenti mandiamo un errore con un messaggio per l'utente
                throw new Error("Error during data fetching, try again later")
            }
        } catch (error) {
            // Se è presente un errore andiamo a salvarlo sullo state error per poi renderizzarlo nella UI
            setError(error.message);
        } finally {
            // Alla fine di tutte le operazioni, a prescindere dalla presenza o meno di errori
            // andiamo a settare lo stato di loading come false
            setLoading(false);
        }
    } 

    // Questo useEffect ci permette di eseguire la funzione
    // al mount del componente. Sarà lì che andremo ad eseguire il fetch dei dati
    useEffect(() => {
        fetchData();
    }, [])

    // Se lo stato di loading è true, vuol dire che le operazioni sono in corso, quindi
    // mettiamo in rendering un testo che lo specifica
    if(loading) {
        return(
            <p>loading...</p>
        )
    } 

    // Se è presente un errore, andiamo a renderizzare il messaggio di errore
    if(error) {
        return(
            <p>{error}</p>
        )
    }

    // Se abbiamo i dati li mettiamo in rendering con map. Teniamo conto della possibilità in cui
    // l'array sia vuoto e in caso renderizziamo un messaggio che lo specifica
    // All'interno del map andiamo a settare per ogni tr una key univoca che permetterà
    // a react di ottimizzare il rendering e di evitare di dover renderizzare tutto da capo
    return(
        <>
            <table>
                <thead>
                    <tr>
                        <th>id</th>
                        <th>User id</th>
                        <th>Title</th>
                        <th>Body</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        data === null || data.length === 0 ? (
                            <tr>
                                <td colSpan={4}>
                                    empty data 
                                </td>
                            </tr>
                        ) : (
                            data.map((item) => (
                                <tr key={item.id}>
                                    <td>{item.id}</td>
                                    <td>{item.userId}</td>
                                    <td>{item.title}</td>
                                    <td>{item.body}</td>
                                </tr>
                            ))
                        )
                    }
                </tbody>
            </table>
        </>
    )
}

export default App;

//chiamata API vuol dire che il client chiama il server per ottenere dei dati o per effettuare un operazione su server e/o database 

import { useEffect, useState } from "react"

const App = () => {
  const [counter, setCounter] = useState(0);

  //Funzione eseguita al mount del componente (MOUNT è il primo rendering del componente)
  useEffect(() => { 
    console.log("mount del componente")
  }, []);

  //Funzione eseguita in risposta a qualsiasi aggiornamento del componente
  useEffect(() => {
    console.log("update del componente")
  });

  //Funzione eseguita in risposta all'aggiornamento di uno o più State specifici(counter)
  useEffect(() => {   
    console.log("update del counter")
  }, [counter]);

  return(
    <button onClick={() => setCounter(counter + 1)}>Counter: {counter}</button>
  )
}

export default App

//Ordine di scrittura delle varie parti di un componente:
//1. Variabili di State ed Hook
//2. Funzioni
//3. Use Effect
//4. Return
//SEMPRE COSì VA SCRITTO!
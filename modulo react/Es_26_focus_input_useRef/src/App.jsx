import React from 'react';
import { useRef, useEffect } from 'react';
{/*useEffect(() => { ... }, []) si assicura che il focus venga applicato solo una volta al montaggio del componente*/}

function RicercaInput() {
  {/* useRef(null) crea un riferimento all’elemento DOM dell’input.*/}
  const inputRef = useRef(null);  {/*1. CREA UN RIFERIMENTO ALL'INPUT*/}

  useEffect(() => {
    {/*Imposta il focus sull'input al montaggio del componente*/}

    {/*2. QUANDO IL COMPONENTE VIENE MONTATO, IMPOSTA IL FOCUS SULL'INPUT*/}
    inputRef.current?.focus();
    {/*input.Ref.current?.focus() imposta il focus sull'input se il riferimento è valido*/} 
  }, []);

  return (
    <div>
      {/*3. COLLEGA IL REF ALL'INPUT*/}
      <label htmlFor="search">Cerca:</label>
      <input
        type="text"
        id="search"
        ref={inputRef}
        placeholder="Scrivi qualcosa..."
      />
    </div>
  );
}

export default RicercaInput;

{/*OBIETTIVO:
L'obiettivo è migliorare l'esperienza utente facendo in modo che, appena si apre la pagina o compare il componente, 
l’utente possa iniziare subito a scrivere nel campo di ricerca senza dover cliccare con il mouse.*/}


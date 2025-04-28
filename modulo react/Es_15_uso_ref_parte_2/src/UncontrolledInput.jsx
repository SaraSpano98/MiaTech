import { useRef } from 'react';

function UncontrolledInput() {
  const inputRef = useRef(null); // Creiamo il ref per l'input

  const handleSubmit = (event) => {
    event.preventDefault(); // Evita il refresh della pagina
    alert(`Valore dell'input: ${inputRef.current.value}`); // Ottieni il valore dell'input tramite il ref
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Scrivi qualcosa:</label>
        <input 
          type="text" 
          ref={inputRef} // Assegniamo il ref all'input
          placeholder="Inserisci testo"
        />
      </div>
      <button type="submit">Submit</button>
    </form>
  );
}

export default UncontrolledInput;

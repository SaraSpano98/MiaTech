import { useRef } from 'react';

function UncontrolledInput() {
  const inputRef = useRef(null); // Creiamo un ref per l'input

  const handleSubmit = (event) => {
    event.preventDefault(); // Evita il refresh della pagina
    alert(`Valore dell'input: ${inputRef.current.value}`);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Scrivi qualcosa:</label>
        <input 
          type="text" 
          ref={inputRef} // Colleghiamo l'input al ref
          placeholder="Inserisci testo"
        />
      </div>
      <button type="submit">Submit</button>
    </form>
  );
}

export default UncontrolledInput;


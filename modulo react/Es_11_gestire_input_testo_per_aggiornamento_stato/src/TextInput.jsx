import { useState } from 'react';

function TextInput() {
  const [text, setText] = useState(''); // stato iniziale: stringa vuota

  const handleChange = (event) => {
    setText(event.target.value); // aggiorna lo stato con il valore dell'input
  };

  return (
    <div>
      <input 
        type="text" 
        value={text} 
        onChange={handleChange}
        placeholder="Scrivi qualcosa..."
      />
      <p>Hai scritto: {text}</p>
    </div>
  );
}

export default TextInput;

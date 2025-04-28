import { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0); // inizializza lo stato a 0

  const increment = () => {
    setCount(count + 1); // aumenta il valore di count di 1
  };

  const decrement = () => {
    setCount(count -1);   //dimiuisce il valore di count di 1
  }

  return (
    <div>
      <div>Count: {count}</div>
      <button onClick={increment}>Incrementa</button>
      <button onClick={decrement}>Decrementa</button>
    </div>

    
  );
}

export default Counter;

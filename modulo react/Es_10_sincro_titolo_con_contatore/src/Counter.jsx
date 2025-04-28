import { useState, useEffect } from "react";

function Counter() {
  const [count, setCount] = useState(0); // inizializza lo stato a 0

  const increment = () => {
    setCount(count + 1); // aumenta di 1
  };

  const decrement = () => {
    setCount(count - 1); // diminuisce di 1
  };

  const reset = () => {
    setCount(0); // resetta il contatore a 0
  };

  useEffect(() => {
    document.title = `Contatore: ${count}`;
  }, [count]);

  return (
    <div>
      <div>Count: {count}</div>
      <button onClick={increment}>Incrementa</button>
      <button onClick={decrement}>Decrementa</button>
      <button onClick={reset}>Reset</button>
    </div>
  );
}

export default Counter;

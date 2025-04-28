import  { useState } from 'react';

function Counter() {
  const [count] = useState(0); // inizializza lo stato a 0

  return (
    <div>Count: {count}</div>
  );
}

export default Counter;

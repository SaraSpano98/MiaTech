import React from 'react';
import ItemList from './ItemList';

function App() {
  const items = ['Mela', 'Banana', 'Arancia', 'Kiwi'];

  return (
    <div>
      <h1>Frutta disponibile</h1>
      <ItemList elements={items} />
    </div>
  );
}

export default App;

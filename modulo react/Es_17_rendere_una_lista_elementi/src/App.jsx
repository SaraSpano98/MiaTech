import React from 'react';
import ItemList from './ItemList';

function App() {
  const frutta = ['Mela', 'Banana', 'Pera'];

  return (
    <div>
      <h1>Lista della Frutta</h1>
      <ItemList items={frutta} />
    </div>
  );
}

export default App;

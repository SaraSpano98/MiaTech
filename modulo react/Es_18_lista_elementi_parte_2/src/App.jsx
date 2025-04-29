import React from 'react';
import ItemList from './ItemList';

function App() {
  const elementi = ['Pizza', 'Pasta', 'Insalata', 'Pane'];

  return (
    <div>
      <h1>Menu del Giorno</h1>
      <ItemList items={elementi} />
    </div>
  );
}

export default App;

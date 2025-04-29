import React from 'react';
import Card from './Card';

function App() {
  return (
    <div>
      <h1>Homepage</h1>

      <Card>
        <h2>Benvenuto!</h2>
        <p>Questa è una semplice card con contenuto personalizzato.</p>
      </Card>

      <Card>
        <ul>
          <li>Elemento 1</li>
          <li>Elemento 2</li>
        </ul>
      </Card>
    </div>
  );
}

export default App;

import React from 'react';

function ItemList({ elements }) {
  return (
    <ul>
      {elements.map((item, index) => (
        <li key={index}>{item}</li>
      ))}
    </ul>
  );
}

export default ItemList;

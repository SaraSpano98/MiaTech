import React from 'react';
import './Card.css'; // opzionale per lo stile

function Card({ children }) {
  return <div className="card">{children}</div>;
}

export default Card;

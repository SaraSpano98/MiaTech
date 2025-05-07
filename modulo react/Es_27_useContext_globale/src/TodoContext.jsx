import React from 'react';
import { createContext, useState } from 'react';

// Crea il contesto
export const TodoContext = createContext();

// Crea il provider
export const TodoProvider = ({ children }) => {
  const [todos, setTodos] = useState([
    { id: 1, testo: 'Studiare React', completato: false },
    { id: 2, testo: 'Fare esercizi', completato: true },
  ]);

  return (
    <TodoContext.Provider value={{ todos, setTodos }}>
      {children}
    </TodoContext.Provider>
  );
};
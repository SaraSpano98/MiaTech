import React from 'react';
import { createContext, useState } from 'react';

// Crea il contesto
export const TodoContext = createContext();

// Provider che gestisce lo stato dei to-do
export const TodoProvider = ({ children }) => {
  const [todos, setTodos] = useState([
    { id: 1, text: 'Imparare React', completed: false },
    { id: 2, text: 'Fare la spesa', completed: true },
  ]);

  // Funzione per aggiungere un nuovo to-do
  const addTodo = (text) => {
    setTodos([...todos, { id: todos.length + 1, text, completed: false }]);
  };

  // Funzione per segnare un to-do come completato
  const toggleComplete = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  return (
    <TodoContext.Provider value={{ todos, addTodo, toggleComplete }}>
      {children}
    </TodoContext.Provider>
  );
};

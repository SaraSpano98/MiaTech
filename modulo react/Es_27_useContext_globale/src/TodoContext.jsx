import React from 'react';
import { createContext, useState } from 'react';

export const TodoContext = createContext();

export const TodoProvider = ({ children }) => {
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState('');

  const handleAddTodo = () => {
    if (newTodo.trim() !== '') {
      const newTodoItem = {
        id: todos.length + 1,
        text: newTodo,
      };
      setTodos([...todos, newTodoItem]);
      setNewTodo('');
    }
  };

  return (
    <TodoContext.Provider value={{
      todos,
      newTodo,
      setNewTodo,
      handleAddTodo,
    }}>
      {children}
    </TodoContext.Provider>
  );
};

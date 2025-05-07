import React from 'react';
import { useContext } from 'react';
import { TodoContext } from './TodoContext.jsx';

function TodoList() {
  const { todos } = useContext(TodoContext); // Accedi ai to-do

  return (
    <ul>
      {todos.map((todo) => (
        <li key={todo.id}>
          {todo.testo} {todo.completato ? '✅' : '❌'}
        </li>
      ))}
    </ul>
  );
}

export default TodoList;
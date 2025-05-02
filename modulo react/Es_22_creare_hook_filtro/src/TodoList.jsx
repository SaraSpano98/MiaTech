import React from 'react';
import { useState } from 'react';
import useFilteredTodos from './useFilteredTodos.jsx';

const TodoList = () => {
  const [todos, setTodos] = useState([
    { id: 1, text: 'Comprare il pane' },
    { id: 2, text: 'Andare in palestra' },
    { id: 3, text: 'Studiare React' },
  ]);

  const [searchTerm, setSearchTerm] = useState('');
  const [newTodo, setNewTodo] = useState(''); // Stato per il nuovo todo

  const filteredTodos = useFilteredTodos(todos, searchTerm);

  // Funzione per aggiungere un nuovo todo
  const handleAddTodo = () => {
    if (newTodo.trim() !== '') {
      const newTodoItem = {
        id: todos.length + 1,
        text: newTodo,
      };
      setTodos([...todos, newTodoItem]);
      setNewTodo(''); // Resetta il campo di input
    }
  };

  return (
    <div>
      <h1>Lista dei Todo</h1>
      
      {/* Campo di ricerca */}
      <input
        type="text"
        placeholder="Cerca un todo"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />

      {/* Aggiungi un nuovo todo */}
      <div>
        <input
          type="text"
          placeholder="Aggiungi un nuovo todo"
          value={newTodo}
          onChange={(e) => setNewTodo(e.target.value)}
        />
        <button onClick={handleAddTodo}>Aggiungi</button>
      </div>

      {/* Lista dei todo filtrati */}
      <ul>
        {filteredTodos.map(todo => (
          <li key={todo.id}>{todo.text}</li>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;

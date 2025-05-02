import React from 'react';
import { useState, useCallback, useMemo } from 'react';

const TodoList = () => {
  const [todos, setTodos] = useState([
    { id: 1, text: 'Comprare il pane' },
    { id: 2, text: 'Andare in palestra' },
    { id: 3, text: 'Studiare React' },
  ]);

  const [searchTerm, setSearchTerm] = useState('');
  const [newTodo, setNewTodo] = useState('');

  const handleSearchChange = useCallback((e) => {
    setSearchTerm(e.target.value);
  }, []);

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

  const filteredTodos = useMemo(() => {
    return todos.filter(todo =>
      todo.text.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }, [todos, searchTerm]);

  return (
    <div>
      <h1>Lista dei Todo</h1>

      <input
        type="text"
        placeholder="Cerca un todo"
        value={searchTerm}
        onChange={handleSearchChange}
      />

      <div>
        <input
          type="text"
          placeholder="Aggiungi un nuovo todo"
          value={newTodo}
          onChange={(e) => setNewTodo(e.target.value)}
        />
        <button onClick={handleAddTodo}>Aggiungi</button>
      </div>

      <ul>
        {filteredTodos.map(todo => (
          <li key={todo.id}>{todo.text}</li>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;

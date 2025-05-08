import React from 'react';
import { useContext } from 'react';
import { TodoContext } from './TodoContext.jsx';

const TodoList = () => {
  const {
    todos,
    newTodo,
    setNewTodo,
    handleAddTodo,
  } = useContext(TodoContext);

  return (
    <div>
      <h1>Lista dei Todo</h1>

      <input
        type="text"
        placeholder="Aggiungi un nuovo todo"
        value={newTodo}
        onChange={(e) => setNewTodo(e.target.value)}
      />
      <button onClick={handleAddTodo}>Aggiungi</button>

      <ul>
        {todos.map(todo => (
          <li key={todo.id}>{todo.text}</li>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;


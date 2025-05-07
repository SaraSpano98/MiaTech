import React from 'react';
import { useState, useContext } from 'react';
import { TodoProvider, TodoContext } from './TodoContext.jsx';
import TodoList from './TodoList.jsx';

const App = () => {
  const [newTodo, setNewTodo] = useState('');
  const { addTodo } = useContext(TodoContext);

  return (
    <TodoProvider>
      <div>
        <h1>Lista To-Do</h1>
        <input
          type="text"
          value={newTodo}
          onChange={(e) => setNewTodo(e.target.value)}
          placeholder="Aggiungi un nuovo to-do"
        />
        <button
          onClick={() => {
            if (newTodo) {
              addTodo(newTodo);  // Aggiungi il nuovo to-do
              setNewTodo('');
            }
          }}
        >
          Aggiungi
        </button>
        <TodoList />
      </div>
    </TodoProvider>
  );
};

export default App;

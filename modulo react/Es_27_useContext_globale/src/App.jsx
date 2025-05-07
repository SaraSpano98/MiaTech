import React from 'react';
import { TodoProvider } from './TodoContext.jsx';
import TodoList from './TodoList.jsx';

function App() {
  return (
    <TodoProvider>
      <h1>Lista To-Do</h1>
      <TodoList />
    </TodoProvider>
  );
}

export default App;

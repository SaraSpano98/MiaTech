import React from 'react';
import { TodoProvider } from './TodoContext.jsx';
import TodoList from './TodoList.jsx';

const App = () => {
  return (
    <TodoProvider>
      <TodoList />
    </TodoProvider>
  );
};

export default App;


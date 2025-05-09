import { TodoProvider } from './TodoContext.jsx';
import TodoList from './TodoList.jsx';

const App = () => {
  

  return (
    <TodoProvider>
      <div>
        <h1>Lista To-Do</h1>
        <TodoList />
      </div>
    </TodoProvider>
  );
};

export default App;

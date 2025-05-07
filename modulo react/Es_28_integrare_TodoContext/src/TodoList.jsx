import React from 'react';
import { useContext } from 'react';
import { TodoContext } from './TodoContext.jsx';

const TodoList = () => {
  const { todos, toggleComplete } = useContext(TodoContext);

  return (
    <ul>
      {todos.map((todo) => (
        <li key={todo.id}>
          <span
            style={{
              textDecoration: todo.completed ? 'line-through' : 'none',
            }}
            onClick={() => toggleComplete(todo.id)}
          >
            {todo.text}
          </span>
        </li>
      ))}
    </ul>
  );
};

export default TodoList;

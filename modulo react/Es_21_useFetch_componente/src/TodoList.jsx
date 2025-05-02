import React from 'react';
import useFetch from './useFetch.jsx';

function TodoList() {
  const { data, loading, error } = useFetch('https://jsonplaceholder.typicode.com/todos');

  if (loading) return <p>Caricamento to-do in corso...</p>;
  if (error) return <p>Errore nel recupero dei to-do: {error}</p>;

  return (
    <div>
      <h2>Lista To-Do</h2>
      <ul>
        {data.slice(0, 10).map((todo) => (
          <li key={todo.id}>
            <span style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}>
              {todo.title}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TodoList;

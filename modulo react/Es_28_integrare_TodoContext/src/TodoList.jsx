import React from "react";
import { useContext, useState } from "react";
import { TodoContext } from "./TodoContext.jsx";

const TodoList = () => {
  const { todos, toggleComplete } = useContext(TodoContext);

  const [newTodo, setNewTodo] = useState('');
  
  const {addTodo} = useContext(TodoContext)

  return (
    <div>
      <input
        type="text"
        value={newTodo}
        onChange={(e) => setNewTodo(e.target.value)}
        placeholder="Aggiungi un nuovo to-do"
      />
      <button
        onClick={() => {
          if (newTodo) {
            addTodo(newTodo); // Aggiungi il nuovo to-do
            setNewTodo("");
          }
        }}
      >
        Aggiungi
      </button>

      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            <span
              style={{
                textDecoration: todo.completed ? "line-through" : "none",
              }}
              onClick={() => toggleComplete(todo.id)}
            >
              {todo.text}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;

import { useContext, useState } from "react";
{/*Importa il link*/}
import { Link } from "react-router-dom";
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
            addTodo(newTodo); 
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
            {/* Link ai dettagli del to-do */}
            <Link to={`/todo/${todo.id}`} style={{ marginLeft: "10px" }}>
              Dettagli
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;

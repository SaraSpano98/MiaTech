import { useContext, useState } from "react";
{/*Importa useSearchParams*/}
import { Link, useSearchParams } from "react-router-dom"; 
import { TodoContext } from "./TodoContext.jsx";

const TodoList = () => {
  const { todos, toggleComplete, addTodo } = useContext(TodoContext);

  const [newTodo, setNewTodo] = useState('');
  const [searchParams, setSearchParams] = useSearchParams();

  const searchTerm = searchParams.get("search") || "";

  const handleSearchChange = (e) => {
    const value = e.target.value;
    setSearchParams(value ? { search: value } : {});
  };

  const filteredTodos = todos.filter(todo =>
    todo.text.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      <input
        type="text"
        placeholder="Filtra i to-do"
        value={searchTerm}
        onChange={handleSearchChange}
      />
      <br /><br />
      <input
        type="text"
        value={newTodo}
        onChange={(e) => setNewTodo(e.target.value)}
        placeholder="Aggiungi un nuovo to-do"
      />
      <button
        onClick={() => {
          if (newTodo.trim()) {
            addTodo(newTodo.trim());
            setNewTodo("");
          }
        }}
      >
        Aggiungi
      </button>

      <ul>
        {filteredTodos.map((todo) => (
          <li key={todo.id}>
            <span
              style={{
                textDecoration: todo.completed ? "line-through" : "none",
                cursor: "pointer",
              }}
              onClick={() => toggleComplete(todo.id)}
            >
              {todo.text}
            </span>
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


{/*useSearchParams, si usa per gestire i parametri della query*/}

{/*in questo modo, se aggiorno la pagina, si mantiene il filtro attivo... e 
posso condividire l'URL e far vedere solo i to-do filtrati. */}
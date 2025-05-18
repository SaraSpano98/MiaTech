import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addTodo, toggleTodo } from "../store/slices/todoSlice"; 
import { Link } from "react-router-dom";

const TodoList = () => {
  const todos = useSelector(state => state.todo.todos);
  const dispatch = useDispatch();

  const [newTodo, setNewTodo] = useState('');

  const handleAddTodo = () => {
    if (newTodo.trim()) {
      dispatch(addTodo(newTodo.trim()));
      setNewTodo('');
    }
  };

  return (
    <div>
      <input
        type="text"
        value={newTodo}
        placeholder="Aggiungi un nuovo to-do"
        onChange={(e) => setNewTodo(e.target.value)}
      />
      <button onClick={handleAddTodo}>Aggiungi</button>

      <ul>
        {todos.map(todo => (
          <li key={todo.id}>
            <span
              onClick={() => dispatch(toggleTodo(todo.id))}
              style={{
                textDecoration: todo.completed ? "line-through" : "none",
                cursor: "pointer"
              }}
            >
              {todo.title}
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

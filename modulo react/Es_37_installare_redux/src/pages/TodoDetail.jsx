// components/TodoDetail.jsx
import { useParams, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const TodoDetail = () => {
  const { id } = useParams();
  const todo = useSelector(state =>
    state.todo.todos.find(t => t.id === parseInt(id))
  );
  const navigate = useNavigate();

  if (!todo) {
    return <p>To-do non trovato!</p>;
  }

  return (
    <div>
      <h2>Dettagli To-do</h2>
      <p><strong>ID:</strong> {todo.id}</p>
      <p><strong>Titolo:</strong> {todo.title}</p>
      <p><strong>Completato:</strong> {todo.completed ? "Sì" : "No"}</p>
      <button onClick={() => navigate("/")}>Torna alla lista</button>
    </div>
  );
};

export default TodoDetail;

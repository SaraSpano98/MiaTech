import { useContext } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { TodoContext } from "./TodoContext";

const TodoDetail = () => {
    {/*Otteniamo l'ID del to-do dalla URL*/}
  const { id } = useParams(); 
  const { todos } = useContext(TodoContext);
  const navigate = useNavigate();

  {/*Trova il to-do corrispondente all'ID*/}
  const todo = todos.find((todo) => todo.id === parseInt(id));

  if (!todo) {
    return <p>To-do non trovato!</p>;
  }

  return (
    <div>
      <h2>Dettagli To-do</h2>
      <p><strong>ID:</strong> {todo.id}</p>
      <p><strong>Testo:</strong> {todo.text}</p>
      <p><strong>Completato:</strong> {todo.completed ? "Sì" : "No"}</p>

      {/* Pulsante per tornare alla lista dei to-do */}
      <button onClick={() => navigate("/")}>Torna alla lista</button>
    </div>
  );
};

export default TodoDetail;

import { useNavigate } from "react-router-dom";

const About = () => {
  const navigate = useNavigate();

  const goToHome = () => {
    {/*Reindirizza alla Home*/}
    navigate("/");  
  };

  return (
    <div>
      <h2>About Page: applicazione di TodoList</h2>
      <p>Questa è una semplice applicazione To-Do (di cui è un componente) e serve a prendere le informazioni da un'API, tramite useFetch.</p>

      {/* Pulsante che naviga alla Home */}
      <button onClick={goToHome}>Vai alla Home</button>
    </div>
  );
};

export default About;
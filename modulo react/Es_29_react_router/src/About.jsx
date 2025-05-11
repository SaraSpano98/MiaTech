import { useNavigate } from "react-router-dom";

const About = () => {
  const navigate = useNavigate();

  const goToHome = () => {
    {/*Reindirizza alla Home*/}
    navigate("/");  
  };

  return (
    <div>
      <h2>About Page</h2>
      <p>Questa è una semplice applicazione To-Do.</p>

      {/* Pulsante che naviga alla Home */}
      <button onClick={goToHome}>Vai alla Home</button>
    </div>
  );
};

export default About;


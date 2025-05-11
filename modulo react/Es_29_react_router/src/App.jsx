import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Home";
import About from "./About";
import Layout from "./Layout";
{/*Importa il nuovo componente*/}
import TodoDetail from "./TodoDetail"; 
import { TodoProvider } from "./TodoContext";

const App = () => {
  return (
    <TodoProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="about" element={<About />} />
            {/* Aggiungi la rotta per i dettagli del to-do */}
            <Route path="todo/:id" element={<TodoDetail />} />
          </Route>
        </Routes>
      </Router>
    </TodoProvider>
  );
};

export default App;




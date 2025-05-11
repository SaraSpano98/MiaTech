import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./Home";
import About from "./About";
import { TodoProvider } from "./TodoContext";

const App = () => {
  return (
    <TodoProvider>
      <Router>
        <nav>
          <Link to="/">Home</Link> | <Link to="/about">About</Link>
        </nav>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </Router>
    </TodoProvider>
  );
};

export default App;


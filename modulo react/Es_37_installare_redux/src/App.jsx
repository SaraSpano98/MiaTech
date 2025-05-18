import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import TodoDetail from "./pages/TodoDetail";
import Layout from "./layout/Layout";


const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/todo/:id" element={<TodoDetail />} />
      </Route>
    </Routes>
  );
};

export default App;

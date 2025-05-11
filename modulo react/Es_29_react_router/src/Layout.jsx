import { Link, Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <div>
      <nav style={{ marginBottom: "20px" }}>
        <Link to="/" style={{ marginRight: "10px" }}>Home</Link>
        <Link to="/about">About</Link>
      </nav>
      <Outlet />
    </div>
  );
};

export default Layout;

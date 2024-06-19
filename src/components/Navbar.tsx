import { Link } from "react-router-dom";
import "../style/Navbar.css"

const Navbar = () => {
  return (
    <>
      <nav className="navbar">
        <div className="navbar-container">
            <Link to="/" className="">TRUCK</Link>
            <Link to="/" className="">TRUCK</Link>
            <Link to="/" className="">TRUCK</Link>
        </div>
      </nav>
    </>
  );
};

export default Navbar;

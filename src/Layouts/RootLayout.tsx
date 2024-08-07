import { NavLink, Outlet } from "react-router-dom";
import Breadcrumbs from "../components/Breadcrumbs";
import "../style/Header.css";
import Footer from "../pages/Footer";
import Logo from '../assets/Logo.png'

const RootLayout = () => {
  return (
    <div className="root-layout">
      <header>
        <nav>
          <h1>
            <img
              className="coverPhoto rounded-l-lg"
              src={Logo}
              alt="Logo"
              style={{ height: "2rem", padding: "0" }}
            />
          </h1>
          <NavLink to="/monthly">Home</NavLink>
          <NavLink to="about">About</NavLink>
          {/* <NavLink to="addblog">Add Blog</NavLink> */}
          {/* <NavLink to="careers">Careers</NavLink> */}
          <NavLink to="help">Contact</NavLink>
        </nav>
        <Breadcrumbs />
      </header>

      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default RootLayout;

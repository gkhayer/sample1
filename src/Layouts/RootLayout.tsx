import { NavLink, Outlet } from "react-router-dom";
import Breadcrumbs from "../components/Breadcrumbs";
import '../style/Header.css'

const RootLayout = () => {
  return (
    <div className="root-layout">
      <header>
        <nav>
          <h1>Blogs</h1>
          <NavLink to="/">Home</NavLink>
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
    </div>
  );
};

export default RootLayout;

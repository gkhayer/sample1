import { NavLink, Outlet } from "react-router-dom";

const HelpLayout = () => {
  return (
    <div className="help-layout">
      <h2>Contact Us!</h2>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur,
        veritatis?
      </p>
      <nav>
        <NavLink to="faq">View the Frequently asked Questions</NavLink>
        <NavLink to="contact">Contact Us!</NavLink>
      </nav>

      <Outlet />
    </div>
  );
};

export default HelpLayout;

import { NavLink, Outlet } from "react-router-dom";
import "../style/HelpLayout.css";

const HelpLayout = () => {
  return (
    <div className="help-layout">
      <h2>Contact Us!</h2>
      <p>
        Are you seeking to enhance your online presence? Get in touch with us.
      </p>
      <nav>
        <NavLink to="contact">Contact Us!</NavLink>
        <NavLink to="faq">View the Frequently asked Questions</NavLink>
      </nav>

      <Outlet />
    </div>
  );
};

export default HelpLayout;

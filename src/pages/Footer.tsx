import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div>
      <hr className="mt-[45rem] h-px my-8 bg-gray-200 border-0 dark:bg-gray-700"></hr>

      <footer>
        <p>&copy; 2024 Shonq Technologies</p>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/help/contact">Contact</Link>
            </li>
          </ul>
        </nav>
      </footer>
    </div>
  );
};

export default Footer;

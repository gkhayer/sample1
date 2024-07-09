import { Link } from "react-router-dom";

const PageNotFound = () => {
  return (
    <div className="pagenotfound">
      <h2>Page Not Found!</h2>
      <p>
        Go to <Link to="/">HomePage</Link>.
      </p>
    </div>
  );
};

export default PageNotFound;

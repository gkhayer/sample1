import { Link } from "react-router-dom";

const PageNotFound = () => {
  return (
    <div className="pagenotfound">
      <h2>Page Not Found!</h2>
      <p>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iste, est
        nisi? Fugiat unde, aspernatur minima placeat tenetur aliquam totam qui
        omnis ipsam atque doloremque libero amet tempora voluptatem dolorem
        inventore.
      </p>
      <p>
        Go to <Link to="/">HomePage</Link>.
      </p>
    </div>
  );
};

export default PageNotFound;

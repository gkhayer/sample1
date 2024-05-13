import { Link, useRouteError } from "react-router-dom";
import { ErrorMessage } from "../../types/types";

const CareersError = () => {
  // react router dom provide us error
  const error = useRouteError() as ErrorMessage;
  return (
    <div className="carrers-error">
      <h2>Error</h2>
      <p>{error.message}</p>
      <Link to="/">Back to the Homepage</Link>
    </div>
  );
};

export default CareersError;

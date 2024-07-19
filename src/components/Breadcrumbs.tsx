import { Link, useLocation } from "react-router-dom";

const Breadcrumbs = () => {
  const location = useLocation();

  let currentLink = "";

  const crumbs = location.pathname
    .split("/")
    .filter((crumb) => crumb != "")
    .map((crumb) => {
      currentLink = currentLink.concat(`/${crumb}`);
      return (
        <div className="crumb" key={crumb}>
          <Link to={currentLink}>{crumb}</Link>
        </div>
      );
    });
  return (
    <div className="breadcrumbs">
      {location.pathname.includes("yearly") ||
      location.pathname.includes("monthly")
        ? ""
        : crumbs}
    </div>
  );
};

export default Breadcrumbs;

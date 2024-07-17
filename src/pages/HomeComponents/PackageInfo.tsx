import { NavLink, Outlet } from "react-router-dom";

const PackageInfo = () => {
  return (
    <div>
      <nav>
        <NavLink to="GetStarted">Monthly</NavLink>
        <NavLink to="YearlyPack">Yearly</NavLink>
      </nav>
      <Outlet />
    </div>
  );
};

export default PackageInfo;

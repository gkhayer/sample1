import { NavLink, Outlet } from "react-router-dom";

const SelectPackageTypeInfo = () => {
  return (
    <div>
      <h6>Pricing</h6>
      <p className="text-xl">
        Dive into the possiblities with our creative offerings. These
        meticulously crafted service packages go beyond traditional pricing
        plans, offering a spectrum of innovation solutions to elevate you
        digital presence.
      </p>
      <div className="border-2 p-1 m-5 inline-block">
        <nav>
          <NavLink
            to="monthly"
            className={({ isActive, isPending, isTransitioning }) =>
              [
                isPending ? "pending" : "",
                isActive ? "active" : "",
                isTransitioning ? "transitioning" : "",
              ].join(" ")
            }
            end
          >
            <button className="m-1 px-5 w-30">Monthly</button>
          </NavLink>
          <NavLink to="yearly">
            <button className="m-1 px-5 w-30">Yearly</button>
          </NavLink>
        </nav>
      </div>
      <Outlet />
    </div>
  );
};

export default SelectPackageTypeInfo;

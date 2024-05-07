import { Outlet } from "react-router-dom";

const CareersLayout = () => {
  return (
    <div className="careers-layout">
      <h2>Blogs</h2>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque unde
        consequuntur voluptatem sit, nam suscipit tempore eaque libero a enim!
      </p>

      <Outlet />
    </div>
  );
};

export default CareersLayout;

import { useLoaderData, Link, LoaderFunction } from "react-router-dom";
import { LoaderData } from "../../types/types";

// instead of using useeffect to fetch data from an api use loader
const Careers = () => {
  const { data } = useLoaderData() as LoaderData;

  return (
    <div>
      {data?.map((career) => (
        <Link to={career.id.toString()} key={career.id}>
          <p>{career.title}</p>
          <p>Based in {career.location}</p>
        </Link>
      ))}
    </div>
  );
};

export default Careers;

// loader function

export const careersLoader: LoaderFunction = async () => {
  const res = await fetch("http://localhost:8000/careers");
  if (!res.ok) {
    throw new Error("Could not fetch the Careers");
  }
  const data = await res.json();
  return { data };
};
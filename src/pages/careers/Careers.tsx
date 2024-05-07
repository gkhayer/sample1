import { useLoaderData, Link, LoaderFunction } from "react-router-dom";

export type Career = {
  id: number;
  title: string;
  salary: number;
  location: string;
};

type LoaderData = {
  data: Career[]
};

// instead of using useeffect to fetch data from an api use loader
const Careers = () => {
  const { data } = useLoaderData() as LoaderData;

  console.log(data);

  return (
    <div>
      {data?.map((career) => (
        <Link to="/" key={career.id}>
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
    throw new Error("data not found");
  }
  const data = await res.json();
  return { data };
};

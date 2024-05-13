import { LoaderFunction, useLoaderData } from "react-router-dom";
import { CareerDetails } from "../../types/types";

export const CareersDetail = () => {
  const { data } = useLoaderData() as CareerDetails;

  const { salary, location, title } = data;

  return (
    <div className="career-details">
      <h1>Career Detail for {title}</h1>
      <p>Starting Salary: {salary}</p>
      <p>Location: {location}</p>
    </div>
  );
};

// loader function

export const careerDetailsLoader: LoaderFunction = async ({ params }) => {
  const { id } = params;
  const res = await fetch(`http://localhost:8000/careers/` + id);
  if (!res.ok) {
    throw Error("Could not find that Career");
  }
  const data = await res.json();
  return { data };
};

import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Loader from "./Loader.jsx";

interface User {
  name: string;
  email: string;
  phone: string;
}

export interface Blog {
  title: string;
  body: string;
  author: string;
  id: number;
}

type StateHookResult<T> = [
  T | null,
  React.Dispatch<React.SetStateAction<T | null>>
];

const CreateUser = () => {
  const navigate = useNavigate();
  const createUseApi = "http://localhost:5173/UserList";

  const [error, setError]: StateHookResult<null> = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [user, setUser] = useState<User>({
    name: "",
    email: "",
    phone: "",
  });

  const handleChange = (event: {
    preventDefault: () => void;
    target: { name: any; value: any };
  }) => {
    event.preventDefault();
    const { name, value } = event.target;
    setUser({
      ...user,
      [name]: value,
    });

    console.log(user);
  };

  const handleSubmit = async (event: { preventDefault: () => void }) => {
    event.preventDefault();
    try {
      setIsLoading(true);
      console.log(createUseApi);
      const response = await fetch(createUseApi, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(user),
      });

      if (response.ok) {
        console.log("successfull");
        setUser({
          name: "",
          email: "",
          phone: "",
        });
        navigate("/show-user");
      }
    } catch (error: any) {
      setIsLoading(false);
      setError(error.message);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div>
      <div className="heading">
        {error && <p>Error is: {error}</p>}
        {isLoading && <Loader />}
        <p>User Form</p>
      </div>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="name" className="form-label">
            Name
          </label>
          <input
            type="text"
            className="form-control"
            id="name"
            name="name"
            value={user.name}
            onChange={handleChange}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">
            Email
          </label>
          <input
            type="email"
            className="form-control"
            id="email"
            name="email"
            value={user.email}
            onChange={handleChange}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="phone" className="form-label">
            Phone
          </label>
          <input
            type="text"
            className="form-control"
            id="phone"
            name="phone"
            value={user.phone}
            onChange={handleChange}
          />
        </div>
        <button type="submit" className="btn btn-primary submit-btn">
          Submit
        </button>
      </form>
    </div>
  );
};

export default CreateUser;

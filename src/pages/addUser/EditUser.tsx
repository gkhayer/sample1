import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";


const EditUser = () => {
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const {id} = useParams();

  const getUserApi = "http://localhost:3000/user";
  console.log(getUserApi)


  return <>Edit info</>;
};

export default EditUser;

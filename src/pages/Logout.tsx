import { AuthContextType, useAuth } from "../hooks/useAuth";

const Logout = () => {
  const { logout } = useAuth() as AuthContextType;
  return (
    <div>
      <h1>This page is for auth users only!</h1>
      <button onClick={() => logout()}>Logout</button>
    </div>
  );
};

export default Logout;

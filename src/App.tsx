import "./App.css";
import Home from "./pages/Home";
import Header from "./pages/Header";
// 4- import provider
import { Provider } from "react-redux";
import store from "./redux/store";
import { Navigate, useRoutes } from "react-router-dom";
import PageNotFoundView from "./pages/PageNotFoundView";
import MainLayout from "./Layouts/MainLayout";
import AccountLayout from "./Layouts/AccountLayout";
import ProtectedRoute from "./components/ProtectedRoute";
import { AuthProvider } from "./hooks/useAuth";
import Login from "./pages/Login";
import Logout from "./pages/Logout";

const App: React.FC = (): JSX.Element => {
  const mainRoutes = {
    path: "/",
    element: <MainLayout />,
    children: [
      { path: "*", element: <Navigate to="/404" /> },
      { path: "/logout", element: <Logout /> },
      { path: "404", element: <PageNotFoundView /> },
      { path: "/login", element: <Login /> },
      {
        path: "/",
        element: <Home />,
      },
    ],
  };

  const accountRoutes = {
    path: "account",
    element: <AccountLayout />,
    children: [{ path: "*", element: <Navigate to="/404" /> }],
  };

  const routing = useRoutes([mainRoutes, accountRoutes]);

  return (
    <>
      <AuthProvider>
        <Provider store={store}>
          {routing}
          <div>
            <Header />
            <div className="container">
              <article>
                <ProtectedRoute>
                  <Home />
                </ProtectedRoute>
              </article>
            </div>
          </div>
        </Provider>
      </AuthProvider>
    </>
  );
};

export default App;

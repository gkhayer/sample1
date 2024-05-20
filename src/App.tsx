// Style
import "./App.css";

import {
  createBrowserRouter,
  createRoutesFromElements,
  Navigate,
  Route,
  RouterProvider,
} from "react-router-dom";
import ProtectedRoute from "./components/ProtectedRoute";
import { AuthProvider } from "./hooks/useAuth";
import { Provider } from "react-redux";
import store from "./redux/store";

// Pages
import Home from "./pages/Home";
import Header from "./pages/Header";
import AccountLayout from "./Layouts/AccountLayout";
import Login from "./pages/Login";
import Logout from "./pages/Logout";
import CreateUser from "./pages/addUser/CreateUser";
import EditUser from "./pages/addUser/EditUser";
import AddBlog from "./pages/addBlog/AddBlog";
import About from "./pages/About";

// layouts
import RootLayout from "./Layouts/RootLayout";
import HelpLayout from "./Layouts/HelpLayout";
import Contact, { contactAction } from "./pages/Help/Contact";
import PageNotFound from "./pages/PageNotFound";
import CareersLayout from "./Layouts/CareersLayout";
import Careers, { careersLoader } from "./pages/careers/Careers";
import Faq from "./pages/Help/Faq";
import {
  careerDetailsLoader,
  CareersDetail,
} from "./pages/careers/CareersDetail";
import CareersError from "./pages/careers/CareersError";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route index element={<Home />} />
      <Route path="about" element={<About />} />
      <Route path="addblog" element={<AddBlog />} />
      <Route path="help" element={<HelpLayout />}>
        <Route path="faq" element={<Faq />} />
        <Route path="contact" element={<Contact />} action={contactAction} />
      </Route>
      <Route
        path="careers"
        element={<CareersLayout />}
        errorElement={<CareersError />}
      >
        <Route
          index
          element={<Careers />}
          loader={careersLoader}
          // errorElement={<CareersError />}
        />
        <Route
          path=":id"
          element={<CareersDetail />}
          loader={careerDetailsLoader}
          // errorElement={<CareersError />}
        />
      </Route>

      <Route path="*" element={<PageNotFound />} />
    </Route>
  )
);

const App: React.FC = (): JSX.Element => {
  const mainRoutes = {
    path: "/",
    element: <Header />,
    children: [
      // { path: "*", element: <Navigate to="/404" /> },
      // { path: "/logout", element: <Logout /> },
      // { path: "404", element: <PageNotFoundView /> },
      // { path: "/login", element: <Login /> },
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/About",
        element: <About />,
      },
      {
        path: "/AddBlog",
        element: <AddBlog />,
      },
      {
        path: "/EditUser",
        element: <EditUser />,
      },
      {
        path: "/con",
      },
      {
        path: "/createUser",
        element: <CreateUser />,
      },
    ],
  };

  const accountRoutes = {
    path: "account",
    element: <AccountLayout />,
    children: [{ path: "*", element: <Navigate to="/404" /> }],
  };

  // const routing = useRoutes([mainRoutes, accountRoutes]);

  return (
    <Provider store={store}>
      {/* <AuthProvider> */}
      <RouterProvider router={router} />
      {/* </AuthProvider> */}
    </Provider>
  );
};

export default App;

//           {routing}
//           <div>
//             <div className="container">
//               <article>
//                 <ProtectedRoute>
//                   {/* <Home /> */}
//                   <EditUser/>
//                 </ProtectedRoute>
//               </article>
//             </div>
//           </div>

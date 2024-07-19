import "./App.css";

import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";

import { Provider } from "react-redux";
import store from "./redux/store";

// Pages
import Home from "./pages/Home";
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
import YearlyPack from "./pages/HomeComponents/YearlyPack";
import MonthlyPackage from "./pages/HomeComponents/MonthlyPackage";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route index element={<Home />} />
      <Route  element={<Home />}>
        <Route path="yearly" element={<YearlyPack />} />
        <Route path="monthly" element={<MonthlyPackage />} />
      </Route>
      <Route path="about" element={<About />} />
      <Route path="addblog" element={<AddBlog />} />
      <Route path="yearly" element={<YearlyPack />} />
      <Route path="monthly" element={<MonthlyPackage />} />
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
  return (
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  );
};

export default App;

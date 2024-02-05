import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Header from "./component/Header";
import "./component/Header.css";
import { ScrollProvider } from "./component/ScrollContext";
import "./component/UserFeedback.css";
import "./component/authPage.css";
import "./component/footer.css";
import "./component/other.css";
import About from "./component/pages/About";
import Contact from "./component/pages/Contact";
import Data from "./component/pages/Data";
import ErrorPage from "./component/pages/Error";
import Home from "./component/pages/Home";
import Rates from "./component/pages/Rates";
import Services from "./component/pages/Services";
import Login from "./component/pages/auth/Login";
import Register from "./component/pages/auth/Register";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Header />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        path: "/",
        element: <Home />,
      },
      {
        path: "services",
        element: <Services />,
      },
      {
        path: "rates",
        element: <Rates />,
      },
      {
        path: "about",
        element: <About />,
      },
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "register",
        element: <Register />,
      },
      {
        path: "data",
        element: <Data />,
      },
      {
        path: "contactus",
        element: <Contact />,
      },
    ],
  },
]);

function App() {
  return (
    <ScrollProvider>
      <RouterProvider router={router}>
        <App />
      </RouterProvider>
    </ScrollProvider>
  );
}

export default App;

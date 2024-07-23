import React, { useState, useEffect } from "react";
import "./App.css";
import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
  // Link,
} from "react-router-dom";
import Login from "./Components/Login/Login.jsx";
import Register from "./Components/Register/Register.jsx";
import LandingPage from "./Components/LandingPage/LandingPage.jsx";
import Response from "./Components/Response/Response.jsx";
import Settings from "./Components/Settings/Settings.jsx";
import Workplace from "./Components/Workplace/Workplace.jsx";
import FormBuilder from "./Components/FormBuilder/FormBuilder.jsx";
// import PrivateRoutes from "./Components/Helper/PrivateRoutes.jsx";
// import LoaderComponent from "./Components/Loader/Loader.jsx";

// spinner
// const LoadingWrapper = ({ router }) => {
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     const timeout = setTimeout(() => {
//       setLoading(false);
//     }, 500);

//     return () => clearTimeout(timeout);
//   }, [router]);

//   return loading ? <LoaderComponent /> : <RouterProvider router={router} />;
// };

const App = () => {
  const route = createBrowserRouter([
    {
      path: "/",
      element: <LandingPage />,
    },
    {
      path: "/login",
      element: <Login />,
    },
    {
      path: "/register",
      element: <Register />,
    },
    {
      // element: <PrivateRoutes />,
      children: [
        {
          path: "/",
          children: [
            {
              path: "/workplace",
              element: <Workplace />,
            },
            {
              path: "/workplace/settings",
              element: <Settings />,
            },
            {
              path: "/workplace/createform",
              element: <FormBuilder />,
            },
            {
              path: "/workplace/response",
              element: <Response />,
            },

            {
              path: "*",
              element: <Navigate to="/workplace" />,
            },
          ],
        },
      ],
    },
  ]);

  // return <div className="App">{/* <LoadingWrapper router={route} /> */}</div>;
  return (
    <div className="App">
      <RouterProvider router={route}></RouterProvider>
    </div>
  );
};

export default App;

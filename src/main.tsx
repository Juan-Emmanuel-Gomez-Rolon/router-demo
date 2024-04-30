import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { Link, RouterProvider, createBrowserRouter } from "react-router-dom";
import Profile from "./components/Profile.tsx";
import Mario from "./components/Mario.tsx";
import Luigi from "./components/Luigi.tsx";

const NotFound = () => {
  return (
    <div>
      <h1>Not found</h1>
      <Link to="/">Go to Home</Link>
    </div>
  );
};

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "profile/:name",
    element: <Profile />,
    children: [
      {
        path: "mario",
        element: <Mario />,
      },
      {
        path: "luigi",
        element: <Luigi />,
      },
    ],
  },
  {
    path: "*",
    element: <NotFound />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

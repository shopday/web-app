import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import "./config/appInit.js";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Shopday from "./company/Shopday.jsx";
import Disclaimer from "./pages/Disclaimer.jsx";
import Homepage from "./pages/Homepage.jsx";

const router = createBrowserRouter([
  {
    element: <App />,
    children: [
      {
        path: "/",
        element: <Homepage />,
      },
      {
        path: "/shopday",
        element: <Shopday />,
      },
      {
        path: "/disclaimer",
        element: <Disclaimer />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

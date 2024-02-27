import React from "react";
import ReactDOM from "react-dom/client";
import App from "./AppLayout.jsx";
import UserLayout from "./user/UserLayout.jsx";
import "./index.css";
import "./config/appInit.js";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Shopday from "./company/Shopday.jsx";
import Disclaimer from "./pages/Disclaimer.jsx";
import Homepage from "./pages/Homepage.jsx";
import Register from "./pages/Register.jsx";
import Login from "./pages/Login.jsx";
import ProtectedRoutes from "./pages/ProtectedRoutes.jsx";
import UserDashboard from "./user/layout/UserDashboard.jsx";
import PageLayout from "./user/layout/DashboarPageLayout.jsx";
import Companies from "./user/pages/Companies.jsx";
import DashboardPageLayout from "./user/layout/DashboarPageLayout.jsx";

const router = createBrowserRouter([
  {
    element: <App />,
    children: [
      {
        path: "/",
        element: <Homepage />,
        index: true,
      },
      {
        path: "/shopday",
        element: <Shopday />,
      },
      {
        path: "/disclaimer",
        element: <Disclaimer />,
      },
      {
        path: "/register",
        element: <Register />,
      },
      {
        path: "/login",
        element: <Login />,
      },
    ],
  },
  {
    element: <UserLayout />,
    children: [
      {
        path: "user",
        element: <ProtectedRoutes />,
        children: [
          {
            path: "dashboard",
            element: <UserDashboard />,
          },
          {
            path: "app",
            element: <DashboardPageLayout />,
            children: [
              {
                path: "companies",
                element: <Companies />,
              },
            ],
          },
        ],
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

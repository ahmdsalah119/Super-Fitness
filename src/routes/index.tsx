import Home from "@/pages/Home";
import AuthLayout from "@/layouts/AuthLayout";
import { createBrowserRouter } from "react-router-dom";
import Login from "@/pages/Login";
import Register from "@/pages/Register";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/auth",
    element: <AuthLayout />,
    children: [
      {
        index: true,      // /auth/login
        element: <Login />,
      },
      {
        path: "register",   // /auth/register
        element: <Register/>,
      },
    ],
  },
]);

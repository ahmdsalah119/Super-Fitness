import Home from "@/pages/Home";
import AuthLayout from "@/layouts/AuthLayout";
import { createBrowserRouter } from "react-router-dom";
import Login from "@/features/auth/login";

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
    path: "/auth/login",
    element: <Login />,
       }
    ],
  },
 
]);

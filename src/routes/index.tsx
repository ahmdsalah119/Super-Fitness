import Home from "@/pages/Home";
import AuthLayout from "@/layouts/AuthLayout";
import { createBrowserRouter } from "react-router-dom";
import Login from "@/features/auth/login";
import ForgotPassword from "@/features/auth/forgot-password";
import AboutSection from "@/features/about";
export const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/about",
    element: <AboutSection />,
  },
  {
    path: "/auth",
    element: <AuthLayout />,
    children: [
      {
        path: "/auth/login",
        element: <Login />,
      },
      {
        path: "/auth/forgot-password",
        element: <ForgotPassword />,
      },
    ],
  },
]);

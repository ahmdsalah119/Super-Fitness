import Home from "@/pages/Home";
import AuthLayout from "@/layouts/AuthLayout";
import Register from "@/features/auth/register/Register";
import { createBrowserRouter } from "react-router-dom";
import Login from "@/features/auth/login";
import ForgotPassword from "@/features/auth/forgot-password";
import Classes from "@/features/classes";
import { AiInterface } from "@/features/ai/ai-interface";

export const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <>
        <Home />
        <AiInterface />
      </>
    ),
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
      { 
        path: "/auth/register", 
        element: <Register /> 
      },
    ],
  },
  { 
    path: "/classes", 
    element: <Classes /> 
  },
]);
import Home from "@/pages/Home";
import AuthLayout from "@/layouts/AuthLayout";
import Register from "@/features/auth/register/Register";
import { createBrowserRouter } from "react-router-dom";
import Login from "@/features/auth/login";
import ForgotPassword from "@/features/auth/forgot-password";
import Classes from "@/features/classes";
import { AiInterface } from "@/features/ai/ai-interface";
import MainLayout from "@/layouts/MainLayout";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: (
          <>
            <Home />
            <AiInterface />
          </>
        ),
      },
      {
        path: "classes",
        element: <Classes />,
      },
    ],
  },
  {
    path: "/login",
    element: <AuthLayout />,
    children: [
      {
        index: true,
        element: <Login />,
      },
      {
        path: "forgot-password",
        element: <ForgotPassword />,
      },
      {
        path: "register",
        element: <Register />,
      },
    ],
  },
]);

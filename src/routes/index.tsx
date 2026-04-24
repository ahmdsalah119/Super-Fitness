import Home from "@/pages/Home";
import AuthLayout from "@/layouts/AuthLayout";
import Register from "@/features/auth/register";
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
    path: "/auth",
    element: <AuthLayout />,
    children: [
      {
         path: "login",
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
  {
    path: "*", 
    element: <div className="text-center py-20">
      <h1 className="text-4xl font-bold">404</h1>
      <p className="mt-4">Page not found</p>
    </div>,
  },
]);

import { createBrowserRouter } from "react-router-dom";
import Login from "@/features/auth/login";
import HeroSection from "@/features/hero-section";
export const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <div className="p-10">
        <h1 className="text-2xl  underline">Tailwind is Working</h1>
      </div>
    ),
  },
  {
    path: "/auth/login",
    element: <Login />,
  },
]);

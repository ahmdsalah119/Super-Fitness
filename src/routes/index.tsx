import { createBrowserRouter } from "react-router-dom";
import Login from "@/app/auth/login";

export const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <div className="p-10">
        <h1 className="text-2xl  underline">Tailwind is working</h1>
      </div>
    ),
  },
  {
    path: "/auth/login",
    element: <Login />,
  },
]);

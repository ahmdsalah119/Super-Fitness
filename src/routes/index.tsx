import { createBrowserRouter } from "react-router-dom";

export const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <div className="p-10">
        <h1 className="text-2xl  underline">Tailwind is working</h1>
      </div>
    ),
  },
]);

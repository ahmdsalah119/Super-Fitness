import { createBrowserRouter } from "react-router-dom";
import Login from "@/features/auth/login";
import { AiButton } from "@/features/ai/ai-interface";

export const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <div>
        <h1 className="text-2xl  underline">Tailwind is working</h1>
        <AiButton />
        <div className=" float-start">
          <div>sdadasd</div>
          <div>sdadasd</div>
          <div>sdadasd</div>
          <div>sdadasd</div>
          <div>sdadasd</div>
          <div>sdadasd</div>
          <div>sdadasd</div>
          <div>sdadasd</div>
          <div>sdadasd</div>
          <div>sdadasd</div>
          <div>sdadasd</div>
          <div>sdadasd</div>
          <div>sdadasd</div>
          <div>sdadasd</div>
          <div>sdadasd</div>
          <div>sdadasd</div>
          <div>sdadasd</div>
          <div>sdadasd</div>
          <div>sdadasd</div>
          <div>sdadasd</div>
          <div>sdadasd</div>
          <div>sdadasd</div>
          <div>sdadasd</div>
          <div>sdadasd</div>
          <div>sdadasd</div>
          <div>sdadasd</div>
          <div>sdadasd</div>
          <div>sdadasd</div>
          <div>sdadasd</div>
        </div>
      </div>
    ),
  },
  {
    path: "/auth/login",
    element: <Login />,
  },
]);

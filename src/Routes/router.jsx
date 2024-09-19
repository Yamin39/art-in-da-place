import { createBrowserRouter } from "react-router-dom";
import Root from "../layout/Root";
import Home from "../Pages/Home/Home";

const router = createBrowserRouter([
  {
    path: "/lander",
    element: <Root></Root>,
    children: [
      {
        path: "/lander",
        element: <Home />,
      },
    ],
  },
]);

export default router;

import { createBrowserRouter } from "react-router-dom";
import { Events, Login, Register, DescriptionEvent, Profile } from "../pages";
import { Header } from "../components";

const router = createBrowserRouter([
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/register",
    element: <Register />,
  },
  {
    path: "/events/:id",
    element: <DescriptionEvent />,
  },
  {
    path: "example",
    element: <Header />,
  },
  {
    path: "/profile",
    element: <Profile />,
  },
  {
    path: "/",
    element: <Events />,
  },
  {
    path: "*",
    element: <h1>Error</h1>,
  },
]);

export { router };

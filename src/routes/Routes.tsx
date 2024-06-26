import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Login from "../pages/Login";
import { ProtectedRoutes } from "./ProtectedRoutes";
import { Layout } from "../base-layout/layout/Layout";
import Home from "../pages/Home";
import Department from "../pages/Department";
import User from "../pages/User";
import Floor from "../pages/Floor";

const router = createBrowserRouter([
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/",
    element: (
      <ProtectedRoutes>
        <Layout />
      </ProtectedRoutes>
    ),
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/department",
        element: <Department />,
      },
      {
        path: "/user",
        element: <User />,
      },
      {
        path: "/floor",
        element: <Floor />,
      },
    ],
  },
]);

export default function Routes() {
  return <RouterProvider router={router} />;
}

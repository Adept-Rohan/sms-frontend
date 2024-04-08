import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Login from "../pages/Login";
import { ProtectedRoutes } from "./ProtectedRoutes";
import { Layout } from "../base-layout/layout/Layout";
import Home from "../pages/Home";

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
        path: "/home",
        element: <Home />,
      },
    ],
  },
]);

export default function Routes() {
  return <RouterProvider router={router} />;
}

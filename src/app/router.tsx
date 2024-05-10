import { Navigate, Outlet, createBrowserRouter } from "react-router-dom";
import { Chat, Chats, Explore, Search, Settings } from "@/pages";
import { Login } from "@/pages/login";
import { Register } from "@/pages/register";

const PrivateRoute = () => {
  const isAuthenticated = true;
  return isAuthenticated ? <Outlet /> : <Navigate to="/login" replace />;
};

export const router = createBrowserRouter([
  {
    element: <PrivateRoute />,
    children: [
      {
        path: "/",
        element: <Search />,
      },
      {
        path: "/explore",
        element: <Explore />,
      },
      {
        path: "/settings",
        element: <Settings />,
      },
      {
        path: "/chats",
        element: <Chats />,
      },
      {
        path: "/chats/:id",
        element: <Chat />,
      },
    ],
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/register",
    element: <Register />,
  },
  {
    path: "*",
    element: "404",
  },
]);

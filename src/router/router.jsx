import { createBrowserRouter } from "react-router";
import MainLayout from "../layouts/MainLayout";
import Home from "../pages/Home";
import Register from "../pages/Register";
import Login from "../pages/Login";

export const router = createBrowserRouter([
  {
    path: "/",
    Component:MainLayout,
    children:[
        {
            path:'/',
            Component:Home
        },
        {
          path:'/register',
          Component:Register
        },
        {
          path:'/login',
          Component:Login
        }
    ]
  },
]);
import { createBrowserRouter } from "react-router";
import MainLayout from "../layouts/MainLayout";
import Home from "../pages/Home";
import Register from "../pages/Register";
import Login from "../pages/Login";
import PrivateRoute from "../shared/PrivateRoute";
import CreateEvent from "../pages/CreateEvent";
import JoinEvent from "../pages/JoinEvent";
import ManageEvent from "../pages/ManageEvent";

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
          path:'/createEvent',
          element:<PrivateRoute><CreateEvent></CreateEvent></PrivateRoute>
        },
        {
          path:'/joinEvent',
          element:<PrivateRoute><JoinEvent></JoinEvent></PrivateRoute>
        },
        {
          path:'/manageEvent',
          element:<PrivateRoute><ManageEvent></ManageEvent></PrivateRoute>
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
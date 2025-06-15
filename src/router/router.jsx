import { createBrowserRouter } from "react-router";
import MainLayout from "../layouts/MainLayout";
import Home from "../pages/Home";
import Register from "../pages/Register";
import Login from "../pages/Login";
import PrivateRoute from "../shared/PrivateRoute";
import CreateEvent from "../pages/CreateEvent";
import JoinEvent from "../pages/JoinEvent";
import ManageEvent from "../pages/ManageEvent";
import UpcomingEvents from "../pages/UpcomingEvents";
import NotFound from "../pages/NotFound";
import EventDetails from "../pages/EventDetails";
import UpdateEvent from "../pages/UpdateEvent";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: MainLayout,
    children: [
      {
        path: '/',
        Component: Home
      },
      {
        path: '/upcomingEvents',
        loader: () => fetch('https://event-planner-server-three.vercel.app/events'),
        Component: UpcomingEvents
      },
      {
        path: '/eventDetails/:id',
        loader: ({ params }) => fetch(`https://event-planner-server-three.vercel.app/events/${params.id}`),
        element: <PrivateRoute><EventDetails></EventDetails></PrivateRoute>
      },
      {
        path: '/createEvent',
        element: <PrivateRoute><CreateEvent></CreateEvent></PrivateRoute>
      },
      {
        path: '/joinEvent/:email',
        element: <PrivateRoute><JoinEvent></JoinEvent></PrivateRoute >
      },
      {
        path: '/manageEvent/:email',
        element: <PrivateRoute><ManageEvent></ManageEvent></PrivateRoute>
      },
      {
        path: '/updateEvent/:id',
        loader: ({ params }) => fetch(`https://event-planner-server-three.vercel.app/events/${params.id}`),
        element: <PrivateRoute><UpdateEvent></UpdateEvent></PrivateRoute>
      },
      {
        path: '/register',
        Component: Register
      },
      {
        path: '/login',
        Component: Login
      },
      {
        path: '*',
        Component: NotFound
      }
    ]
  },
]);
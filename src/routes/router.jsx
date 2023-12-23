import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Home from "../pages/home/Home";
import Login from "../pages/login/Login";
import Register from "../pages/register/Register";
import TodoList from "../pages/todolists/TodoList";
import UserDashboard from "../components/UserDashboard/UserDasboard";
import UserProfile from "../components/UserDashboard/UserPrfile";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    //   errorElement:<Error></Error> ,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      
    ],
  },

  {
    path: 'UserDashboard',
    element: <UserDashboard></UserDashboard>,
    children: [
      {
        path: 'userProfile',
        element: <UserProfile></UserProfile>
      }, {
        path: "todolist",
        element: <TodoList></TodoList>,
      },
    ]
  },

  {
    path: "/login",
    element: <Login></Login>,
  },
  {
    path: "/register",
    element: <Register></Register>,
  },
]);

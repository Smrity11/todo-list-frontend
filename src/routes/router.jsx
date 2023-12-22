import {
    createBrowserRouter,
  } from "react-router-dom";
import Main from "../layout/Main";
import Home from "../pages/home/Home";
import Login from "../pages/login/Login";


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
    path: "/login",
    element: <Login></Login>,
   },


])
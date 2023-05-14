import React from "react";
import ReactDOM from "react-dom/client";
import {
  createBrowserRouter

} from "react-router-dom";
import HomeLayout from "../Component/Layout/HomeLayout";
import Home from "../Component/Pages/Home/Home";
import Login from "../Component/Pages/Home/Login";
import Resister from "../Component/Pages/Home/Resisters";
import Booking from "../Component/Pages/Home/Booking";
import Mybooking from "../Component/Pages/Home/Mybooking";
import PrivateRoute from "../Component/Pages/PrivateRoute";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout></HomeLayout>,
    children:[
        {
            path:'/',
            element:<Home></Home>
        },{
            path:'/Login',
            element:<Login></Login>

        },{
            path:"/Resister",
            element:<Resister></Resister>
        },{
            path:"/Book/:id",
            element:<PrivateRoute><Booking></Booking></PrivateRoute>,
            loader:({params})=>fetch(`https://doctor-server-beryl.vercel.app/${params.id}`)
        },{
            path:"/mybook",
            element:<PrivateRoute><Mybooking></Mybooking></PrivateRoute> 
        }
    ]
  },
]);

export default router;
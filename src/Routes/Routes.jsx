import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Layout/Pages/Home/Home/Home";
import Login from "../Layout/Pages/Login/Login";
import Signup from "../Layout/Pages/SignUp/Signup";
import Dashboard from "../Layout/Dashboard";
import ManageUser from "../Layout/Pages/DashBoard/ManageUser/ManageUser";
import PrivateRoute from "./PrivateRoute";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: "login",
                element: <Login></Login>
            },
            {
                path: 'signup',
                element: <Signup></Signup>
            }
        ]
    },
    {
        path: 'dashboard',
        element: <PrivateRoute><Dashboard></Dashboard></PrivateRoute>,
        children: [
            {
                path: 'manageuser',
                element: <ManageUser></ManageUser>
            }
        ]
    }
]);

export default router;
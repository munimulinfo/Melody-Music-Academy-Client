import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Layout/Pages/Home/Home/Home";
import Login from "../Layout/Pages/Login/Login";
import Signup from "../Layout/Pages/SignUp/Signup";
import Dashboard from "../Layout/Dashboard";
import ManageUser from "../Layout/Pages/DashBoard/ManageUser/ManageUser";
import PrivateRoute from "./PrivateRoute";
import AdminRoute from "./AdminRoute";
import AddClass from "../Layout/Pages/DashBoard/AddClassInstructor/AddClass";
import MyClasses from "../Layout/Pages/DashBoard/InstructorClasese/MyClasses";
import InstructorRoute from "./InstructorRoute";
import ManageClases from "../Layout/Pages/DashBoard/ManageClasses/ManageClases";
import Sleceted from "../Layout/Pages/DashBoard/SelectedClasses/Sleceted";
import EnroledClasses from "../Layout/Pages/DashBoard/EnroledClassesStudent/EnroledClasses";
import InstructorEnrool from "../Layout/Pages/DashBoard/InstructorEnrollClasses/instructorEnrool";

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
                element:<AdminRoute><ManageUser></ManageUser></AdminRoute>
            },
            {
                path: 'manageclasses',
                element: <AdminRoute><ManageClases></ManageClases></AdminRoute>
            },
            {
                path: 'addaclass',
                element:<InstructorRoute><AddClass></AddClass></InstructorRoute>
            },
            {
                path: 'myclasses',
                element: <InstructorRoute><MyClasses></MyClasses></InstructorRoute>
            },
            {
                path: 'instructorEnrool',
                element: <InstructorEnrool></InstructorEnrool>
            },
            {
                path: 'selectedclass',
                element: <Sleceted></Sleceted>
            },
            {
                path: 'enroolclass',
                element: <EnroledClasses></EnroledClasses>
            }
        ]
    }
]);

export default router;
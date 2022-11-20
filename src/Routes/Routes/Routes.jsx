import { createBrowserRouter, } from "react-router-dom";
import Main from '../../Layout/Main/Main';
import Appointment from "../../Pages/Appointment/Appointment/Appointment";
import Home from '../../Pages/Home/Home/Home';
import Login from '../../Pages/Login/Login';
import SignUp from "../../Pages/SignUp/SignUp";
import Dashboard from '../../Pages/DashBoard/DashBoard/DashBoard';
import PrivateRoute from '../../Routes/PrivateRoute/PrivateRoute';
import DashboardLayout from '../../Layout/DashBoardLayout/DashBoardLayout';
import DashBoardLayout from "../../Layout/DashBoardLayout/DashBoardLayout";
import DashBoard from "../../Pages/DashBoard/DashBoard/DashBoard";
import MyAppoinment from "../../Layout/MyAppoinment/MyAppoinment";


const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/signup',
                element: <SignUp></SignUp>
            },
            {
                path: '/appointment',
                element: <Appointment></Appointment>
            }
        ]
    },
    {
        path: '/dashboard',
        element: <PrivateRoute><DashBoardLayout></DashBoardLayout></PrivateRoute>,
        children: [
            {
                path: '/dashboard',
                element: <MyAppoinment></MyAppoinment>
            }
        ]
    }


]);


export default router;
import { createBrowserRouter, } from "react-router-dom";
import Main from '../../Layout/Main/Main';
import Home from '../../Pages/Home/Home/Home';
import Login from '../../Pages/Login/Login';
import SignUp from "../../Pages/SignUp/SignUp";
import PrivateRoute from '../../Routes/PrivateRoute/PrivateRoute';
import DashBoardLayout from "../../Layout/DashBoardLayout/DashBoardLayout";
import DashBoard from "../../Pages/DashBoard/DashBoard/DashBoard";
import { async } from "@firebase/util";
import DisplayError from "../../Shared/DisplayError/DisplayError";


const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        errorElement: <DisplayError></DisplayError>,
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
        
        ]
    },
    {
        path: '/dashboard',
        element: <PrivateRoute><DashBoardLayout></DashBoardLayout></PrivateRoute>,
        errorElement: <DisplayError></DisplayError>,
        children: [
        ]
    }


]);


export default router;
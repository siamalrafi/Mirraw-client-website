import { createBrowserRouter, } from "react-router-dom";
import Main from '../../Layout/Main/Main';
import Home from '../../Pages/Home/Home/Home';
import Login from '../../Pages/Login/Login';
import SignUp from "../../Pages/SignUp/SignUp";
import DisplayError from "../../Shared/DisplayError/DisplayError";
import SingleCategory from "../../Pages/SingleCategory/SingleCategory";


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
                path: '/category/:id',
                element: <SingleCategory></SingleCategory>,
                loader: ({ params }) => fetch(`http://localhost:5000/products/${params.id}`)
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
    // {
    //     path: '/dashboard',
    //     element: <PrivateRoute><DashBoardLayout></DashBoardLayout></PrivateRoute>,
    //     errorElement: <DisplayError></DisplayError>,
    //     children: [
    //     ]
    // }


]);


export default router;
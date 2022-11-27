import { createBrowserRouter, } from "react-router-dom";
import Main from '../../Layout/Main/Main';
import Home from '../../Pages/Home/Home/Home';
import Login from '../../Pages/Login/Login';
import SignUp from "../../Pages/SignUp/SignUp";
import DisplayError from "../../Shared/DisplayError/DisplayError";
import SingleCategory from "../../Pages/SingleCategory/SingleCategory";
import PrivateRoute from "../PrivateRoute/PrivateRoute";
import DashBoardLayout from "../../Layout/DashBoardLayout/DashBoardLayout";
import Blogs from "../../Pages/Blogs/Blogs";
import AddProduct from "../../Pages/DashBoard/AddProduct/AddProduct";
import AllBuyer from "../../Pages/DashBoard/AllBuyer/AllBuyer";
import AllSeller from "../../Pages/DashBoard/AllSeller/AllSeller";
import MyBooking from "../../Pages/DashBoard/MyBooking/MyBooking";
import MyProducts from "../../Pages/DashBoard/MyProducts/MyProducts";
import ReportedProducts from "../../Pages/DashBoard/ReportedProducts/ReportedProducts";
import ReportedSeller from "../../Pages/DashBoard/ReportedSeller/ReportedSeller";


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
                element: <PrivateRoute>
                    <SingleCategory></SingleCategory>
                </PrivateRoute>,
                loader: ({ params }) =>
                    fetch(`http://localhost:5000/products/${params.id}`)
            },
            {
                path: '/blogs',
                element: <Blogs></Blogs>
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
            {
                path: '/dashboard/mybooking',
                element: <MyBooking></MyBooking>
            },
            {
                path: '/dashboard/',
                element: <MyProducts></MyProducts>
            },
            {
                path: '/dashboard/addproduct',
                element: <AddProduct></AddProduct>
            },
            {
                path: '/dashboard/allbuyer',
                element: <AllBuyer></AllBuyer>
            },
            {
                path: '/dashboard/allseller',
                element: <AllSeller></AllSeller>
            },
            {
                path: '/dashboard/reportedproducts',
                element: <ReportedProducts></ReportedProducts>
            },
            {
                path: '/dashboard/reportedsellers',
                element: <ReportedSeller></ReportedSeller>
            },
        ]
    }


]);


export default router;
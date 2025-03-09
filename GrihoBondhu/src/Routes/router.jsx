import Home from "../pages/Home";
import { createBrowserRouter } from 'react-router-dom';
import MainLayout from './../layout/MainLayout';
import Services from "../pages/Services";
import Login from "../pages/Login";
import ContactPage from '../pages/Contact'
import BookingPage from "../pages/BookingPage";
import About from "../pages/About";
import ServiceDetailsPage from "../pages/Details";
 


const mainRoutes =[
    { path: "/", element: <Home /> },
    { path:"/services", element:<Services/>},
    { path:"/login", element:<Login/>},
    { path: "/contact",element:<ContactPage/>},
    { path:"/booking/:serviceId", element:<BookingPage/>},
    { path:"/about", element:<About/>},
    { path:"/details/:serviceId", element:<ServiceDetailsPage/>},
 
];

const router = createBrowserRouter([

    {
        path: "/",
        element: <MainLayout/>,
        children:mainRoutes,
    },
]);

export default router;
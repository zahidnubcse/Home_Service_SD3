import Home from "../pages/Home";
import { createBrowserRouter } from 'react-router-dom';
import MainLayout from './../layout/MainLayout';
import Services from "../pages/Services";
import Login from "../pages/Login";
import ContactPage from '../pages/Contact'
import BookingPage from "../pages/BookingPage";
import About from "../pages/About";


const mainRoutes =[
    { path: "/", element: <Home /> },
    { path:"/services", element:<Services/>},
    { path:"/login", element:<Login/>},
    { path: "/contact",element:<ContactPage/>},
    { path:"/booking", element:<BookingPage/>},
    { path:"/about", element:<About/>}
];

const router = createBrowserRouter([

    {
        path: "/",
        element: <MainLayout/>,
        children:mainRoutes,
    },
]);

export default router;
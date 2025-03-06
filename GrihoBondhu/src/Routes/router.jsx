import Home from "../pages/Home";
import { createBrowserRouter } from 'react-router-dom';
import MainLayout from './../layout/MainLayout';
import Services from "../pages/Services";
import Login from "../pages/Login";


const mainRoutes =[
    { path: "/", element: <Home /> },
    { path:"/services", element:<Services/>},
    { path:"/login", element:<Login/>}
];

const router = createBrowserRouter([

    {
        path: "/",
        element: <MainLayout/>,
        children:mainRoutes,
    },
]);

export default router;
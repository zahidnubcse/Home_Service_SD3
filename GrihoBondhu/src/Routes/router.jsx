import Home from "../pages/Home";
import { createBrowserRouter } from 'react-router-dom';
import MainLayout from './../layout/MainLayout';
import Services from "../pages/Services";


const mainRoutes =[
    { path: "/", element: <Home /> },
    { path:"/services", element:<Services/>}
];

const router = createBrowserRouter([

    {
        path: "/",
        element: <MainLayout/>,
        children:mainRoutes,
    },
]);

export default router;
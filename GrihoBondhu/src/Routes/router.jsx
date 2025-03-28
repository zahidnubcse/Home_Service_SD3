import Home from "../pages/Home";
import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import Services from "../pages/Services";
import Login from "../pages/Login";
import ContactPage from "../pages/Contact";
import BookingPage from "../pages/BookingPage";
import About from "../pages/About";
import ServiceDetailsPage from "../pages/Details";
import ProtectedRoute from "../components/ProtectedRoute"; // Import ProtectedRoute

const mainRoutes = [
  { path: "/", element: <Home /> },
  { path: "/login", element: <Login /> },
  { path: "/contact", element: <ContactPage /> },
  { path: "/about", element: <About /> },

  // Protected Routes
  {
    path: "/services",
    element: <ProtectedRoute />, // Protect services page
    children: [{ path: "/services", element: <Services /> }],
  },
  {
    path: "/booking/:serviceId",
    element: <ProtectedRoute />, // Protect booking page
    children: [{ path: "/booking/:serviceId", element: <BookingPage /> }],
  },
  {
    path: "/details/:serviceId",
    element: <ProtectedRoute />, // Protect service details page
    children: [{ path: "/details/:serviceId", element: <ServiceDetailsPage /> }],
  },
];

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: mainRoutes,
  },
]);

export default router;

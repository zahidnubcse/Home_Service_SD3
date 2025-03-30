import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Outlet } from "react-router-dom";
import { ToastContainer } from 'react-toastify'; // ✅ Import ToastContainer
import 'react-toastify/dist/ReactToastify.css'; // ✅ Import Toastify CSS

const MainLayout = () => {
  return (
    <div>
      <div>
        <Navbar />
        <Outlet />  {/* Renders the nested routes */}
      </div>
      
      {/* ToastContainer for global toasts */}
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />

      <Footer />
    </div>
  );
};

export default MainLayout;

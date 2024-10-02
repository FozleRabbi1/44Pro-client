import { Outlet } from "react-router-dom";
import NavBar from "../../shared/NavBar/navBar";
import Footer from "../../shared/Footer/Footer";

const MainLayout = () => {
    return (
        <div>
            
            <div className="bg-white" >
            <NavBar  />
            </div>
            <Outlet />
            <Footer />
        </div>
    );
};

export default MainLayout;
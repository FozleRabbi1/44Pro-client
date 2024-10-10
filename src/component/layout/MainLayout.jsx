import { Outlet } from "react-router-dom";
import NavBar from "../../shared/NavBar/navBar";
import Footer from "../../shared/Footer/Footer";

const MainLayout = () => {
    return (
        <div className="bg-white text-black">
            <NavBar />
            <Outlet />
            <Footer />
        </div>
    );
};

export default MainLayout;
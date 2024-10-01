import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../component/layout/MainLayout";
import Home from "../pages/home/Home";
import StockProducts from "../pages/StockProducts/StockProducts";
import TrendingDesigns from './../pages/TrendingDesigns/TrendingDesigns';
import Team44 from './../pages/Team44/Team44';
import HelpCenter from './../pages/HelpCenter/HelpCenter';
import CustomBuilder from "../pages/customeBuilder/CustomBuilder";

const routes = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout />,
        children: [
            {
                path: "/",
                element: <Home />
            },
            {
                path: "/stockProducts",
                element: <StockProducts />
            },
            {
                path: "/trendingDesigns",
                element: <TrendingDesigns />
            },
            {
                path: "/team",
                element: <Team44 />
            },
            {
                path: "/help-center",
                element: <HelpCenter />
            },
            {
                path: "/customeBuilder",
                element: <CustomBuilder />
            },
        ]
    }
])



export default routes;
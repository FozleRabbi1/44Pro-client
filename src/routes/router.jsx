import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../component/layout/MainLayout";
import Home from "../pages/home/Home";
import StockProducts from "../pages/StockProducts/StockProducts";
import TrendingDesigns from './../pages/TrendingDesigns/TrendingDesigns';
import Team44 from './../pages/Team44/Team44';
import HelpCenter from './../pages/HelpCenter/HelpCenter';
import CustomBuilder from "../pages/customeBuilder/CustomBuilder";
import Baseball from "../pages/customeBuilder/baseball/Baseball";
import Infield from "../pages/customeBuilder/infield/Infield";
import Pro44 from "../pages/customeBuilder/pro-44/Pro44";
import Registration from "../pages/auth/registration/Registration";
import Login from "../pages/auth/login/Login";
import AllUsers from "../pages/allUser/AllUsers";

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
                element: <CustomBuilder />,
            },
            {
                path: "/customeBuilder/baseball",
                element: <Baseball />
            },
            {
                path: "/customeBuilder/baseball/infield",
                element: <Infield />
            },
            {
                path: "/customeBuilder/baseball/infield/Pro44",
                element: <Pro44 />
            }
        ]
    },
    { path : "/login", element : <Login/> },
    { path : "/registration", element : <Registration/> },
    { path : "/all-Users", element : <AllUsers/> },
])



export default routes;
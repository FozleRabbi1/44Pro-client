import { FcGoogle } from "react-icons/fc";
import { Link } from "react-router-dom";
import car from "./../../assets/car.svg"
import mainLogo from "./../../assets/mainLogo.svg"
import { FaShoppingCart } from "react-icons/fa";


const NavBar = () => {
    return (
        <div >

            <div>
                <h2 className="bg-gray-200 text-center py-3 text-[22px] font-[550] opacity-90">

                    <img src={car} alt="" className="size-5 inline-block mr-3" />
                    FREE USA SHIPPING EVERYDAY
                    <Link to="/customeBuilder" className="ml-4 text-[16px] font-normal underline ">Start Your Custom</Link> </h2>
            </div>

            <div className="navbar bg-base-100 max-w-[1536px] mx-auto">

                <div className="navbar-start  w-[10%]">

                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor">
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h8m-8 6h16" />
                            </svg>
                        </div>
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                            <li><a>Item 1</a></li>
                            <li>
                                <a>Parent</a>
                                <ul className="p-2">
                                    <li><a>Submenu 1</a></li>
                                    <li><a>Submenu 2</a></li>
                                </ul>
                            </li>
                            <li><a>Item 3</a></li>
                        </ul>
                    </div>

                    <li className="list-none"> <Link to="/">
                        <img src={mainLogo} alt="" />
                    </Link> </li>


                </div>

                <div className="navbar-center hidden lg:flex  w-[60%]">

                    <ul className="menu menu-horizontal px-1 text-[1rem]">

                        <li className="mr-3"> <Link> Custom Crafted </Link> </li>
                        <li className="mr-3" > <Link to="/stockProducts">Stock Products</Link> </li>
                        <li className="mr-3" > <Link to="/trendingDesigns">Trending Designs</Link> </li>
                        <li className="mr-3" > <Link to="/team">Team 44</Link> </li>
                        <li className="mr-3" > <Link to="/help-center">Help Center</Link> </li>
                        <li className="mr-3" > <Link to="/customeBuilder"
                            className="bg-gray-800 text-white hover:bg-gray-700 focus-within:bg-black focus-within:text-white py-3 "
                        > <FcGoogle className="text-[16px]" /> Custome Builder</Link> </li>

                    </ul>

                </div>

                <div className="navbar-end w-[30%]">
                    <ul className="flex items-center text-[1rem] ">
                        <li className="mr-3" > My Account </li>
                        <li className="mr-3 relative" >
                            <FaShoppingCart className="text-[2rem]" />
                            <span className="bg-sky-600 text-white size-5 block text-[16px] flex justify-center items-center rounded-full absolute -top-2 -right-2 " >0</span>
                        </li>
                    </ul>
                </div>


            </div>
        </div>
    );
};

export default NavBar;
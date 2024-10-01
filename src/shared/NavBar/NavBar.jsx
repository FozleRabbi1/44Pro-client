import { FcGoogle } from "react-icons/fc";
import { Link } from "react-router-dom";


const NavBar = () => {
    return (
        <div>

            <div>
                <h2 className="bg-red-50 text-center py-4 text-xl font-[500]">FREE USA SHIPPING EVERYDAY
                    <Link to="/customeBuilder" className="ml-4 text-[16px] font-normal underline ">Start Your Custom</Link> </h2>
            </div>

            <div className="navbar bg-base-100">

                <div className="navbar-start">
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
                    <a className="btn btn-ghost text-xl">Logo</a>
                </div>

                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">

                        <li> <Link className="text-inherit bg-transparent border-none"  to="/stockProducts">Stock Products</Link> </li>
                        <li> <Link className=""  to="/trendingDesigns">Trending Designs</Link> </li>
                        <li> <Link className=""  to="/team">Team 44</Link> </li>
                        <li> <Link className=""  to="/help-center">Help Center</Link> </li>
                        <li > <Link to="/customeBuilder"
                            className="bg-gray-800 text-white hover:bg-gray-700 focus-within:bg-black focus-within:text-white "
                        > <FcGoogle className="text-[16px]" /> Custome Builder</Link> </li>

                    </ul>
                </div>
                <div className="navbar-end">
                    <a className="btn">Button</a>
                </div>
            </div>

        </div>
    );
};

export default NavBar;

import { Link } from "react-router-dom";
import DemoImge from "./../../../assets/44pro/pro-44.png"
import { FcGoogle } from "react-icons/fc";

const Infield = () => {
    return (
        <div className="max-w-[1536px] mx-auto" >

            <h2 className="text-[60px] font-bold text-black text-center py-10 ">Baseball = Infield</h2>

            <div className="grid grid-cols-3 gap-10 mb-10">

                <div className="border p-5">
                    <img className="" src={DemoImge} alt="" />
                    <div className="flex justify-between">
                        <div>
                            <p>Pro 44</p>
                            <p className="bg-yellow-200 px-1 rounded-md">Signature Series</p>
                        </div>

                        <div>
                            <p>$249</p>
                            <p className="bg-gray-600 px-1 rounded-md text-white">Pro Japan Kip</p>
                        </div>
                    </div>

                    <h2 className="w-[80%]">Our most popular glove of all time and the most customizable!</h2>

                    <Link to="/customeBuilder/baseball/infield/Pro44" className="bg-yellow-500 w-full py-4 rounded-md mt-3 text-white font-light text-xl block text-center flex items-center justify-center" > <FcGoogle className="text-[16px] mr-3" /> Customize</Link>
                </div>

            </div>



        </div>
    );
};

export default Infield;
import { Link } from "react-router-dom";
import DemoImge from "./../../assets/44pro/pro-44.png"


const CustomBuilder = () => {
    return (
        <div className="bg-gray-200">

            <div className="max-w-[1536px] mx-auto" >
                <h2 className="text-[60px] font-bold text-black text-center py-10 ">Custom Builder</h2>

                <div className="grid grid-cols-4 gap-10">

                    <div className="border p-6 rounded-md bg-white" >
                        <img className="" src={DemoImge} alt="" />
                        <h2 className="text-3xl font-[400] " >Baseball Gloves</h2>
                        <Link to="/customeBuilder/baseball" className="bg-yellow-500 w-full py-4 rounded-md mt-3 text-white font-light text-xl block text-center" >Select</Link>
                    </div>

                    <div className="border p-2" >
                        <img className="" src={DemoImge} alt="" />
                        <h2>Baseball Gloves</h2>
                        <button>Select</button>
                    </div>

                    <div className="border p-2" >
                        <img className="" src={DemoImge} alt="" />
                        <h2>Baseball Gloves</h2>
                        <button>Select</button>
                    </div>

                    <div className="border p-2" >
                        <img className="" src={DemoImge} alt="" />
                        <h2>Baseball Gloves</h2>
                        <button>Select</button>
                    </div>



                </div>
            </div>




         







            <h2>this is custome builder</h2>

        </div>
    );
};

export default CustomBuilder;
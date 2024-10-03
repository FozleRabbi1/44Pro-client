import { Link } from "react-router-dom";
import BaseBallField from "../../../assets/44pro/field.png"


const Baseball = () => {
    return (
        <div className="max-w-[1536px] mx-auto" >

            <h2 className="text-[60px] font-bold text-black text-center py-10 ">Baseball</h2>

            <div className="grid grid-cols-3 gap-10 mb-10">

                <div className="border p-6 rounded-md bg-white" >
                    <img className="" src={BaseBallField} alt="" />
                    <h2 className="text-3xl font-[400] " >Infield</h2>
                    <Link to="/customeBuilder/baseball/infield" className="bg-yellow-500 w-full py-4 rounded-md mt-3 text-white font-light text-xl block text-center" >Select</Link>
                </div>

                <div className="border p-2" >
                    <img className="" src={BaseBallField} alt="" />
                    <h2>Baseball Gloves</h2>
                    <button>Select</button>
                </div>

                <div className="border p-2" >
                    <img className="" src={BaseBallField} alt="" />
                    <h2>Baseball Gloves</h2>
                    <button>Select</button>
                </div>


            </div>

        </div>
    );
};

export default Baseball;
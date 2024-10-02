import redBorder from "./../../../assets/redBordar.svg"
import Homepage_new from "../../../assets/44pro/Homepage_new.jpg"
import saleblock_speedcustom from "../../../assets/44pro/saleblock_speedcustom.jpg"

const PlayersChoose = () => {
    return (
        <div className="py-6 max-w-[1536px] mx-auto ">
            <div className="">
                <h2 className="text-center">Always Custom Since 2011</h2>
                <h2 className="text-5xl text-center font-bold">Over
                    <span className="inline-block ml-2">
                        500,000
                        <img src={redBorder} alt="" className="w-[200px]" />
                    </span> Players Choose 44</h2>

            </div>
            <div className="grid grid-cols-2 mt-5">
                <div className="group">
                    <img src={Homepage_new} className="w-[95%] hover:opacity-90 mb-2 " alt="" />
                    <h2 className="text-red-500 text-xl" >End of Season Sale</h2>
                    <h2>Save 40% off your new custom bat while supplies last</h2>
                </div>
                <div>
                    <img src={saleblock_speedcustom} className="w-[95%] hover:opacity-90 mb-2" alt="" />
                    <h2 className="text-red-500 text-xl" >Need It Fast?</h2>
                    <h2>Get Speed Custom Infield or Outfield models in 2 weeks</h2>
                </div>
            </div>
        </div>
    );
};

export default PlayersChoose;
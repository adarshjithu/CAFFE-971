import { Armchair, Pencil } from "lucide-react";
import ArrowButton from "../../components/ui/button/ArrowButton";
import NotificationComponent from "../../components/user/Notification/NotificationComponent";

function PackageExplore() {
    return (
        <div className="px-2 py-2 lg:px-4 lg:py-4 lg:ml-24">
            {/* Top filter section */}
            <div className="w-full flex flex-wrap justify-between lg:justify-end items-center gap-x-2 gap-y-2">
                <ArrowButton arrow="left" />

                <span className="bg-white px-2 py-1 text-[11px] lg:text-xs flex items-center rounded-2xl text-green-700 shadow-sm">
                    Pure Veg
                </span>

                <span className="bg-white px-2 py-1 text-[11px] lg:text-xs flex items-center rounded-2xl text-[#B38C50] shadow-sm">
                    Non Veg
                </span>

                <span className="bg-[#004531] text-white px-2 py-1 text-[11px] lg:text-xs flex items-center rounded-2xl text-gray-700 shadow-sm">
                    <span className="bg-[#B38C50] rounded-full p-[2px]">
                        <Armchair color="white" size={12} />
                    </span>
                    Seating
                </span>

                <div className="lg:flex hidden">
                    <NotificationComponent />
                </div>
            </div>

            {/* Product card */}
            <div className="grid grid-cols-1 mt-6">
                <div   style={{ borderWidth: "0.5px", borderColor: "rgba(255,255,255,0.3)" }} className="w-full rounded-[15px] flex rounded-br-[50px] bg-[#004531]  p-4 gap-4">
                    {/* Image */}
                    <div className="h-full flex justify-center items-center">
                        <img
                            src="/products/product1.png"
                            alt="Desert Combo"
                            className="w-24 h-24 lg:w-32 lg:h-32 object-cover rounded-lg"
                        />
                    </div>

                    {/* Text content */}
                    <div className="flex flex-col justify-around flex-1 p-2 lg:p-3 lg:ml-8">
                        <div className="flex items-center gap-2 lg:gap-3">
                            <button className="bg-[#037E59] rounded-full flex items-center justify-center w-6 h-6 lg:w-8 lg:h-8">
                                <Pencil color="white" size={12} className="lg:size-4" />
                            </button>
                            <h1 className=" text-xl lg:text-3xl font-medium text-[#B38C50]">Desert Combo</h1>
                            <button className="bg-white rounded-xl px-2 py-1 text-sm "> Add On</button>
                            <button className="bg-white rounded-xl px-2 py-1 text-sm">Next</button>
                        </div>

                        <div className="flex gap-2 flex-wrap mt-2">
                            <button className="bg-[#B38C50] rounded-lg text-white px-2 py-1 text-[10px] lg:text-sm">
                                Mains (2/2)
                            </button>
                            <button className="bg-[#B38C50] rounded-lg text-white px-2 py-1 text-[10px] lg:text-sm">
                                Sides & Beverages (2/2)
                            </button>
                            <button className="bg-[#B38C50] rounded-lg text-white px-2 py-1 text-[10px] lg:text-sm">
                                Accompaniments (2/4)
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default PackageExplore;

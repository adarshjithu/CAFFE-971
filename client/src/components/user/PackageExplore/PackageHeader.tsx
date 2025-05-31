import { Pencil } from "lucide-react";
import { PackageDetailsSkeleton } from "./PackageDetailsLoading";
import NextButton from "../../ui/button/NextButton";
import { useSelector } from "react-redux";
import { IRootState } from "../../../app/store";

function PackageHeader({setModals, maxProductCount, packageData, changeTab, selectedTab, categoryData }: any) {
    const { mains, sidesAndBeverages, accompaniments } = useSelector((data: IRootState) => data?.packageSelectionData);
    return (
        <div className="grid grid-cols-1 mt-6">
            {packageData ? (
                <div
                    style={{ borderWidth: "0.5px", borderColor: "rgba(255,255,255,0.3)" }}
                    className="w-full rounded-[15px] flex flex-col lg:flex-row rounded-br-[30px] bg-[#015E43] p-4 gap-4"
                >
                    {/* Image */}
                    <div className="w-full lg:w-auto hidden lg:flex justify-center items-center">
                        <img
                            src={packageData?.image}
                            alt="Desert Combo"
                            className="w-24 h-24 sm:w-28 sm:h-28 lg:w-32 lg:h-32 object-cover rounded-lg"
                        />
                    </div>

                    {/* Text content */}
                    <div className="flex flex-col justify-around flex-1 p-2 lg:p-3">
                        <div className="flex items-center justify-center gap-2 lg:gap-3 flex-wrap">
                            <button className="bg-[#037E59] rounded-full flex items-center justify-center w-6 h-6 lg:w-8 lg:h-8">
                                <Pencil color="white" size={12} className="lg:size-4" />
                            </button>
                            <h1 className="text-lg sm:text-xl lg:text-3xl font-medium text-[#B38C50] text-center lg:text-left">
                                {packageData?.name}
                            </h1>
                            <div className="lg:flex hidden">
                                <NextButton setModals={setModals}  />
                            </div>
                        </div>

                        {/* Tabs */}
                        <div className="flex  justify-center gap-3 md:gap-5 mt-6">
                            {/* Mains */}
                            <button
                                onClick={() => changeTab("Mains")}
                                className={`group relative flex flex-col items-center w-24 md:w-28 p-3 rounded-xl transition-all duration-300 
                               ${
                                   selectedTab === "Mains"
                                       ? "border-[#004531] ring-2 ring-[#B38C50] shadow-lg"
                                       : " hover:bg-[#9c7a42] shadow-md hover:shadow-lg"
                               }
                           `}
                            >
                                <div className="relative">
                                    <img
                                        src={categoryData["Mains"]}
                                        alt="Mains"
                                        className="w-12 h-12 md:w-14 md:h-14 object-cover rounded-full border-2 border-white/80 mb-2 transition-transform group-hover:scale-110"
                                    />
                                    {selectedTab === "Mains" && (
                                        <div className="absolute -top-1 -right-1 w-5 h-5 bg-[#B38C50] rounded-full flex items-center justify-center">
                                            <div className="w-3 h-3 bg-white rounded-full"></div>
                                        </div>
                                    )}
                                </div>
                                <span className="text-white text-xs md:text-sm font-medium">Mains</span>
                                <span className="text-white/90 text-[10px] md:text-xs mt-1">
                                    {mains?.length}/{maxProductCount?.mains}
                                </span>
                                <div
                                    className={`absolute -bottom-1 h-1 w-8 rounded-full transition-all duration-300 
                                   ${selectedTab === "Mains" ? "bg-[#B38C50] scale-100" : "scale-0"}`}
                                ></div>
                            </button>

                            {/* Sides and Beverages */}
                            <button
                                onClick={() => changeTab("Sides and Beverages")}
                                className={`group relative flex flex-col items-center w-24 md:w-28 p-3 rounded-xl transition-all duration-300 
                               ${
                                   selectedTab === "Sides and Beverages"
                                       ? "border-[#004531] ring-2 ring-[#B38C50] shadow-lg"
                                       : " hover:bg-[#9c7a42] shadow-md hover:shadow-lg"
                               }
                           `}
                            >
                                <div className="relative">
                                    <img
                                        src={categoryData["Sides and Beverages"]}
                                        alt="Sides and Beverages"
                                        className="w-12 h-12 md:w-14 md:h-14 object-cover rounded-full border-2 border-white/80 mb-2 transition-transform group-hover:scale-110"
                                    />
                                    {selectedTab === "Sides and Beverages" && (
                                        <div className="absolute -top-1 -right-1 w-5 h-5 bg-[#B38C50] rounded-full flex items-center justify-center">
                                            <div className="w-3 h-3 bg-white rounded-full"></div>
                                        </div>
                                    )}
                                </div>
                                <span className="text-white text-xs md:text-sm font-medium text-center">Sides & Drinks</span>
                                <span className="text-white/90 text-[10px] md:text-xs mt-1">
                                    {sidesAndBeverages?.length}/{maxProductCount?.sidesAndBeverages}
                                </span>
                                <div
                                    className={`absolute -bottom-1 h-1 w-8 rounded-full transition-all duration-300 
                                   ${selectedTab === "Sides and Beverages" ? "bg-[#B38C50] scale-100" : "scale-0"}`}
                                ></div>
                            </button>

                            {/* Accompaniments */}
                            <button
                                onClick={() => changeTab("Accompaniments")}
                                className={`group relative flex flex-col items-center w-24 md:w-28 p-3 rounded-xl transition-all duration-300 
                               ${
                                   selectedTab === "Accompaniments"
                                       ? "border-[#004531] ring-2 ring-[#B38C50] shadow-lg"
                                       : " hover:bg-[#9c7a42] shadow-md hover:shadow-lg"
                               }
                           `}
                            >
                                <div className="relative">
                                    <img
                                        src={categoryData["Accompaniments"]}
                                        alt="Accompaniments"
                                        className="w-12 h-12 md:w-14 md:h-14 object-cover rounded-full border-2 border-white/80 mb-2 transition-transform group-hover:scale-110"
                                    />
                                    {selectedTab === "Accompaniments" && (
                                        <div className="absolute -top-1 -right-1 w-5 h-5 bg-[#B38C50] rounded-full flex items-center justify-center">
                                            <div className="w-3 h-3 bg-white rounded-full"></div>
                                        </div>
                                    )}
                                </div>
                                <span className="text-white text-xs md:text-sm font-medium text-center">Accompaniments</span>
                                <span className="text-white/90 text-[10px] md:text-xs mt-1">
                                    {accompaniments?.length}/{maxProductCount?.accompaniments}
                                </span>
                                <div
                                    className={`absolute -bottom-1 h-1 w-8 rounded-full transition-all duration-300 
                                   ${selectedTab === "Accompaniments" ? "bg-[#B38C50] scale-100" : "scale-0"}`}
                                ></div>
                            </button>
                        </div>
                    </div>

                    {/* Banner image */}
                    <div className="hidden lg:flex items-center justify-center">
                        <img src="/packageexplore/banner.png" className="h-[150px]" alt="banner" />
                    </div>
                </div>
            ) : (
                <PackageDetailsSkeleton />
            )}
        </div>
    );
}

export default PackageHeader;

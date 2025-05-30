import { useEffect, useState } from "react";
import { AddOnCard } from "./AddOnCard";
import { getAllAddOnes } from "../../../services/adminService";
import { IAddOn } from "../../../interface/IAddon";


const AddOne = ({ setShowAddonList ,handleNextToSeating}: any) => {

    
    const [addonList, setAddonList] = useState<IAddOn[]>([]);
    const [selectedFilter, setSelectedFilter] = useState("All");
   

   


    useEffect(() => {
        const fetchData = async () => {
            const res = await getAllAddOnes();
            setAddonList(res?.data?.data);
        };
        fetchData();
    }, []);

  

    return (
        <div className="fixed inset-0 z-50 bg-black/10 backdrop-blur-md flex items-center justify-center w-full h-full">
            <div className="bg-gradient-to-r from-[#004430] via-[#04845E] to-[#004430] w-full h-full p-6 lg:p-12 rounded-2xl shadow-lg overflow-hidden flex flex-col">
                {/* NEW BUTTONS ROW */}
                <div className=" w-full mb-8 flex   lg:justify-end items-center justify-center p-6 gap-x-2 gap-y-2">
                    
                    
                   <div className="flex gap-4">

                    {["All", "Pure Veg", "Non Veg"].map((filter) => (
                        <span
                        key={filter}
                        onClick={() => setSelectedFilter(filter)}
                        className={`px-2 py-2 text-[11px] lg:text-xs flex items-center rounded-2xl shadow-sm cursor-pointer transition 
                            ${selectedFilter === filter ? "bg-[#004531] text-white" : filter === "Pure Veg" ? "bg-white text-green-700" : "bg-white text-[#B38C50]"}
                            `}
                            >
                            {filter}
                        </span>
                    ))}
                    </div>
                </div>

                {/* Scrollable content */}
                <div
                    className="flex-1 overflow-y-auto pr-2"
                    style={{
                        scrollbarWidth: "none",
                        msOverflowStyle: "none",
                    }}
                >
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                        {addonList
                            ?.filter((obj: any) => {
                                if (selectedFilter == "All") return obj;
                                if (selectedFilter == "Pure Veg") return obj?.foodType == "pureVeg";
                                if (selectedFilter == "Non Veg") return obj?.foodType == "nonVeg";
                            })
                            .map((addon: IAddOn, index) => (
                                <AddOnCard key={index} addon={addon} />
                            ))}
                    </div>
                </div>

                {/* Bottom navigation buttons (unchanged) */}
                <div className=" flex justify-between gap-4">
                    <button onClick={() => setShowAddonList(false)} className="flex item-center justify-center bg-[#B38C50] text-[white] px-4 py-2 rounded-lg hover:bg-gray-200">
                       
                        Back
                    </button>
                    <button onClick={handleNextToSeating} className="bg-[#B38C50] hover:bg-[#a07c42] text-white px-4 py-2 rounded-lg">
                        Next
                        </button>
                </div>
            </div>
        </div>
    );
};

export default AddOne;

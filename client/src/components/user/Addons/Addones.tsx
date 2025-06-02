import { useEffect, useState } from "react";
import { AddOnCard } from "./AddOnCard";
import { getAllAddOnes } from "../../../services/adminService";
import { IAddOn } from "../../../interface/IAddon";
import { useNavigate } from "react-router";

const AddOne = ({ setModals }: any) => {
  const [addonList, setAddonList] = useState<IAddOn[]>([]);
  const [selectedFilter, setSelectedFilter] = useState("All");
  const navigate = useNavigate()
  useEffect(() => {
    const fetchData = async () => {
      const res = await getAllAddOnes();
      setAddonList(res?.data?.data);
    };
    fetchData();
  }, []);

  return (
    <div className="fixed inset-0 z-50 bg-black/30 backdrop-blur-sm flex items-center justify-center">
      <div className="w-[95%] w-full h-full overflow-hidden bg-gradient-to-b from-[#004430] via-[#04845E] to-[#004430] lg:p-12 shadow-lg flex flex-col">
        {/* Header (Filter Buttons) */}
        <div className="flex justify-between items-center p-4 border-b border-white/10">
          <h2 className="text-white text-lg font-semibold">Choose Add-ons</h2>
          <div className="flex gap-3">
            {["All", "Pure Veg", "Non Veg"].map((filter) => (
              <span
                key={filter}
                onClick={() => setSelectedFilter(filter)}
                className={`px-3 py-1.5 text-xs lg:text-sm rounded-2xl cursor-pointer transition whitespace-nowrap
                  ${selectedFilter === filter
                    ? "bg-[#004531] text-white"
                    : filter === "Pure Veg"
                      ? "bg-white text-green-700"
                      : "bg-white text-[#B38C50]"}
                `}
              >
                {filter}
              </span>
            ))}
          </div>
        </div>

        {/* Scrollable Body */}
        <div className="flex-1 overflow-y-auto p-4 lg:p-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6">
            {addonList
              ?.filter((obj: any) => {
                if (selectedFilter === "All") return obj;
                if (selectedFilter === "Pure Veg") return obj?.foodType === "pureVeg";
                if (selectedFilter === "Non Veg") return obj?.foodType === "nonVeg";
              })
              .map((addon: IAddOn, index) => (
                <AddOnCard key={index} addon={addon} />
              ))}
          </div>
        </div>

        {/* Footer Buttons */}
        <div className="flex justify-between items-center p-4 border-t border-white/10">
          <button
           onClick={()=>navigate(-1)}
            className="bg-[#B38C50] text-white px-4 py-2 rounded-lg hover:bg-[#a07c42]"
          >
            Back
          </button>
          <button
            onClick={()=>navigate("/tables")}
            className="bg-[#B38C50] text-white px-4 py-2 rounded-lg hover:bg-[#a07c42]"
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddOne;

import { useEffect } from "react";
import { AddOnCard } from "./AddOnCard";

const AddOne = ({ handleAddonModal ,setShowAddonList}: any) => {

  useEffect(()=>{

  },[])
  return (
    <div className="fixed inset-0 z-50 bg-black/10 backdrop-blur-md flex items-center justify-center w-full h-full">
      {/* Outer full-screen wrapper */}
      <div className="bg-gradient-to-r from-[#004430] via-[#04845E] to-[#004430] w-full h-full p-6 lg:p-12 rounded-2xl shadow-lg overflow-hidden flex flex-col">
        
        {/* Title */}
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-[26px] text-white font-semibold">Addons</h1>
        </div>

        {/* Scrollable content with scrollbar hidden on Firefox/IE/Edge */}
        <div
          className="flex-1 overflow-y-auto pr-2"
          style={{
            scrollbarWidth: 'none',  // Firefox
            msOverflowStyle: 'none', // IE 10+
          }}
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-3 gap-8">
            {[...Array(8)].map((_, index) => (
              <AddOnCard key={index} />
            ))}
          </div>
        </div>

        {/* Bottom navigation */}
        <div className="mt-6 flex justify-end gap-4">
          <button
            onClick={()=>setShowAddonList(false)}
            className="bg-white text-[#004430] px-4 py-2 rounded-lg hover:bg-gray-200"
          >
            Back
          </button>
          <button
            className="bg-[#B38C50] hover:bg-[#a07c42] text-white px-4 py-2 rounded-lg"
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddOne;

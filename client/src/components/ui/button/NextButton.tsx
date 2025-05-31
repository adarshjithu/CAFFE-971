import { ArrowRight } from "lucide-react";

function NextButton({ isActive=true ,setModals}: any) {


  return (
    <button
     onClick={()=>setModals('addon')}
      type="button"
      disabled={!isActive}
      className={`rounded-xl px-3 py-2 text-sm flex items-center gap-2 transition-all duration-200 font-medium ${
        isActive
          ? "bg-white text-black hover:shadow-md pointer-events-auto opacity-100"
          : "bg-gray-300 text-gray-600 cursor-not-allowed pointer-events-none opacity-50"
      }`}
    >
      <span
        className={`p-1 rounded-full flex items-center justify-center ${
          isActive ? "bg-[#B38C50]" : "bg-gray-500"
        }`}
      >
        <ArrowRight size={12} color="white" />
      </span>
      Next
    </button>
  );
}

export default NextButton;

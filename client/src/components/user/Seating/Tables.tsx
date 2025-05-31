import { useEffect, useState } from "react";
import { getAllTables } from "../../../services/userService";
import { ITable } from "../../../interface/ITable";
import { TableCard } from "./TableCard";
import { useSelector } from "react-redux";
import { IRootState } from "../../../app/store";



const TablesModal = ({ setModals }: any) => {
  const [tables, setTables] = useState<ITable[]>([]);
  const tableCount = useSelector((state: IRootState) => state.packageSelectionData);

  // Fetch all tables on mount
  useEffect(() => {
    const fetchTables = async () => {
      try {
        const res = await getAllTables();
        setTables(res?.data?.data || []);
      } catch (error) {
        console.error("Failed to fetch tables:", error);
      }
    };
    fetchTables();

    // Lock scroll on modal open
    document.body.style.overflow = "hidden";

    // Unlock scroll on unmount
    return () => {
      document.body.style.overflow = "auto";
    };
  }, []);

  return (
    // Modal backdrop (covers full screen)
    <div className="fixed inset-0 z-50 bg-black/10 backdrop-blur-md flex items-center justify-center w-full h-full">
      {/* Modal container */}
      <div className="bg-gradient-to-r from-[#004430] via-[#04845E] to-[#004430] w-full max-w-5xl h-[90vh] p-6 lg:p-12 rounded-2xl shadow-lg overflow-hidden flex flex-col">
        {/* Compact Header */}
        <div className="w-full mb-4 flex justify-center items-center gap-x-2 py-2 px-4">
          <h2 className="text-xl font-semibold text-white m-0">
            Tables{" "}
            <span className="ml-2 text-[#B38C50]">({tableCount?.tables?.length || 0})</span>
          </h2>
        </div>

        {/* Scrollable tables grid */}
        <div
          className="flex-1 overflow-y-auto pr-2"
          style={{
            scrollbarWidth: "none",
            msOverflowStyle: "none",
          }}
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 gap-6">
            {tables.map((table) => (
              <TableCard table={table} key={table._id} />
            ))}
          </div>
        </div>

        {/* Bottom navigation buttons */}
        <div className="flex justify-between gap-4 w-full mt-6">
          <button
            onClick={() => setModals('addon')}
            className="flex items-center justify-center bg-[#B38C50] text-white px-4 py-2 rounded-lg hover:bg-gray-200 transition"
          >
          
            <span className="ml-2">Back</span>
          </button>
          <button onClick={()=>setModals('foodStation')} className="bg-[#B38C50] hover:bg-[#a07c42] text-white px-4 py-2 rounded-lg transition">
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default TablesModal;

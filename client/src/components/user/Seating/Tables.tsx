import { useEffect, useState } from "react";
import { getAllTables } from "../../../services/userService";
import { ITable } from "../../../interface/ITable";
import { TableCard } from "./TableCard";
import { ArrowLeft } from "lucide-react";
import { useSelector } from "react-redux";
import { IRootState } from "../../../app/store";

const TablesModal = ({ setSeatingModal }: any) => {
    const [selectedFilter, setSelectedFilter] = useState("All");
    const [tables, setTables] = useState<ITable[]>([]);
    const tableCount = useSelector((data:IRootState)=>data?.packageSelectionData)
    useEffect(() => {
        const fetchData = async () => {
            const res = await getAllTables();
            setTables(res?.data?.data);
        };
        fetchData();
    }, []);

    return (
        <div className="fixed inset-0 z-50 bg-black/10 backdrop-blur-md flex items-center justify-center w-full h-full">
            <div className="bg-gradient-to-r from-[#004430] via-[#04845E] to-[#004430] w-full h-full p-6 lg:p-12 rounded-2xl shadow-lg overflow-hidden flex flex-col">
                {/* NEW BUTTONS ROW */}
                <div className=" w-full mb-8 flex flex-wrap justify-center lg:justify-center items-center p-6 gap-x-2 gap-y-2">
                  <h2 className="text-2xl font-bold text-white mb-2">
                             Tables
                            <span className="ml-2 text-[#B38C50]">
                               ({tableCount?.tables?.length})
                            </span>
                        </h2>
                   

{/* 
                    <div className="flex gap-4">
                        {["All", "Pure Veg", "Non Veg"].map((filter) => (
                            <span
                                key={filter}
                                onClick={() => setSelectedFilter(filter)}
                                className={`px-2 py-2 text-[11px] lg:text-xs flex items-center rounded-2xl shadow-sm cursor-pointer transition 
                            ${
                                selectedFilter === filter
                                    ? "bg-[#004531] text-white"
                                    : filter === "Pure Veg"
                                    ? "bg-white text-green-700"
                                    : "bg-white text-[#B38C50]"
                            }
                            `}
                            >
                                {filter}
                            </span>
                        ))}
                    </div> */}
                </div>

                {/* Scrollable content */}
                <div
                    className="flex-1 overflow-y-auto pr-2"
                    style={{
                        scrollbarWidth: "none",
                        msOverflowStyle: "none",
                    }}
                >
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {tables?.map((obj: ITable) => {
                            return <TableCard table={obj} key={obj?._id} />;
                        })}
                    </div>
                </div>

                {/* Bottom navigation buttons (unchanged) */}
                <div className=" flex justify-between gap-4 w-full">
                     <button
                        onClick={() => setSeatingModal(false)}
                        className="flex flex-row item-center justify-center bg-[#B38C50] text-[white] px-4 py-2 rounded-lg hover:bg-gray-200"
                    >
                        <ArrowLeft size={24} />
                        Back
                    </button>
                    <button className="bg-[#B38C50] hover:bg-[#a07c42] text-white px-4 py-2 rounded-lg">Next</button>
                </div>
            </div>
        </div>
    );
};

export default TablesModal;

import { useEffect, useState } from "react";
import { TableCard } from "../../components/user/Seating/TableCard";
import { getAllTables } from "../../services/userService";
import BackButton from "../../components/ui/button/BackButton";
import { Pencil } from "lucide-react";

function SeatingList() {
    const [tables, setTables] = useState([]);

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
    }, []);

    return (
        <div className="lg:ml-24 h-full min-h-screen px-4 flex flex-col">
            <div className="relative w-full  mb-4 py-2 px-4 flex items-center justify-between">
                {/* Left - Back Button */}
                <BackButton arrow="left" />
                {/* Center - Heading */}
                <h2 className="absolute left-1/2 transform -translate-x-1/2 text-xl font-semibold text-white">
                    Seating <span className="ml-2 text-[#B38C50]">({tables?.length})</span>
                </h2>

                {/* Right - Some Button */}
                <button onClick={() => alert("Do something")} className="text-white bg-[#15C48F] p-2 rounded-full hover:bg-[#a07c42] transition">
                    <Pencil size={18} />
                </button>
            </div>

            {/* Scrollable grid container */}
            <div className="flex-grow overflow-auto">
                {tables.length === 0 ? (
                    <p className="text-gray-400 text-center mt-12">No tables available.</p>
                ) : (
                    <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-6">
                        {tables.map((table: any, index: number) => (
                            <TableCard key={table.id || index} table={table} buttonVisibility={false} />
                        ))}
                    </div>
                )}
            </div>

            {/* Spacer at bottom, optional */}
            <div className="h-[200px] flex-shrink-0"></div>
        </div>
    );
}

export default SeatingList;

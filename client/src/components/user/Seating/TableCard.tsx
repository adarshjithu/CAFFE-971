import { Box, Plus, Trash } from "lucide-react";
import { ITable } from "../../../interface/ITable";
import { useDispatch, useSelector } from "react-redux";
import { removeTables, setTables } from "../../../features/user/packageSelectionSlice";
import { IRootState } from "../../../app/store";

export const TableCard = ({ table }: { table: ITable }) => {
    const dispatch = useDispatch();

    const { tables } = useSelector((data: IRootState) => data?.packageSelectionData);

    return (
        <div
            className="bg-[#015D42] lg:w-[400px] text-white relative border border-white rounded-br-[85px] rounded-[15px] p-2 shadow-lg flex items-center"
            style={{ borderWidth: "0.5px", borderColor: "rgba(255,255,255,0.3)" }}
        >
            <img src={table?.image} alt="most rated" className="w-34 h-34 rounded-lg mr-4 object-cover" />

            <div className="flex-1 min-w-0 mr-10">
                {" "}
                {/* Added right margin to prevent overlap */}
                <span className="block truncate font-medium">{table?.name}</span>
                <div className="mt-2 flex items-center gap-2 bg-[#037755] rounded-2xl px-2 py-1 w-fit text-sm">
                    <button className="bg-[#B38C50] rounded-full p-1 flex-shrink-0">
                        <Box size={18} />
                    </button>
                    <span>
                        L:{table?.length} CM W:{table?.width} CM H:{table?.height}
                    </span>
                </div>
                {/* Rate and Seats Section */}
                <div className="flex justify-between mt-3">
                    <div className="flex flex-col justify-center items-center">
                        <span className="text-[#B38C50] text-lg">Rate</span>
                        <div className="bg-[#037755] rounded-2xl px-3 py-1 mt-1 w-fit">{table?.rate} AED</div>
                    </div>

                    <div className="flex flex-col justify-center items-center mr-4 ">
                        <span className="text-[#B38C50] text-lg">Seats</span>
                        <div className="bg-[#037755] rounded-2xl px-3 py-1 mt-1 w-fit">{table?.chairCount}</div>
                    </div>
                </div>
            </div>

            {/* Plus Button - Adjusted positioning */}
            {tables?.some((obj: any) => obj == table?._id) ? (
                <div
                    onClick={() => dispatch(removeTables(table?._id))}
                    className="absolute bottom-0  right-0 bg-[#B38C50] text-white p-5 rounded-full cursor-pointer"
                >
                    <Trash color="white" size={20} />
                </div>
            ) : (
                <div onClick={() => dispatch(setTables(table?._id))} className=" absolute bottom-0 right-0 p-5 bg-white  rounded-full cursor-pointer">
                    <Plus color="black" size={20} />
                </div>
            )}
        </div>
    );
};

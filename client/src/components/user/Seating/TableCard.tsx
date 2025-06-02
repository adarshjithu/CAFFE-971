import { Box, Plus, Trash } from "lucide-react";
import { ITable } from "../../../interface/ITable";
import { useDispatch, useSelector } from "react-redux";
import { removeTables, setTables } from "../../../features/user/packageSelectionSlice";
import { IRootState } from "../../../app/store";

export const TableCard = ({
  table,
  buttonVisibility,
}: {
  table: ITable;
  buttonVisibility: boolean;
}) => {
  const dispatch = useDispatch();
  const { tables } = useSelector((data: IRootState) => data?.packageSelectionData);

  const isSelected = tables?.some((obj: any) => obj?._id === table?._id);

  return (
    <div
      className="bg-[#015D42] text-white relative border border-white rounded-br-[85px] rounded-[15px] p-3 shadow-lg flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-6"
      style={{ borderWidth: "0.5px", borderColor: "rgba(255,255,255,0.3)" }}
    >
      {/* Image */}
      <img
        src={table?.image}
        alt={table?.name}
        className="w-full sm:w-32 h-40 sm:h-32 rounded-lg object-cover"
      />

      {/* Content */}
      <div className="flex-1 min-w-0 relative">
        {/* Table name */}
        <span className="block font-medium truncate text-lg">{table?.name}</span>

        {/* Dimensions */}
        <div className="mt-2 flex items-center gap-2 bg-[#037755] rounded-2xl px-2 py-1 w-fit text-sm">
          <button className="bg-[#B38C50] rounded-full p-1 flex-shrink-0">
            <Box size={18} />
          </button>
          <span>
            L:{table?.length} CM W:{table?.width} CM H:{table?.height}
          </span>
        </div>

        {/* Rate and Seats */}
        <div className="flex justify-between mt-3 gap-4">
          <div className="flex flex-col items-center">
            <span className="text-[#B38C50] text-sm sm:text-lg">Rate</span>
            <div className="bg-[#037755] rounded-2xl px-3 py-1 mt-1 text-sm">{table?.rate} AED</div>
          </div>

          <div className="flex flex-col items-center">
            <span className="text-[#B38C50] text-sm sm:text-lg">Seats</span>
            <div className="bg-[#037755] rounded-2xl px-3 py-1 mt-1 text-sm">{table?.chairCount}</div>
          </div>
        </div>

        {/* Add/Remove Button */}
        {buttonVisibility && (
          <>
            {isSelected ? (
              <div
                onClick={() => dispatch(removeTables(table?._id))}
                className="absolute bottom-0 right-0 bg-[#B38C50] text-white p-3 sm:p-5 rounded-full cursor-pointer"
              >
                <Trash size={20} />
              </div>
            ) : (
              <div
                onClick={() => dispatch(setTables(table))}
                className="absolute bottom-0 right-0 bg-white text-black p-3 sm:p-5 rounded-full cursor-pointer"
              >
                <Plus size={20} />
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );
};

import { Plus, Trash } from "lucide-react";
import { IFoodStation } from "../../../interface/IFoodStation";
import { useState } from "react";
import FoodStationModal from "./FoodStationModal";
import { useDispatch, useSelector } from "react-redux";
import { removeLiveFoodStation, setLiveFoodStation } from "../../../features/user/packageSelectionSlice";
import { IRootState } from "../../../app/store";

export const FoodStationCard = ({ foodStation ,buttonVisibility}: { foodStation: IFoodStation,buttonVisibility:boolean }) => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const dispatch = useDispatch();
    const { liveFoodStation } = useSelector((data: IRootState) => data?.packageSelectionData);

    const isSelected = liveFoodStation?.some((obj:any)=>obj?._id==foodStation?._id);

    return (
        <div
            className="bg-[#015D42]  text-white relative border border-white rounded-br-[85px] rounded-[15px] p-2 shadow-lg flex items-center"
            style={{ borderWidth: "0.5px", borderColor: "rgba(255,255,255,0.3)" }}
        >
            {/* Image */}
            <img
                src={foodStation?.image}
                onClick={() => setIsModalOpen(true)}
                alt="food"
                className="cursor-pointer w-34 h-34 rounded-md object-cover mr-4"
            />

            {/* Text Content */}
            <div className="flex-1 min-w-0 mr-10">
                <span className="block truncate font-medium">{foodStation?.name}</span>
                <span className="block truncate text-sm text-[#B38C50]">{foodStation?.type}</span>
                <p className="truncate text-sm">{foodStation?.description}</p>
                <div className="mt-2 flex items-center gap-2 bg-[#037755] rounded-2xl px-2 py-1 w-fit text-sm">
                    <span>{foodStation?.price} AED</span>
                </div>
            </div>

            {/* Add/Remove Button */}
           {buttonVisibility&& <>
            <div
                onClick={() => (isSelected ? dispatch(removeLiveFoodStation(foodStation._id)) : dispatch(setLiveFoodStation(foodStation)))}
                className={`absolute bottom-0 right-0 p-5 rounded-full cursor-pointer transition-colors duration-200 ${
                    isSelected ? "bg-[#B38C50]" : "bg-white"
                }`}
                >
                {isSelected ? <Trash color="white" size={20} /> : <Plus color="black" size={20} />}
            </div>
                </>}

            {/* Modal */}
            {isModalOpen && <FoodStationModal foodStation={foodStation} setIsModalOpen={setIsModalOpen} />}
        </div>
    );
};


import { IFoodStation } from "../../../interface/IFoodStation";
import { Plus } from "lucide-react";

interface Props {
    foodStation: IFoodStation;
    setIsModalOpen: any;
}

const FoodStationModal = ({ foodStation, setIsModalOpen }: Props) => {
    return (
        <div
            style={{
                background: "linear-gradient(90deg, #004430, #04845E, #004430)",
              
            }}
            className="fixed inset-0 z-[9999]  bg-opacity-70 flex items-center justify-center"
        >
            <div style={{  borderWidth: "0.5px", borderColor: "rgba(255,255,255,0.3)" }} className="bg-[#015D42]  rounded-br-[85px] text-black rounded-lg p-6 max-w-md w-full relative">
                <button
                    onClick={() => setIsModalOpen((prev: boolean) => !prev)}
                    className="absolute top-2 right-2 bg-[#015D42] text-white px-2 py-1 rounded"
                >
                    Close
                </button>
                <img src={foodStation.image} alt={foodStation.name} className="w-full h-60 object-cover rounded-lg mb-4" />
                <div className="flex justify-between">
                <h2 className="text-2xl font-semibold mb-1 text-white">{foodStation.name}</h2>
                    <div className="bg-[#037755] inline-block px-3 py-1 rounded-full text-white">{foodStation.price} AED</div>
                </div>
                <p className="text-sm text-[#B38C50] mb-2">{foodStation.type}</p>
                <p className="mb-4 text-white">{foodStation.description}</p>
                <div className="w-full flex justify-center">
                    <button className="bg-[#B38C50] p-2 rounded-2xl flex">
                        <Plus color="white" className="bg-[#025E43] rounded-full mr-2"/>
                        <span className="text-white">Add</span>

                    </button>
                </div>
                
            </div>
        </div>
    );
};

export default FoodStationModal;

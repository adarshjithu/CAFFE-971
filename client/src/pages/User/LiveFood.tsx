import { useEffect, useState } from "react";
import { FoodStationCard } from "../../components/user/FoodStation/FoodStationCard";
import { IFoodStation } from "../../interface/IFoodStation";
import { getAllFoodStations } from "../../services/userService";
import { useNavigate } from "react-router";
import BackButton from "../../components/ui/button/BackButton";
import { Pencil } from "lucide-react";

function LiveFood() {
    const [foodStationList, setFoodStationList] = useState([]);
    const navigate = useNavigate();
    useEffect(() => {
        const fetchData = async () => {
            const res = await getAllFoodStations();
            setFoodStationList(res?.data?.data);
        };

        fetchData();
    }, []);
    return (
        <div className="lg:ml-24 h-screen">
            <div className="relative w-full mb-4 py-2 px-4 flex items-center justify-between">
                {/* Left - Back Button */}
                <BackButton arrow="left" />
                {/* Center - Heading */}
                <h2 className="absolute left-1/2 transform -translate-x-1/2 text-xl font-semibold text-white">
                    Food Station <span className="ml-2 text-[#B38C50]">({foodStationList?.length})</span>
                </h2>

                {/* Right - Some Button */}
                <button onClick={() => alert("Do something")} className="text-white bg-[#15C48F] p-2 rounded-full hover:bg-[#a07c42] transition">
                    <Pencil size={18}/>
                </button>
            </div>

            <div className=" grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 gap-6">
                {foodStationList?.map((foodStation: IFoodStation) => {
                    return <FoodStationCard key={foodStation?._id} buttonVisibility={false} foodStation={foodStation} />;
                })}
            </div>
        </div>
    );
}

export default LiveFood;

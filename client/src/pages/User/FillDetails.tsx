import { ArrowRight, CalendarDays, Clock, Minus, Plus } from "lucide-react";
import BackButton from "../../components/ui/button/BackButton";
import { useSelector } from "react-redux";
import { IRootState } from "../../app/store";
import { findAddonsPrice } from "../../utils/fillDetails";
import { useState } from "react";
import { useNavigate } from "react-router";

function FillDetails() {
    const { packageData, addons, liveFoodStation, tables } = useSelector((data: IRootState) => data?.packageSelectionData);
    const [questCount, setQuestCount] = useState(10);
    const navigate = useNavigate()
    const updateQuestCount = (type: string) => {
        if (type === "+" && questCount < 1500) {
            setQuestCount(prev => prev + 1);
        } else if (type === "-" && questCount > 10) {
            setQuestCount(prev => prev - 1);
        }
    };

    const handleQuestInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = parseInt(e.target.value);
        if (!isNaN(value)) {
            const clamped = Math.min(1500, Math.max(10, value));
            setQuestCount(clamped);
        } else {
            setQuestCount(10);
        }
    };

    const handleRangeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setQuestCount(parseInt(e.target.value));
    };

    return (
        <div className="lg:ml-24 px-4 py-6  h-full flex flex-col items-center">
            {/* Header */}
            <div className="w-full flex justify-between items-center mb-4">
                <BackButton arrow="left" />
                <h1 className="text-[18px] sm:text-[20px] text-white font-semibold">Fill Details</h1>
                <div className="w-6" />
            </div>

            {/* Card */}
            <div className="border border-[#15c48f] p-4 sm:p-6 w-[100%]  rounded-2xl bg-[#026749] space-y-5">
                {/* Title */}
                <h2 className="text-center text-[#B38C50] text-[22px] sm:text-[28px] font-semibold">{packageData?.name}</h2>

                {/* Date & Time */}
                <div>
                    <span className="text-[#15c48f] text-sm sm:text-base mb-2 block">Date & Time</span>
                    <div className="flex flex-wrap gap-3">
                        <label className="flex items-center gap-2 bg-[#B38C50] px-3 py-2 rounded-3xl text-white flex-1 min-w-[140px] max-w-[48%]">
                            <div className="bg-[#04845E] p-1.5 rounded-full">
                                <CalendarDays size={16} />
                            </div>
                            <input type="date" className="bg-transparent outline-none text-white text-sm w-full" />
                        </label>
                        <label className="flex items-center gap-2 bg-[#B38C50] px-3 py-2 rounded-3xl text-white flex-1 min-w-[140px] max-w-[48%]">
                            <Clock size={16} />
                            <input type="time" className="bg-transparent outline-none text-white text-sm w-full" />
                        </label>
                    </div>
                </div>

                {/* Package Price */}
                <div className="flex justify-between items-center">
                    <span className="text-[#15c48f] text-sm sm:text-base">Package Price</span>
                    <span className="text-white sm:text-base">AED {packageData?.price}</span>
                </div>
                <hr className="h-px bg-[#15C48F]/50 border-0" />

                {/* Addons */}
                <div className="flex justify-between items-center">
                    <span className="text-[#15c48f] text-sm sm:text-base">Addons</span>
                    <span className="bg-[#B38C50] text-white text-xs rounded-2xl px-2 py-1">{addons?.length} Items</span>
                    <span className="text-white sm:text-base">AED {findAddonsPrice(addons)}</span>
                </div>
                <hr className="h-px bg-[#15C48F]/50 border-0" />

                {/* Guest Count */}
                <div>
                    <div className="flex justify-between items-center">
                        <span className="text-[#15c48f] text-sm sm:text-base">Total Guests</span>
                        <div className="flex items-center gap-3">
                            <button onClick={() => updateQuestCount("-")}>
                                <Minus size={20} className="bg-[#B38C50] text-white rounded-full" />
                            </button>
                            <input
                                type="number"
                                value={questCount}
                                onChange={handleQuestInputChange}
                                min={10}
                                max={1500}
                                className="w-[80px] text-center px-2 py-1 rounded-lg bg-white text-black outline-none"
                            />
                            <button onClick={() => updateQuestCount("+")}>
                                <Plus size={20} className="bg-[#B38C50] text-white rounded-full" />
                            </button>
                        </div>
                    </div>
                    <input
                        type="range"
                        min={10}
                        max={1500}
                        value={questCount}
                        onChange={handleRangeChange}
                        className="w-full accent-[#B38C50] mt-3"
                    />
                    <div className="flex justify-between text-white text-sm mt-1">
                        <span>10</span>
                        <span>1500</span>
                    </div>
                </div>
                <hr className="h-px bg-[#15C48F]/50 border-0" />

                {/* Total Price */}
                <div className="flex justify-between items-center">
                    <span className="text-[#15c48f] text-sm sm:text-base">Total Price</span>
                    <span className="text-[#B38C50] text-sm sm:text-base">20%</span>
                    <div className="text-end">
                        <span className="text-gray-400 line-through text-sm block">AED 100</span>
                        <span className="text-white text-sm block">AED {parseInt(packageData?.price) * questCount}</span>
                    </div>
                </div>
                <hr className="h-px bg-[#B38C50] border-0" />

                {/* Seating Section */}
                <div>
                    <h3 className="text-[#B38C50] text-[20px] text-center mb-3">Seating</h3>
                    <div className="flex gap-4 items-center">
                        <img src={tables[0]?.image} alt="table" className="w-[100px] h-auto rounded-lg" />
                        <div className="text-white space-y-1">
                            <h4>{tables[0]?.name}</h4>
                            <p>No of Seats: 16</p>
                            <div className="bg-[#04845E] text-center rounded-2xl py-1 w-[100px]">AED 100</div>
                        </div>
                    </div>
                </div>
                <hr className="h-px bg-[#15C48F]/50 border-0" />

                {/* Food Station Section */}
                <div>
                    <h3 className="text-[#B38C50] text-[20px] text-center mb-3">Food Station</h3>
                    <div className="flex gap-4 items-center">
                        <img src={liveFoodStation[0]?.image} alt="food" className="w-[100px] h-auto rounded-lg" />
                        <div className="text-white space-y-1">
                            <h4>{liveFoodStation[0]?.name}</h4>
                            <p>{liveFoodStation[0]?.description}</p>
                            <div className="bg-[#04845E] text-center rounded-2xl py-1 w-[100px]">AED 100</div>
                        </div>
                    </div>
                </div>

                {/* Address Button */}
                <div className="flex justify-center">
                    <button onClick={()=>navigate('/address')} className="bg-[#B38C50] text-white rounded-2xl px-4 py-2 flex items-center gap-2">
                        <ArrowRight color="white" className="bg-[#026749] p-1 rounded-full" size={20} />
                        Add Address
                    </button>
                </div>
            </div>
                <div className="h-[200px] lg:hidden">

                </div>
        </div>
    );
}

export default FillDetails;

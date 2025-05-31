import { useSelector } from "react-redux";
import { IRootState } from "../../../app/store";
import ProgressBar from "./ProgressBar";
import NextButton from "../../ui/button/NextButton";

function FixedMobileBottombar({ packageData }: any) {
    const { mains, accompaniments, sidesAndBeverages } = useSelector((data: IRootState) => data?.packageSelectionData);
    return (
        <div
            className="hidden fixed bottom-0 left-0 w-full h-[75px] justify-around bg-[#015E43] shadow-inner flex items-center  text-white"
            style={{ zIndex: 1000 }}
        >
            <div className="flex flex-col justify-center">
                <span className="text-sm font-medium text-[#B38C50] uppercase tracking-wide">Price per guest</span>
                <span className="text-xl font-bold text-white">{packageData?.price} / Guest</span>
            </div>

            {mains?.length+accompaniments?.length+sidesAndBeverages?.length==8?<NextButton/>:<ProgressBar count={mains?.length + accompaniments?.length + sidesAndBeverages.length} />}
        </div>
    );
}

export default FixedMobileBottombar;

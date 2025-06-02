import { useSelector } from "react-redux";
import { IRootState } from "../../../app/store";
import ProgressBar from "./ProgressBar"; // Should be the rectangle version
import NextButton from "../../ui/button/NextButton";

function FixedMobileBottombar({ packageData }: any) {
  const { mains, accompaniments, sidesAndBeverages } = useSelector(
    (data: IRootState) => data?.packageSelectionData
  );

  const totalCount =
    mains?.length + accompaniments?.length + sidesAndBeverages?.length;

  return (
    <div
      className="lg:hidden fixed bottom-0 left-0 w-full h-[75px] justify-around bg-[#015E43] shadow-inner flex items-center text-white"
      style={{ zIndex: 1000 }}
    >
      <div className="flex flex-col justify-center">
        <span className="text-xs font-medium text-[#B38C50] uppercase tracking-wide">
          Price per guest
        </span>
        <span className="text-base font-semibold text-white">
          {packageData?.price} / Guest
        </span>
      </div>

      {totalCount === 8 ? (
        <NextButton />
      ) : (
        <ProgressBar count={totalCount} />
      )}
    </div>
  );
}

export default FixedMobileBottombar;

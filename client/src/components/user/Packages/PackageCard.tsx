import { ArrowRight } from "lucide-react";
import PureVeg from "./PureVeg";
import Star from "./Star";
import NonVeg from "./NonVeg";
import MixedProducts from "./MixedComponent";
import { useNavigate } from "react-router";

export const PackageCard = ({ packageData }: any) => {
    
    const navigate = useNavigate()
    return (
        <div onClick={()=>navigate(`/package/${packageData?._id}`)} className="cursor-pointer relative mt-24 w-full max-w-[240px] sm:max-w-[220px] xs:max-w-[180px] mx-auto">
            <div
                className="bg-[#037956]  text-white border rounded-[15px] rounded-br-[70px] pt-16 pb-4 px-4 shadow-lg"
                style={{ borderWidth: "0.5px", borderColor: "rgba(255,255,255,0.3)" }}
            >
                {packageData?.foodType=='pureVeg'?(<PureVeg/>):packageData?.foodType=='nonVeg'?(<NonVeg/>):<MixedProducts/>}

                <h3 className="text-base xs:text-sm">{packageData?.name}</h3>
                <Star />
                <p className="text-base xs:text-sm">{packageData?.price} AED</p>
            </div>

            {/* Image centered above card */}
            <img src={packageData?.image} alt="food" className="w-36 h-36 xs:w-28 xs:h-28 rounded-full absolute -top-16 left-1/2 -translate-x-1/2" />

            {/* Arrow button */}
            <div className="absolute bottom-2 right-2 bg-[#b38c50] p-3 xs:p-2 rounded-full cursor-pointer">
                <ArrowRight color="white" size={24} className="xs:w-5 xs:h-5" />
            </div>
        </div>
    );
};

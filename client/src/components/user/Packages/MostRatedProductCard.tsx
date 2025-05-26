import { ArrowRight } from "lucide-react";
import PureVeg from "./PureVeg";
import Star from "./Star";

export const MostRatedProductCard = () => {
    return (
        <div
            className="lg:w-[300px] text-white relative border border-white rounded-br-[70px] rounded-[15px] p-4 shadow-lg flex items-center"
            style={{ borderWidth: "0.5px", borderColor: "rgba(255,255,255,0.3)" }}
        >
            <img src="/products/product2.png" alt="most rated" className="w-24 h-24 rounded-full  mr-4" />
            <div>
                <PureVeg />
                <p className="text-white/70">Deluxe Package</p>
                <Star />
                <p className="font-bold text-sm">100 AED</p>
            </div>
            <div className="absolute bottom-2 right-2 bg-[#b38c50] p-3 rounded-full cursor-pointer">
                <ArrowRight color="white" size={24} />
            </div>
        </div>
    );
};

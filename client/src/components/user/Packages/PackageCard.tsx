import { ArrowRight } from "lucide-react";
import PureVeg from "./PureVeg";
import Star from "./Star";

export const PackageCard = ({ title, price }: { title: string; price: string }) => {
    return (
        <div className="relative mt-24 w-full max-w-[240px] mx-auto">
            <div
                className="bg-transparent text-white border rounded-[30px] rounded-br-[70px] pt-16 pb-4 px-4 shadow-lg"
                style={{ borderWidth: "0.5px", borderColor: "rgba(255,255,255,0.3)" }}
            >
                <PureVeg />
                <h3 className=" text-base">{title}</h3>

                <Star />
                <p className=" text-base ">100 AED</p>
            </div>
            <img src={`/products/product1.png`} alt="food" className="w-36 h-36 rounded-full absolute -top-16 left-6" />

            <div className="absolute bottom-2 right-2 bg-[#b38c50] p-3 rounded-full cursor-pointer">
                <ArrowRight color="white" size={24} />
            </div>
        </div>
    );
};

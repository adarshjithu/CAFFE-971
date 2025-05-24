import { ArrowRight } from "lucide-react";
import PureVeg from "./PureVeg";

export const PackageCard = ({ title }: { title: string }) => {
  return (
    <div className="relative mt-24 w-full max-w-[240px] mx-auto">
      <div className="bg-transparent text-white border border-white rounded-[30px] rounded-br-[100px] pt-16 pb-4 px-4 shadow-lg" style={{ borderWidth: "0.5px" }}>
        <PureVeg />
        <h3 className="text-base">{title}</h3>
      </div>

      <img
        src={`/products/product1.png`}
        alt="food"
        className="w-36 h-36 rounded-full absolute -top-16 left-6"
      />

      <div className="absolute bottom-2 right-2 bg-[#b38c50] p-3 rounded-full">
        <ArrowRight color="white" size={24} />
      </div>
    </div>
  );
};

import {  Plus, Trash } from "lucide-react";
import PureVeg from "./PureVeg";
import NonVeg from "./NonVeg";
import { IProduct } from "../../../interface/IProduct";

export const ProductCard = ({
  index,
  product,
}: {
  index: number;
  product: IProduct;
}) => {
  return (
    <div className="relative mt-24 w-full max-w-[240px] sm:max-w-[220px] xs:max-w-[180px] mx-auto">
      {/* Card */}
      <div
        className="bg-[#037956] text-white border rounded-[15px] rounded-br-[70px] pt-24 pb-4 px-4 shadow-lg"
        style={{ borderWidth: "0.5px", borderColor: "rgba(255,255,255,0.3)" }}
      >
        {/* Food Type Icon */}
        {product?.type === "nonVeg" ? <NonVeg /> : <PureVeg />}

        {/* Product Title */}
        <h3 className="text-base xs:text-sm mt-4 ">{product?.name}</h3>
      </div>

      {/* Floating Image */}
      <img
        src={product?.image}
        alt="food"
        className="w-32 h-32 xs:w-24 xs:h-24 rounded-full absolute -top-16 left-1/2 -translate-x-1/2 object-cover border-4 border-white"
      />

      {/* Action Button */}
      {index % 2 === 0 ? (
        <div className="absolute bottom-2 right-2 bg-[#b38c50] p-3 xs:p-2 rounded-full cursor-pointer">
          <Trash color="white" size={24} className="xs:w-5 xs:h-5" />
        </div>
      ) : (
        <div className="absolute bottom-2 right-2 bg-white p-3 xs:p-2 rounded-full cursor-pointer">
          <Plus color="black" size={24} className="xs:w-5 xs:h-5" />
        </div>
      )}
    </div>
  );
};

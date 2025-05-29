import { Plus, Trash } from "lucide-react";
import PureVeg from "./PureVeg";
import NonVeg from "./NonVeg";
import { IProduct } from "../../../interface/IProduct";
import { useDispatch, useSelector } from "react-redux";
import { IRootState } from "../../../app/store";
import { useState } from "react";
import toast from "react-hot-toast";
import { removeFromAccompaniments, removeFromMain, removeFromSides, setAccompaniments, setMain, setSidesAndBeverages } from "../../../features/user/packageSelectionSlice";

export const ProductCard = ({ index, product, setSelectedTab, selectedTab, maxProductCount }: any) => {
    const categories = useSelector((data: IRootState) => data?.packageSelectionData);
    const { mains, accompaniments, sidesAndBeverages } = useSelector((data: IRootState) => data?.packageSelectionData);
    const [tab, setTab] = useState(selectedTab == "Mains" ? "mains" : selectedTab == "Sides and Beverages" ? "sidesAndBeverages" : "accompaniments");
    const dispatch = useDispatch();

    // Add new product to the package category
    const addProduct = (product: string) => {
        if (selectedTab == "Mains") {
            if (mains?.length < maxProductCount?.mains) {
                dispatch(setMain(product));
                if(mains.length+1==maxProductCount?.mains){
                  setSelectedTab('Sides and Beverages')
                }
            } else {
                setSelectedTab("Sides and Beverages");
                toast.error("Maximum limit reached");
            }
        }
        if (selectedTab == "Sides and Beverages") {
            if (sidesAndBeverages?.length < maxProductCount?.sidesAndBeverages) {
                dispatch(setSidesAndBeverages(product));
                if(sidesAndBeverages.length+1==maxProductCount?.sidesAndBeverages){
                  setSelectedTab('Accompaniments')
                }
            } else {
                setSelectedTab("Accompaniments");
                toast.error("Maximum limit reached");
            }
        }
        if (selectedTab == "Accompaniments") {
            if (accompaniments?.length < maxProductCount?.accompaniments) {
                dispatch(setAccompaniments(product));
            } else {
                toast.error("Maximum limit reached");
            }
        }
    };

    // Remove product from seperate package category
    const removeProduct = (product: IProduct) => {
        if (selectedTab == "Mains") {
            dispatch(removeFromMain(product));
        }
        if (selectedTab == "Sides and Beverages") {
            dispatch(removeFromSides(product));
        }
        if (selectedTab == "Accompaniments") {
            dispatch(removeFromAccompaniments(product));
        }
    };
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
            {categories[tab]?.some((obj: any) => obj == product?._id) ? (
                <div
                    onClick={() => removeProduct(product?._id)}
                    className="absolute bottom-2 right-2 bg-[#b38c50] p-3 xs:p-2 rounded-full cursor-pointer"
                >
                    <Trash color="white" size={24} className="xs:w-5 xs:h-5" />
                </div>
            ) : (
                <div onClick={() => addProduct(product?._id)} className="absolute bottom-2 right-2 bg-white p-3 xs:p-2 rounded-full cursor-pointer">
                    <Plus color="black" size={24} className="xs:w-5 xs:h-5" />
                </div>
            )}
        </div>
    );
};

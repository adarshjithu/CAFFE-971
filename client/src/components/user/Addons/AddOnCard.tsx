import { ArrowRight, Plus, Trash } from "lucide-react";
import PureVeg from "../Packages/PureVeg";

export const AddOnCard = () => {
    return (
        <div
            className="bg-[#037956] lg:w-[300px] text-white relative border border-white rounded-br-[70px] rounded-[15px] p-4 shadow-lg flex items-center"
            style={{ borderWidth: "0.5px", borderColor: "rgba(255,255,255,0.3)" }}
        >
            <img src="/products/product2.png" alt="most rated" className="w-24 h-24 rounded-full  mr-4" />
            <div>
                <PureVeg />
                <p className="text-white/70">Deluxe Package</p>
                
                <p className="font-bold text-sm">100 AED</p>
            </div>
             <div
                    
                    className="absolute bottom-2 right-2 bg-[#b38c50] p-3 xs:p-2 rounded-full cursor-pointer"
                >
                    <Trash color="white" size={24} className="xs:w-5 xs:h-5" />
                </div>
        
                <div  className="absolute bottom-2 right-2 bg-white p-3 xs:p-2 rounded-full cursor-pointer">
                    <Plus color="black" size={24} className="xs:w-5 xs:h-5" />
                </div>
        </div>
    );
};

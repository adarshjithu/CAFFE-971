import { Plus, Trash } from "lucide-react";
import PureVeg from "../Packages/PureVeg";
import { IAddOn } from "../../../interface/IAddon";
import NonVeg from "../Packages/NonVeg";
import { useDispatch, useSelector } from "react-redux";
import { removeAddon, setAddons } from "../../../features/user/packageSelectionSlice";
import { IRootState } from "../../../app/store";

export const AddOnCard = ({ addon }: { addon: IAddOn }) => {

    const dispatch = useDispatch();
    const {addons} = useSelector((data:IRootState)=>data?.packageSelectionData)
    console.log(addons)
    return (
        <div
            className="bg-[#037956] lg:w-[300px] text-white relative border border-white rounded-br-[70px] rounded-[15px] p-4 shadow-lg flex items-center"
            style={{ borderWidth: "0.5px", borderColor: "rgba(255,255,255,0.3)" }}
        >
            <img src={addon?.image} alt="most rated" className="w-24 h-24 rounded-full  mr-4" />
            <div>
                {addon?.foodType == "pureVeg" ? <PureVeg /> : <NonVeg />}
                <p className="text-white/70">{addon?.name}</p>

                <p className="font-bold text-sm">{addon?.price}</p>
            </div>

            {addons?.some((addonId:IAddOn)=>addon?._id==addonId?._id)?
            <div onClick={()=>dispatch(removeAddon(addon?._id))} className="absolute bottom-2 right-2 bg-[#b38c50] p-3 xs:p-2 rounded-full cursor-pointer">
                <Trash color="white" size={24} className="xs:w-5 xs:h-5" />
            </div>:

            <div onClick={()=>{dispatch(setAddons(addon))}} className="absolute bottom-2 right-2 bg-white p-3 xs:p-2 rounded-full cursor-pointer">
                <Plus color="black" size={24} className="xs:w-5 xs:h-5" />
            </div>}
        </div>
    );
};

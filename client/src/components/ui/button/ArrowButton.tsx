import { ArrowLeft, ArrowRight } from "lucide-react";
import { useNavigate } from "react-router";

function ArrowButton({arrow}:{arrow:string}) {
    const navigate = useNavigate();

    return (
        <div onClick={()=>navigate(-1)} className="cursor-pointer bg-[#b38c50] p-2 rounded-full cursor-pointer">
            {arrow=='right'?<ArrowRight color="white" size={20} />:
            <ArrowLeft color="white" size={18} />}
            
        </div>
    );
}

export default ArrowButton;

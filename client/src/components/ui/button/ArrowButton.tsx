import { ArrowLeft, ArrowRight } from "lucide-react";

function ArrowButton({arrow}:{arrow:string}) {
    return (
        <div className=" bg-[#b38c50] p-2 rounded-full cursor-pointer">
            {arrow=='right'?<ArrowRight color="white" size={20} />:
            <ArrowLeft color="white" size={18} />}
            
        </div>
    );
}

export default ArrowButton;

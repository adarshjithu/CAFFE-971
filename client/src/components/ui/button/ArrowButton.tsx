import { ArrowLeft, ArrowRight } from "lucide-react";


function ArrowButton({arrow,handleArrowButton}:any) {
   

    return (
        <div onClick={()=>handleArrowButton()} className="">
            {arrow=='right'?<ArrowRight color="white" size={20} />:
            <ArrowLeft color="white" size={18} />}
            
        </div>
    );
}   

export default ArrowButton;

import { Plus } from "lucide-react"
import { useNavigate } from "react-router"


function AddOnButton({setModals}:any) {
  const navigate =useNavigate()
  return (
      <button onClick={()=>navigate("/addons")} className="bg-white rounded-2xl px-2 py-2 text-sm flex items-center gap-1">
    <span className="bg-[#B38C50] p-1 rounded-full flex items-center justify-center">
      <Plus size={12} color="white" />
    </span>
    Add On
  </button>

  )
}

export default AddOnButton

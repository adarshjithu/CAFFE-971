import { Plus } from "lucide-react"


function AddOnButton() {
  return (
      <button className="bg-white rounded-xl px-2 py-2 text-sm flex items-center gap-1">
    <span className="bg-[#B38C50] p-1 rounded-full flex items-center justify-center">
      <Plus size={12} color="white" />
    </span>
    Add On
  </button>

  )
}

export default AddOnButton

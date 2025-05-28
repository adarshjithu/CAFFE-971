import { ArrowRight } from "lucide-react"


function NextButton() {
  return (
    <button className="bg-white rounded-xl px-2 py-2 text-sm flex items-center gap-1">
    <span className="bg-[#B38C50] p-1 rounded-full flex items-center justify-center">
      <ArrowRight size={12} color="white" />
    </span>
    Next
  </button>
  )
}

export default NextButton

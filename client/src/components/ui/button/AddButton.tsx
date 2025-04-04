import { Plus } from "lucide-react";

interface IProps {
  onClick: () => void; // Fixed return type
  text: string;
}

function AddButton({ onClick, text }: IProps) {
  return (
    <div className="flex justify-end mb-4">
      <button
        onClick={onClick}
        className="inline-flex items-center gap-2 rounded-md bg-green-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-green-700 transition"
      >
        <Plus size={16} />
        {text}
      </button>
    </div>
  );
}

export default AddButton;


const AddonPromptModal = ({handleAddonModal}:any) => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/10 backdrop-blur-md">
      <div className="bg-white rounded-2xl w-11/12 max-w-sm p-6 shadow-lg relative">
        <h2 className="text-lg font-semibold text-gray-800 mb-4">
          Would you like to add some addons?
        </h2>
        <div className="flex justify-end gap-4">
          <button onClick={()=>handleAddonModal(true)} className="bg-[#004531] hover:bg-[#03614d] text-white px-4 py-2 rounded-lg text-sm">
            Yes
          </button>
          <button onClick={()=>handleAddonModal(false)} className="bg-[#B38C50] hover:bg-[#a07c42] text-white px-4 py-2 rounded-lg text-sm">
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddonPromptModal;

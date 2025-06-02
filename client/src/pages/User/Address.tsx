import { ArrowRight, Pencil, RefreshCcw } from "lucide-react";
import BackButton from "../../components/ui/button/BackButton";
import { useNavigate } from "react-router";

function Address() {
    const navigate = useNavigate()
    return (
        <>
            {/* Address Form */}
            <div className="lg:ml-54 lg:mr-24  flex justify-between">
                <BackButton arrow="left" />
                <div className="cursor-pointer bg-[#15C48F] p-2 rounded-full cursor-pointer">
                    <Pencil color="white" size={20} />
                </div>
            </div>
            <div className="lg:ml-54 lg:mr-24 border border-[#15c48f] p-4 sm:p-6  rounded-2xl bg-[#026749] space-y-4 mt-6">
                <h3 className="text-white text-[20px] text-center mb-3">Address Details</h3>
                <form className="grid grid-cols-1 sm:grid-cols-1 gap-4 ">
                    <div>
                        <label className="text-[#B38C50] block mb-1 text-sm">Full Name</label>
                        <input
                            type="text"
                            className="w-full px-3 py-2 rounded-xl bg-[#04845E] text-white placeholder-white outline-none"
                            placeholder="Enter your full name"
                        />
                    </div>
                    <div>
                        <label className="text-[#B38C50] block mb-1 text-sm">Email Address</label>
                        <input
                            type="email"
                            className="w-full px-3 py-2 rounded-xl bg-[#04845E] text-white placeholder-white outline-none"
                            placeholder="Enter your email"
                        />
                    </div>
                    <div>
                        <label className="text-[#B38C50] block mb-1 text-sm">Phone Number</label>
                        <input
                            type="tel"
                            className="w-full px-3 py-2 rounded-xl bg-[#04845E] text-white placeholder-white outline-none"
                            placeholder="Enter your phone number"
                        />
                    </div>
                    <div>
                        <label className="text-[#B38C50] block mb-1 text-sm">Address</label>
                        <input
                            type="text"
                            className="w-full px-3 py-2 rounded-xl bg-[#04845E] text-white placeholder-white outline-none"
                            placeholder="Enter your address"
                        />
                    </div>
                    <div>
                        <label className="text-[#B38C50] block mb-1 text-sm">City</label>
                        <input
                            type="text"
                            className="w-full px-3 py-2 rounded-xl bg-[#04845E] text-[#15C48F] placeholder-white outline-none"
                            placeholder="Enter your city"
                        />
                    </div>
                    <div>
                        <label className="text-[#B38C50] block mb-1 text-sm">Country</label>
                        <input
                            type="text"
                            className="w-full px-3 py-2 rounded-xl  bg-[#04845E] text-white placeholder-white outline-none"
                            placeholder="Enter your country"
                        />
                    </div>
                </form>
                    <div className="flex justify-center">
                        <button onClick={()=>navigate('/success')} className="bg-[#B38C50] text-white rounded-2xl px-4 py-2 flex items-center gap-2">
                            <ArrowRight color="white" className="bg-[#026749] p-1 rounded-full" size={20} />
                            Submit
                        </button>
                    </div>
            </div>
            <div className="h-[200px] lg:hidden"></div>
        </>
    );
}

export default Address;

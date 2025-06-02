import { Headphones, Pencil } from "lucide-react";
import BackButton from "../../components/ui/button/BackButton";

function Contact() {
    const contactOptions = [
        "Customer Services",
        "Website",
        "Whatsapp",
        "Facebook",
        "Instagram",
    ];

    return (
        <div className="h-screen px-4 py-4">
            <div className="w-full max-w-2xl mx-auto">
                {/* Header */}
                <div className="relative w-full mb-6 flex items-center justify-between">
                    {/* Left - Back Button */}
                    <BackButton arrow="left" />

                    {/* Center - Heading */}
                    <h2 className="absolute left-1/2 transform -translate-x-1/2 text-xl font-semibold text-white">
                        Contact
                    </h2>

                    {/* Right - Action Button */}
                    <button
                        onClick={() => alert("Do something")}
                        className="text-white bg-[#15C48F] p-2 rounded-full hover:bg-[#0ca078] transition"
                        aria-label="Edit Contact"
                    >
                        <Pencil size={18} />
                    </button>
                </div>

                {/* Contact Options */}
                <div className="bg-[#015D42] rounded-xl p-6 space-y-4">
                    {contactOptions.map((label, index) => (
                        <button
                            key={index}
                            className="w-full flex items-center gap-3 bg-[#B38C50] text-white rounded-2xl py-3 px-4 hover:bg-[#a07c42] transition"
                        >
                            <span className="bg-[#037251] p-1.5 rounded-full">
                                <Headphones size={20} color="white" />
                            </span>
                            {label}
                        </button>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Contact;

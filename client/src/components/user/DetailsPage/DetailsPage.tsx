import { MapPin, Package, Phone, Settings, User } from "lucide-react";
import { ChatIcon } from "../../../icons";

function DetailsPage() {
  return (
    <div className="max-w-5xl mx-auto p-6">
      <h1 className="text-2xl font-bold mb-4 text-center">My Account</h1>
      <div className="grid md:grid-cols-3 gap-4 sm:flex sm:flex-col">
        <div className="p-4 bg-white shadow-md rounded-lg flex items-center gap-4">
          <div className="w-12 h-12 flex items-center justify-center rounded-full bg-[#BD9455]">
            <Package className="w-8 h-8 text-white" />
          </div>
          <div>
            <h2 className="font-semi-bold">My Orders</h2>
          </div>
        </div>

        <div className="p-4 bg-white shadow-md rounded-lg flex items-center gap-4">
          <div className="w-12 h-12 flex items-center justify-center rounded-full bg-[#BD9455]">
            <User className="w-8 h-8 text-white" />
          </div>
          <div>
            <h2 className="font-semi-bold">My Profile</h2>
          </div>
        </div>

        <div className="p-4 bg-white shadow-md rounded-lg flex items-center gap-4">
          <div className="w-12 h-12 flex items-center justify-center rounded-full bg-[#BD9455]">
            <MapPin className="w-8 h-8 text-white" />
          </div>
          <div>
            <h2 className="font-semi-bold">Delivery Address</h2>
          </div>
        </div>

        <div className="p-4 bg-white shadow-md rounded-lg flex items-center gap-4">
          <div className="w-12 h-12 flex items-center justify-center rounded-full bg-[#BD9455]">
            <Phone className="w-8 h-8 text-white" />
          </div>
          <div>
            <h2 className="font-semi-bold">Contact Us</h2>
          </div>
        </div>

        <div className="p-4 bg-white shadow-md rounded-lg flex items-center gap-4">
          <div className="w-12 h-12 flex items-center justify-center rounded-full bg-[#BD9455]">
            <ChatIcon className="w-8 h-8 text-white" />
          </div>
          <div>
            <h2 className="font-semi-bold">Helps & FAQs</h2>
          </div>
        </div>

        <div className="p-4 bg-white shadow-md rounded-lg flex items-center gap-4">
          <div className="w-12 h-12 flex items-center justify-center rounded-full bg-[#BD9455]">
            <Settings className="w-6 h-6 text-white" />
          </div>
          <div>
            <h2 className="font-semi-bold">Settings</h2>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DetailsPage;

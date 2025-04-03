


import { Bell } from "lucide-react";
import { Banner } from "../../components/user/Banner/Banner";
import Packages from "../../components/user/Packages/Packages";

function Home() {
    return <div>
        <div className="w-full flex items-center justify-between px-5 py-4 bg-white shadow-sm">
  <div className="flex items-center space-x-4">
    <img 
      src="/61f78fc8e031ece2f286631de8438d56.png" 
      alt="Cafee 971 Logo" 
      className="w-12 h-12 object-contain" 
    />
    <h1 className="text-xl font-bold text-gray-800">CAFEE 971</h1>
  </div>
  
  <button 
    className="p-2 rounded-full hover:bg-gray-100 transition-colors focus:outline-none focus:ring-2 focus:ring-[#BD9455]"
    aria-label="Notifications"
  >
    <Bell className="w-6 h-6 text-gray-600" />
  </button>
</div>
        <Banner/>
        <Packages/>
    </div>;
}

export default Home;

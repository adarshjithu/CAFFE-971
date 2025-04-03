import { Utensils, X, Home, ShoppingBag, Calendar, Tag, Star } from "lucide-react";
import { useState } from "react";

const Sidebar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="flex">
      {/* Sidebar */}
      <aside className={`bg-white text-black h-screen w-20 p-6 shadow-lg flex flex-col space-y-6 fixed transition-transform ${isMenuOpen ? "translate-x-0" : "-translate-x-20"} md:translate-x-0 items-center`}>
        <div className="flex flex-col items-center space-y-4">
          <Utensils className="text-2xl" />
          <h1 className="text-sm font-bold">971</h1>
        </div>

        <nav className="flex flex-col space-y-6 text-lg items-center">
          <Home className="hover:text-gray-600 transition cursor-pointer" />
          <ShoppingBag className="hover:text-gray-600 transition cursor-pointer" />
          <Calendar className="hover:text-gray-600 transition cursor-pointer" />
          <Tag className="hover:text-gray-600 transition cursor-pointer" />
          <Star className="hover:text-gray-600 transition cursor-pointer" />
        </nav>

        <button className="bg-[#BD9455] text-white px-4 py-2 rounded-full font-semibold shadow-md hover:bg-gray-800 transition">
          <ShoppingBag />
        </button>
      </aside>

      {/* Mobile Menu Button */}
      <button 
        className="md:hidden text-black text-2xl absolute top-4 left-4" 
        onClick={() => setIsMenuOpen(!isMenuOpen)}
      >
        {isMenuOpen ? <X /> : "☰"}
      </button>

      {/* Main Content */}
      <main className="flex-1 ml-0 md:ml-20 p-6">
        <h2 className="text-3xl font-bold">Welcome to CAFFE 971</h2>
        <p className="mt-4 text-lg">Enjoy the best coffee and food experience.</p>
      </main>
    </div>
  );
};

export default Sidebar;

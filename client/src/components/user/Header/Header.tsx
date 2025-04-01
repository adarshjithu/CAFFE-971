import { Utensils, X } from "lucide-react";
import { useState } from "react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="w-full bg-white text-black py-4 px-6 flex justify-between items-center shadow-lg md:px-10 lg:px-20">
      <div className="flex items-center space-x-2">
        <Utensils className="text-2xl" />
        <h1 className="text-2xl font-bold">CAFFE 971</h1>
      </div>

      {/* Desktop Navigation */}
      <nav className="hidden md:flex space-x-6 text-lg">
        <a href="#" className="hover:text-gray-600 transition">Home</a>
        <a href="#" className="hover:text-gray-600 transition">Menu</a>
        <a href="#" className="hover:text-gray-600 transition">Services</a>
        <a href="#" className="hover:text-gray-600 transition">Contact</a>
      </nav>

      {/* Desktop Order Button */}
      <button className="hidden md:block bg-black text-white px-4 py-2 rounded-full font-semibold shadow-md hover:bg-gray-800 transition">
        Order Now
      </button>

      {/* Mobile Menu Button */}
      <button 
        className="md:hidden text-black text-2xl" 
        onClick={() => setIsMenuOpen(!isMenuOpen)}
      >
        {isMenuOpen ? <X /> : "☰"}
      </button>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="absolute top-16 left-0 w-full bg-white text-black flex flex-col space-y-4 py-4 text-center shadow-lg">
          <a href="#" className="hover:text-gray-600 transition">Home</a>
          <a href="#" className="hover:text-gray-600 transition">Menu</a>
          <a href="#" className="hover:text-gray-600 transition">Services</a>
          <a href="#" className="hover:text-gray-600 transition">Contact</a>
          <button className="bg-black text-white px-4 py-2 rounded-full font-semibold shadow-md hover:bg-gray-800 transition">
            Order Now
          </button>
        </div>
      )}
    </header>
  );
};

export default Header;
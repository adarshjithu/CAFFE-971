import { useState } from "react";
import { NavLink } from "react-router-dom";
import {
  LayoutDashboard,
  Package,
  Image,
  Tags,
  Armchair,
  Utensils,
  ShoppingCart,
  Table2,
  PlusCircle,
} from "lucide-react";
import { useSidebar } from "../context/SidebarContext";
import { useSelector } from "react-redux";

const sidebarItems = [
  { name: "Dashboard", icon: <LayoutDashboard size={22} />, path: "/admin/dashboard" },
  { name: "Packages", icon: <Package size={22} />, path: "/admin/packages" },
  { name: "Banner", icon: <Image size={22} />, path: "/admin/banner" },
  { name: "Categories", icon: <Tags size={22} />, path: "/admin/categories" },
  { name: "Chairs", icon: <Armchair size={22} />, path: "/admin/chairs" },
  { name: "Live Food Station", icon: <Utensils size={22} />, path: "/admin/live-food" },
  { name: "Products", icon: <ShoppingCart size={22} />, path: "/admin/products" },
  { name: "Tables", icon: <Table2 size={22} />, path: "/admin/tables" },
  { name: "Addons", icon: <PlusCircle size={22} />, path: "/admin/addons" },
];

const AppSidebar: React.FC = () => {
  const { isExpanded, isMobileOpen, isHovered, setIsHovered } = useSidebar();
  const isVisible = isExpanded || isHovered || isMobileOpen;
  const [selectedItem, setSelectedItem] = useState("");
  const roleInfo = useSelector((data: any) => data?.auth?.auth);

  return (
    <aside
      className={`fixed top-0 left-0 h-screen z-50 bg-white dark:bg-gray-900 border-r border-gray-200 dark:border-gray-800
      transition-all duration-300 ease-in-out overflow-hidden flex flex-col
      ${isExpanded || isMobileOpen ? "w-[290px]" : isHovered ? "w-[220px]" : "w-[80px]"}
      ${isMobileOpen ? "translate-x-0" : "-translate-x-full"} lg:translate-x-0`}
      onMouseEnter={() => !isExpanded && setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Logo */}
      <div className="py-6 px-6 border-b border-gray-200 dark:border-gray-800">
        <div className={`flex items-center ${!isVisible ? "justify-center" : "justify-start"}`}>
          <img className="w-9 h-9" src="src/assets/logo mm.png" alt="Logo" />
          {isVisible && <h2 className="ml-3 text-xl font-semibold dark:text-white">CAFEE 971</h2>}
        </div>
      </div>

      {/* Scrollable Menu */}
      <nav className="flex-1 overflow-y-auto py-4 px-3 scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-gray-200 dark:scrollbar-thumb-gray-700 dark:scrollbar-track-gray-900">
        {sidebarItems.map(({ name, icon, path }) => (
          <NavLink
            key={name}
            to={path}
            className={({ isActive }) =>
              `flex items-center gap-4 px-4 py-3 rounded-lg text-[16px] font-medium transition-all
              ${isActive ? "bg-gray-100 dark:bg-white/20 font-semibold" : "hover:bg-gray-100 dark:hover:bg-white/10"}
              ${isVisible ? "justify-start" : "justify-center"}`
            }
            onClick={() => setSelectedItem(name)}
          >
            {icon}
            {isVisible && <span className="truncate">{name}</span>}
          </NavLink>
        ))}
      </nav>
    </aside>
  );
};

export default AppSidebar;

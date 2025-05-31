import { Home, PackageSearch, LayoutGrid, Utensils, ShoppingCart } from "lucide-react";
import { useState } from "react";
import { useLocation, useNavigate } from "react-router";

const menuItems = [
    { icon: Home, label: "Home", link: "home" },
    { icon: PackageSearch, label: "Package", link: "packages" },
    { icon: LayoutGrid, label: "Seating", link: "seating" },
    { icon: Utensils, label: "Live Food", link: "live-food" },
    { icon: ShoppingCart, label: "View Cart", link: "cart" },
];

function ResponsiveMenu() {
    const [activeIndex, setActiveIndex] = useState(0);

    const endpoint = useLocation();
    const navigate = useNavigate();
    console.log(endpoint?.pathname?.startsWith("/package"));

    return (
        <>
            {/* Desktop/Tablet Sidebar */}
            <div className="hidden lg:flex fixed left-10 flex-col gap-2.5 p-4 bg-white rounded-3xl shadow text-black w-[65px]">
                {menuItems.map((item, idx) => {
                    const Icon = item.icon;
                    const isActive = idx === activeIndex;

                    return (
                        <div
                            key={idx}
                            onClick={() => {
                                setActiveIndex(idx);
                                navigate(`/${item?.link}`);
                            }}
                            className="flex flex-col items-center cursor-pointer group"
                        >
                            <div
                                className={`p-1.5 transition-all duration-200 ${
                                    isActive ? "bg-[#04845E] text-white" : "group-hover:bg-[#04845E] group-hover:text-white"
                                } rounded-full`}
                            >
                                <Icon size={18} />
                            </div>
                            <span
                                className={`whitespace-nowrap text-[10px] mt-[2px] leading-tight transition-colors ${
                                    isActive ? "text-[#04845E]" : "text-gray-500 group-hover:text-[#04845E]"
                                }`}
                            >
                                {item.label}
                            </span>
                        </div>
                    );
                })}
            </div>

            {/* Mobile Bottom Bar */}
            {/* Mobile Bottom Bar */}
            {!endpoint.pathname.startsWith("/package") && (
                <div className="lg:hidden fixed bottom-0 left-0 right-0 mx-6 z-50">
                    <div className="bg-white flex justify-around items-center py-2 px-1 shadow text-black rounded-t-xl">
                        {menuItems.map((item, idx) => {
                            const Icon = item.icon;
                            const isActive = idx === activeIndex;

                            return (
                                <div
                                    key={idx}
                                    onClick={() => {
                                        setActiveIndex(idx);
                                        navigate(`/${item?.link}`);
                                    }}
                                    className="flex flex-col items-center cursor-pointer group"
                                >
                                    <div
                                        className={`p-1.5 transition-all duration-200 ${
                                            isActive ? "bg-[#04845E] text-white" : "group-hover:bg-[#04845E] group-hover:text-white"
                                        } rounded-full`}
                                    >
                                        <Icon size={18} />
                                    </div>
                                    <span
                                        className={`whitespace-nowrap text-[10px] mt-[2px] leading-tight transition-colors ${
                                            isActive ? "text-[#04845E]" : "text-gray-500 group-hover:text-[#04845E]"
                                        }`}
                                    >
                                        {item.label}
                                    </span>
                                </div>
                            );
                        })}
                    </div>
                </div>
            )}
        </>
    );
}

export default ResponsiveMenu;

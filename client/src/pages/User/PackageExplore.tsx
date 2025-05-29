import { Armchair, Pencil } from "lucide-react";
import ArrowButton from "../../components/ui/button/ArrowButton";
import NotificationComponent from "../../components/user/Notification/NotificationComponent";
import AddOnButton from "../../components/ui/button/AddOnButton";
import NextButton from "../../components/ui/button/NextButton";
import { ProductCard } from "../../components/user/Packages/ProductCard";
import { use, useEffect, useState } from "react";
import { useParams } from "react-router";
import toast from "react-hot-toast";
import { findProductsByPackageId, getPackageById } from "../../services/userService";
import { IProduct } from "../../interface/IProduct";
import { ProductCardSkeleton } from "../../components/user/Product/ProductCardSkeleton";
import { IPackage } from "../../interface/IPackage";
import { PackageDetailsSkeleton } from "../../components/user/PackageExplore/PackageDetailsLoading";
import { useSelector } from "react-redux";
import { IRootState } from "../../app/store";
import AddonPromptModal from "../../components/user/PackageExplore/AddOnModal";
import AddOne from "../../components/user/Addons/Addones";

function PackageExplore() {
    const [selectedTab, setSelectedTab] = useState("Mains");
    const { id } = useParams();
    const [products, setProducts] = useState<IProduct[]>([]);
    const [intialLoad, setIntialLoad] = useState(true);
    const [loading, setLoading] = useState(false);
    const [packageData, setPackageData] = useState<IPackage | null>(null);
    const [selectedFilter, setSelectedFilter] = useState("All");
    const [maxProductCount, setMaxProductCount] = useState({ mains: 2, sidesAndBeverages: 2, accompaniments: 4 });
    const { mains, sidesAndBeverages, accompaniments } = useSelector((data: IRootState) => data?.packageSelectionData);
    const [addonModal, setAddonModal] = useState(false);
    const [showAddonList,setShowAddonList] = useState(false)
    // Change the selected tab
    const changeTab = (tab: string) => {
        setSelectedTab(tab);
    };

    const handleAddonModal = (res: boolean) => {
        setAddonModal(false);
        if(res){
            setShowAddonList(true)
        }
    };

    // Load package information and products in initial load
    useEffect(() => {
        try {
            const fetchData = async () => {
                if (id) {
                    setLoading(true);
                    const res = await getPackageById(id, selectedTab);
                    setProducts(res?.data?.data?.products);

                    setPackageData(res?.data?.data?.package);
                    setIntialLoad(false);
                    setLoading(false);
                }
            };
            fetchData();
        } catch (error) {
            setLoading(false);
            toast.error(error as string);
        }
    }, []);

    // Fetch the products of the selected package according to category
    useEffect(() => {
        try {
            const fetchData = async () => {
                if (id && !intialLoad) {
                    setLoading(true);
                    const res = await findProductsByPackageId(id, selectedTab);
                    setProducts(res?.data?.data?.products);
                    setSelectedFilter("All");
                    setLoading(false);
                }
            };
            fetchData();
        } catch (error) {
            setLoading(false);
            toast.error(error as string);
        }
    }, [selectedTab]);

    return (
        <div className="lg:ml-24">
            
            {addonModal && <AddonPromptModal handleAddonModal={handleAddonModal} />}
            {showAddonList&&<AddOne setShowAddonList={setShowAddonList}/>}
            {/* Top filter section */}
            <div className="w-full flex flex-wrap justify-center lg:justify-end items-center gap-x-2 gap-y-2">
                <ArrowButton arrow="left" />

                {["All", "Pure Veg", "Non Veg"].map((filter) => (
                    <span
                        key={filter}
                        onClick={() => setSelectedFilter(filter)}
                        className={`px-2 py-2 text-[11px] lg:text-xs flex items-center rounded-2xl shadow-sm cursor-pointer transition 
        ${selectedFilter === filter ? "bg-[#004531] text-white" : filter === "Pure Veg" ? "bg-white text-green-700" : "bg-white text-[#B38C50]"}
      `}
                    >
                        {filter}
                    </span>
                ))}

                <span className="bg-[#B38C50] text-white px-2 py-2 text-[11px] lg:text-xs flex items-center rounded-2xl text-gray-700 shadow-sm">
                    <span className="bg-[#B38C50] rounded-full p-[2px]">
                        <Armchair color="white" size={12} />
                    </span>
                    Seating
                </span>

                <div className="lg:flex hidden">
                    <NotificationComponent />
                </div>
            </div>

            {/* Product card */}
            <div className="grid grid-cols-1 mt-6">
                {packageData ? (
                    <div
                        style={{ borderWidth: "0.5px", borderColor: "rgba(255,255,255,0.3)" }}
                        className="w-full rounded-[15px] flex rounded-br-[50px] bg-[#015E43]  p-4 gap-4"
                    >
                        {/* Image */}
                        <div className="h-full flex justify-center items-center">
                            <img src="/products/product1.png" alt="Desert Combo" className="w-24 h-24 lg:w-32 lg:h-32 object-cover rounded-lg" />
                        </div>

                        {/* Text content */}
                        <div className="flex flex-col justify-around flex-1 p-2 lg:p-3 lg:ml-8">
                            <div className="flex items-center gap-2 lg:gap-3">
                                {/* Pencil Button */}
                                <button className="bg-[#037E59] rounded-full flex items-center justify-center w-6 h-6 lg:w-8 lg:h-8">
                                    <Pencil color="white" size={12} className="lg:size-4" />
                                </button>

                                <h1 className="text-xl lg:text-3xl font-medium text-[#B38C50]">{packageData?.name}</h1>
                                <div className="lg:flex hidden">
                                    <AddOnButton />
                                </div>
                                <div className="lg:flex hidden">
                                    <NextButton
                                        setAddonModal={setAddonModal}
                                        handleAddonModal={handleAddonModal}
                                        isActive={
                                            mains.length === maxProductCount?.mains &&
                                            sidesAndBeverages.length === maxProductCount?.sidesAndBeverages &&
                                            accompaniments.length === maxProductCount?.accompaniments
                                        }
                                    />
                                </div>
                            </div>

                            <div className="flex gap-2 flex-wrap mt-2">
                                <button
                                    onClick={() => changeTab("Mains")}
                                    className={` rounded-lg ${
                                        selectedTab == "Mains" ? "text-white bg-[#004531]" : "text-white bg-[#B38C50]"
                                    } px-2 py-1 text-[10px] lg:text-sm`}
                                >
                                    Mains ({mains?.length}/{maxProductCount?.mains})
                                </button>
                                <button
                                    onClick={() => changeTab("Sides and Beverages")}
                                    className={` rounded-lg ${
                                        selectedTab == "Sides and Beverages" ? "text-white bg-[#004531]" : "text-white bg-[#B38C50]"
                                    } px-2 py-1 text-[10px] lg:text-sm`}
                                >
                                    Sides & Beverages ({sidesAndBeverages?.length}/{maxProductCount?.sidesAndBeverages})
                                </button>
                                <button
                                    onClick={() => changeTab("Accompaniments")}
                                    className={` rounded-lg ${
                                        selectedTab == "Accompaniments" ? "text-white bg-[#004531]" : "text-white bg-[#B38C50]"
                                    } px-2 py-1 text-[10px] lg:text-sm`}
                                >
                                    Accompaniments ({accompaniments?.length}/{maxProductCount?.accompaniments})
                                </button>
                            </div>
                        </div>

                        <div className="hidden lg:flex">
                            <img src="/packageexplore/banner.png" className="h-[150px]" alt="" />
                        </div>
                    </div>
                ) : (
                    <PackageDetailsSkeleton />
                )}
                <div className="w-full flex justify-center">
                    <h1 className="text-[26px] text-white mt-8 mb-8">{selectedTab}</h1>
                </div>
                <div className="w-full h-full min-h-[300px] grid lg:grid-cols-5 gap-12 sm:grid-cols-3 grid-cols-2">
                    <>
                        {products
                            ?.filter((obj: any) => {
                                if (selectedFilter == "All") return obj;
                                else if (selectedFilter == "Non Veg") return obj?.type == "nonVeg";
                                else if (selectedFilter == "Pure Veg") return obj?.type == "veg" || obj?.type == "no";
                            })
                            .map((product, index) => {
                                return loading ? (
                                    <ProductCardSkeleton />
                                ) : (
                                    <ProductCard
                                        maxProductCount={maxProductCount}
                                        seletedTab={selectedTab}
                                        selectedTab={selectedTab}
                                        setSelectedTab={setSelectedTab}
                                        index={index}
                                        product={product}
                                    />
                                );
                            })}
                    </>
                </div>

                {/* Buttons for mobile */}
                {/* <div className="flex w-full justify-between mt-12">
                    <AddOnButton />
                    <NextButton />
                </div> */}
                <div className="lg:hidden h-[200px]"></div>
            </div>
        </div>
    );
}

export default PackageExplore;

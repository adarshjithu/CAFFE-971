import { Armchair, Flame } from "lucide-react";
import NotificationComponent from "../../components/user/Notification/NotificationComponent";
import AddOnButton from "../../components/ui/button/AddOnButton";
import { ProductCard } from "../../components/user/Packages/ProductCard";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";
import toast from "react-hot-toast";
import { findProductsByPackageId, getPackageById } from "../../services/userService";
import { IProduct } from "../../interface/IProduct";
import { ProductCardSkeleton } from "../../components/user/Product/ProductCardSkeleton";
import { IPackage } from "../../interface/IPackage";
import AddonPromptModal from "../../components/user/PackageExplore/AddOnModal";
import AddOne from "../../components/user/Addons/Addones";
import BackButton from "../../components/ui/button/BackButton";
import TablesModal from "../../components/user/Seating/Tables";
import PackageHeader from "../../components/user/PackageExplore/PackageHeader";
import FixedMobileBottombar from "../../components/user/PackageExplore/FixedMobileBottombar";
import FoodStation from "../../components/user/FoodStation/FoodStation";
import { useDispatch } from "react-redux";
import { setPackage } from "../../features/user/packageSelectionSlice";

function PackageExplore() {
    // -------------------------------
    // State declarations
    // -------------------------------
    const [selectedTab, setSelectedTab] = useState("Mains");
    const { id } = useParams();
    const [products, setProducts] = useState<IProduct[]>([]);
    const [initialLoad, setInitialLoad] = useState(true);
    const [loading, setLoading] = useState(false);
    const [packageData, setPackageData] = useState<IPackage | null>(null);
    const [selectedFilter, setSelectedFilter] = useState("All");
    const [maxProductCount] = useState({ mains: 2, sidesAndBeverages: 2, accompaniments: 4 });
    const [categoryData, setCategoryData] = useState<Record<string, string>>({});
    const [modals, setModals] = useState("noModal");
    const navigate = useNavigate();
    const dispatch = useDispatch();

    // -------------------------------
    // Handlers and helper functions
    // -------------------------------

    // Change selected tab (e.g., Mains, Sides, etc.)
    const changeTab = (tab: string) => {
        setSelectedTab(tab);
    };

    useEffect(() => {
        const handlePopState = (e: PopStateEvent) => {
            // Push the user back to the current page to prevent back navigation
            navigate(location.pathname, { replace: true });
        };

        window.addEventListener("popstate", handlePopState);

        return () => {
            window.removeEventListener("popstate", handlePopState);
        };
    }, [location.pathname, navigate]);

    // -------------------------------
    // Data fetching: Initial package data load on mount
    // -------------------------------
    useEffect(() => {
        const fetchInitialData = async () => {
            if (!id) return;

            try {
                setLoading(true);
                const res = await getPackageById(id, selectedTab);

                // Prepare categoryData map: { categoryName: categoryImage }
                const categoryMap: Record<string, string> = {};
                res?.data?.data?.category?.forEach((cat: any) => {
                    categoryMap[cat.name] = cat.image;
                });
                dispatch(setPackage(res?.data?.data?.package));
                setCategoryData(categoryMap);
                setProducts(res?.data?.data?.products);
                setPackageData(res?.data?.data?.package);
                setInitialLoad(false);
            } catch (error) {
                toast.error(String(error));
            } finally {
                setLoading(false);
            }
        };

        fetchInitialData();
    }, [id]);

    // -------------------------------
    // Data fetching: Fetch products when selectedTab changes (but skip initial load)
    // -------------------------------
    useEffect(() => {
        if (initialLoad) return; // skip first run

        const fetchProducts = async () => {
            if (!id) return;

            try {
                setLoading(true);
                const res = await findProductsByPackageId(id, selectedTab);
                setProducts(res?.data?.data?.products);
                setSelectedFilter("All");
            } catch (error) {
                toast.error(String(error));
            } finally {
                setLoading(false);
            }
        };

        fetchProducts();
    }, [selectedTab, id, initialLoad]);

    // -------------------------------
    // Scroll locking when any modal is open
    // -------------------------------
    useEffect(() => {
        const lockScroll = () => {
            document.body.style.overflow = "hidden";
        };

        const unlockScroll = () => {
            document.body.style.overflow = "auto";
        };

        if (modals !== "noModal") {
            lockScroll();
        } else {
            unlockScroll();
        }

        // Cleanup on unmount or dependency change
        return () => unlockScroll();
    }, []);

    // -------------------------------
    // Render component
    // -------------------------------
    return (
        <div className="lg:ml-24">
           
            {/* Top bar: Back button, Addon and Seating buttons, Notification */}
            <div className="w-full flex justify-between items-center flex-wrap gap-2">
                <BackButton arrow="left" />

                <div className="flex items-center gap-2">
                    {/* Add On button opens Addon list */}
                    <AddOnButton setModals={setModals} />

                    {/* Seating button opens seating modal */}
                    <span
                        onClick={() => navigate("/tables")}
                        className="cursor-pointer bg-[#B38C50] text-white px-2 py-2 text-[11px] lg:text-xs flex items-center rounded-2xl shadow-sm"
                    >
                        <Armchair color="white" size={12} />
                        <span className="ml-1">Seating</span>
                    </span>
                    <span
                        onClick={() => navigate("/foodStation")}
                        className="cursor-pointer bg-[#B38C50] text-white px-2 py-2 text-[11px] lg:text-xs flex items-center rounded-2xl shadow-sm"
                    >
                        <Flame color="white" size={12} />
                        <span className="ml-1">Live Food </span>
                    </span>

                    {/* Notification icon only visible on large screens */}
                    <div className="hidden lg:block">
                        <NotificationComponent />
                    </div>
                </div>
            </div>

            {/* Package header with tabs and category images */}
            <PackageHeader
                setModals={setModals}
                maxProductCount={maxProductCount}
                categoryData={categoryData}
                packageData={packageData}
                changeTab={changeTab}
                selectedTab={selectedTab}
            />

            {/* Filters for products */}
            <div className="w-full flex justify-between items-center mt-8 mb-4 flex-wrap gap-3">
                <h1 className="text-[26px] text-white">{selectedTab}</h1>
                <div className="flex gap-2">
                    {["All", "Pure Veg", "Non Veg"].map((filter) => (
                        <span
                            key={filter}
                            onClick={() => setSelectedFilter(filter)}
                            className={`px-2 py-2 text-[11px] lg:text-xs flex items-center rounded-2xl shadow-sm cursor-pointer transition ${
                                selectedFilter === filter
                                    ? "bg-[#004531] text-white"
                                    : filter === "Pure Veg"
                                    ? "bg-white text-green-700"
                                    : "bg-white text-[#B38C50]"
                            }`}
                        >
                            {filter}
                        </span>
                    ))}
                </div>
            </div>

            {/* Products grid */}
            <div className="w-full min-h-[300px] grid lg:grid-cols-5 sm:grid-cols-3 grid-cols-2 gap-6">
                {loading
                    ? Array(maxProductCount[selectedTab.toLowerCase() as keyof typeof maxProductCount] || 4)
                          .fill(0)
                          .map((_, idx) => <ProductCardSkeleton key={idx} />)
                    : products
                          ?.filter((product) => {
                              if (selectedFilter === "All") return true;
                              if (selectedFilter === "Pure Veg") return product?.type === "veg" || product?.type === "no";
                              if (selectedFilter === "Non Veg") return product?.type === "nonVeg";
                          })
                          .map((product, index) => (
                              <ProductCard
                                  key={product?._id}
                                  maxProductCount={maxProductCount}
                                  seletedTab={selectedTab}
                                  selectedTab={selectedTab}
                                  setSelectedTab={setSelectedTab}
                                  index={index}
                                  product={product}
                              />
                          ))}
            </div>
            <div className="h-[150px]">

            </div>

            {/* Fixed bottom bar */}
            <FixedMobileBottombar packageData={packageData} />
        </div>
    );
}

export default PackageExplore;

import { MapPin } from "lucide-react";
import SearchBar from "../../components/user/Home/Search";
import NotificationComponent from "../../components/user/Notification/NotificationComponent";
import ProfileComponent from "../../components/user/Profile/ProfileComponent";
import PackagesList from "../../components/user/Home/PackagesList";
import MostRatedpackageList from "../../components/user/Home/MostRatedpackageList";
import { use, useState } from "react";
import toast from "react-hot-toast";

function Home() {
    const [search, setSearch] = useState("");
    const [packagePage, setPackagePage] = useState(1);
    const [allPackageCount, setPackageCount] = useState(0);

    return (
        <>
            <div className="lg:ml-24">
                <div className=" flex flex-col-reverse lg:flex-row">
                    <SearchBar setSearch={setSearch} search={search} />

                    <div className="w-full lg:w-1/2 flex lg:justify-end justify-between mt-6 lg:mb-0 mb-4 lg:mt-0">
                        <ProfileComponent />

                        <div className="mr-4 flex items-center gap-1 text-sm text-gray-700">
                            <MapPin size={16} className="text-[#b38c50]" />
                            <span className="text-white">Jumeirah, Dubai</span>
                        </div>

                        <NotificationComponent />
                    </div>
                </div>

                <div className="w-full flex justify-between mt-6 lg:mt-8">
                    <div className="flex flex-col">
                        <h1 className="text-[26px] text-white">Food Packages</h1>
                        <h3 className="text-[#b38c50]">Min 10 - Max 1500</h3>
                    </div>
                    <h2
                        onClick={() => {
                            if (packagePage < Math.ceil(allPackageCount / 10)) {
                                setPackagePage(packagePage + 1);
                            } else {
                                toast.error("Limit exceeded");
                            }
                        }}
                        className="mr-2 text-[#b38c50] cursor-pointer"
                    >
                        See more
                    </h2>
                </div>

                <PackagesList packagePage={packagePage} search={search} setPackageCount={setPackageCount} />
                <div className="w-full flex justify-between items-center">
                    <h1 className="text-[26px] text-white mt-8 mb-8">Most Rated</h1>
                    <h2 className="mr-2 text-[#b38c50] cursor-pointer">See more</h2>
                </div>
                <MostRatedpackageList  />
            </div>
        </>
    );
}

export default Home;

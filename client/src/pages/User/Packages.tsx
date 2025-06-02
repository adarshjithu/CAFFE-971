import { useState } from "react";
import PackagesList from "../../components/user/Home/PackagesList";
import SearchBar from "../../components/user/Home/Search";
import toast from "react-hot-toast";

function AllPackages() {
    const [search, setSearch] = useState("");
    const [packagePage, setPackagePage] = useState(1);
    const [allPackageCount, setPackageCount] = useState(0);

    return (
        <div className="lg:ml-24 h-full min-h-screen">
            <div className="w-full flex lg:flex-row flex-col justify-between mt-6 lg:mt-8 items-center">
                <div className="flex flex-col mb-4">
                    <h1 className="text-[26px] text-white">Food Packages</h1>
                    <h3 className="text-[#b38c50]">Min 10 - Max 1500</h3>
                </div>
                <SearchBar setSearch={setSearch} search={search} />
            </div>

            <PackagesList search={search} packagePage={packagePage} setPackageCount={setPackageCount} />

            {/* Pagination */}
            <div className="flex justify-center space-x-6 mt-12 mb-10">
                <button
                    onClick={() => {
                        if (packagePage < Math.ceil(allPackageCount / 10)) {
                            setPackagePage(packagePage + 1);
                        } else {
                            toast.error("Limit exceeded");
                        }
                    }}
                    className="px-5 py-2 bg-[#b38c50] text-white rounded-lg hover:bg-[#a47d44] transition"
                >
                    Show more
                </button>
            </div>
        </div>
    );
}

export default AllPackages;

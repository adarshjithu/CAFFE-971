import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { getAllPackages } from "../../../services/userService";
import { useDispatch, useSelector } from "react-redux";
import { IRootState } from "../../../app/store";
import { addPackageAction, changePackageCountAction } from "../../../features/user/packageSlice";
import { IPackage } from "../../../interface/IPackage";
import PackageCard from "./PackageCard";
import SkeletonCard from "./SkeletonCard";

function Packages() {
    const dispatch = useDispatch();
    const packages = useSelector((data: IRootState) => data?.productPackages?.packages);
    const [loading, setLoading] = useState(true);
    const page = useSelector((data: IRootState) => data?.productPackages?.pageCount);
   
    // Responsive logic for the number of skeletons
    const [skeletonCount, setSkeletonCount] = useState(5);

    useEffect(() => {
        const fetchData = async () => {
            try {
                setLoading(true);
                const res = await getAllPackages(parseInt(page));

                dispatch(addPackageAction(res?.data?.data[0]?.packages));
                dispatch(changePackageCountAction(res?.data?.data[0].packageCount[0]?.count));
                setLoading(false);
            } catch (error) {
                toast.error(error as string);
            }
        };

        fetchData();
    }, [page]);

    useEffect(() => {
        // Determine number of skeletons based on screen width
        const updateSkeletonCount = () => {
            if (window.innerWidth < 768) {
                setSkeletonCount(2); // Mobile
            } else {
                setSkeletonCount(5); // Desktop (larger screens)
            }
        };

        updateSkeletonCount();
        window.addEventListener("resize", updateSkeletonCount);

        // Cleanup listener
        return () => window.removeEventListener("resize", updateSkeletonCount);
    }, []);

    return (
        <div className="">
            {/* Section Header */}
            <div className="text-center mb-10 mt-4">
                <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">Our Packages</h2>
            </div>

            {/* Package Cards Grid */}
            <div className="grid grid-cols-2 gap-6 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5">
                {loading
                    ? Array.from({ length: skeletonCount }).map((_, index) => <SkeletonCard key={index} />)
                    : packages?.map((data: IPackage) => <PackageCard key={data._id} data={data} />)}
            </div>
        </div>
    );
}

export default Packages;

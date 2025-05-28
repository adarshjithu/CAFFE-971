import { useEffect, useState } from "react";
import { PackageCard } from "../Packages/PackageCard";
import toast from "react-hot-toast";
import { getAllPackages } from "../../../services/userService";
import { IPackage } from "../../../interface/IPackage";
import { PackageCardLoading } from "./PackageLoading";
import EmptyPackage from "../Packages/EmptyPackageList";

function PackagesList({
    search,
    packagePage,
    setPackageCount,
}: {
    setPackageCount: React.Dispatch<React.SetStateAction<number>>;
    packagePage: number;
    search: string;
}) {
    const [packages, setPackages] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        const fetchData = async () => {
            try {
                setLoading(true);
                const res = await getAllPackages(packagePage, search);
                const allPackges = res?.data?.data[0]?.packages;
                setPackages(allPackges);
                const packageCount = res?.data?.data[0].packageCount[0].count;
                setPackageCount(packageCount);
                setLoading(false);
            } catch (error) {
                setLoading(false);
                toast.error(error as string);
            }
        };

        fetchData();
    }, [search, packagePage]);
    return loading ? (
        <PackageCardLoading packagePage={packagePage} />
    ) : (
        <>
            {packages.length == 0 ? (
                <EmptyPackage/>
            ) : (
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 xl:grid-cols-5 gap-6">
                    {packages?.map((data: IPackage) => (
                        <PackageCard key={data?._id} packageData={data} />
                    ))}
                </div>
            )}
        </>
    );
}

export default PackagesList;

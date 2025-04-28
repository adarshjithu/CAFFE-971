import { useParams } from "react-router";
import PackageDetailsHeader from "../../components/user/PackageDetails/PackageDetailsHeader";
import ProductList from "../../components/user/PackageDetails/ProductList";
import { useEffect } from "react";
import toast from "react-hot-toast";
import { getProductById } from "../../services/userService";

function PackageDetails() {
    const { id } = useParams();
    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await getProductById(id as string);
            } catch (error) {
                toast.error(error as string);
            }
        };
        fetchData();
    }, []);
    return (
        <div className="w-full h-full">
            <PackageDetailsHeader />
            <ProductList />
        </div>
    );
}

export default PackageDetails;

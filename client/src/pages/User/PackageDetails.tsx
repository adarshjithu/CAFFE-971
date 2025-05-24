import { useParams } from "react-router";
import PackageDetailsHeader from "../../components/user/PackageDetails/PackageDetailsHeader";
import ProductList from "../../components/user/PackageDetails/ProductList";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { getProductById } from "../../services/userService";
import { IProduct } from "../../interface/IProduct";

function PackageDetails() {

    const [products,setProducts] = useState<IProduct[]>();

    const { id } = useParams();
    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await getProductById(id as string);
                console.log(res?.data?.data)
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

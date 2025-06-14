import { Table, TableBody, TableCell, TableHeader, TableRow } from "../../ui/table";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";

import { useDispatch, useSelector } from "react-redux";

import { Pencil, Plus } from "lucide-react";
import { Trash } from "lucide-react";
import AddButton from "../../ui/button/AddButton";
import { changeProductStatus, deleteProduct, getAllProducts } from "../../../services/adminService";
import { IRootState } from "../../../app/store";
import DeleteModal from "../../ui/modal/DeleteModal";
import { ICategory } from "../../../interface/ICategory";
import AddProductModal from "./AddProductModal";
import EditProductModal from "./EditProductModal";
import { addAllProductsAction, changeStatusAction, deleteProductAction } from "../../../features/admin/productSlice";
import ProductFilter from "./Filter";
import Pagination from "../../ui/pagination/Pagination";

export default function ProductTable() {
    const [isOpen, setIsOpen] = useState(false);
    const [category, setCategory] = useState<ICategory>();
    const dispatch = useDispatch();
    const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
    const categories = useSelector((data: IRootState) => data?.product?.products);
    const [editModalOpen, setEditModalOpen] = useState(false);
    const [search, setSearch] = useState("");
    const [isActive, setIsActive] = useState("all");
    const [type, setType] = useState("all");
    const [categoryName, setCategoryName] = useState("all");
    const [page, setPage] = useState(1);
    const [productCount, setProductCount] = useState(0);

    const handleDelete = async (action: boolean) => {
        if (!action) {
            setIsDeleteModalOpen(false);
        } else {
            try {
                const res = await deleteProduct(category?._id);
                dispatch(deleteProductAction(category));
                if (res?.data?.success) toast.success(res?.data?.message);
                setIsDeleteModalOpen(false);
            } catch (error) {
                toast.error(error as string);
            }
        }
    };

    const onClick = () => {
        setIsOpen(true);
    };



    const handleStatusChange = async (data: any) => {
        try {
            const res = await changeProductStatus(data?._id);
            dispatch(changeStatusAction(data));
        } catch (error) {
            toast.error(error as string);
        }
    };

    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await getAllProducts({ search: search, isActive: isActive, type: type, categoryName: categoryName }, page);
                dispatch(addAllProductsAction(res?.data?.data?.products));
                setProductCount(res?.data?.data?.count);
            } catch (error) {
                toast.error(error as string);
            }
        };
        fetchData();
    }, [search, type, isActive, categoryName, page]);
    return (
        <>
            <AddButton onClick={onClick} text="Add Product" />
            <ProductFilter
                search={search}
                setSearch={setSearch}
                type={type}
                setType={setType}
                categoryName={categoryName}
                setCategoryName={setCategoryName}
                isActive={isActive}
                setIsActive={setIsActive}
                setPage={setPage}
            />
            {isOpen && <AddProductModal isOpen={isOpen} setIsOpen={setIsOpen} />}
            <DeleteModal isDeleteModalOpen={isDeleteModalOpen} handleDelete={handleDelete} text="product" />
            {editModalOpen && <EditProductModal category={category} setIsOpen={setEditModalOpen} />}
            <div className="overflow-hidden rounded-xl border border-gray-200 bg-white dark:border-white/[0.05] dark:bg-white/[0.03]">
                <div className="max-w-full overflow-x-auto">
                    {/* <DeleteModal isOpen={isOpen} handleDelete={handleDelete} /> */}
                    <Table>
                        {/* Table Header */}
                        <TableHeader className="border-b border-gray-100 dark:border-white/[0.05]">
                            <TableRow>
                                <TableCell isHeader className="px-5 py-3 font-medium text-gray-500 text-start text-theme-xs dark:text-gray-400">
                                    No
                                </TableCell>
                                <TableCell isHeader className="px-5 py-3 font-medium text-gray-500 text-start text-theme-xs dark:text-gray-400">
                                    Product Name
                                </TableCell>
                                <TableCell isHeader className="px-5 py-3 font-medium text-gray-500 text-start text-theme-xs dark:text-gray-400">
                                    Type
                                </TableCell>
                                <TableCell isHeader className="px-5 py-3 font-medium text-gray-500 text-start text-theme-xs dark:text-gray-400">
                                    Category
                                </TableCell>

                                <TableCell isHeader className="px-5 py-3 font-medium text-gray-500 text-start text-theme-xs dark:text-gray-400">
                                    Image
                                </TableCell>
                                <TableCell isHeader className="px-5 py-3 font-medium text-gray-500 text-start text-theme-xs dark:text-gray-400">
                                    Status
                                </TableCell>

                                <TableCell isHeader className="px-5 py-3 font-medium text-gray-500 text-start text-theme-xs dark:text-gray-400">
                                    Created At
                                </TableCell>

                                <TableCell isHeader className="px-5 py-3 font-medium text-gray-500 text-start text-theme-xs dark:text-gray-400">
                                    Actions
                                </TableCell>
                            </TableRow>
                        </TableHeader>

                        {/* Table Body */}
                        <TableBody className="divide-y divide-gray-100 dark:divide-white/[0.05]">
                            {categories?.map((data: any, index: number) => (
                                <TableRow key={data?._id}>
                                    <TableCell className="px-4 py-3 text-gray-500 text-start text-theme-sm dark:text-gray-400">{index}</TableCell>
                                    <TableCell className="px-4 py-3 text-gray-500 text-start text-theme-sm dark:text-gray-400">
                                        {data?.name}
                                    </TableCell>
                                    <TableCell className="px-4 py-3 text-gray-500 text-start text-theme-sm dark:text-gray-400">
                                        {data?.type}
                                    </TableCell>
                                    <TableCell className="px-4 py-3 text-gray-500 text-start text-theme-sm dark:text-gray-400">
                                        {data?.category?.name}
                                    </TableCell>

                                    <TableCell className="px-4 py-3 text-gray-500 text-start text-theme-sm dark:text-gray-400">
                                        <img src={data?.image} className="w-[50px] h-[50px]" alt="" />
                                    </TableCell>
                                    <TableCell className="px-4 py-3 text-gray-500 text-start text-theme-sm dark:text-gray-400">
                                        <select
                                            onChange={() => handleStatusChange(data)}
                                            value={data?.isActive ? "active" : "disabled"}
                                            name=""
                                            id=""
                                        >
                                            <option value="active">Active</option>
                                            <option value="disabled">Disabled</option>
                                        </select>
                                    </TableCell>

                                    <TableCell className="px-4 py-3 text-gray-500 text-start text-theme-sm dark:text-gray-400">
                                        {new Date(data?.createdAt).toDateString()}
                                    </TableCell>

                                    <TableCell>
                                        <div className="flex gap-3">
                                            <button
                                                onClick={() => {
                                                    setEditModalOpen(true);
                                                    setCategory(data);
                                                }}
                                                className="text-blue-500 hover:text-blue-700"
                                            >
                                                <Pencil size={18} />
                                            </button>
                                            <button
                                                onClick={() => {
                                                    setIsDeleteModalOpen(true);
                                                    setCategory(data);
                                                }}
                                                className="text-red-500 hover:text-red-700"
                                            >
                                                <Trash size={18} />
                                            </button>
                                        </div>
                                    </TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </div>
            </div>
            <Pagination pageCount={productCount} setPage={setPage} page={page} />
        </>
    );
}

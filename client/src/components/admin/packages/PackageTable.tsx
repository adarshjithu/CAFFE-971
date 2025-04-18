import { Table, TableBody, TableCell, TableHeader, TableRow } from "../../ui/table";

import { useEffect, useState } from "react";
import toast from "react-hot-toast";

import { useDispatch, useSelector } from "react-redux";

import { Pencil } from "lucide-react";
import { Trash } from "lucide-react";
import AddButton from "../../ui/button/AddButton";

import {  deletePackge, getAllPackages, updatePackageStock } from "../../../services/adminService";
import { IRootState } from "../../../app/store";

import DeleteModal from "../../ui/modal/DeleteModal";

import AddPackageModal from "./AddPackageModal";
import { addPackageAction, deletePackageAction, updateStockAction } from "../../../features/admin/packageSlice";
import { IPackage } from "../../../interface/IPackage";
import Badge from "../../ui/badge/Badge";
import ImagePreview from "./ImagePreviewModal";
import { findProductCount } from "../../../utils/util";
import EditPackageCategory from "./EditPackageCategory";
import EditPackageModal from "./EditPackage";

export default function PackageTable() {
    const [isOpen, setIsOpen] = useState(false);
    const [categoryModal,setCategoryModal] = useState(false)
    const dispatch = useDispatch();
    const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
    const [packageData, setPackageData] = useState<IPackage>();
    const packages = useSelector((data: IRootState) => data?.package?.packages);
    const [editImageModal,setEditImageModal] = useState(false);
    const [editPackageModal,setEditPackageModal] = useState(false)




    const handleDelete = async (action: boolean) => {
        if (!action) {
            setIsDeleteModalOpen(false);
        } else {
            try {
                const res = await deletePackge(packageData?._id);
                dispatch(deletePackageAction(packageData));
                if (res?.data?.success) toast.success(res?.data?.message);
                setIsDeleteModalOpen(false);
            } catch (error) {
                toast.error(error as string);
            }
        }
    };

    const handleStockChange = async (e: any, id: string) => {
        const stock = e.target.value == "active" ? true : false;
        try {
            const res = await updatePackageStock(id, stock);
            dispatch(updateStockAction(id));
        } catch (error) {
            toast.error(error as string);
        }
    };

    const onClick = () => {
        setIsOpen(true);
    };

    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await getAllPackages();

                dispatch(addPackageAction(res?.data?.data));
            } catch (error) {
                toast.error(error as string);
            }
        };
        fetchData();
    }, []);
    return (
        <>
            <AddButton onClick={onClick} text="Add Package" />
             

             
             {categoryModal&&<EditPackageCategory packageId={packageData?._id} setCategoryModal={setCategoryModal}/>}
            
            {isOpen && <AddPackageModal isOpen={isOpen} setIsOpen={setIsOpen} />}
            
            <DeleteModal isDeleteModalOpen={isDeleteModalOpen} handleDelete={handleDelete} text={"Package"} />
            
            {editImageModal&&<ImagePreview setEditModalOpen={setEditImageModal} setEditImageModal={setEditImageModal} packageId={packageData?._id} imageUrl={packageData?.image||''}/>}
            
            {editPackageModal&&<EditPackageModal packageData={packageData} setEditPackageModal={setEditPackageModal}/>}

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
                                    Package Name
                                </TableCell>
                                <TableCell isHeader className="px-5 py-3 font-medium text-gray-500 text-start text-theme-xs dark:text-gray-400">
                                    Description
                                </TableCell>
                                <TableCell isHeader className="px-5 py-3 font-medium text-gray-500 text-start text-theme-xs dark:text-gray-400">
                                    Price
                                </TableCell>
                                <TableCell isHeader className="px-5 py-3 font-medium text-gray-500 text-start text-theme-xs dark:text-gray-400">
                                    Status
                                </TableCell>

                                <TableCell isHeader className="px-5 py-3 font-medium text-gray-500 text-start text-theme-xs dark:text-gray-400">
                                    Image
                                </TableCell>
                                <TableCell isHeader className="px-5 py-3 font-medium text-gray-500 text-start text-theme-xs dark:text-gray-400">
                                    Stock
                                </TableCell>
                                <TableCell isHeader className="px-5 py-3 font-medium text-gray-500 text-start text-theme-xs dark:text-gray-400">
                                    Products
                                </TableCell>
                                <TableCell isHeader className="px-5 py-3 font-medium text-gray-500 text-start text-theme-xs dark:text-gray-400">
                                    Categories
                                </TableCell>
                                <TableCell isHeader className="px-5 py-3 font-medium text-gray-500 text-start text-theme-xs dark:text-gray-400">
                                    CreatedAt
                                </TableCell>

                                <TableCell isHeader className="px-5 py-3 font-medium text-gray-500 text-start text-theme-xs dark:text-gray-400">
                                    Actions
                                </TableCell>
                            </TableRow>
                        </TableHeader>

                        {/* Table Body */}
                        <TableBody className="divide-y divide-gray-100 dark:divide-white/[0.05]">
                            {packages?.map((data: any, index: number) => (
                                <TableRow key={data?._id}>
                                    <TableCell className="px-4 py-3 text-gray-500 text-start text-theme-sm dark:text-gray-400">{index}</TableCell>
                                    <TableCell className="px-4 py-3 text-gray-500 text-start text-theme-sm dark:text-gray-400">
                                        {data?.name}
                                    </TableCell>
                                    <TableCell className="px-4 py-3 text-gray-500 text-start text-theme-sm dark:text-gray-400">
                                        {data?.description}
                                    </TableCell>
                                    <TableCell className="px-4 py-3 text-gray-500 text-start text-theme-sm dark:text-gray-400">
                                        {data?.price}
                                    </TableCell>
                                    <TableCell className="px-4 py-3 text-gray-500 text-start text-theme-sm dark:text-gray-400">
                                        {data?.isActive ? <Badge>Active</Badge> : <Badge color="error">Disabled</Badge>}
                                    </TableCell>

                                    <TableCell className="cursor-pointer px-4 py-3 text-gray-500 text-start text-theme-sm dark:text-gray-400">
                                        <img onClick={()=>{setPackageData(data);setEditImageModal(true)}} src={data?.image} className="w-[50px] h-[50px]" alt="" />
                                    </TableCell>
                                    <TableCell className="px-4 py-3 text-gray-500 text-start text-theme-sm dark:text-gray-400">
                                        <select
                                            onChange={(e) => handleStockChange(e, data?._id)}
                                            value={data?.isActive ? "active" : "inActive"}
                                            name=""
                                            id=""
                                        >
                                            <option className="inActive" value="">
                                                Out of Stock
                                            </option>
                                            <option value="active">In Stock</option>
                                        </select>
                                    </TableCell>
                                    <TableCell className="px-4 py-3 text-start text-theme-sm">
                                        <div onClick={()=>{setPackageData(data);setCategoryModal(true)}} className="cursor-pointer flex flex-col gap-3 text-gray-700 dark:text-white">
                                            {/* Products with badge */}
                                            <div className="flex items-center gap-2 hover:text-[blue]">
                                                <span className="font-medium">
                                                    <span className="inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800 dark:bg-green-800 dark:text-green-100">
                                                    {findProductCount(data?.products)}
                                                    </span>
                                                    Products
                                                </span>
                                            </div>

                                            
                                        </div>
                                    </TableCell>
                                    <TableCell className="px-4 py-3 text-start text-theme-sm">
                                        <div onClick={()=>{setCategoryModal(true);setPackageData(data)}} className="cursor-pointer flex flex-col gap-3 text-gray-700 dark:text-white">
                                           {/* Categories with badge */}
                                            <div className="flex items-center gap-2 hover:text-[blue]">
                                                <span className="font-medium">
                                                  
                                                    <span className="inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium bg-yellow-100 text-yellow-800 dark:bg-yellow-700 dark:text-yellow-100">
                                                        {Object.keys(data?.products).length}
                                                    </span>
                                                    Categories
                                                </span>
                                            </div>
                                        </div>
                                    </TableCell>

                                    <TableCell className="px-4 py-3 text-gray-500 text-start text-theme-sm dark:text-gray-400">
                                        {new Date(data?.createdAt).toDateString()}
                                    </TableCell>

                                    <TableCell>
                                        <div className="flex gap-3">
                                            <button
                                                onClick={() => {
                                                setPackageData(data);
                                                setEditPackageModal(true)
                                                }}
                                                className="text-blue-500 hover:text-blue-700"
                                            >
                                                <Pencil size={18} />
                                            </button>
                                            <button
                                                onClick={() => {
                                                    setIsDeleteModalOpen(true);
                                                    setPackageData(data);
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
        </>
    );
}

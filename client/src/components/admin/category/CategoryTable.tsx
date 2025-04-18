import { Table, TableBody, TableCell, TableHeader, TableRow } from "../../ui/table";
import Badge from "../../ui/badge/Badge";
import {  useEffect, useState } from "react";
import toast from "react-hot-toast";

import { useDispatch, useSelector } from "react-redux";

import { Pencil, Plus } from "lucide-react";
import { Trash } from "lucide-react";
import AddButton from "../../ui/button/AddButton";
import AddCategoryModal from "./AddCategoryModal";
import { deleteCategory, getCategories } from "../../../services/adminService";
import { IRootState } from "../../../app/store";
import { addCategoryAction, deleteCategoryAction } from "../../../features/admin/categorySlice";
import DeleteModal from "../../ui/modal/DeleteModal";
import { ICategory } from "../../../interface/ICategory";
import UpdateCategoryModal from "./UpdateCategoryModal";

export default function UserTable() {

    const [isOpen, setIsOpen] = useState(false);
    const [category,setCategory]=useState<ICategory>()
    const dispatch = useDispatch();
    const [isDeleteModalOpen,setIsDeleteModalOpen]=useState(false)
    const categories = useSelector((data: IRootState) => data?.category?.categories);
    const [editModalOpen,setEditModalOpen] = useState(false)
    const handleDelete = async(action: boolean) => {
        if(!action){
            setIsDeleteModalOpen(false)
        }else{
            try{
                
                const res= await deleteCategory(category?._id)
                dispatch(deleteCategoryAction(category))
                if(res?.data?.success) toast.success(res?.data?.message)
                setIsDeleteModalOpen(false)
            }catch(error){
                toast.error(error as string)
            }
        }
    };

    const onClick = () => {
        setIsOpen(true);
    };

    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await getCategories();

                dispatch(addCategoryAction(res?.data?.data));
            } catch (error) {
                toast.error(error as string);
            }
        };
        fetchData();
    }, []);
    return (
        <>
            <AddButton onClick={onClick} text="Add Category" />
            <UpdateCategoryModal isOpen={editModalOpen} setIsOpen={setEditModalOpen} category={category}/>
            <DeleteModal isDeleteModalOpen={isDeleteModalOpen} handleDelete={handleDelete} text={'category'}/>
            <AddCategoryModal isOpen={isOpen} setIsOpen={setIsOpen} />
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
                                    Name
                                </TableCell>

                                <TableCell isHeader className="px-5 py-3 font-medium text-gray-500 text-start text-theme-xs dark:text-gray-400">
                                    Image
                                </TableCell>
                                <TableCell isHeader className="px-5 py-3 font-medium text-gray-500 text-start text-theme-xs dark:text-gray-400">
                                    CreatedAt
                                </TableCell>
                                <TableCell isHeader className="px-5 py-3 font-medium text-gray-500 text-start text-theme-xs dark:text-gray-400">
                                    UpdatedAt
                                </TableCell>

                                <TableCell isHeader className="px-5 py-3 font-medium text-gray-500 text-start text-theme-xs dark:text-gray-400">
                                    Actions
                                </TableCell>
                            </TableRow>
                        </TableHeader>

                        {/* Table Body */}
                        <TableBody className="divide-y divide-gray-100 dark:divide-white/[0.05]">
                            {categories?.map((data: any,index:number) => (
                                <TableRow key={data?._id}>
                    
                                    <TableCell className="px-4 py-3 text-gray-500 text-start text-theme-sm dark:text-gray-400">
                                        {data?.name}
                                    </TableCell>
                                    <TableCell className="px-4 py-3 text-gray-500 text-start text-theme-sm dark:text-gray-400">
                                        {index}
                                    </TableCell>

                                    <TableCell className="px-4 py-3 text-gray-500 text-start text-theme-sm dark:text-gray-400">
                                        <img src={data?.image} className="w-[50px] h-[50px]" alt="" />
                                    </TableCell>
                                    
                                    <TableCell className="px-4 py-3 text-gray-500 text-start text-theme-sm dark:text-gray-400">
                                        {new Date(data?.createdAt).toDateString()}
                                    </TableCell>
                                    <TableCell className="px-4 py-3 text-gray-500 text-start text-theme-sm dark:text-gray-400">
                                        {new Date(data?.updatedAt).toDateString()}
                                    </TableCell>

                                 

                                    <TableCell>
                                        <div className="flex gap-3">
                                            <button onClick={()=>{setEditModalOpen(true);setCategory(data)}} className="text-blue-500 hover:text-blue-700">
                                                <Pencil size={18} />
                                            </button>
                                            <button onClick={()=>{setIsDeleteModalOpen(true);setCategory(data)}} className="text-red-500 hover:text-red-700">
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

import { useEffect, useState } from "react";
import AddButton from "../../ui/button/AddButton";
import { Table, TableBody, TableCell, TableHeader, TableRow } from "../../ui/table";
import { Pencil, Trash } from "lucide-react";
import AddAddOnModal from "./AddAddOnModal";
import { useDispatch, useSelector } from "react-redux";
import { IRootState } from "../../../app/store";
import { IAddOn } from "../../../interface/IAddon";
import toast from "react-hot-toast";
import { addAlladdonsAction, addonChangeStatusAction, deleteaddonAction } from "../../../features/admin/addOnSlice";
import { addonChangeStatus, deleteAddOn, getAllAddOnes } from "../../../services/adminService";
import DeleteModal from "../../ui/modal/DeleteModal";
import NoData from "../../common/NoDataComponent/NoData";



export default function AddonTable() {
    const [addModal, setAddModal] = useState(false);
    const addons = useSelector((data: IRootState) => data?.addons?.addons);
    const dispatch = useDispatch();
    const [deleteModal, setDeleteModal] = useState(false);
    const [addon, setAddon] = useState<IAddOn>();
    const [editModal, setEditModal] = useState(false);

    const handleDelete = async (arg: boolean) => {
        if (!arg) {
            setDeleteModal(false);
        } else {
            try {
                const res = await deleteAddOn(addon?._id as string);
                dispatch(deleteaddonAction(addon));
                setDeleteModal(false);
                if (res?.data?.success) toast.success(res?.data?.message);
            } catch (error) {
                toast.error(error as string);
            }
        }
    };
    const onClick = () => {
        setAddModal(true);
    };

    const handleChangeStatus = async (addonId: string) => {
        try {
            const res = await addonChangeStatus(addonId);

            dispatch(addonChangeStatusAction(addonId));
            toast.success(res?.data?.message)
        } catch (error) {
            toast.error(error as string);
        }
    };

    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await getAllAddOnes();
                dispatch(addAlladdonsAction(res?.data?.data));
            } catch (error) {
                toast.error(error as string);
            }
        };
        fetchData();
    }, []);

    return (
        <>
            {addModal && <AddAddOnModal setIsOpen={setAddModal} />}

            <DeleteModal text="Addon" handleDelete={handleDelete} isDeleteModalOpen={deleteModal} />

            <AddButton text="Add New" onClick={onClick} />

            <div className="overflow-hidden rounded-xl border border-gray-200 bg-white dark:border-white/[0.05] dark:bg-white/[0.03]">
                <div className="max-w-full overflow-x-auto">
                    {addons.length == 0 ? (
                        <NoData />
                    ) : (
                        <Table>
                            {/* Table Header */}
                            <TableHeader className="border-b border-gray-100 dark:border-white/[0.05]">
                                <TableRow>
                                    <TableCell isHeader className="px-5 py-3 font-medium text-gray-500 text-start text-theme-xs dark:text-gray-400">
                                        ID
                                    </TableCell>
                                    <TableCell isHeader className="px-5 py-3 font-medium text-gray-500 text-start text-theme-xs dark:text-gray-400">
                                        Chair Name
                                    </TableCell>
                                    <TableCell isHeader className="px-5 py-3 font-medium text-gray-500 text-start text-theme-xs dark:text-gray-400">
                                        Image
                                    </TableCell>
                                    <TableCell isHeader className="px-5 py-3 font-medium text-gray-500 text-start text-theme-xs dark:text-gray-400">
                                        Price
                                    </TableCell>
                                    <TableCell isHeader className="px-5 py-3 font-medium text-gray-500 text-start text-theme-xs dark:text-gray-400">
                                        Food Type
                                    </TableCell>
                                    <TableCell isHeader className="px-5 py-3 font-medium text-gray-500 text-start text-theme-xs dark:text-gray-400">
                                        Created At
                                    </TableCell>
                                    <TableCell isHeader className="px-5 py-3 font-medium text-gray-500 text-start text-theme-xs dark:text-gray-400">
                                        Status
                                    </TableCell>
                                    <TableCell isHeader className="px-5 py-3 font-medium text-gray-500 text-start text-theme-xs dark:text-gray-400">
                                        Actions
                                    </TableCell>
                                </TableRow>
                            </TableHeader>

                            {/* Table Body - Static Row Example */}
                            <TableBody className="divide-y divide-gray-100 dark:divide-white/[0.05]">
                                {addons?.map((obj: IAddOn) => {
                                    return (
                                        <TableRow key={obj?._id}>
                                            <TableCell className="px-4 py-3 text-gray-500 text-start text-theme-sm dark:text-gray-400">1</TableCell>
                                            <TableCell className="px-4 py-3 text-gray-500 text-start text-theme-sm dark:text-gray-400">
                                                {obj?.name}
                                            </TableCell>
                                            <TableCell className="px-4 py-3 text-start">
                                                <img src={obj?.image} alt="Chair" className="w-[50px] h-[50px] rounded-md object-cover" />
                                            </TableCell>
                                            <TableCell className="px-4 py-3 text-gray-500 text-start text-theme-sm dark:text-gray-400">
                                                {obj?.price}
                                            </TableCell>
                                            <TableCell className="px-4 py-3 text-gray-500 text-start text-theme-sm dark:text-gray-400">
                                                {obj?.foodType}
                                            </TableCell>
                                            <TableCell className="px-4 py-3 text-gray-500 text-start text-theme-sm dark:text-gray-400">
                                                {new Date(obj?.createdAt).toDateString()}
                                            </TableCell>
                                            <TableCell className="px-4 py-3 text-gray-500 text-start text-theme-sm dark:text-gray-400">
                                                <select
                                                    onChange={() => handleChangeStatus(obj?._id)}
                                                    name=""
                                                    value={obj?.isActive ? "active" : "inactive"}
                                                    id=""
                                                >
                                                    <option value="active">Active</option>
                                                    <option value="inactive">Inactive</option>
                                                </select>
                                            </TableCell>
                                            <TableCell>
                                                <div className="flex gap-3">
                                                    <button
                                                        onClick={() => {
                                                            setEditModal(true);
                                                            setAddon(obj);
                                                        }}
                                                        className="text-blue-500 hover:text-blue-700"
                                                    >
                                                        <Pencil size={18} />
                                                    </button>
                                                    <button
                                                        onClick={() => {
                                                            setDeleteModal(true);
                                                            setAddon(obj);
                                                        }}
                                                        className="text-red-500 hover:text-red-700"
                                                    >
                                                        <Trash size={18} />
                                                    </button>
                                                </div>
                                            </TableCell>
                                        </TableRow>
                                    );
                                })}
                               
                            </TableBody>
                        </Table>
                    )}
                </div>
            </div>
        </>
    );
}

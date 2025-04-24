import { Pencil, Trash } from "lucide-react";
import { Table, TableBody, TableCell, TableHeader, TableRow } from "../../ui/table";
import AddButton from "../../ui/button/AddButton";
import { useEffect, useState } from "react";
import AddFoodStationModal from "./AddFoodStationModal";
import toast from "react-hot-toast";
import { deleteFoodStation, getAllFoodStation } from "../../../services/adminService";
import { useDispatch, useSelector } from "react-redux";
import { addAllfoodStationsAction, deletefoodStationAction } from "../../../features/admin/foodStationSlice";
import { IRootState } from "../../../app/store";
import { IFoodStation } from "../../../interface/IFoodStation";
import DeleteModal from "../../ui/modal/DeleteModal";
import EditFoodStationModal from "./EditFoodStationModal";

export default function LiveFoodStationTable() {
    const [addFoodStationModal, setAddFoodStationModal] = useState(false);
    const foodStations = useSelector((data: IRootState) => data?.foodStation?.foodStations);
    const dispatch = useDispatch();
    const [foodStation, setFoodStation] = useState<any>();
    const [deleteModal, setDeleteModal] = useState(false);
    const [editModal,setEditModal]  =useState(false)

    const handleDelete = async (arg: boolean) => {
        if (!arg) {
            setDeleteModal(false);
        } else {
            try {
                const res = await deleteFoodStation(foodStation?._id as string);
                dispatch(deletefoodStationAction(foodStation));
                setDeleteModal(false);
            } catch (error) {
                toast.error(error as string);
            }
        }
    };

    const onClick = () => {
        setAddFoodStationModal(true);
    };

    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await getAllFoodStation();
                dispatch(addAllfoodStationsAction(res?.data?.data));
            } catch (error) {
                toast.error(error as string);
            }
        };
        fetchData();
    }, []);

    return (
        <>
            <AddButton onClick={onClick} text="Add New Foodstation" />
            {editModal&&<EditFoodStationModal setIsOpen={setEditModal} foodStation={foodStation}/>}
            {addFoodStationModal && <AddFoodStationModal setIsOpen={setAddFoodStationModal} />}
            <DeleteModal handleDelete={handleDelete} isDeleteModalOpen={deleteModal} text="Live Foood Station" />
            <div className="overflow-hidden rounded-xl border border-gray-200 bg-white dark:border-white/[0.05] dark:bg-white/[0.03]">
                <div className="max-w-full overflow-x-auto">
                    <Table>
                        {/* Table Header */}
                        <TableHeader className="border-b border-gray-100 dark:border-white/[0.05]">
                            <TableRow>
                                <TableCell isHeader className="px-5 py-3 font-medium text-start text-theme-xs text-gray-500 dark:text-gray-400">
                                    No
                                </TableCell>
                                <TableCell isHeader className="px-5 py-3 font-medium text-start text-theme-xs text-gray-500 dark:text-gray-400">
                                    Name
                                </TableCell>
                                <TableCell isHeader className="px-5 py-3 font-medium text-start text-theme-xs text-gray-500 dark:text-gray-400">
                                    Image
                                </TableCell>
                                <TableCell isHeader className="px-5 py-3 font-medium text-start text-theme-xs text-gray-500 dark:text-gray-400">
                                    Type
                                </TableCell>
                                <TableCell isHeader className="px-5 py-3 font-medium text-start text-theme-xs text-gray-500 dark:text-gray-400">
                                    Description
                                </TableCell>
                                <TableCell isHeader className="px-5 py-3 font-medium text-start text-theme-xs text-gray-500 dark:text-gray-400">
                                    Actions
                                </TableCell>
                            </TableRow>
                        </TableHeader>

                        {/* Table Body */}
                        <TableBody className="divide-y divide-gray-100 dark:divide-white/[0.05]">
                            {foodStations.map((item: IFoodStation, index: number) => (
                                <TableRow key={index}>
                                    <TableCell className="px-4 py-3 text-start text-theme-sm text-gray-500 dark:text-gray-400">{index + 1}</TableCell>
                                    <TableCell className="px-4 py-3 text-start text-theme-sm text-gray-500 dark:text-gray-400">{item.name}</TableCell>
                                    <TableCell className="px-4 py-3 text-start">
                                        <img src={item.image} alt={item.name} className="w-[50px] h-[50px] rounded-md object-cover" />
                                    </TableCell>
                                    <TableCell className="px-4 py-3 text-start text-theme-sm text-gray-500 dark:text-gray-400">{item.type}</TableCell>
                                    <TableCell className="px-4 py-3 text-start text-theme-sm text-gray-500 dark:text-gray-400">
                                        {item.description}
                                    </TableCell>
                                    <TableCell>
                                        <div className="flex gap-3">
                                            <button onClick={()=>{setFoodStation(item);setEditModal(true)}} className="text-blue-500 hover:text-blue-700">
                                                <Pencil size={18} />
                                            </button>
                                            <button onClick={()=>{setFoodStation(item);setDeleteModal(true)}} className="text-red-500 hover:text-red-700">
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

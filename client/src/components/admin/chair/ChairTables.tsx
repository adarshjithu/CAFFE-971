import { useEffect, useState } from "react";
import AddButton from "../../ui/button/AddButton";
import { Table, TableBody, TableCell, TableHeader, TableRow } from "../../ui/table";
import { Pencil, Trash } from "lucide-react";
import AddChairModal from "./AddChairModal";
import { useDispatch, useSelector } from "react-redux";
import { IRootState } from "../../../app/store";
import { IChair } from "../../../interface/IChair";
import toast from "react-hot-toast";
import { deleteChair, getAllChairs } from "../../../services/adminService";
import { addAllchairsAction, deletechairAction } from "../../../features/admin/chairSlice";
import DeleteModal from "../../ui/modal/DeleteModal";
import EditChairModal from "./EditChairModal";

export default function ChairTable() {
    const [addChairModal, setAddChairModal] = useState(false);
    const chairs = useSelector((data: IRootState) => data?.chair?.chairs);
    const [chair,setChair] = useState<any>()
    const [deleteChairModal, setDeleteChairModal] = useState(false);
    const [editChairModal,setEditChairModal] = useState(false)
    const dispatch = useDispatch();

    const onClick = () => {
        setAddChairModal(true);
    };

    const handleDelete = async(arg:boolean) => {
        if(!arg){
            setDeleteChairModal(false)
        }else{
            try{
             const res =  await deleteChair(chair?._id as string)
             dispatch(deletechairAction(res?.data?.data));
              if(res?.data?.success){
                toast.success(res?.data?.message)
              }
              setDeleteChairModal(false)
            }catch(error){
                toast.error(error as string)
            }
        }
    };

    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await getAllChairs();
                dispatch(addAllchairsAction(res?.data?.data));
            } catch (error) {
                toast.error(error as string);
            }
        };

        fetchData();
    }, []);

    return (
        <>
            <AddButton text="Add New Chair" onClick={onClick} />
            {editChairModal&&<EditChairModal setIsOpen={setEditChairModal} chair={chair}/>}
            {addChairModal && <AddChairModal setIsOpen={setAddChairModal} />}
            <DeleteModal text="Chair" handleDelete={handleDelete} isDeleteModalOpen={deleteChairModal} />
            <div className="overflow-hidden rounded-xl border border-gray-200 bg-white dark:border-white/[0.05] dark:bg-white/[0.03]">
                <div className="max-w-full overflow-x-auto">
                    <Table>
                        {/* Table Header */}
                        <TableHeader className="border-b border-gray-100 dark:border-white/[0.05]">
                            <TableRow>
                                <TableCell isHeader className="px-5 py-3 font-medium text-gray-500 text-start text-theme-xs dark:text-gray-400">
                                    No
                                </TableCell>
                                <TableCell isHeader className="px-5 py-3 font-medium text-gray-500 text-start text-theme-xs dark:text-gray-400">
                                    Chair Name
                                </TableCell>
                                <TableCell isHeader className="px-5 py-3 font-medium text-gray-500 text-start text-theme-xs dark:text-gray-400">
                                    Image
                                </TableCell>
                                <TableCell isHeader className="px-5 py-3 font-medium text-gray-500 text-start text-theme-xs dark:text-gray-400">
                                    Status
                                </TableCell>
                                <TableCell isHeader className="px-5 py-3 font-medium text-gray-500 text-start text-theme-xs dark:text-gray-400">
                                    Actions
                                </TableCell>
                            </TableRow>
                        </TableHeader>

                        {/* Table Body */}
                        <TableBody className="divide-y divide-gray-100 dark:divide-white/[0.05]">
                            {chairs.map((obj: IChair, index: number) => (
                                <TableRow key={obj._id}>
                                    <TableCell className="px-4 py-3 text-gray-500 text-start text-theme-sm dark:text-gray-400">{index + 1}</TableCell>
                                    <TableCell className="px-4 py-3 text-gray-500 text-start text-theme-sm dark:text-gray-400">
                                        {obj.name}
                                    </TableCell>
                                    <TableCell className="px-4 py-3 text-start">
                                        <img src={obj.image} alt={obj.name} className="w-[50px] h-[50px] rounded-md object-cover" />
                                    </TableCell>
                                    <TableCell className="px-4 py-3 text-gray-500 text-start text-theme-sm dark:text-gray-400">
                                        <span
                                            className={`px-2 py-1 rounded text-sm ${
                                                obj.isActive ? "bg-green-100 text-green-700" : "bg-red-100 text-red-700"
                                            }`}
                                        >
                                            {obj.isActive ? "Active" : "Inactive"}
                                        </span>
                                    </TableCell>
                                    <TableCell>
                                        <div className="flex gap-3">
                                            <button onClick={()=>{setChair(obj);setEditChairModal(true)}} className="text-blue-500 hover:text-blue-700">
                                                <Pencil size={18} />
                                            </button>
                                            <button onClick={()=>{setChair(obj);setDeleteChairModal(true)}} className="text-red-500 hover:text-red-700">
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

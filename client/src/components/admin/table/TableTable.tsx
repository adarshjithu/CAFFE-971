import { Pencil, Trash } from "lucide-react";
import { Table, TableBody, TableCell, TableHeader, TableRow } from "../../ui/table";
import { useEffect, useState } from "react";
import TableModal from "./TableModal";
import AddButton from "../../ui/button/AddButton";
import { useDispatch, useSelector } from "react-redux";
import { ITable } from "../../../interface/ITable";
import { IRootState } from "../../../app/store";
import toast from "react-hot-toast";
import { deleteTable, getAllTables } from "../../../services/adminService";
import { addAlltablesAction, deletetableAction } from "../../../features/admin/tableSlice";
import DeleteModal from "../../ui/modal/DeleteModal";
import TableEditModal from "./TableEditModal";

export default function TableTable() {
    const [addTableModal, setAddTableModal] = useState(false);
    const tables = useSelector((data: IRootState) => data?.table?.tables);
    const dispatch = useDispatch();
    const [deleteTableModal, setDeleteTableModal] = useState(false);
    const [table, setTable] = useState<any>();
    const [tableEditModal,setTableEditModal] = useState(false)

    const onClick = () => {
        setAddTableModal(true);
    };

    const handleDelete = async (arg: boolean) => {
        if (!arg) {
            setDeleteTableModal(false);
        } else {
            try {
                const res = await deleteTable(table?._id as string);
                dispatch(deletetableAction(res?.data?.data));
                setDeleteTableModal(false);
                toast.success(res?.data?.message);
            } catch (error) {
                toast.error(error as string);
            }
        }
    };

    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await getAllTables();
                dispatch(addAlltablesAction(res?.data?.data));
            } catch (error) {
                toast.error(error as string);
            }
        };
        fetchData();
    }, []);
    return (
        <>
            <AddButton text="Add New Table" onClick={onClick} />
            {tableEditModal&&<TableEditModal setTableEditModal={setTableEditModal} table={table}/>}
            <div className="overflow-hidden rounded-xl border border-gray-200 bg-white dark:border-white/[0.05] dark:bg-white/[0.03]">
                {deleteTableModal && <DeleteModal isDeleteModalOpen={deleteTableModal} text="Table" handleDelete={handleDelete} />}
                {addTableModal && <TableModal setIsOpen={setAddTableModal} />}
                <div className="max-w-full overflow-x-auto">
                    <Table>
                        {/* Table Header */}
                        <TableHeader className="border-b border-gray-100 dark:border-white/[0.05]">
                            <TableRow>
                                <TableCell isHeader className="px-5 py-3 font-medium text-start text-theme-xs text-gray-500 dark:text-gray-400">
                                    No
                                </TableCell>
                                <TableCell isHeader className="px-5 py-3 font-medium text-start text-theme-xs text-gray-500 dark:text-gray-400">
                                    Table Name
                                </TableCell>
                                <TableCell isHeader className="px-5 py-3 font-medium text-start text-theme-xs text-gray-500 dark:text-gray-400">
                                    Image
                                </TableCell>
                                <TableCell isHeader className="px-5 py-3 font-medium text-start text-theme-xs text-gray-500 dark:text-gray-400">
                                    Rate 
                                </TableCell>
                                <TableCell isHeader className="px-5 py-3 font-medium text-start text-theme-xs text-gray-500 dark:text-gray-400">
                                    Number of Chairs
                                </TableCell>
                                <TableCell isHeader className="px-5 py-3 font-medium text-start text-theme-xs text-gray-500 dark:text-gray-400">
                                    Size (cm)
                                </TableCell>
                                <TableCell isHeader className="px-5 py-3 font-medium text-start text-theme-xs text-gray-500 dark:text-gray-400">
                                    CreatedAt
                                </TableCell>
                                <TableCell isHeader className="px-5 py-3 font-medium text-start text-theme-xs text-gray-500 dark:text-gray-400">
                                    Actions
                                </TableCell>
                            </TableRow>
                        </TableHeader>

                        {/* Table Body */}
                        <TableBody className="divide-y divide-gray-100 dark:divide-white/[0.05]">
                            {tables.map((obj: ITable, index: number) => (
                                <TableRow key={index}>
                                    <TableCell className="px-4 py-3 text-start text-theme-sm text-gray-500 dark:text-gray-400">{index + 1}</TableCell>
                                    <TableCell className="px-4 py-3 text-start text-theme-sm text-gray-500 dark:text-gray-400">{obj.name}</TableCell>
                                    <TableCell className="px-4 py-3 text-start">
                                        <img src={obj.image} alt={obj.name} className="w-[50px] h-[50px] rounded-md object-cover" />
                                    </TableCell>
                                    <TableCell className="px-4 py-3 text-start text-theme-sm text-gray-500 dark:text-gray-400">
                                        {obj?.rate}
                                    </TableCell>
                                    <TableCell className="px-4 py-3 text-start text-theme-sm text-gray-500 dark:text-gray-400">
                                        {obj?.chairCount}
                                    </TableCell>
                                    <TableCell className="px-4 py-3 text-start text-theme-sm text-gray-500 dark:text-gray-400">
                                        <span>Width : {obj?.width}</span>
                                        <br />
                                        <span>Height : {obj?.height}</span>
                                        <br />
                                        <span>Length : {obj?.length}</span>
                                    </TableCell>
                                    <TableCell className="px-4 py-3 text-start text-theme-sm text-gray-500 dark:text-gray-400">
                                        {new Date(obj?.createdAt).toDateString()}
                                    </TableCell>

                                    <TableCell>
                                        <div className="flex gap-3">
                                            <button onClick={()=>{setTable(obj);setTableEditModal(true)}} className="text-blue-500 hover:text-blue-700">
                                                <Pencil size={18} />
                                            </button>
                                            <button
                                                onClick={() => {
                                                    setTable(obj);
                                                    setDeleteTableModal(true);
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

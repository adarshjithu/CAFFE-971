import { Table, TableBody, TableCell, TableHeader, TableRow } from "../../ui/table";
import Badge from "../../ui/badge/Badge";
import { Children, useEffect, useState } from "react";
import toast from "react-hot-toast";
import { getAllUsers } from "../../../services/users";
import { useDispatch, useSelector } from "react-redux";
import { IRootState } from "../../../app/store";
import { setUsers } from "../../../features/userSlice";
import { IUser } from "../../../interface/IUser";
import {Pencil} from 'lucide-react'
import {Trash} from 'lucide-react'
import { Modal } from "../../ui/modal";
import DeleteModal from "../../ui/modals/common/DeleteModal";
interface Order {
    id: number;
    user: {
        image: string;
        name: string;
        role: string;
    };
    projectName: string;
    team: {
        images: string[];
    };
    status: string;
    budget: string;
}

// Define the table data using the interface
const tableData: Order[] = [
    {
        id: 1,
        user: {
            image: "/images/user/user-17.jpg",
            name: "Lindsey Curtis",
            role: "Web Designer",
        },
        projectName: "Agency Website",
        team: {
            images: ["/images/user/user-22.jpg", "/images/user/user-23.jpg", "/images/user/user-24.jpg"],
        },
        budget: "3.9K",
        status: "Active",
    },
    {
        id: 2,
        user: {
            image: "/images/user/user-18.jpg",
            name: "Kaiya George",
            role: "Project Manager",
        },
        projectName: "Technology",
        team: {
            images: ["/images/user/user-25.jpg", "/images/user/user-26.jpg"],
        },
        budget: "24.9K",
        status: "Pending",
    },
    {
        id: 3,
        user: {
            image: "/images/user/user-17.jpg",
            name: "Zain Geidt",
            role: "Content Writing",
        },
        projectName: "Blog Writing",
        team: {
            images: ["/images/user/user-27.jpg"],
        },
        budget: "12.7K",
        status: "Active",
    },
    {
        id: 4,
        user: {
            image: "/images/user/user-20.jpg",
            name: "Abram Schleifer",
            role: "Digital Marketer",
        },
        projectName: "Social Media",
        team: {
            images: ["/images/user/user-28.jpg", "/images/user/user-29.jpg", "/images/user/user-30.jpg"],
        },
        budget: "2.8K",
        status: "Cancel",
    },
    {
        id: 5,
        user: {
            image: "/images/user/user-21.jpg",
            name: "Carla George",
            role: "Front-end Developer",
        },
        projectName: "Website",
        team: {
            images: ["/images/user/user-31.jpg", "/images/user/user-32.jpg", "/images/user/user-33.jpg"],
        },
        budget: "4.5K",
        status: "Active",
    },
];

export default function UserTable() {
    const users = useSelector((data: IRootState) => data?.users?.users);
    const [isOpen,setIsOpen] = useState(false)
    const dispatch = useDispatch();
    
    const deleteUser = (obj:any)=>{
        setIsOpen(true)
    }

    const handleDelete = (action:boolean)=>{
           setIsOpen(false)
    }
    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await getAllUsers();
                dispatch(setUsers(res?.data?.data));
            } catch (error) {
                toast.error(error as string);
            }
        };
        fetchData();
    }, []);

    return (
        
        <div className="overflow-hidden rounded-xl border border-gray-200 bg-white dark:border-white/[0.05] dark:bg-white/[0.03]">
            <div className="max-w-full overflow-x-auto">
                <DeleteModal isOpen={isOpen} handleDelete={handleDelete}/>
                <Table>
                    {/* Table Header */}
                    <TableHeader className="border-b border-gray-100 dark:border-white/[0.05]">
                        <TableRow>
                            <TableCell isHeader className="px-5 py-3 font-medium text-gray-500 text-start text-theme-xs dark:text-gray-400">
                                Username
                            </TableCell>
                            <TableCell isHeader className="px-5 py-3 font-medium text-gray-500 text-start text-theme-xs dark:text-gray-400">
                                Email
                            </TableCell>

                            <TableCell isHeader className="px-5 py-3 font-medium text-gray-500 text-start text-theme-xs dark:text-gray-400">
                                Chapter
                            </TableCell>
                            <TableCell isHeader className="px-5 py-3 font-medium text-gray-500 text-start text-theme-xs dark:text-gray-400">
                                Region
                            </TableCell>
                            <TableCell isHeader className="px-5 py-3 font-medium text-gray-500 text-start text-theme-xs dark:text-gray-400">
                                Date
                            </TableCell>
                            <TableCell isHeader className="px-5 py-3 font-medium text-gray-500 text-start text-theme-xs dark:text-gray-400">
                                Registration
                            </TableCell>
                            <TableCell isHeader className="px-5 py-3 font-medium text-gray-500 text-start text-theme-xs dark:text-gray-400">
                                Actions
                            </TableCell>
                        </TableRow>
                    </TableHeader>

                    {/* Table Body */}
                    <TableBody className="divide-y divide-gray-100 dark:divide-white/[0.05]">
                        {users?.map((data:IUser) => (
                            <TableRow key={data?._id}>
                                <TableCell className="px-5 py-4 sm:px-6 text-start">
                                    <div className="flex items-center gap-3">
                                        
                                        <div>
                                            <span className="block font-medium text-gray-800 text-theme-sm dark:text-white/90">
                                                {data?.name}
                                            </span>
                                            <span className="block text-gray-500 text-theme-xs dark:text-gray-400">{''}</span>
                                        </div>
                                    </div>
                                </TableCell>

                                <TableCell className="px-4 py-3 text-gray-500 text-start text-theme-sm dark:text-gray-400">
                                    {data?.email}
                                </TableCell>

                                <TableCell className="px-4 py-3 text-gray-500 text-start text-theme-sm dark:text-gray-400">
                                    {data?.chapter}
                                </TableCell>
                                <TableCell className="px-4 py-3 text-gray-500 text-start text-theme-sm dark:text-gray-400">
                                   {data?.region}
                                   
                                </TableCell>
                                <TableCell className="px-4 py-3 text-gray-500 text-start text-theme-sm dark:text-gray-400">
                                    {new Date(data?.createdAt).toLocaleDateString()}
                                </TableCell>
                                <TableCell className=" cursor-pointer px-4 py-3 text-gray-500 text-start text-theme-sm dark:text-gray-400">
                                    <Badge size="sm" color={data?.isVerified? "success" : "warning"}>
                                        {data?.isVerified?"Verified":"Pending"}
                                    </Badge>
                                </TableCell>
                                <TableCell>
                                    <div className="flex gap-3">
                                        <button 
                                            className="text-blue-500 hover:text-blue-700" 
                                           >
                                            <Pencil size={18} />
                                        </button>
                                        <button 
                                            onClick={()=>deleteUser(data)}
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
    );
}

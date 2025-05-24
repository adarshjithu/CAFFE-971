import { Outlet } from "react-router-dom"; // Changed import from "react-router" to "react-router-dom"

const UserLayout = () => {
    return (
        <div className="flex flex-col md:flex-row h-screen w-full">
            <Outlet />
        </div>
    );
};

export default UserLayout;

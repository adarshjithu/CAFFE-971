import ResponsiveMenu from "./AppSidebar";

const UserLayout = ({ children }: any) => {
    return (
        <div
            className="w-screen h-[100%] p-6 lg:p-16"
            style={{
                background: "linear-gradient(90deg, #004430, #04845E, #004430)",
            }}
        >
            <ResponsiveMenu />
            {children}
        </div>
    );
};

export default UserLayout;

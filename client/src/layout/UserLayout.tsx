import ResponsiveMenu from "./AppSidebar";

const UserLayout = ({ children }: any) => {
    return (
        <div
            className="w-screen h-full p-2 lg:p-16"
            style={{
                background: "linear-gradient(180deg, #004430 0%, #04845E 20%, #04845E 80%, #004430 100%)",
            }}
        >
            <ResponsiveMenu />
            {children}
        </div>
    );
};

export default UserLayout;

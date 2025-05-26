import { Bell } from "lucide-react";

function NotificationComponent() {
    return (
        <div className="mr-4 w-10 h-10 rounded-full bg-[black] flex items-center justify-center shadow">
            <Bell size={18} className="text-white" />
        </div>
    );
}

export default NotificationComponent;

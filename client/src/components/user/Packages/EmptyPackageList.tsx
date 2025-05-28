import { PackageX } from "lucide-react";

const EmptyPackage = () => {
    return (
        <div className="flex flex-col items-center justify-center text-center py-16">
            <PackageX size={64} className="text-[#b38c50] mb-4" />
            <h2 className="text-white text-xl font-semibold mb-2">No Packages Found</h2>
            <p className="text-[#b38c50]">Try adjusting your search or filters to find what you're looking for.</p>
        </div>
    );
};

export default EmptyPackage;

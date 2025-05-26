import { Search } from "lucide-react";

function SearchBar() {
    return (
        <div className="w-full lg:w-1/2 bg-[#113D30] rounded-2xl px-4 py-2">
            <div className="flex items-center gap-3">
                <Search color="#b38c50" className="w-5 h-5" />
                <input
                    type="text"
                    placeholder="Search"
                    className="w-full bg-transparent text-white placeholder-[#b38c50] focus:outline-none"
                />
            </div>
        </div>
    );
}

export default SearchBar;

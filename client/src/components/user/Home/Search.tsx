import { Search } from "lucide-react";

function SearchBar() {
    return (
        <div className=" w-[100%] lg:w-[50%] bg-[#113D30] rounded-2xl p-1">
            <div className="flex">
                <Search color="#b38c50" />
                <input className="ml-2 text-white" type="text" placeholder="Search" />
            </div>
        </div>
    );
}

export default SearchBar;

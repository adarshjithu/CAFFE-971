import { Search } from "lucide-react";
import { useState } from "react";

function SearchBar({ setSearch, search }: { search: string; setSearch: React.Dispatch<React.SetStateAction<string>> }) {
    const [debounceTimeout, setDebounceTimeout] = useState<any | null>(null);

    const searchPackage = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;

        // Clear the previous timeout if it exists
        if (debounceTimeout) clearTimeout(debounceTimeout);

        // Set a new timeout
        const newTimeout = setTimeout(() => {
            setSearch(value);
        }, 500); // Adjust delay as needed (500ms here)

        setDebounceTimeout(newTimeout);
    };

    return (
        <div className="w-full lg:w-1/2 bg-[#113D30] rounded-2xl px-4 py-2">
            <div className="flex items-center gap-3">
                <Search color="#b38c50" className="w-5 h-5" />
                <input
                    onChange={searchPackage}
                    type="text"
                    
                    placeholder="Search"
                    className="w-full bg-transparent text-white placeholder-[#b38c50] focus:outline-none"
                />
            </div>
        </div>
    );
}

export default SearchBar;

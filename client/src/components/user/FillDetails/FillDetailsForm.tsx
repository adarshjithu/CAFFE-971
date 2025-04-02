import { useState } from "react";

const FillDetailsForm = () => {
    const [guestCount, setGuestCount] = useState(1);
    const [tableType, setTableType] = useState("square");
    const [tables, setTables] = useState(1);
    const [chairs, setChairs] = useState(4);
    const [displayFood, setDisplayFood] = useState(false);
    const [liveStation, setLiveStation] = useState(false);

    const packageItems = ["Porotta", "Chicken Curry", "Beef Fry", "Vegetable Stir Fry", "Salad", "Dessert", "Soft Drinks"];

    return (
        <div className="max-w-4xl mx-auto p-6  rounded-xl">
            {/* Header */}
            <div className="text-center mb-8">
                <h1 className="text-3xl font-bold text-gray-800 mb-2">Fill Details</h1>
                <h2 className="text-2xl font-serif  text-amber-600">A Slice of Heaven</h2>
            </div>

            {/* Date and Time */}
            <div className="mb-8 bg-white p-6 rounded-lg shadow">
                <h3 className="text-lg font-semibold text-gray-700 mb-4">Date and Time</h3>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="border border-gray-400 rounded-lg border-2 h-[50px] flex justify-center items-center">
                        <input type="date" />
                        <span>Select a Date</span>
                    </div>
                    <div className="border border-gray-400 rounded-lg border-2 h-[50px] flex justify-center items-center">
                        <span>Select a Time</span>
                        <input type="date" />
                    </div>
                </div>
            </div>

            {/* Price */}
            <div className="mb-8 bg-white p-6 rounded-lg shadow">
                <h3 className="text-lg font-semibold text-gray-700 mb-2">Price Details</h3>
                <div className="flex items-center justify-between">
                    <span className="text-gray-600">Price Per Plate:</span>
                    <div className="text-right">
                        <span className="text-sm text-gray-500 line-through mr-2">AED 298</span>
                        <span className="text-xl font-bold text-amber-600">AED 107</span>
                        <span className="ml-2 text-green-600 text-sm">(20.88% off)</span>
                    </div>
                </div>
            </div>

            {/* Guest Count */}
            <div className="mb-8 bg-white p-6 rounded-lg shadow">
                <h3 className="text-lg font-semibold text-gray-700 mb-4">Total Guests</h3>
                <div className="flex items-center">
                    <button
                        onClick={() => setGuestCount(Math.max(1, guestCount - 1))}
                        className="p-2 bg-gray-200 rounded-lg hover:bg-gray-300 transition-colors"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M5 10a1 1 0 011-1h8a1 1 0 110 2H6a1 1 0 01-1-1z" clipRule="evenodd" />
                        </svg>
                    </button>
                    <input
                        type="number"
                        value={guestCount}
                        onChange={(e) => setGuestCount(Math.max(1, parseInt(e.target.value) || 1))}
                        className="mx-4 w-20 text-center p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500"
                    />
                    <button onClick={() => setGuestCount(guestCount + 1)} className="p-2 bg-gray-200 rounded-lg hover:bg-gray-300 transition-colors">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                            <path
                                fillRule="evenodd"
                                d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z"
                                clipRule="evenodd"
                            />
                        </svg>
                    </button>
                </div>
            </div>

            {/* Table Type */}
            <div className="mb-8 bg-white p-6 rounded-lg shadow">
                <h3 className="text-lg font-semibold text-gray-700 mb-4">Table Type</h3>
                <div className="flex space-x-6">
                    <label className="flex items-center space-x-2">
                        <input
                            type="radio"
                            checked={tableType === "square"}
                            onChange={() => setTableType("square")}
                            className="h-5 w-5 text-amber-600 focus:ring-amber-500"
                        />
                        <span className="text-gray-700">Square</span>
                    </label>
                    <label className="flex items-center space-x-2">
                        <input
                            type="radio"
                            checked={tableType === "round"}
                            onChange={() => setTableType("round")}
                            className="h-5 w-5 text-amber-600 focus:ring-amber-500"
                        />
                        <span className="text-gray-700">Round</span>
                    </label>
                </div>
            </div>

            {/* Seating */}
            <div className="mb-8 bg-white p-6 rounded-lg shadow">
                <h3 className="text-lg font-semibold text-gray-700 mb-4">Seating</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                        <label className="block text-sm font-medium text-gray-600 mb-1">Tables</label>
                        <input
                            type="number"
                            value={tables}
                            onChange={(e) => setTables(parseInt(e.target.value) || 0)}
                            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500"
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-600 mb-1">Chairs</label>
                        <input
                            type="number"
                            value={chairs}
                            onChange={(e) => setChairs(parseInt(e.target.value) || 0)}
                            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500"
                        />
                    </div>
                </div>
            </div>

            {/* Options */}
            <div className="mb-8 bg-white p-6 rounded-lg shadow">
                <h3 className="text-lg font-semibold text-gray-700 mb-4">Options</h3>
                <div className="space-y-4">
                    <label className="flex items-center space-x-3">
                        <input
                            type="checkbox"
                            checked={displayFood}
                            onChange={() => setDisplayFood(!displayFood)}
                            className="h-5 w-5 text-amber-600 rounded focus:ring-amber-500"
                        />
                        <span className="text-gray-700">Display Food Items</span>
                    </label>
                    <label className="flex items-center space-x-3">
                        <input
                            type="checkbox"
                            checked={liveStation}
                            onChange={() => setLiveStation(!liveStation)}
                            className="h-5 w-5 text-amber-600 rounded focus:ring-amber-500"
                        />
                        <span className="text-gray-700">Live Food Station</span>
                    </label>
                </div>
            </div>

            {/* Package Items */}
            <div className="bg-white p-6 rounded-lg shadow">
                <h3 className="text-lg font-semibold text-gray-700 mb-4">Package Items</h3>
                <div className="space-y-2">
                    <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                        <div>
                            <span className="font-medium text-gray-800">A Slice of Heaven</span>
                        </div>
                        <button className="text-sm text-amber-600 hover:text-amber-700 font-medium">Edit</button>
                    </div>

                    <ul className="border border-gray-200 rounded-lg divide-y divide-gray-200">
                        {packageItems.map((item, index) => (
                            <li key={index} className="p-3 hover:bg-gray-50">
                                {item}
                            </li>
                        ))}
                    </ul>
                </div>
            </div>

            {/* Submit Button */}
            <div className="mt-8">
                <button className="w-full py-3 bg-amber-600 hover:bg-amber-700 text-white font-bold rounded-lg shadow-md transition-colors duration-200">
                    Confirm Booking
                </button>
            </div>
        </div>
    );
};

export default FillDetailsForm;

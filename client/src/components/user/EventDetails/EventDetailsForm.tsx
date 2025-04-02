import { useState } from "react";

function EventDetailsForm() {
  const [formData, setFormData] = useState({
    event: "",
    eventType: "",
    tableType: "",
    tables: 0,
    chairs: 0,
    date: "",
    displayFoodItems: false,
    liveFoodStation: false
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    // Add your form submission logic here
  };

  return (
    <div className="max-w-4xl mx-auto p-6  rounded-lg ">
        <div className="w-full flex flex-row justify-center">
            
      <h1 className="text-3xl font-bold text-gray-800 mb-6">Event Details</h1>
        </div>
      
      <form onSubmit={handleSubmit}>
        {/* Event Image Section */}
        <div className="mb-8">
          <div className="w-full h-64 bg-gray-200 rounded-lg overflow-hidden flex items-center justify-center">
            <span className="text-gray-500">Event Image</span>
          </div>
        </div>

        {/* Event Selection */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          <div className="space-y-2">
            <label className="block text-sm font-medium text-gray-700">Event</label>
            <select
              name="event"
              value={formData.event}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 bg-[#D9D9D999]"
            >
              <option value="">Choose Your Event</option>
              <option value="wedding">Wedding</option>
              <option value="corporate">Corporate Event</option>
              <option value="birthday">Birthday Party</option>
              <option value="other">Other</option>
            </select>
          </div>

          <div className="space-y-2">
            <label className="block text-sm font-medium text-gray-700">Event Type</label>
            <select
              name="eventType"
              value={formData.eventType}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 bg-[#D9D9D999]"
            >
              <option value="">Choose Event Type</option>
              <option value="indoor">Indoor</option>
              <option value="outdoor">Outdoor</option>
              <option value="hybrid">Hybrid</option>
            </select>
          </div>
        </div>

        {/* Table Type Selection */}
        <div className="mb-6">
          <label className="block text-sm font-medium text-gray-700 mb-2">Table Type</label>
          <div className="flex space-x-4">
            <label className="flex items-center space-x-2">
              <input
                type="radio"
                name="tableType"
                value="square"
                checked={formData.tableType === "square"}
                onChange={handleChange}
                className="h-4 w-4 text-blue-600 focus:ring-blue-500 bg-[#D9D9D999] border-gray-300"
              />
              <span>Square</span>
            </label>
            <label className="flex items-center space-x-2">
              <input
                type="radio"
                name="tableType"
                value="round"
                checked={formData.tableType === "round"}
                onChange={handleChange}
                className="h-4 w-4 text-blue-600 focus:ring-blue-500 bg-[#D9D9D999] border-gray-300"
              />
              <span>Round</span>
            </label>
          </div>
        </div>

        {/* Seating Information */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Number of Tables</label>
            <input
              type="number"
              name="tables"
              value={formData.tables}
              onChange={handleChange}
              min="0"
              className="w-full p-2 border border-gray-300 rounded-md bg-[#D9D9D999]"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Number of Chairs</label>
            <input
              type="number"
              name="chairs"
              value={formData.chairs}
              onChange={handleChange}
              min="0"
              className="w-full p-2 border border-gray-300 rounded-md bg-[#D9D9D999]"
            />
          </div>
        </div>

        {/* Date Selection */}
        <div className="mb-6">
          <label className="block text-sm font-medium text-gray-700 mb-1">Event Date and Time</label>
          <input
            type="datetime-local"
            name="date"
            value={formData.date}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded-md bg-[#D9D9D999]"
          />
        </div>

        {/* Food Options */}
        <div className="space-y-3 mb-6">
          <label className="block text-sm font-medium text-gray-700 mb-2">Food Options</label>
          <div className="flex items-center">
            <input
              type="checkbox"
              name="displayFoodItems"
              checked={formData.displayFoodItems}
              onChange={handleChange}
              className="h-4 w-4 text-blue-600 focus:ring-blue-500 bg-[#D9D9D999] border-gray-300"
            />
            <label className="ml-2 text-sm text-gray-700">Display Food Items</label>
          </div>
          <div className="flex items-center">
            <input
              type="checkbox"
              name="liveFoodStation"
              checked={formData.liveFoodStation}
              onChange={handleChange}
              className="h-4 w-4 text-blue-600 focus:ring-blue-500 bg-[#D9D9D999] border-gray-300"
            />
            <label className="ml-2 text-sm text-gray-700">Live Food Station</label>
          </div>
        </div>

        {/* Event Description */}
        <div className="mb-8">
          <h2 className="text-xl font-semibold text-gray-800 mb-3">Event Description</h2>
          <p className="text-gray-600">
            There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour.
          </p>
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full bg-[#BD9455]  text-white font-medium py-2 px-4 rounded-md transition duration-300"
        >
          Save Changes
        </button>
      </form>
    </div>
  );
}

export default EventDetailsForm;
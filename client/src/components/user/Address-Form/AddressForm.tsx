"use client";

import { useState } from "react";
import { Check } from 'lucide-react';

export default function AddressForm() {
  const [isSubmitted, setIsSubmitted] = useState(false);

  function handleSubmit(e:any) {
    e.preventDefault();
    setIsSubmitted(true);
  }

  const countries = [
    "United States", "Canada", "United Kingdom", "Australia", "Germany",
    "France", "Japan", "China", "India", "Brazil"
  ];

  

  return (
    <div className="w-full max-w-4xl mx-auto grid md:grid-cols-1">
      <div className="w-full  p-6  rounded-lg">
      <h1 className="text-xl font-bold mb-4 text-center">Address</h1>
        <form onSubmit={handleSubmit} className="space-y-4">
          {[
            { id: "fullName", label: "Full Name", placeholder: "Your name" },
            { id: "email", label: "Email Address", placeholder: "Email" },
            { id: "phone", label: "Phone Number", placeholder: "Phone number" },
            { id: "address", label: "Address", placeholder: "Address" },
          ].map(({ id, label, placeholder }) => (
            <div key={id} className="space-y-2">
              <label htmlFor={id} className="block text-sm font-medium">{label}</label>
              <input id={id} type="text" placeholder={placeholder} className="bg-[#D9D9D999] w-full p-2 border rounded-md" />
            </div>
          ))}

          <div className="grid grid-cols-2 gap-4">
            {[
              { id: "zipCode", label: "Zip Code", placeholder: "Zip Code" },
              { id: "city", label: "City", placeholder: "City" },
            ].map(({ id, label, placeholder }) => (
              <div key={id} className="space-y-2">
                <label htmlFor={id} className="block text-sm font-medium">{label}</label>
                <input id={id} type="text" placeholder={placeholder} className="w-full p-2 border bg-[#D9D9D999] rounded-md" />
              </div>
            ))}
          </div>

          <div className="space-y-2">
            <label htmlFor="country" className="block text-sm font-medium">Country</label>
            <select id="country" className="w-full p-2 border rounded-md">
              <option value="" disabled selected>Choose your country</option>
              {countries.map((country) => (
                <option key={country} value={country}>{country}</option>
              ))}
            </select>
          </div>

          <div className="flex items-center space-x-2 pt-2">
            <input type="checkbox" id="saveAddress" className="w-4 h-4" />
            <label htmlFor="saveAddress" className="text-sm">Save address</label>
          </div>

          <button type="submit" className="w-full bg-[#BD9455] text-white p-2 rounded-md">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

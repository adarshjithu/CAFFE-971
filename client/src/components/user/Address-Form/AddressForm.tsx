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

  if (isSubmitted) {
    return (
      <div className="w-full max-w-md mx-auto bg-white p-6 shadow-md rounded-lg text-center mt-50">
        <div className="flex justify-center mb-4">
          <div className="relative">
            <div className="w-16 h-16 rounded-full bg-green-600 flex items-center justify-center">
              <Check className="h-8 w-8 text-white" />
            </div>
          </div>
        </div>
        <h2 className="text-2xl font-bold mb-1">Thank You</h2>
        <p className="font-medium mb-1">Your Order Is Confirmed</p>
        <p className="text-gray-500 text-sm">Enjoy our service</p>
      </div>
    );
  }

  return (
    <div className="w-full max-w-4xl mx-auto grid md:grid-cols-1">
      <div className="w-full bg-white p-6 shadow-md rounded-lg">
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
              <input id={id} type="text" placeholder={placeholder} className="w-full p-2 border rounded-md" />
            </div>
          ))}

          <div className="grid grid-cols-2 gap-4">
            {[
              { id: "zipCode", label: "Zip Code", placeholder: "Zip Code" },
              { id: "city", label: "City", placeholder: "City" },
            ].map(({ id, label, placeholder }) => (
              <div key={id} className="space-y-2">
                <label htmlFor={id} className="block text-sm font-medium">{label}</label>
                <input id={id} type="text" placeholder={placeholder} className="w-full p-2 border rounded-md" />
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

          <button type="submit" className="w-full bg-amber-600 hover:bg-amber-700 text-white p-2 rounded-md">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

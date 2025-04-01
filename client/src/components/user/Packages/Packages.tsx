import React from 'react'
import PackageCard from '../../ui/card/PackageCard'

function Packages() {
  return (
    <div className="py-8 px-4 sm:px-6 lg:px-8">
      {/* Section Header */}
      <div className="text-center mb-10">
        <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">Our Packages</h2>
        <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
          Choose the perfect package for your needs
        </p>
      </div>

      {/* Package Cards Grid */}
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {/* Package Cards - Repeat for each package */}
        <PackageCard />
        <PackageCard />
        <PackageCard />
        <PackageCard />
      </div>

      {/* View More Button (optional) */}
      <div className="mt-12 text-center">
        <button className="px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 transition-colors">
          View All Packages
        </button>
      </div>
    </div>
  )
}

export default Packages
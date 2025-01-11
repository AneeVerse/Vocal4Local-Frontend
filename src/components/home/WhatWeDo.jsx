import React from 'react';

const categories = ['Donate Cash', 'Volunteer', 'Donate Stuff'];

const exampleCategories = [
  'Categories Name',
  'Categories Name',
  'Categories Name',
  'Categories Name',
];

const WhatWeDo = () => {
  return (
    <div className='py-12'>
    <div className="bg-gray-100 flex flex-col lg:flex-row justify-between gap-8 p-8 rounded-lg">
      {/* Left Section */}
      <div className="w-full border border-gray-400 border-dashed p-6 rounded-lg">
        <div>
          <h2 className="text-lg font-bold text-[#0e2f50]">What We Do</h2>
          <h1 className="text-3xl font-extrabold text-[#8ac240] mt-2">Vocal4Local Causes</h1>
          <p className="mt-2 text-gray-700">
            You can support by choosing one of the methods below:
          </p>
        </div>

        {/* Categories Buttons */}
        <div className="flex flex-wrap gap-4 mt-4">
          <button className="bg-gray-200 text-[#0e2f50] px-6 py-2 rounded-lg font-bold shadow-sm hover:bg-[#8ac240] hover:text-white">
            ALL
          </button>
          {categories.map((category, index) => (
            <button
              key={index}
              className="bg-gray-200 text-gray-700 px-6 py-2 rounded-lg shadow-sm hover:bg-[#0e2f50] hover:text-white"
            >
              {category.toUpperCase()}
            </button>
          ))}
        </div>
      </div>

      {/* Right Section */}
      <div className="w-full border border-gray-400 border-dashed p-6 rounded-lg">
        <h2 className="text-lg font-bold text-[#0e2f50]">Here Are The Categories</h2>

        {/* Example Categories Grid */}
        <div className="grid grid-cols-2 gap-4 mt-4">
          {exampleCategories.map((name, index) => (
            <button
              key={index}
              className="bg-gray-200 text-gray-700 px-6 py-2 rounded-lg shadow-sm hover:bg-[#8ac240] hover:text-white"
            >
              {name}
            </button>
          ))}
        </div>

        {/* Temp Text */}
        <p className="mt-4 text-gray-600">
          Temp text temp text temp text.
          <br />
          Temp text temp text temp text.
        </p>
      </div>
    </div>
    </div>
  );
};

export default WhatWeDo;

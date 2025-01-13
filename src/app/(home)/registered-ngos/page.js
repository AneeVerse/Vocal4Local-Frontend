'use client';
import NGOSliderSection from '@/components/common/NGOSliderSection';
import React, { useState } from 'react';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';

const RegisteredNGOs = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [stateFilter, setStateFilter] = useState('');
  const [categoryFilter, setCategoryFilter] = useState('');

  const ngoData = [
    {
      id: 1,
      name: 'Name of the Initiative',
      location: 'New Delhi',
      since: '2001',
      description: 'Demo test demo text demo text demo text demo text...',
      categories: ['Health', 'Education', 'Women Empowerment'],
    },

    {
        id: 2,
        name: 'Name of the Initiative',
        location: 'Mumbai',
        since: '2002',
        description: 'Demo test demo text demo text demo text demo text...',
        categories: ['Health Care', 'Education Support', ]
    },
    
    {
        id: 3,
        name: 'Name of the Initiative',
        location: 'Bangalore',
        since: '2003',
        description: 'Demo test demo text demo text demo text demo text...',
        categories: ['Health Care', 'Education Support', ]
    },
    
  ];

  const handleSearch = (e) => {
    e.preventDefault();
    console.log('Search:', searchQuery);
  };

  return (
    <div className="bg-gray-100 min-h-screen py-12 px-6">
     
      <h1 className="text-3xl font-bold text-gray-800 text-left mb-10">Registered NGOs</h1>
<div className="mb-10">
<NGOSliderSection />
</div>
      {/* Header Section */}

      <div className="text-center mb-10">
        <h1 className="text-4xl font-bold text-gray-800">Name of the Initiative</h1>
        <p className="text-gray-600 mt-4">
          Demo test demo text demo text demo text demo text demo text demo text...
        </p>
      </div>

      {/* Filters Section */}
      <div className="flex flex-col sm:flex-row justify-center items-center gap-4 mb-12">
        <form onSubmit={handleSearch} className="flex items-center">
          <input
            type="text"
            placeholder="Search..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="border px-4 py-2 w-full rounded-l-lg focus:outline-none focus:ring-2 focus:ring-primary"
          />
          <button
            type="submit"
            className="bg-primary text-white px-4 py-2 rounded-r-lg hover:bg-secondary"
          >
            🔍
          </button>
        </form>
        <select
          value={stateFilter}
          onChange={(e) => setStateFilter(e.target.value)}
          className="border w-full sm:w-auto px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
        >
          <option value="">State</option>
          <option value="Delhi">Delhi</option>
          <option value="Maharashtra">Maharashtra</option>
          <option value="Karnataka">Karnataka</option>
        </select>
        <select
          value={categoryFilter}
          onChange={(e) => setCategoryFilter(e.target.value)}
          className="border w-full sm:w-auto px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
        >
          <option value="">Category</option>
          <option value="Health">Health</option>
          <option value="Education">Education</option>
          <option value="Women Empowerment">Women Empowerment</option>
        </select>
      </div>

      {/* NGO Cards */}
      <div className="flex justify-center flex-wrap gap-8">
        {ngoData.map((ngo) => (
          <div key={ngo.id} className="bg-white w-[380px] p-6 rounded-lg shadow-lg">
            <div className="flex items-center mb-4">
              <div className="w-16 h-16 bg-gray-300 rounded-full flex-shrink-0"></div>
              <div className="ml-4">
                <h2 className="text-xl font-bold text-gray-800">{ngo.name}</h2>
                <p className="text-gray-600">
                  At: {ngo.location} | Since: {ngo.since}
                </p>
              </div>
            </div>
            <div className="mb-4 flex flex-wrap space-x-2">
              {ngo.categories.map((category, index) => (
                <span
                  key={index}
                  className="bg-white text-secondary border border-secondary  px-2 py-1 rounded-full text-sm"
                >
                  {category}
                </span>
              ))}
            </div>
            <p className="text-gray-600 mb-4">{ngo.description}</p>
            <button className="bg-secondary text-white px-4 py-2 rounded-lg hover:bg-secondary">
              More Details
            </button>
          </div>
        ))}
      </div>

      {/* Pagination */}
      <div className="flex justify-center space-x-2 mt-12">
        <button className="bg-gray-300 px-4 py-2 rounded-lg">First</button>
        {[1, 2, 3, 4].map((page) => (
          <button
            key={page}
            className="bg-white border border-gray-300 px-4 py-2 rounded-lg hover:bg-gray-100"
          >
            {page}
          </button>
        ))}
        <button className="bg-gray-300 px-4 py-2 rounded-lg">Last</button>
      </div>
    </div>
  );
};

export default RegisteredNGOs;

"use client"
import InitiativeCard from '@/components/common/InitiativeCard';
import BlogComponent from '@/components/home/BlogComponent';
import ShortVideo from '@/components/home/ShortVideo';
import WhatWeDo from '@/components/home/WhatWeDo';
// use client
import React, { useState } from 'react';

// Sample Causes Data
const causes = [
    {
        id: 1,
        name: 'Campaign 1',
        organization: 'Organization 1',
        description: 'Description for Campaign 1',
        imgUrl: '/images/home/slide1.webp',
        progress: 25,
        goal: 40000,
        pledged: 10000,
      },
      {
        id: 2,
        name: 'Campaign 2',
        organization: 'Organization 2',
        description: 'Description for Campaign 2',
        imgUrl: '/images/home/slide2.webp',
        progress: 50,
        goal: 40000,
        pledged: 20000,
      },
  // Add more sample data as needed
];

const CausesPage = () => {
  const [filter, setFilter] = useState('All');

  const filteredCauses = filter === 'All' ? causes : causes.filter((cause) => cause.donationType === filter);

  return (
    <div className="p-8  bg-gray-100 min-h-screen">
      {/* Header Section */}
     <WhatWeDo />
      {/* Causes Grid */}
      <div className="grid grid-cols-1 px-6 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredCauses.map((cause) => (
         <InitiativeCard key={cause.id} campaign={cause} />
        ))}
      </div>

      {/* Footer Section */}
      <div className="flex flex-col-reverse gap-3 justify-center items-center mt-8">
        <button className="bg-gray-800 text-white px-6 py-2 rounded-lg">See All</button>
        <p className="text-gray-600">Total Causes: {causes.length}</p>
      </div>

      <ShortVideo />

      <BlogComponent />
    </div>
  );
};

export default CausesPage;

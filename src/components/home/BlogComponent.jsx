'use client'
import React, { useState } from 'react';

// Sample blog data with images
const blogs = [
  {
    id: 1,
    title: 'Latest Blog 1',
    category: 'latest',
    content: 'This is the content of Latest Blog 1.',
    image: 'https://via.placeholder.com/300x200',
  },
  {
    id: 2,
    title: 'Popular Blog 1',
    category: 'popular',
    content: 'This is the content of Popular Blog 1.',
    image: 'https://via.placeholder.com/300x200',
  },
  {
    id: 3,
    title: 'Latest Blog 2',
    category: 'latest',
    content: 'This is the content of Latest Blog 2.',
    image: 'https://via.placeholder.com/300x200',
  },
  {
    id: 4,
    title: 'Popular Blog 2',
    category: 'popular',
    content: 'This is the content of Popular Blog 2.',
    image: 'https://via.placeholder.com/300x200',
  },
];

// Blog component
const BlogComponent = () => {
  const [filter, setFilter] = useState('latest');

  const filteredBlogs = blogs.filter((blog) => blog.category === filter);

  return (
    <div className="p-8 bg-gray-50 shadow-lg rounded-xl">
      <h2 className="text-gray-700 text-3xl font-extrabold mb-6">Blogs</h2>
      
      <div className="flex justify-between items-center mb-8">
        <div className="space-x-4">
          <button
            className={`px-5 py-3 rounded-full transition-colors ${filter === 'latest' ? 'bg-secondary text-white' : 'bg-gray-200 text-gray-600 hover:bg-gray-300'}`}
            onClick={() => setFilter('latest')}
          >
            Latest Blog
          </button>
          <button
            className={`px-5 py-3 rounded-full transition-colors ${filter === 'popular' ? 'bg-secondary text-white' : 'bg-gray-200 text-gray-600 hover:bg-gray-300'}`}
            onClick={() => setFilter('popular')}
          >
            Popular Blog
          </button>
        </div>

        <a href="#" className="text-secondary hover:underline font-medium">
          View All Blogs
        </a>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredBlogs.map((blog) => (
          <div key={blog.id} className="bg-white rounded-lg shadow-lg hover:shadow-2xl transition-shadow overflow-hidden">
            <img src={blog.image} alt={`${blog.title} image`} className="w-full h-52 object-cover" />
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-4 text-gray-800">{blog.title}</h3>
              <p className="text-gray-600">{blog.content}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BlogComponent;

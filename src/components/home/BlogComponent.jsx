'use client';
import React, { useState } from 'react';
import Typography from '../common/Typography';

// Sample blog data with images and dates
const blogs = [
  {
    id: 1,
    title: 'Latest Blog 1',
    category: 'latest',
    content: 'This is the content of Latest Blog 1.',
    image: '/images/home/slide1.webp',
    date: 'January 10, 2025',
  },
  {
    id: 2,
    title: 'Popular Blog 1',
    category: 'popular',
    content: 'This is the content of Popular Blog 1.',
    image: '/images/home/slide2.webp',
    date: 'December 25, 2024',
  },
  {
    id: 3,
    title: 'Latest Blog 2',
    category: 'latest',
    content: 'This is the content of Latest Blog 2.',
    image: '/images/home/slide3.webp',
    date: 'November 15, 2024',
  },
  {
    id: 4,
    title: 'Popular Blog 2',
    category: 'popular',
    content: 'This is the content of Popular Blog 2.',
    image: '/images/home/slide4.webp',
    date: 'October 5, 2024',
  },
  {
    id: 5,
    title: 'Latest Blog 3',
    category: 'latest',
    content: 'This is the content of Latest Blog 3.',
    image: '/images/home/slide5.webp',
    date: 'September 20, 2024',
  },
  {
    id: 6,
    title: 'Popular Blog 3',
    category: 'popular',
    content: 'This is the content of Popular Blog 3.',
    image: '/images/home/slide1.webp',
    date: 'August 10, 2024',
  },
];

// Blog component
const BlogComponent = () => {
  const [filter, setFilter] = useState('latest');

  const filteredBlogs = blogs.filter((blog) => blog.category === filter);

  return (
    <div className="py-12">
      <div className=" rounded-xl">
        <Typography as='h2' variant='h2' className='font-bold'>Blogs</Typography>
        

        {/* Filter Buttons */}
        <div className="flex flex-col-reverse sm:flex-row gap-4 md:justify-between items-center mb-8">
          <div className="space-x-4">
            <button
              className={`px-5 py-[10px] rounded-full border border-secondary transition-colors ${
                filter === 'latest' ? 'bg-secondary text-white' : 'bg-transparent text-secondary hover:bg-secondaryLight'
              }`}
              onClick={() => setFilter('latest')}
            >
              Latest Blog
            </button>
            <button
              className={`px-5 py-[10px] rounded-full border border-secondary transition-colors ${
                filter === 'popular' ? 'bg-secondary text-white' : 'bg-transparent text-gray-600 hover:bg-secondaryLight'
              }`}
              onClick={() => setFilter('popular')}
            >
              Popular Blog
            </button>
          </div>

          <a href="#" className="text-secondary hover:underline font-medium">
            View All Blogs
          </a>
        </div>

        {/* Blog Cards */}
        <div className="flex flex-wrap justify-center md:justify-start gap-6">
          {filteredBlogs.map((blog) => (
            <div
              key={blog.id}
              className="bg-white rounded-lg border hover:translate-y-[-2px] duration-300 transition-all cursor-pointer w-[320px] overflow-hidden"
            >
              <img
                src={blog.image}
                alt={`${blog.title} image`}
                className="w-full h-44 object-cover"
              />
              <div className="p-4">
                <p className="text-sm text-gray-500 mb-[5px]">{blog.date}</p>
                <h3 className="text-xl font-semibold mb-[5px] text-gray-800">{blog.title}</h3>
                <p className="text-gray-600 mb-2">{blog.content}</p>
                <button className="px-4 w-full py-2 bg-white text-secondary border border-secondary hover:text-white font-medium rounded-full  hover:bg-secondary  transition-colors">
                  Read More
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BlogComponent;

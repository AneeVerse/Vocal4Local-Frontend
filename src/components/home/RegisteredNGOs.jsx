"use client"
import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';

// Sample data array
const ngos = [
  { id: 1, name: 'Register NGO 1', logo: 'https://via.placeholder.com/50' },
  { id: 2, name: 'NGO 2', logo: 'https://via.placeholder.com/50' },
  { id: 3, name: 'RegisterNGO 3', logo: 'https://via.placeholder.com/50' },
  { id: 4, name: 'NRegister GO 4', logo: 'https://via.placeholder.com/50' },
  { id: 5, name: 'NGO 5', logo: 'https://via.placeholder.com/50' },
  { id: 6, name: 'Register NGO 6', logo: 'https://via.placeholder.com/50' },
  { id: 7, name: 'Register NGO 7', logo: 'https://via.placeholder.com/50' },
  { id: 8, name: 'Register NGO 8', logo: 'https://via.placeholder.com/50' },
  { id: 9, name: 'NGO 9', logo: 'https://via.placeholder.com/50' },
  { id: 10, name: 'NGO 10', logo: 'https://via.placeholder.com/50' },
];

const slideVariants = {
  animate: (direction) => ({
    x: direction === 'left' ? [0, -100, 0] : [0, 100, 0],
    transition: {
      x: {
        repeat: Infinity,
        repeatType: 'loop',
        duration: 10,
        ease: 'linear',
      },
    },
  }),
};

const NGOSlider = ({ direction }) => {
  return (
    <motion.div
      className="flex space-x-4"
      variants={slideVariants}
      animate="animate"
      custom={direction}
    >
      {ngos.map((ngo) => (
        <div
          key={ngo.id}
          className="flex min-w-fit items-center bg-gray-100 rounded-lg p-2"
        >
          <img src={ngo.logo} alt={`${ngo.name} logo`} className="w-12 h-12" />
          <span className="ml-2">{ngo.name}</span>
        </div>
      ))}
    </motion.div>
  );
};

const RegisteredNGOs = () => {
  return (
    <div className="p-6">
      <div className="mb-4 flex justify-between items-center">
      <h1 className="text-2xl font-bold mb-4">Registered NGOs</h1>
        <Link href="#" className="text-secondary">
          View All
        </Link>
      </div>
      <div className="overflow-hidden">
        <NGOSlider direction="right" />
      </div>
      <div className="overflow-hidden mt-4">
        <NGOSlider direction="left" />
      </div>
    </div>
  );
};

export default RegisteredNGOs;

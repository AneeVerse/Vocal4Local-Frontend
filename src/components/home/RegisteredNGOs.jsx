"use client"
import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';

// Sample data array
const ngos = [
  { id: 1, name: 'Register NGO 1', logo: '/images/home/logo1.webp' },
  { id: 2, name: 'NGO 2', logo: '/images/home/logo2.jpg' },
  { id: 3, name: 'RegisterNGO 3', logo: '/images/home/logo3.png' },
  { id: 4, name: 'NRegister GO 4', logo: '/images/home/logo4.jpg' },
  { id: 5, name: 'NGO 5', logo: '/images/home/logo5.png' },
  { id: 6, name: 'Register NGO 6', logo: '/images/home/logo6.webp' },
  { id: 7, name: 'Register NGO 7', logo: '/images/home/logo7.jpg' },
  { id: 8, name: 'Register NGO 8', logo: '/images/home/logo8.jpg' },
  { id: 9, name: 'NGO 9', logo: '/images/home/logo9.avif' },
  { id: 10, name: 'NGO 10', logo: '/images/home/logo10.png' },
];

const slideVariants = {
  animate: (direction) => ({
    x: direction === 'left' ? [0, -500, 0] : [0, 500, 0],
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
      className="flex space-x-4 "
      variants={slideVariants}
      animate="animate"
      custom={direction}
    >
      {ngos.map((ngo) => (
        <div
          key={ngo.id}
          className="flex min-w-fit items-center border-primary rounded-lg p-4"
        >
          <img src={ngo.logo} alt={`${ngo.name} logo`} className="w-12 h-12 object-cover rounded-full" />
          <span className="ml-2">{ngo.name}</span>
        </div>
      ))}
    </motion.div>
  );
};

const RegisteredNGOs = () => {
  return (
    <div className="py-12">
      <div className="mb-4 flex justify-between items-center">
      <h1 className="text-2xl font-bold mb-4">Registered NGOs</h1>
        <Link href="/registered-ngos" className="text-secondary">
          View All
        </Link>
      </div>
      <div className="overflow-hidden">
        <NGOSlider direction="right" />
      </div>
      <div className="overflow-hidden mt-8">
        <NGOSlider direction="left" />
      </div>
    </div>
  );
};

export default RegisteredNGOs;

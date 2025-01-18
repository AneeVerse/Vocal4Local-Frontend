"use client"
import React from 'react';
import { motion } from 'framer-motion';

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
          duration: 30,
          ease: 'linear',
        },
      },
    }),
  };
  
  const NGOSlider = ({ direction }) => {
    return (
      <motion.div
        className={`flex gap-4 ${direction === 'left' ? 'justify-start' : 'justify-end'}`}
        variants={slideVariants}
        animate="animate"
        custom={direction}
      >
        {ngos.map((ngo) => (
          <div
            key={ngo.id}
            className="flex min-w-fit items-center border border-dashed rounded-lg px-4 py-3"
          >
            <img src={ngo.logo} alt={`${ngo.name} logo`} className="w-10 h-10 bg-gray-100 object-cover rounded-full" />
            <span className="ml-2">{ngo.name}</span>
          </div>
        ))}
      </motion.div>
    );
  };

  
  
  const NGOSliderSection = () => {
    return (
      <div>
         <div className="overflow-hidden">
        <NGOSlider direction="right" />
      </div>
      <div className="overflow-hidden mt-8">
        <NGOSlider direction="left" />
      </div>
      </div>
    )
  }
  
  export default NGOSliderSection
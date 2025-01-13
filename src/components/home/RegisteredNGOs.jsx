"use client"
import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import NGOSliderSection from '../common/NGOSliderSection';

// Sample data array

const RegisteredNGOs = () => {
  return (
    <div className="py-12">
      <div className="mb-4 flex justify-between items-center">
      <h1 className="text-2xl font-bold mb-4">Registered NGOs</h1>
        <Link href="/registered-ngos" className="text-secondary">
          View All
        </Link>
      </div>
   
   <NGOSliderSection />
    </div>
  );
};

export default RegisteredNGOs;

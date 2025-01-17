"use client"
import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import NGOSliderSection from '../common/NGOSliderSection';
import Typography from '../common/Typography';

// Sample data array

const RegisteredNGOs = () => {
  return (
    <div className="py-12">
      <div className="mb-4 flex justify-between items-center">
     <Typography as='h2' variant='h2'>Registered <span className='font-bold'>NGOs</span></Typography>
        <Link href="/registered-ngos" className="text-secondary">
          View All
        </Link>
      </div>
   
   <NGOSliderSection />
    </div>
  );
};

export default RegisteredNGOs;

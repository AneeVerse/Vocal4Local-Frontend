'use client';
import React from 'react';
import { motion } from 'framer-motion';

// About Us Page Component
const AboutUs = () => {
  return (
    <div className="bg-gray-100">
      {/* Hero Section */}
      <section className="bg-primary text-secondary text-center py-20">
        <motion.h1
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl font-extrabold"
        >
          About Us
        </motion.h1>
        <p className="mt-4 text-lg">
          Empowering local communities through sustainable initiatives.
        </p>
      </section>

      {/* Mission & Vision Section */}
      <section className="max-w-6xl mx-auto py-16 px-6 grid grid-cols-1 md:grid-cols-2 gap-12">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl font-bold text-gray-800">Our Mission</h2>
          <p className="mt-4 text-gray-600 leading-relaxed">
            At Vocal 4 Local, our mission is to uplift and empower local
            artisans, farmers, and small businesses by promoting their work,
            advocating for their rights, and creating a sustainable platform
            where their voices are heard and appreciated.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl font-bold text-gray-800">Our Vision</h2>
          <p className="mt-4 text-gray-600 leading-relaxed">
            We envision a future where every local community thrives through
            equal opportunities, self-sustenance, and respect for their cultural
            and economic contributions to society.
          </p>
        </motion.div>
      </section>

      {/* Our Story Section */}
      <section className="bg-white py-16">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-gray-800 text-center">
            Our Story
          </h2>
          <p className="mt-6 text-gray-600 text-center leading-relaxed">
            "Vocal 4 Local" was founded with the belief that every individual
            deserves the right to grow and succeed within their community.
            Starting as a small initiative to support local farmers, we have
            grown into a nationwide movement that champions local businesses and
            promotes sustainable growth across various sectors.
          </p>
        </div>
      </section>

      {/* Core Values Section */}
      <section className="max-w-6xl mx-auto py-16 px-6">
        <h2 className="text-3xl font-bold text-gray-800 text-center">
          Core Values
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
          <div className="bg-gray-100 p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold text-gray-800">Community</h3>
            <p className="mt-4 text-gray-600">
              We believe in fostering a sense of belonging and togetherness by
              supporting local communities.
            </p>
          </div>
          <div className="bg-gray-100 p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold text-gray-800">Sustainability</h3>
            <p className="mt-4 text-gray-600">
              We advocate for sustainable practices that ensure the long-term
              well-being of our environment and communities.
            </p>
          </div>
          <div className="bg-gray-100 p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold text-gray-800">Empowerment</h3>
            <p className="mt-4 text-gray-600">
              We empower individuals and businesses by providing the resources
              and support they need to succeed.
            </p>
          </div>
        </div>
      </section>

      {/* Impact Section */}
      <section className="bg-primary text-secondary py-16">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-center">Our Impact</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8 text-center">
            <div>
              <h3 className="text-3xl font-bold">5K+</h3>
              <p className="mt-2">Local Artisans Supported</p>
            </div>
            <div>
              <h3 className="text-3xl font-bold">1M+</h3>
              <p className="mt-2">Products Promoted</p>
            </div>
            <div>
              <h3 className="text-3xl font-bold">500+</h3>
              <p className="mt-2">Community Projects Completed</p>
            </div>
          </div>
        </div>
      </section>

      {/* Meet the Team Section */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-gray-800 text-center">
            Meet the Team
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 mt-8">
            <div className="bg-white p-6 rounded-lg shadow-lg text-center">
              <img
                src="https://via.placeholder.com/150"
                alt="Team Member"
                className="w-24 h-24 rounded-full mx-auto mb-4"
              />
              <h3 className="text-xl font-semibold text-gray-800">John Doe</h3>
              <p className="text-gray-600">Founder & CEO</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg text-center">
              <img
                src="https://via.placeholder.com/150"
                alt="Team Member"
                className="w-24 h-24 rounded-full mx-auto mb-4"
              />
              <h3 className="text-xl font-semibold text-gray-800">Jane Smith</h3>
              <p className="text-gray-600">Co-Founder</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg text-center">
              <img
                src="https://via.placeholder.com/150"
                alt="Team Member"
                className="w-24 h-24 rounded-full mx-auto mb-4"
              />
              <h3 className="text-xl font-semibold text-gray-800">
                Michael Brown
              </h3>
              <p className="text-gray-600">Project Manager</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;

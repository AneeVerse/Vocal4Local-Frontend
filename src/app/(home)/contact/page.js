'use client';
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [status, setStatus] = useState('');

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulate form submission
    setStatus('Form submitted successfully!');
    setFormData({ name: '', email: '', message: '' });
  };

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
          Contact Us
        </motion.h1>
        <p className="mt-4 text-lg">
          We’d love to hear from you! Get in touch with us today.
        </p>
      </section>

      {/* Contact Form Section */}
      <section className="max-w-6xl mx-auto py-16 px-6 grid grid-cols-1 md:grid-cols-2 gap-12">
        {/* Form */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="bg-white p-8 rounded-lg shadow-lg"
        >
          <h2 className="text-2xl font-bold text-gray-800 mb-6">Send Us a Message</h2>
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label className="block text-gray-700 font-medium">Name</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                className="w-full mt-2 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                required
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 font-medium">Email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                className="w-full mt-2 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                required
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 font-medium">Message</label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                className="w-full mt-2 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                rows="5"
                required
              ></textarea>
            </div>
            <button
              type="submit"
              className="bg-secondary text-white px-6 py-3 rounded-lg font-bold hover:bg-secondary transition-colors"
            >
              Send Message
            </button>
            {status && (
              <p className="mt-4 text-green-600 font-medium">{status}</p>
            )}
          </form>
        </motion.div>

        {/* Contact Info */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-8"
        >
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold text-gray-800">Contact Information</h3>
            <p className="mt-2 text-gray-600">Feel free to reach out to us through any of the methods below:</p>
            <div className="mt-4 space-y-4">
              <div className="flex items-center space-x-4">
                <FaPhoneAlt className="text-secondary" />
                <span className="text-gray-800">+91 123 456 7890</span>
              </div>
              <div className="flex items-center space-x-4">
                <FaEnvelope className="text-secondary" />
                <span className="text-gray-800">contact@vocal4local.org</span>
              </div>
              <div className="flex items-center space-x-4">
                <FaMapMarkerAlt className="text-secondary" />
                <span className="text-gray-800">123 Local Street, New Delhi, India</span>
              </div>
            </div>
          </div>

          {/* Social Media Links */}
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold text-gray-800">Follow Us</h3>
            <div className="mt-4 flex space-x-4">
              <a href="#" className="text-secondary hover:translate-y-[-2px] duration-300">
                <FaFacebook size={24} />
              </a>
              <a href="#" className="text-secondary hover:translate-y-[-2px] duration-300">
                <FaTwitter size={24} />
              </a>
              <a href="#" className="text-secondary hover:translate-y-[-2px] duration-300">
                <FaInstagram size={24} />
              </a>
              <a href="#" className="text-secondary hover:translate-y-[-2px] duration-300">
                <FaLinkedin size={24} />
              </a>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Map Section */}
      <section className="bg-gray-200 py-16">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-gray-800 text-center mb-6">Our Location</h2>
          <div className="relative h-64 md:h-96 rounded-lg overflow-hidden">
            <iframe
              className="w-full h-full"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.834434918143!2d144.95782831581626!3d-37.81520617975178!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzfCsDQ4JzU0LjciUyAxNDTCsDU3JzI1LjkiRQ!5e0!3m2!1sen!2sin!4v1601473848488!5m2!1sen!2sin"
              allowFullScreen=""
              loading="lazy"
            ></iframe>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactUs;

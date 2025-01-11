"use client";
import React, { useState } from "react";
import { FaEnvelope, FaPhone, FaLocationArrow } from "react-icons/fa";
import { IoIosSend } from "react-icons/io";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [errors, setErrors] = useState({});
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  // Handle form data change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // Form validation using RegEx
  const validateForm = () => {
    let formErrors = {};
    const nameRegEx = /^[a-zA-Z\s]+$/;
    const emailRegEx = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const messageRegEx = /^.{10,500}$/;

    // Validate Name
    if (!formData.name || !nameRegEx.test(formData.name)) {
      formErrors.name = "Please enter a valid name (only letters and spaces).";
    }

    // Validate Email
    if (!formData.email || !emailRegEx.test(formData.email)) {
      formErrors.email = "Please enter a valid email address.";
    }

    // Validate Message
    if (!formData.message || !messageRegEx.test(formData.message)) {
      formErrors.message = "Message must be between 10 and 500 characters.";
    }

    return formErrors;
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    const formErrors = validateForm();
    if (Object.keys(formErrors).length === 0) {
      try {
        const response = await fetch("/api/contact", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        });

        setSuccessMessage("Your message has been sent successfully!");
        setErrorMessage("");
        setFormData({ name: "", email: "", message: "" }); // Reset form
      } catch (error) {
        setErrorMessage(
          "There was an error sending your message. Please try again."
        );
        setSuccessMessage("");
      }
    } else {
      setErrors(formErrors);
      setSuccessMessage("");
      setErrorMessage("");
    }
  };

  return (
    <section className="py-16 ">
      <div className="bg-white shadow rounded-md px-3">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className=" p-3 sm:p-8 rounded-lg w-full flex flex-col">
            <h2 className="text-3xl font-bold mb-6 text-[#0e2f50]">Contact Us</h2>

            {/* Success/Error Messages */}
            {successMessage && (
              <div className="text-green-500 mb-4">{successMessage}</div>
            )}
            {errorMessage && (
              <div className="text-red-500 mb-4">{errorMessage}</div>
            )}

            {/* Contact Form */}
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-[#0e2f50] text-lg">Full Name</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Enter your full name"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#8ac240]"
                />
                {errors.name && (
                  <p className="text-red-500 text-sm">{errors.name}</p>
                )}
              </div>

              <div>
                <label className="block text-[#0e2f50] text-lg">
                  Email Address
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Enter your email"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#8ac240]"
                />
                {errors.email && (
                  <p className="text-red-500 text-sm">{errors.email}</p>
                )}
              </div>

              <div>
                <label className="block text-[#0e2f50] text-lg">Message</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Write your message"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#8ac240]"
                />
                {errors.message && (
                  <p className="text-red-500 text-sm">{errors.message}</p>
                )}
              </div>

              <div className="flex items-center justify-between">
                <button
                  type="submit"
                  className="w-full py-2 px-4 bg-secondary text-white rounded-lg hover:bg-secondaryDark transition flex items-center justify-center"
                >
                  <IoIosSend size={20} className="inline-block mr-2" />
                  Send Message
                </button>
              </div>
            </form>
          </div>

          {/* Map */}
          <div className="p-3 sm:p-8 rounded-lg flex flex-col">
            <h2 className="text-3xl font-bold mb-6 text-[#0e2f50]">Find Us</h2>
            <div className="relative w-full h-[350px] rounded-lg overflow-hidden">
              {/* Sample Map using Google Maps Embed API */}
              <iframe
                width="100%"
                height="100%"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2857.4914330760644!2d73.0120851019342!3d19.015035720256364!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c398ec33dd03%3A0x808c3605636fda23!2sSeawoods%2C%20Navi%20Mumbai%2C%20Maharashtra!5e1!3m2!1sen!2sin!4v1736581492831!5m2!1sen!2sin"
                allowFullScreen=""
                loading="lazy"
                className="rounded-lg"
              ></iframe>
            </div>

            {/* <div className="mt-6 space-y-4">
              <div className="flex items-center text-lg text-[#0e2f50]">
                <FaEnvelope className="text-secondary mr-4" />
                <span>contact@company.com</span>
              </div>
              <div className="flex items-center text-lg text-[#0e2f50]">
                <FaPhone className="text-secondary mr-4" />
                <span>+1 (234) 567-890</span>
              </div>
              <div className="flex items-center text-lg text-[#0e2f50]">
                <FaLocationArrow className="text-secondary mr-4" />
                <span>123 Main St, City, Country</span>
              </div>
            </div> */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;

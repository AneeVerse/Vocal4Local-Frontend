"use client";

import React, { useState } from "react";
import { FaEnvelope, FaPhone, FaMapMarkerAlt } from "react-icons/fa";
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

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const validateForm = () => {
    let formErrors = {};
    const nameRegEx = /^[a-zA-Z\s]+$/;
    const emailRegEx = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const messageRegEx = /^.{10,500}$/;

    if (!formData.name || !nameRegEx.test(formData.name)) {
      formErrors.name = "Please enter a valid name.";
    }

    if (!formData.email || !emailRegEx.test(formData.email)) {
      formErrors.email = "Please enter a valid email address.";
    }

    if (!formData.message || !messageRegEx.test(formData.message)) {
      formErrors.message = "Message must be between 10 and 500 characters.";
    }

    return formErrors;
  };

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

        if (response.ok) {
          setSuccessMessage("Your message has been sent successfully!");
          setErrorMessage("");
          setFormData({ name: "", email: "", message: "" });
        } else {
          throw new Error();
        }
      } catch {
        setErrorMessage("Failed to send the message. Please try again.");
        setSuccessMessage("");
      }
    } else {
      setErrors(formErrors);
      setSuccessMessage("");
      setErrorMessage("");
    }
  };

  return (
    <section className="py-16 relative ">
             {/* one primary circle gredient background color */}
             <div className="absolute  top-0 blur-3xl left-[50%] translate-x-[-50%] -z-10 h-full w-full custom-gradient rounded-full"></div>
      <div className="">
        <div className=" bg-white border border-dashed rounded-lg grid lg:grid-cols-2 gap-8 p-8">
          {/* Form Section */}
          <div>
            <h2 className="text-4xl font-bold text-[#0e2f50] mb-6">
              Contact Us
            </h2>

            {successMessage && (
              <p className="text-green-600 text-sm mb-4">{successMessage}</p>
            )}
            {errorMessage && (
              <p className="text-red-600 text-sm mb-4">{errorMessage}</p>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-[#0e2f50] mb-2">
                  Full Name
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="John Doe"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#8ac240]"
                />
                {errors.name && (
                  <p className="text-red-500 text-sm">{errors.name}</p>
                )}
              </div>

              <div>
                <label className="block text-sm font-medium text-[#0e2f50] mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="johndoe@example.com"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#8ac240]"
                />
                {errors.email && (
                  <p className="text-red-500 text-sm">{errors.email}</p>
                )}
              </div>

              <div>
                <label className="block text-sm font-medium text-[#0e2f50] mb-2">
                  Message
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Write your message here"
                  rows={3}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#8ac240]"
                ></textarea>
                {errors.message && (
                  <p className="text-red-500 text-sm">{errors.message}</p>
                )}
              </div>

              <button
                type="submit"
                className="w-full bg-secondary text-white py-2 px-4 rounded-lg hover:bg-secondaryDark flex items-center justify-center"
              >
                <IoIosSend className="mr-2" />
                Send Message
              </button>
            </form>
          </div>

          {/* Contact Info & Map */}
          <div>
            <h2 className="text-4xl font-bold text-[#0e2f50] mb-6">Find Us</h2>

            <div className="rounded-lg overflow-hidden shadow">
              <iframe
                className="w-full h-64 rounded-lg"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2857.4914330760644!2d73.0120851019342!3d19.015035720256364!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c398ec33dd03%3A0x808c3605636fda23!2sSeawoods%2C%20Navi%20Mumbai%2C%20Maharashtra!5e1!3m2!1sen!2sin!4v1736581492831!5m2!1sen!2sin"
                allowFullScreen=""
                loading="lazy"
              ></iframe>
            </div>

            <div className="mt-6 space-y-4">
              <div className="flex items-center text-secondary text-lg">
                <FaEnvelope className="mr-4 text-secondary" />
                <span>contact@company.com</span>
              </div>
              <div className="flex items-center text-secondary text-lg">
                <FaPhone className="mr-4 text-secondary" />
                <span>+1 (234) 567-890</span>
              </div>
              <div className="flex items-center text-secondary text-lg">
                <FaMapMarkerAlt className="mr-4 text-secondary" />
                <span>123 Main Street, City, Country</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;

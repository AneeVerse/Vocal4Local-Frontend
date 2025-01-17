"use client"
import React, { useState } from "react";

const CoreAreasAndContact = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    mobile: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submissionStatus, setSubmissionStatus] = useState("");

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmissionStatus("");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSubmissionStatus("Message sent successfully!");
        setFormData({ firstName: "", lastName: "", email: "", mobile: "", message: "" });
      } else {
        setSubmissionStatus("Failed to send message. Please try again.");
      }
    } catch (error) {
      setSubmissionStatus("An error occurred. Please try again later.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="container mx-auto px-4 py-12 grid grid-cols-1 md:grid-cols-2 gap-8">
      {/* Core Areas Section */}
      <div>
        <h2 className="text-2xl font-bold text-gray-800 mb-6">Our Core Areas</h2>
        <div className="flex flex-wrap gap-3 mb-8">
          {[
            "Education",
            "Health & Family Welfare",
            "Patient Care",
            "Differently Abled",
            "Child Welfare",
            "Environment & Civic Issues",
            "Girl & Women",
            "Road Safety",
            "Employment & Entrepreneurship",
            "RTI & Consumer Affairs",
            "Self Help Groups",
            "Blood Donation",
            "Food & Clothing",
            "Shelter",
          ].map((area, index) => (
            <span
              key={index}
              className="bg-gray-200 text-gray-700 px-4 py-2 rounded-full text-sm font-medium"
            >
              {area}
            </span>
          ))}
        </div>

        {/* Progress Bars */}
        <div>
          <h3 className="text-xl font-bold text-gray-800 mb-4">Progress Indicators</h3>
          {[
            { label: "Bedsheets Required for Patients at Civil Hospital", value: 31 },
            { label: "Help Required for Everyday Essentials for Children", value: 4 },
            { label: "Funds Required for Education of Underprivileged", value: 78 },
            { label: "Food Packets Required for Homeless", value: 52 },
          ].map((item, index) => (
            <div key={index} className="mb-6">
              <p className="text-gray-700 mb-2">{item.label} ({item.value}%)</p>
              <div className="w-full bg-gray-300 rounded-full h-2">
                <div
                  className="bg-green-500 h-2 rounded-full"
                  style={{ width: `${item.value}%` }}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Contact Details Section */}
      <div>
        <h2 className="text-2xl font-bold text-gray-800 mb-6">Contact details</h2>
        <div className="space-y-4 mb-6">
          <p className="text-gray-700">
            <span className="font-bold">Phone:</span> 9872611748
          </p>
          <p className="text-gray-700">
            <span className="font-bold">Email:</span> harleen@fastway.in
          </p>
          <p className="text-gray-700">
            <span className="font-bold">Year Started:</span> 2023
          </p>
          <p className="text-gray-700">
            <span className="font-bold">Location:</span> Ludhiana
          </p>
        </div>

        {/* Contact Form */}
        <form
          className="grid grid-cols-1 md:grid-cols-2 gap-4"
          onSubmit={handleSubmit}
        >
          <input
            type="text"
            name="firstName"
            value={formData.firstName}
            onChange={handleInputChange}
            placeholder="First Name"
            className="col-span-1 border rounded-lg p-3 bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
          <input
            type="text"
            name="lastName"
            value={formData.lastName}
            onChange={handleInputChange}
            placeholder="Last Name"
            className="col-span-1 border rounded-lg p-3 bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            placeholder="E-mail"
            className="col-span-1 border rounded-lg p-3 bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
          <input
            type="text"
            name="mobile"
            value={formData.mobile}
            onChange={handleInputChange}
            placeholder="Mobile Number"
            className="col-span-1 border rounded-lg p-3 bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <textarea
            name="message"
            value={formData.message}
            onChange={handleInputChange}
            placeholder="Message"
            className="col-span-2 border rounded-lg p-3 bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500"
            rows="4"
            required
          ></textarea>
          <button
            type="submit"
            className="col-span-2 bg-secondary text-white font-semibold py-2 rounded-lg hover:bg-secondaryDark transition"
            disabled={isSubmitting}
          >
            {isSubmitting ? "Sending..." : "SEND MESSAGE"}
          </button>
        </form>

        {submissionStatus && (
          <p
            className={`mt-4 text-sm font-medium ${
              submissionStatus.includes("success")
                ? "text-green-500"
                : "text-red-500"
            }`}
          >
            {submissionStatus}
          </p>
        )}
      </div>
    </div>
  );
};

export default CoreAreasAndContact;

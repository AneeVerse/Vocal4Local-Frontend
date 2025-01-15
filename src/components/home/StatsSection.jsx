"use client";
import { useEffect, useRef } from "react";
import { motion, useAnimation } from "framer-motion";

const StatsSection = () => {
  const logos = [
    "/images/home/partner/partner1.png",
    "/images/home/partner/partner1.png",
    "/images/home/partner/partner1.png",
    "/images/home/partner/partner1.png",
    "/images/home/partner/partner1.png",
  ];

  const stats = [
    { value: "60%", label: "Project Completed" },
    { value: "30+", label: "Team Members" },
    { value: "40K", label: "Satisfied Clients" },
  ];

  const controls = useAnimation();

  useEffect(() => {
    controls.start({
      x: [0, -2000],
      transition: {
        repeat: Infinity,
        duration: 20,
        ease: "linear",
      },
    });
  }, [controls]);

  return (
    <div className="bg-white py-12">
      {/* Logos Section */}
      <div className="relative overflow-hidden">
        <motion.div
          animate={controls}
          className="flex gap-8 whitespace-nowrap"
          onHoverStart={() => controls.stop()}
          onHoverEnd={() =>
            controls.start({
              x: [0, -2000],
              transition: {
                repeat: Infinity,
                duration: 20,
                ease: "linear",
              },
            })
          }
        >
          {logos.map((logo, index) => (
            <img
              key={index}
              src={logo}
              alt={`Logo ${index + 1}`}
              className="h-12 object-cover w-auto grayscale opacity-80 hover:opacity-100"
            />
          ))}
          {logos.map((logo, index) => (
            <img
              key={`clone-${index}`}
              src={logo}
              alt={`Logo clone ${index + 1}`}
              className="h-12 object-cover w-auto grayscale opacity-80 hover:opacity-100"
            />
          ))}
        </motion.div>
        <div className="absolute top-0 left-0 w-12 h-full bg-gradient-to-r from-white to-transparent"></div>
        <div className="absolute top-0 right-0 w-12 h-full bg-gradient-to-l from-white to-transparent"></div>
      </div>

      {/* Stats Section */}
      <div className="grid grid-cols-3 md:grid-cols-3 gap-4 md:gap-8 text-center py-8">
        {stats.map((stat, index) => (
          <div key={index}>
            <p className="text-3xl md:text-4xl font-bold text-black">{stat.value}</p>
            <p className="text-sm md:text-gray-600">{stat.label}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default StatsSection;

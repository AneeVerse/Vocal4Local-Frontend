"use client";
import { useEffect, useState } from "react";
import { motion, useAnimation } from "framer-motion";

const PartnerLogoSlider = () => {
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
  const [currentX, setCurrentX] = useState(0); // Track the current position

  const startAnimation = (fromX = 0) => {
    controls.start({
      x: [fromX, -1000], // Resume from the current position
      transition: {
        repeat: Infinity,
        duration: 20, // Adjust for speed
        ease: "linear",
      },
    });
  };

  const stopAnimation = () => {
    controls.stop();
  };

  useEffect(() => {
    startAnimation();
  }, []);

  return (
    <div className="bg-white py-8 overflow-hidden relative">
      <div className="text-center text-md text-secondary mb-12">Trusted by thousands of companies across 50+ countries</div >


      <div className="relative border-t border-b  border-dashed py-6">
        <motion.div
          animate={controls}
          className="flex whitespace-nowrap"
          onUpdate={(latest) => {
            // Track the current animation progress
            setCurrentX(latest.x || 0);
          }}
          onHoverStart={stopAnimation} // Stop animation on hover
          onHoverEnd={() => startAnimation(currentX)} // Resume from the same point
        >
          {/* Original Logos */}
          {[...logos,...logos,...logos,...logos].map((logo, index) => (
            <img
              key={index}
              src={logo}
              alt={`Partner ${index + 1}`}
              className="h-10 object-contain border-r px-6 border-dashed w-auto grayscale hover:grayscale-0 transition-all"
            />
          ))}
         
        </motion.div>

        {/* Optional gradient fade on edges */}
        <div className="absolute inset-y-0 left-0 w-12 bg-gradient-to-r from-white to-transparent"></div>
        <div className="absolute inset-y-0 right-0 w-12 bg-gradient-to-l from-white to-transparent"></div>
      </div>
      {/* Stats Section */}
      <div className="grid grid-cols-3 md:grid-cols-3 gap-4 max-w-[988px] mx-auto md:gap-8 mt-8 text-center py-8">
        {stats.map((stat, index) => (
          <div key={index}>
            <p className="text-3xl md:text-5xl font-bold text-black">{stat.value}</p>
            <p className="text-[12px] sm:text-sm md:text-md md:text-gray-600">{stat.label}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PartnerLogoSlider;

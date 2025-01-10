"use client"
import { useState, useEffect } from "react";

const HeroSection = () => {
  const images = [
    "/images/home/slide1.webp",
    "/images/home/slide2.webp",
    "/images/home/slide3.webp",
    "/images/home/slide4.webp",
    "/images/home/slide5.webp",
  ];
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000); // Change slide every 5 seconds
    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div className="relative h-screen md:h-[600px] lg:h-[620px] w-full overflow-hidden">
      {/* Background Slider */}
      <div className="absolute inset-0 w-full h-full">
        {images.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`Slide ${index + 1}`}
            className={`absolute w-full h-full object-cover transition-opacity duration-1000 ${
              index === currentIndex ? "opacity-100" : "opacity-0"
            }`}
          />
        ))}
      </div>

      {/* Overlay Content */}
      <div className="absolute inset-0 bg-black bg-opacity-40 flex flex-col justify-center items-center text-center px-4">
        <p className="text-white text-sm tracking-wide mb-2">50K+ TRUSTED BUSINESSES</p>
        <h1 className="text-white text-4xl md:text-5xl font-bold leading-tight mb-4">
          Make your <span className="italic border px-5 py-2 rounded-full inline-block decoration-white">Finance</span> more efficient.
        </h1>
        <p className="text-white text-sm md:text-base max-w-2xl mb-6">
          Until recently, the prevailing view assumed lorem ipsum was born as a nonsense text.
        </p>

        {/* Buttons */}
        <div className="flex space-x-4">
          <button className="bg-gray-200 text-black px-8 py-2 rounded-lg shadow-md hover:bg-gray-300 transition text-lg font-medium">
            Donate
          </button>
          <button className="bg-gray-200 text-black px-8 py-2 rounded-lg shadow-md hover:bg-gray-300 transition text-lg font-medium">
            Volunteer
          </button>
        </div>
      </div>

      {/* Pagination */}
      <div className="absolute bottom-6 w-full flex flex-col items-center">
        <div className="flex space-x-2 mb-2">
          {images.map((_, index) => (
            <div
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-3 h-3 cursor-pointer rounded-full ${
                index === currentIndex ? "bg-white" : "bg-gray-500"
              }`}
            />
          ))}
        </div>
        <p className="text-white text-xs">{currentIndex+1}/{images.length}</p>
      </div>
    </div>
  );
};

export default HeroSection;

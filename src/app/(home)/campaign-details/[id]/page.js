"use client"
import React, { useState } from "react";
import { motion } from "framer-motion";
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";
import WhatWeDo from "@/components/home/WhatWeDo";
import CampaignList from "@/components/home/CampaignList";

const Local4LocalPage = () => {
  // Data object for the page
  const data = {
    title: "Local4Local",
    description: "We are a platform, helping people with local services. Since 2015, at your service, always.",
    loremText:
      "The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from 'de Finibus Bonorum et Malorum' by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.",
    associatedWares: [
      "Demo test demo text", "Demo test demo text", "Demo test demo text",
      "Demo test demo text", "Demo test demo text"
    ],
    heroImages: [
      "/images/home/slide1.webp", 
      "/images/home/slide2.webp",
      "/images/home/slide3.webp"
    ],
    titleImages: [
      "/images/home/slide1.webp", 
      "/images/home/slide2.webp",
      "/images/home/slide3.webp"
    ],
  };

  const [currentHeroIndex, setCurrentHeroIndex] = useState(0);
  const [currentTitleImageIndex, setCurrentTitleImageIndex] = useState(0);

  const handleHeroChange = (direction) => {
    setCurrentHeroIndex((prevIndex) =>
      direction === "next"
        ? (prevIndex + 1) % data.heroImages.length
        : (prevIndex - 1 + data.heroImages.length) % data.heroImages.length
    );
  };

  const handleTitleImageChange = (direction) => {
    setCurrentTitleImageIndex((prevIndex) =>
      direction === "next"
        ? (prevIndex + 1) % data.titleImages.length
        : (prevIndex - 1 + data.titleImages.length) % data.titleImages.length
    );
  };

  return (
    <div className=" max-w-7xl pb-10 mx-auto min-h-screen flex flex-col items-center">
      {/* Header Section */}
      <motion.div
        className="bg-white shadow  w-full"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <div className="relative">
          <img
            src={data.heroImages[currentHeroIndex]}
            alt="Hero"
            className="h-96 w-full object-cover rounded-t-lg"
          />
          <div className="absolute bottom-2 left-2 flex items-center gap-2">
            <button
              className="p-2 bg-white rounded-full shadow"
              onClick={() => handleHeroChange("prev")}
            >
              <AiOutlineLeft size={20} />
            </button>
            <button
              className="p-2 bg-white rounded-full shadow"
              onClick={() => handleHeroChange("next")}
            >
              <AiOutlineRight size={20} />
            </button>
          </div>
        </div>
        <div className="p-6 flex flex-col sm:flex-row justify-between items-center gap-4">
          <div>
            <h2 className="text-2xl font-bold mb-2">What we do</h2>
            <h3 className="text-xl font-semibold">{data.title}</h3>
            <p className="text-gray-700 mt-2">{data.description}</p>
          </div>
          <div className="relative ">
          <img
            src={data.titleImages[currentTitleImageIndex]}
            alt="Title"
            className="w-auto h-[180px] object-cover rounded-lg"
          />
          <div className="ml-auto absolute bottom-2 left-2 flex items-center gap-2">
            <button
              className="p-2 bg-gray-200 rounded-full"
              onClick={() => handleTitleImageChange("prev")}
            >
              <AiOutlineLeft size={20} />
            </button>
            <button
              className="p-2 bg-gray-200 rounded-full"
              onClick={() => handleTitleImageChange("next")}
            >
              <AiOutlineRight size={20} />
            </button>
          </div>
          </div>
        </div>
      </motion.div>

      {/* Content Section */}
      <motion.div
        className="bg-white shadow rounded-lg w-full mt-6 p-6"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        <p className="text-gray-700">{data.loremText}</p>
      </motion.div>

      {/* Associated Wares Section */}
      <motion.div
        className="bg-white shadow rounded-lg w-full  mt-6 p-6"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.4 }}
      >
        <h2 className="text-xl font-bold mb-4">Ware associated with</h2>
        <div className="flex gap-4 overflow-x-auto">
          {data.associatedWares.map((ware, index) => (
            <div
              key={index}
              className="min-w-[150px] h-20 bg-gray-300 rounded-lg flex items-center justify-center text-gray-700 font-medium"
            >
              {ware}
            </div>
          ))}
        </div>
      </motion.div>
          <WhatWeDo />
          <CampaignList />

    </div>
  );
};

export default Local4LocalPage;

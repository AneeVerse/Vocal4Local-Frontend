"use client";
import { useState, useEffect, useRef } from "react";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa6";
import InitiativeCard from "../common/InitiativeCard";

// Sample data array
const campaigns = [
  {
    id: 1,
    name: "Campaign 1",
    organization: "Organization 1",
    description: "Description for Campaign 1",
    imgUrl: "/images/home/slide1.webp",
    progress: 25,
    goal: 40000,
    pledged: 10000,
  },
  {
    id: 2,
    name: "Campaign 2",
    organization: "Organization 2",
    description: "Description for Campaign 2",
    imgUrl: "/images/home/slide2.webp",
    progress: 50,
    goal: 40000,
    pledged: 20000,
  },
  {
    id: 3,
    name: "Campaign 3",
    organization: "Organization 3",
    description: "Description for Campaign 3",
    imgUrl: "/images/home/slide3.webp",
    progress: 75,
    goal: 40000,
    pledged: 30000,
  },
  {
    id: 4,
    name: "Campaign 4",
    organization: "Organization 4",
    description: "Description for Campaign 4",
    imgUrl: "/images/home/slide4.webp",
    progress: 85,
    goal: 40000,
    pledged: 34000,
  },
  {
    id: 5,
    name: "Campaign 5",
    organization: "Organization 5",
    description: "Description for Campaign 5",
    imgUrl: "/images/home/slide5.webp",
    progress: 90,
    goal: 40000,
    pledged: 36000,
  },
  {
    id: 6,
    name: "Campaign 6",
    organization: "Organization 6",
    description: "Description for Campaign 6",
    imgUrl: "/images/home/slide1.webp",
    progress: 100,
    goal: 40000,
    pledged: 40000,
  },
  {
    id: 7,
    name: "Campaign 7",
    organization: "Organization 7",
    description: "Description for Campaign 7",
    imgUrl: "/images/home/slide2.webp",
    progress: 100,
    goal: 40000,
    pledged: 40000,
  },
  {
    id: 8,
    name: "Campaign 8",
    organization: "Organization 8",
    description: "Description for Campaign 8",
    imgUrl: "/images/home/slide3.webp",
    progress: 100,
    goal: 40000,
    pledged: 40000,
  },
  {
    id: 9,
    name: "Campaign 9",
    organization: "Organization 9",
    description: "Description for Campaign 9",
    imgUrl: "/images/home/slide4.webp",
    progress: 100,
    goal: 40000,
    pledged: 40000,
  },
  {
    id: 10,
    name: "Campaign 10",
    organization: "Organization 10",
    description: "Description for Campaign 10",
    imgUrl: "/images/home/slide5.webp",
    progress: 100,
    goal: 40000,
    pledged: 40000,
  },
];

const TopCampaignList = () => {
  const [current, setCurrent] = useState(0);
  const [cardsToShow, setCardsToShow] = useState(1);
  const autoScrollRef = useRef(null);

  // Calculate how many cards to show based on screen width
  const updateCardsToShow = () => {
    const screenWidth = window.innerWidth;
    if (screenWidth >= 2000) setCardsToShow(4);
    else if (screenWidth >= 1200) setCardsToShow(3);
    else if (screenWidth >= 992) setCardsToShow(2);
    else setCardsToShow(1);
  };

  // Update cards to show on mount and resize
  useEffect(() => {
    updateCardsToShow();
    window.addEventListener("resize", updateCardsToShow);
    return () => window.removeEventListener("resize", updateCardsToShow);
  }, []);

  // Auto-scroll function
  const handleAutoScroll = () => {
    setCurrent((prev) =>
      prev < campaigns.length - cardsToShow ? prev + 1 : 0
    );
  };

  // Reset auto-scroll
  const resetAutoScroll = () => {
    clearInterval(autoScrollRef.current);
    autoScrollRef.current = setInterval(handleAutoScroll, 5000);
  };

  // Set up auto-scroll on mount
  useEffect(() => {
    autoScrollRef.current = setInterval(handleAutoScroll, 5000);
    return () => clearInterval(autoScrollRef.current);
  }, [cardsToShow]);

  // Left Button Handler
  const handleLeft = () => {
    setCurrent((prev) => Math.max(prev - 1, 0));
    resetAutoScroll();
  };

  // Right Button Handler
  const handleRight = () => {
    setCurrent((prev) =>
      prev < campaigns.length - cardsToShow ? prev + 1 : prev
    );
    resetAutoScroll();
  };

  return (
    <section className="py-16 px-3 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold">Top Campaigns</h1>
          <a href="#" className="text-secondary hover:underline">
            View All
          </a>
        </div>

<div className="relative overflow-hidden">

             {/* one primary circle gredient background color */}
             <div className="absolute top-0 blur-3xl left-[50%] translate-x-[-50%] z-0 h-full  aspect-square custom-gradient rounded-full"></div>

        {/* Scrollable Section */}
        <div className="overflow-hidden">
          {/* Cards Container */}
          <div
            className="flex py-2 gap-4 transition-transform duration-500 ease-in-out"
            style={{
              transform: `translateX(-${current * (100 / cardsToShow)}%)`,
            }}
          >
            {campaigns.map((campaign) => (
              <div
                key={campaign.id}
                className="flex-shrink-0"
                style={{
                  flex: `0 0 calc((100% - ${
                    cardsToShow * 16
                  }px) / ${cardsToShow})`,
                }}
              >
                <InitiativeCard campaign={campaign} />
              </div>
            ))}
          </div>

          {/* Left Button */}
          {current > 0 && (
            <FaAngleLeft
              className="text-secondary absolute top-1/2 left-4 z-30 cursor-pointer border border-secondary hover:bg-secondary hover:text-white bg-white w-10 h-10 p-2 rounded-full transition-all"
              onClick={handleLeft}
            />
          )}

          {/* Right Button */}
          {current < campaigns.length - cardsToShow && (
            <FaAngleRight
              className="text-secondary absolute top-1/2 right-4 z-30 cursor-pointer border border-secondary hover:bg-secondary hover:text-white bg-white w-10 h-10 p-2 rounded-full transition-all"
              onClick={handleRight}
            />
          )}
        </div>
        </div>
      </div>
    </section>
  );
};

export default TopCampaignList;

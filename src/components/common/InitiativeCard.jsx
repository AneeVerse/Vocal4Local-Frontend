import React from 'react';
import { FaDonate, FaTag } from 'react-icons/fa';

const InitiativeCard = ({ campaign }) => {
  return (
    <div className="bg-white border rounded-lg p-4 w-full hover:translate-y-[-2px] duration-300">
      {/* Header Section */}
      <div className="flex justify-between items-center">
        <div className="w-12 h-12 bg-gray-300 rounded-full flex items-center justify-center">
          <FaTag className="text-gray-500 text-xl" />
        </div>
        <div className="flex gap-3">
          <button className="bg-[#8ac240] text-white px-4 py-1 rounded-full font-medium hover:translate-y-[-2px] duration-300">
            Donate Cash
          </button>
          <button className="bg-secondary text-white px-4 py-1 rounded-full font-medium hover:translate-y-[-2px] duration-300">
            Category
          </button>
        </div>
      </div>

      {/* Image Section */}
      <div className="mt-4 relative bg-gray-100 h-[140px] rounded-lg shadow-inner">
        <img
          src={campaign.imgUrl}
          alt="Campaign"
          className="w-full h-full object-cover rounded-lg"
        />
        <button className="border-secondary border absolute bottom-0 translate-y-[50%] left-[50%] translate-x-[-50%] text-secondary bg-white bg-opacity-10 backdrop-blur-lg px-6 py-2 rounded-full font-medium hover:bottom-[2px] duration-300 z-10">
          Action
        </button>
      </div>

      {/* Details Section */}
      <div className="mt-6 text-left">
        <h2 className="font-bold text-lg text-[#0e2f50]">{campaign.name}</h2>
        <p className="text-sm text-gray-600">By: {campaign.organization}</p>
        <p className="mt-2 text-gray-700 text-sm">{campaign.description}</p>
      </div>

      {/* Progress Section */}
      <div className="mt-4">
        <div className="flex justify-between text-sm text-gray-600">
          <span>{campaign.progress}%</span>
          <span>Goal: {campaign.goal}</span>
          <span>Pledged: {campaign.pledged}</span>
        </div>
        <div className="w-full bg-gray-300 h-2 rounded-full mt-1">
          <div
            className="bg-[#8ac240] h-2 rounded-full"
            style={{ width: `${campaign.progress}%` }}
          ></div>
        </div>
      </div>
    </div>
  );
};

export default InitiativeCard;

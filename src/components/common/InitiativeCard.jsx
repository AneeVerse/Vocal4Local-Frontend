import React from 'react';
import { FaDonate, FaTag } from 'react-icons/fa';

const InitiativeCard = ({ campaign }) => {
  return (
    <div className="bg-white  rounded-2xl p-[8px] shadow-md w-full hover:scale-105 cursor-pointer duration-300">
  
      <div className='border border-dashed p-[8px] rounded-2xl'>
  

      {/* Image Section */}
      <div className=" relative bg-gray-100 h-[180px] rounded-2xl shadow-inner">

            {/* Overlay Header Section */}
        <div className="absolute top-2 left-2 flex items-center gap-2">
          <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-sm">
            <FaTag className="text-gray-500 text-lg" />
          </div>
        </div>
        <div className="absolute top-2 right-2 flex gap-2">
          <button className="bg-white text-sm text-secondary px-3 py-1 rounded-full font-medium shadow-sm hover:translate-y-[-2px] duration-300">
            Donate
          </button>
          <button className="bg-white text-sm text-secondary px-3 py-1 rounded-full font-medium shadow-sm hover:translate-y-[-2px] duration-300">
            Category
          </button>
        </div>
      {/* Image Section */}
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
      <div className="mt-6 space-y-2 text-left">
        <h2 className="font-bold text-lg text-[#0e2f50]">{campaign.name}</h2>
        <p className="text-sm text-gray-600">By: {campaign.organization}</p>
        <p className=" text-gray-700 text-sm">{campaign.description}</p>
      </div>

      {/* Progress Section */}
      <div className="mt-1">
        <div className={`relative w-full h-3`}
        style={{ width: `${campaign.progress}%` }}>
        <div className={`absolute w-full text-right  top-0 right-0 text-xs font-medium`}>
        <span className=''>{campaign.progress}%</span></div>

        </div>
        <div className="w-full bg-gray-300 h-2 rounded-full mt-1">
          <div
            className="bg-[#8ac240] h-2 rounded-full"
            style={{ width: `${campaign.progress}%` }}
          ></div>
        </div>
        <div className="flex justify-between text-sm text-gray-600">
          <span>Goal: {campaign.goal}</span>
          <span>Pledged: {campaign.pledged}</span>
        </div>
      </div>
    </div>
    </div>
  );
};

export default InitiativeCard;

import React from 'react';
import { FaDonate, FaTag } from 'react-icons/fa';

const InitiativeCard = ({ campaign }) => {
  return (
    <div className="bg-white  rounded-lg p-2 w-full hover:translate-y-[-2px] duration-300">
  
      <div className='border border-dashed p-2 rounded-lg'>
  

      {/* Image Section */}
      <div className=" relative bg-gray-100 h-[180px] rounded-lg shadow-inner">

            {/* Header Section */}
      <div className="flex top-2 left-2 absolute gap-2 justify-between items-center">
        <div className='flex items-center'>
        <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center">
          <FaTag className="text-gray-500 text-lg" />
        </div>
          <div className='bg-white ml-[-10px] min-w-fit rounded-r-full text-sm sm:text-md text-secondary px-4 py-1  font-medium '>Logo Name</div>
        </div>
        <div className="flex gap-2">
          {/* <button className="bg-[#8ac240] text-sm sm:text-md text-white px-4 py-1 rounded-full font-medium hover:translate-y-[-2px] duration-300">
            Donate <span className='hidden sm:inline'>Cash</span>
          </button> */}
          <button className="bg-secondary text-sm sm:text-md text-white px-4 py-1 rounded-full font-medium hover:translate-y-[-2px] bg-opacity-50 backdrop-blur-sm duration-300">
            Category
          </button>
        </div>
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
      <div className="mt-6 text-left">
        <h2 className="font-bold text-lg text-[#0e2f50]">{campaign.name}</h2>
        <p className="text-sm text-gray-600">By: {campaign.organization}</p>
        <p className="mt-2 text-gray-700 text-sm">{campaign.description}</p>
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

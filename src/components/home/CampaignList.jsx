
import React from 'react';
import InitiativeCard from '../common/InitiativeCard';
import Link from 'next/link';
import AnimatedLinkButton from '../common/AnimatedLinkButton';

// Sample data array
const campaigns = [
  {
    id: 1,
    name: 'Campaign 1',
    organization: 'Organization 1',
    description: 'Description for Campaign 1',
    imgUrl: '/images/home/slide1.webp',
    progress: 25,
    goal: 40000,
    pledged: 10000,
  },
  {
    id: 2,
    name: 'Campaign 2',
    organization: 'Organization 2',
    description: 'Description for Campaign 2',
    imgUrl: '/images/home/slide2.webp',
    progress: 50,
    goal: 40000,
    pledged: 20000,
  },
  {
    id: 3,
    name: 'Campaign 3',
    organization: 'Organization 3',
    description: 'Description for Campaign 3',
    imgUrl: '/images/home/slide3.webp',
    progress: 75,
    goal: 40000,
    pledged: 30000,
  },
  {
    id: 4,
    name: 'Campaign 4',
    organization: 'Organization 4',
    description: 'Description for Campaign 4',
    imgUrl: '/images/home/slide4.webp',
    progress: 100,
    goal: 40000,
    pledged: 40000,
  },

  {
    id: 5,
    name: 'Campaign 3',
    organization: 'Organization 3',
    description: 'Description for Campaign 3',
    imgUrl: '/images/home/slide3.webp',
    progress: 75,
    goal: 40000,
    pledged: 30000,
  },
  {
    id: 6,
    name: 'Campaign 4',
    organization: 'Organization 4',
    description: 'Description for Campaign 4',
    imgUrl: '/images/home/slide4.webp',
    progress: 100,
    goal: 40000,
    pledged: 40000,
  },

  {
    id: 7,
    name: 'Campaign 3',
    organization: 'Organization 3',
    description: 'Description for Campaign 3',
    imgUrl: '/images/home/slide3.webp',
    progress: 75,
    goal: 40000,
    pledged: 30000,
  },
  {
    id: 8,
    name: 'Campaign 4',
    organization: 'Organization 4',
    description: 'Description for Campaign 4',
    imgUrl: '/images/home/slide4.webp',
    progress: 100,
    goal: 40000,
    pledged: 40000,
  },
  {
    id: 9,
    name: 'Campaign 3',
    organization: 'Organization 3',
    description: 'Description for Campaign 3',
    imgUrl: '/images/home/slide3.webp',
    progress: 75,
    goal: 40000,
    pledged: 30000,
  },
  
  // Add more campaigns as needed
];

const CampaignList = () => {
    return (
      <div className="py-16 relative">
        {/* Top Campaigns Heading */}
        <h1 className="text-lg font-semibold text-secondary mb-2 text-center md:text-left uppercase tracking-wide">
          Top Campaigns
        </h1>
  
        {/* Description Section */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-6 mb-10 ">
          <p className="text-secondary text-xl sm:text-3xl font-bold text-center md:text-left max-w-2xl leading-tight">
            Empowering communities with impactful campaigns.
          </p>
          <p className="text-gray-600 text-sm max-w-lg text-center md:text-left">
            Join us in creating meaningful changes in local communities through
            dedicated efforts and collaborative initiatives.
          </p>
        </div>
  
        <div className="relative  grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 -m-2">
              {/* one primary circle gredient background color */}
              <div className="absolute  top-0 blur-3xl left-[50%] translate-x-[-50%] -z-10 md:h-full  aspect-square custom-gradient rounded-full"></div>
          {campaigns.map((campaign) => (
            <div key={campaign.id} className="w-full p-2">
              <InitiativeCard campaign={campaign} />
            </div>
          ))}
          {/* white background over */}
          <div className="absolute  bottom-0 blur-sm opacity-100 z-20 h-[250px] w-full bg-gradient-to-b from-transparent via-white/50 to-white "></div>
        </div>

          {/* white background over */}
          {/* <div className="absolute  bottom-0 blur-sm opacity-100 z-10 h-[200px] w-full bg-gradient-to-b from-white via-white to-white "></div> */}
        {/* view all button */}
        <div className="text-center mt-6 relative z-20">
          {/* <Link href="#" className="bg-secondary px-12 py-[10px] rounded-md text-white font-medium">
            See All
          </Link> */}
          <AnimatedLinkButton href="/campaigns" text="See All" />
          <p className='font-bold text-secondary text-xl mt-4'>Total Cause 20</p>
        </div>
             </div>
    );
  };
  
  export default CampaignList;
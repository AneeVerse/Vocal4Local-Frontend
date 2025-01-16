
import React from 'react';
import InitiativeCard from '../common/InitiativeCard';
import Link from 'next/link';

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
  // Add more campaigns as needed
];

const CampaignList = () => {
    return (
      <div className="py-12">
      
        <div className="grid relative grid-cols-1 md:grid-cols-3 gap-5 -m-2">
              {/* one primary circle gredient background color */}
              <div className="absolute  top-0 blur-3xl left-[50%] translate-x-[-50%] -z-10 md:h-full  aspect-square custom-gradient rounded-full"></div>
          {campaigns.map((campaign) => (
            <div key={campaign.id} className="p-2">
              <InitiativeCard campaign={campaign} />
            </div>
          ))}
        </div>

        {/* view all button */}
        <div className="text-center mt-8">
          <Link href="#" className="bg-secondary px-12 py-[10px] rounded-md text-white font-medium">
            See All
          </Link>
          <p className='font-bold text-secondary text-xl mt-4'>Total Cause 20</p>
          </div>
       
      </div>
    );
  };
  
  export default CampaignList;

import React from 'react';
import InitiativeCard from '../common/InitiativeCard';

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
  // Add more campaigns as needed
];

const TopCampaignList = () => {
    return (
      <div className="p-6">
         <div className="mb-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold mb-4">Top Campaigns</h1>
          <a href="#" className="text-secondary">View All</a>
        </div>
        <div className="grid grid-cols-4 -m-2">
          {campaigns.map((campaign) => (
            <div key={campaign.id} className="p-2">
              <InitiativeCard campaign={campaign} />
            </div>
          ))}
        </div>
       
      </div>
    );
  };
  
  export default TopCampaignList;
import React, { useState, useEffect } from 'react';
import './CSS/ContentDisplay.css';

import image6 from '../../../../public/assets/img/th-4/ofizzpro/44.jpg';
import image7 from '../../../../public/assets/img/th-4/ofizzpro/45.jpg';
import image8 from '../../../../public/assets/img/th-4/ofizzpro/46.jpg';

const ContentDisplay_3 = () => {
  const content = [
    { heading: 'Efficiency Gains', paragraph: 'Organizations using AI-driven document management report a 50% faster average cycle time for document retrieval. Cost Savings: Effective document management can reduce administrative costs by 30%' },
    { heading: 'Risk Reduction', paragraph: 'Proper document management can decrease error rates by 60%.' },
    { heading: 'Industry Insight', paragraph: 'By 2025, 70% of organizations will implement AI for document management and retrieval, improving operational efficiency and compliance. $120 billion is wasted annually due to inefficient document management, highlighting the critical need for robust solutions like OfizzPRO.' },
  ];

  const images = [image6, image7, image8];

  const [currentContentIndex, setCurrentContentIndex] = useState(0);
  const [transitioning, setTransitioning] = useState(false);

  useEffect(() => {
    setTransitioning(true);
    const interval = setInterval(() => {
      setTransitioning(false);
      setTimeout(() => {
        setCurrentContentIndex((prevIndex) => (prevIndex + 1) % content.length);
        setTransitioning(true);
      }, 500); // Delay for the outgoing animation
    }, 3000); // Change content every 3 seconds

    return () => clearInterval(interval);
  }, [content.length]);

  return (
    <div className='bg-black mt-7 md:mt-24'>
      <div className="global-container p-4 md:p-10">
        <div className="flex flex-col md:flex-row rounded-[20px] md:rounded-[30px] bg-[#280B84]">
          <div className={`flex flex-col w-full md:w-1/2 p-4 md:p-6 align-middle text-center content-transition ${transitioning ? 'fade-in' : 'fade-out'} text-white`}>
            <h4 className='font-body text-[30px] md:text-[50px] mt-0 text-start'>
              {content[currentContentIndex].heading}
            </h4>
            <p className='text-[14px] md:text-[15px] text-start font-body'>
              {content[currentContentIndex].paragraph}
            </p>
          </div>
          <div className={`w-full md:w-1/2 p-0 image-transition ${transitioning ? 'fade-in' : 'fade-out'}`}>
            <img
              src={images[currentContentIndex]}
              alt="Content"
              className="w-full h-auto object-cover md:rounded-r-[30px]"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContentDisplay_3;

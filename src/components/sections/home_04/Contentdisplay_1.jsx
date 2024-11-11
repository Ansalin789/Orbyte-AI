import React, { useState, useEffect } from 'react';
import './CSS/ContentDisplay.css';

import image6 from '../../../../public/assets/img/th-4/pactProSlider/29.png';
import image7 from '../../../../public/assets/img/th-4/pactProSlider/2.png';
import image8 from '../../../../public/assets/img/th-4/pactProSlider/23.png';
import image9 from '../../../../public/assets/img/th-4/pactProSlider/32.png';

const ContentDisplay_1 = () => {
  const content = [
    { percentage: '80%', heading: 'Efficiency Gains', paragraph: 'Organizations using AI-driven contract management report an 80% faster average cycle time from bid to signed agreement.' },
    { percentage: '70%', heading: 'Cost Savings', paragraph: 'Contract management software can reduce administrative costs by 25% - 30%.' },
    { percentage: '90%', heading: 'Risk Reduction', paragraph: 'Effective contract management can decrease contract value erosion, which averages 8.6% due to poor management (source: WorldCC).' },
    { percentage: '85%', heading: 'Industry Insight', paragraph: 'By 2027, 50% of organizations will support supplier contract negotiations through AI-enabled contract risk analysis and editing tools (source: Gartner). $270 billion is destroyed annually due to ineffective contract management, highlighting the critical need for robust CLM solutions.' },
  ];

  const images = [image6, image7, image8, image9];

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
    <div className='bg-black mt-0 md:mt-24'>
      <div className="global-container p-4 md:p-10">
        <div className="flex flex-col md:flex-row rounded-[20px] md:rounded-[30px] bg-[#74097E]">
          <div className={`flex flex-col w-full md:w-1/2 p-4 align-middle text-center content-transition ${transitioning ? 'fade-in' : 'fade-out'} text-white rounded`}>
            <div>
              <h3 className='p-2 md:p-4 font-body text-[24px] md:text-[50px] mt-0 text-start'>
                {content[currentContentIndex].heading}
              </h3>
              <p className='p-2 md:p-4 text-[14px] md:text-[15px] text-start font-body'>
                {content[currentContentIndex].paragraph}
              </p>
            </div>
          </div>
          <div className={`w-full md:w-1/2 p-0 image-transition image-container ${transitioning ? 'fade-in' : 'fade-out'}`}>
            <img
              src={images[currentContentIndex]}
              alt="Content"
              className="w-full h-auto md:h-full object-cover md:rounded-r-[30px]"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContentDisplay_1;

import React, { useState, useEffect } from 'react';
import './CSS/ContentDisplay.css';

import image1 from '../../../../public/assets/img/th-4/ofizzpro/19.png';
import image2 from '../../../../public/assets/img/th-4/ofizzpro/2.jpg';
import image3 from '../../../../public/assets/img/th-4/ofizzpro/7.png';
import image4 from '../../../../public/assets/img/th-4/ofizzpro/3.png';
import image5 from '../../../../public/assets/img/th-4/ofizzpro/22.png';

const ContentDisplay_2 = () => {
  const content = [
    { heading: 'Automated Documentation', paragraph: 'Quickly generate and manage comprehensive documents with ease using our AI-driven technology. OfizzPRO reduces the time and effort required for manual documentation by automating the process and ensuring accuracy.' },
    { heading: 'Dynamic Knowledge Management', paragraph: 'Enable employees to access critical information quickly through advanced AI algorithms that dynamically extract and organize knowledge from HR manuals and SOPs.' },
    { heading: 'Efficient Workflow Automation', paragraph: 'Organize and manage all your company documents with streamlined workflows. OfizzPRO automates tasks such as document approval, updates, and distribution, enhancing operational efficiency.' },
    { heading: 'Real-time Collaboration', paragraph: 'Collaborate seamlessly with stakeholders in real-time, making document updates and reviews faster and more efficient. Enhance transparency and reduce bottlenecks in the document management process.' },
    { heading: 'Secure Storage and Retrieval', paragraph: 'Store all your company documents securely in one place with robust search and retrieval functionalities. Ensure data integrity and accessibility at all times.' },
  ];

  const images = [image1, image2, image3, image4, image5];

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
    <div className='bg-black mt-0'>
      <div className="global-container p-4 md:p-10">
        <div className="flex flex-col md:flex-row rounded-[20px] md:rounded-[30px] bg-[#280B84]">
          <div className={`flex flex-col w-full md:w-1/2 p-4 align-middle text-center content-transition ${transitioning ? 'fade-in' : 'fade-out'} text-white rounded`}>
            <h4 className='p-2 md:p-4 font-body text-[20px] md:text-[50px] mt-0 text-start'>
              {content[currentContentIndex].heading}
            </h4>
            <p className='p-2 md:p-4 text-[14px] md:text-[15px] text-start font-body'>
              {content[currentContentIndex].paragraph}
            </p>
          </div>
          <div className={`w-full md:w-1/2 p-0 image-transition image-container ${transitioning ? 'fade-in' : 'fade-out'}`}>
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

export default ContentDisplay_2;

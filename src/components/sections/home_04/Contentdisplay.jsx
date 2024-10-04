import React, { useState, useEffect } from 'react';

import image1 from '../../../../public/assets/img/th-4/pactProSlider/20.png';
import image2 from '../../../../public/assets/img/th-4/pactProSlider/40.png';
import image3 from '../../../../public/assets/img/th-4/pactProSlider/25.png';
// import image4 from '../../../../public/assets/img/th-4/pactProSlider/37.png';
import image5 from '../../../../public/assets/img/th-4/pactProSlider/8.png';

const ContentDisplay = () => {
  const content = [
    { percentage: '80%', heading: 'Automated Contract Drafting', paragraph: 'Create comprehensive contracts with ease using our AI-driven templates. PactPro reduces the time and effort required for manual drafting by automating the process and ensuring accuracy' },
    { percentage: '70%', heading: 'Intelligent Contract Analysis', paragraph: 'Leverage advanced AI algorithms to review and analyze contracts, ensuring compliance and identifying potential risks. Our intelligent analysis tools provide insights into contract performance and obligations.' },
    { percentage: '90%', heading: 'Efficient Approval Workflows', paragraph: 'Simplify approval processes with customizable workflows that ensure timely reviews and approvals. Streamline collaboration across departments and improve operational efficiency.' },
    // { percentage: '85%', heading: 'Real-time Collaboration', paragraph: 'Collaborate seamlessly with stakeholders in real-time, making contract negotiations faster and more efficient. Enhance transparency and reduce bottlenecks in the approval process.' },
    { percentage: '85%', heading: 'Secure Storage and Retrieval', paragraph: 'Store all your contracts securely in one place with robust search and retrieval functionalities. Ensure data integrity and accessibility at all times.' },
  ];

  const images = [image1, image2, image3, image5];

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
    <div className='bg-black -mt-20'>
      <div className="global-container p-4 md:p-10">
        <div className="flex flex-col md:flex-row rounded-[20px] md:rounded-[30px] bg-[#74097E]">
          <div className={`flex flex-col w-full md:w-1/2 p-4 align-middle text-center content-transition ${transitioning ? 'fade-in' : 'fade-out'} text-white rounded`}>
            <div>
              <h4 className='p-2 md:p-4 font-body text-[24px] md:text-[50px] mt-0 text-start'>
                {content[currentContentIndex].heading}
              </h4>
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

export default ContentDisplay;

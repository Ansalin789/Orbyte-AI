import React, { useEffect, useRef } from 'react';
  import { CountUp } from 'countup.js';
const Promo = () => {
  const countersRef = useRef([]);
  useEffect(() => {
    countersRef.current.forEach((counter, index) => {
      const targetNumber = parseInt(counter.dataset.countupNumber, 10);
      const countUp = new CountUp(counter, targetNumber);
      if (!countUp.error) {
        countUp.start();
      } else {
        console.error(countUp.error);
      }
    });
  }, []);
  return (
    <div id='promo-section'>
      <div className="relative z-[999] pt-20 md:-mt-[135px] md:pt-0 -mt-10 ">
        {/* Section Container */}
        <div className="global-container bg-[url('assets/img/th-4/about-1.png')] w-[1200px] bg-cover bg-center object-cover">
          <ul className='grid grid-cols-1 p-4 gap-6 md:grid-cols-2 lg:grid-cols-3'>
            <li
              className='text-white'
              data-jos_delay='0.1'
            >
              <div className='mb-6 flex justify-center items-center text-center'>
                <div className='font-light font-body text-center text-7xl leading-[1.33]' data-countup-number={80} ref={el => countersRef.current[0] = el}>
                  80 
                </div>
                <span className='font-light font-body text-center text-7xl leading-[1.33]'>%</span>
              </div>
              <p className='text-[16px] leading-[1.4] text-center'>
              Boost your productivity up to 80%, optimizing workflow efficiency.
              </p>
            </li>
            <li
              className='text-white'
              data-jos_delay='0.2'
            >
              <div className='mb-6 flex justify-center items-center'>
                <div className='font-light font-body text-center text-7xl leading-[1.33]' data-countup-number={60} ref={el => countersRef.current[1] = el}>
                  60
                </div>
                <span className='font-light font-body text-center text-7xl leading-[1.33]'>%</span>
              </div>
              <p className='text-[16px] leading-[1.4] text-center'>
              Achieve up to 60% rise in profitability, improving financial health.
              </p>
            </li>
            <li
              className='text-white'
              data-jos_delay='0.3'
            >
              <div className='mb-6 justify-center flex items-center'>
                <div className='font-light font-body text-center text-7xl leading-[1.33]' data-countup-number={95} ref={el => countersRef.current[2] = el}>
                  95
                </div>
                <span className='font-light font-body text-center text-7xl leading-[1.33]'>%</span>
              </div>
              <p className='text-[16px] leading-[1.4] text-center'>
              Reduce risk up to 95%, minimizing potential value erosion.
              </p>
            </li>
          </ul>
          <ul className='grid grid-cols-1 p-4 gap-6 md:grid-cols-2 lg:grid-cols-2'>
              <li
                className='text-white'
                data-jos_delay='0.1'
              >
                <div className='mb-6 flex justify-center items-center text-center'>
                  <div className='font-light font-body text-center text-7xl leading-[1.33]' data-countup-number={30} ref={el => countersRef.current[0] = el}>
                    30 
                  </div>
                  <span className='font-light font-body text-center text-7xl leading-[1.33]'>%</span>
                </div>
                <p className='text-[16px] leading-[1.4] text-center'>
                Contract management software can reduce administrative costs by up to 20-30%
                </p>
              </li>
              
              <li
                className='text-white'
                data-jos_delay='0.3'
              >
                <div className='mb-6 justify-center flex items-center'>
                  <div className='font-light font-body text-center text-7xl leading-[1.33]' data-countup-number={50} ref={el => countersRef.current[2] = el}>
                    50
                  </div>
                  <span className=' font-body text-center text-7xl leading-[1.33]'>%</span>
                </div>
                <p className='text-[16px] leading-[1.4] text-center'>
                By 2027, organizations will support supplier contract negotiations through AI-enabled contract risk analysis and editing tools.
                </p>
              </li>
            </ul>
        </div>
        {/* Section Container */}
      </div>
    </div>
  );
};

export default Promo;

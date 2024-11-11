import React, { useEffect, useRef } from 'react';
import { CountUp } from 'countup.js';
import useAccordion from '../../../hooks/useAccordion';
import { motion } from "framer-motion";
import { Helmet } from 'react-helmet';

const Content_04 = () => {
  const [activeIndex, handleAccordion] = useAccordion();
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
    <section id='content-section-4' className='p-6 mb-20 md:p-20 md:mb-40'>
    <Helmet>
    <meta charSet="utf-8" />
    <title>Why Choose OrbyteAI - Best Business management solutions
    </title>
    <meta
      name="description"
      content="Discover why Orbyte AI is the best choice for your business management system. We offer top-notch business software solutions, expert support, and a commitment to your success."
    />
    <meta
      name="keywords"
      content="AI innovation for business, OrbyteAI solutions, PactPro contract management, OfizzPro office administration, AI-driven business products, Contract lifecycle management, Efficient office administration, Advanced AI for business operations, Business automation solutions, AI-powered business tools, State-of-the-art AI products, Contract management AI software, Office management with AI, Business productivity with AI, OrbyteAI PactPro and OfizzPro
"
    />
    <link rel="canonical" href="https://orbyte.ai/why-choose-us/" />
    <meta
      name="robots"
      content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1"
    />
    </Helmet>
      <div className='pb-10 pt-10 md:pb-20 md:pt-20 xl:pb-[150px] bg-gradient-to-b from-[#000] via-[#301979] to-[#cfc1f1] rounded-[20px] md:rounded-[40px]'>
        <div className='global-container'>
          <div className='grid items-center gap-6 md:gap-12 lg:gap-20 xl:gap-24'>
            <div className='jos' data-jos_animation='fade-right'>
              <div className='mb-4 md:mb-6'>
                <h2 className='jos font-body font-normal leading-[1.06] -tracking-[1px] text-center text-white text-2xl md:text-[40px] lg:text-[50px]'>
                  Why Choose Orbyte AI?
                </h2>
              </div>
              <div>
                <p className='jos font-body mb-0 text-xs sm:text-sm md:text-base lg:text-[16px] leading-[1.5] text-center md:text-center'>
                  OrbyteAI is at the forefront of AI innovation, providing state-of-the-art products designed to revolutionize business operations. Our flagship products, PactPro and OfizzPro, are meticulously developed to address specific business challenges, from contract lifecycle management to efficient office administration.
                </p>
              </div>
              <ul className='mt-[30px] grid grid-cols-1 gap-6 text-center sm:grid-cols-3'>
                <li>
                  <h3 className='font-body text-3xl leading-[1.05] tracking-[-1px] text-[#fff] md:text-5xl lg:text-6xl xl:text-[50px]' data-module='countup'>
                    <span className='start-number' data-countup-number={95} ref={el => countersRef.current[0] = el}>
                      95
                    </span>%
                  </h3>
                  <span className='mt-4 block text-[16px] md:text-[21px] font-normal'>
                    Reduce Risk
                  </span>
                </li>
                <li>
                  <h3 className='font-body text-3xl leading-[1.05] tracking-[-1px] text-[#fff] md:text-5xl lg:text-6xl xl:text-[50px]' data-module='countup'>
                    <span className='start-number' data-countup-number={70} ref={el => countersRef.current[1] = el}>
                      70
                    </span>%
                  </h3>
                  <span className='mt-4 block text-[16px] md:text-[21px] font-normal'>
                    Reduce Costs
                  </span>
                </li>
                <li>
                  <h3 className='font-body text-3xl leading-[1.05] tracking-[-1px] text-[#ffffff] md:text-5xl lg:text-6xl xl:text-[50px]' data-module='countup'>
                    <span className='start-number' data-countup-number={80} ref={el => countersRef.current[2] = el}>
                      80
                    </span>%
                  </h3>
                  <span className='mt-4 block text-[16px] md:text-[21px] font-normal'>
                    Maximize Value
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 mt-4 mb-12 gap-4 max-w-[1650px] mx-auto p-6">
      {/* Top Left Card */}
      {/* <div className="bg-[#000] text-white p-8 rounded-3xl flex flex-col justify-center items-center col-span-1 md:col-span-2">
      </div> */}

      {/* Middle Left Card */}
      <div className="jos bg-[#1E2024] text-white p-8 rounded-3xl flex flex-col justify-center items-center col-span-1 md:col-span-2">
        <h4 className="text-3xl font-body text-center">
        Expertise and Innovation
        </h4>
        <p className="text-center text-sm mt-4 font-body">
        Our team combines deep industry expertise with advanced AI technology to deliver solutions that enhance efficiency, accuracy, and decision-making. We continuously implement the latest AI advancements to ensure our products lead the market.
        </p>
      </div>

      {/* Top Right Card */}
      <div className="jos bg-[#616CFF] text-white p-8 rounded-3xl flex flex-col justify-center items-center col-span-1 md:col-span-1">
        <h4 className="text-3xl font-body text-center">
          Proven Success 
        </h4>
        <p className="text-center text-sm mt-4 font-body">
          With a track record of successful implementations, our clients experience significant efficiency gains, cost-effectiveness, and enhanced compliance through our AI-driven solutions.
        </p>
      </div>

      {/* Middle Right Card */}
      <div className="jos bg-[#8340FF] text-white p-8 rounded-3xl flex flex-col justify-center items-center col-span-1 md:col-span-1">
        <h4 className="text-3xl font-body text-center">
        Commitment to Excellence 
        </h4>
        <p className="text-center text-sm mt-4 font-body">
          We are dedicated to delivering exceptional value with high-quality products and unparalleled customer support, consistently exceeding our client's expectations.
        </p>
      </div>
      </div>
    </section>
  );
};

export default Content_04;
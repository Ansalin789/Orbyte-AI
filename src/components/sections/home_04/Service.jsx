import React from 'react';

const Service = () => {
  return (
    <div className='p-4 md:p-6 lg:p-6 md:-mt-60'>
      <div className='bg-[#000] rounded-[20px] md:rounded-[40px] lg:rounded-[60px] p-6 md:p-12 lg:p-20'>
        <div className="flex flex-col lg:flex-row justify-center items-center gap-4 md:gap-6">
          {/* Left Side - Mission and Excellence */}
          <div className="flex flex-col w-full lg:w-1/2 gap-4 md:gap-6">
            <div className="bg-[#1C2229] p-4 md:p-6 lg:p-10 rounded-[20px] md:rounded-[30px] lg:rounded-[40px] w-full">
              <p className="text-purple-400 text-xl md:text-2xl text-center">Mission</p>
              <p className="mt-2 md:mt-4 font-body text-xs md:text-base lg:text-base text-purple-400 text-center">
                Our mission is to empower individuals, developers, and organizations
                with the tools and technologies they need to harness the full
                potential of AI while ensuring the utmost privacy, control, and
                security of their data.
              </p>
            </div>
            <div className="bg-[#C3B7F2] p-4 md:p-6 lg:p-10 rounded-[20px] md:rounded-[30px] lg:rounded-[40px] w-full">
              <p className="text-black text-xl md:text-2xl text-center">Excellence</p>
              <p className="mt-2 md:mt-4 font-body text-xs md:text-base lg:text-base text-black text-center">
                We strive for excellence in everything we do, ensuring the highest quality and value for our clients.
              </p>
            </div>
          </div>

          {/* Right Side - Stats Boxes */}
          <div className="flex flex-col w-full lg:w-1/2 gap-4 md:gap-6">
            <div className="flex flex-col md:flex-row gap-4 md:gap-6">
              <div className="bg-[#616CFF] p-4 md:p-6 rounded-[20px] md:rounded-[30px] lg:rounded-[40px] w-full">
                <p className="text-xl md:text-2xl text-center">Innovation</p>
                <p className="mt-2 md:mt-4 text-xs md:text-base lg:text-base text-center">
                  We are dedicated to continuous innovation, leveraging the latest AI advancements to deliver cutting-edge solutions.
                </p>
              </div>

              <div className="bg-[#1C2229] p-4 md:p-6 rounded-[20px] md:rounded-[30px] lg:rounded-[40px] w-full">
                <p className="text-xl md:text-2xl text-white text-center">Integrity</p>
                <p className="mt-2 md:mt-4 text-xs md:text-base lg:text-base text-white text-center">
                  We conduct our business with the utmost integrity, building trust and fostering long-term relationships with our clients.
                </p>
              </div>
            </div>

            <div className="bg-[#8340FF] p-4 md:p-6 lg:p-10 rounded-[20px] md:rounded-[30px] lg:rounded-[40px] w-full">
              <p className="text-xl md:text-2xl text-white text-center">Always-On Customer Support</p>
              <p className="mt-2 md:mt-4 text-xs md:text-base lg:text-base text-white text-center">
                Enjoy 24/7 assistance with our Always-On Customer Support. Our expert team is here around the clock to resolve any issues and ensure your business runs smoothly.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Service;

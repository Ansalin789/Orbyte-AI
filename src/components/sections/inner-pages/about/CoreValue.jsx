const CoreValue = () => {
  return (
    <section id='hero-section'>
      <div className='relative z-[1] overflow-hidden text-center text-white pb-1 pr-0 pl-2 rounded-3xl'>
        {/* Section Spacer */}
        <div className="pb-10 pt-20 md:pb-[265px] md:pt-40 lg:pt-44 xl:pt-[150px] rounded-3xl p-5 md:p-10">
          {/* Section Container */}
          <div className='bg-gradient-to-t from-[#cfc1f1] via-[#301979] to-[#000000] p-10 md:p-20 rounded-b-[30px] md:rounded-b-[70px]'>
            <h2 className='jos font-body mb-6 text-[24px] md:text-[50px] leading-none text-white -top-10'>
              Our Vision
            </h2>
            <div className='mx-auto max-w-[90%] md:max-w-[1090px]'>
              <p className='leading-[1.5] md:leading-[1.33] font-body text-[12px] md:text-[15px]'>
              To be the global leader in AI-driven business solutions, transforming how organizations operate and achieve their goals with personalized GPT models and advanced security. We envision a future where AI empowers businesses to achieve unparalleled efficiency, precision, and innovation, fostering a secure and thriving global community.
              </p>
            </div>
            <div className='mt-8 md:mt-12 flex justify-center'>
            </div>
          </div>
          {/* Section Container */}
        </div>
        {/* Background Gradient */}
        <div className='absolute left-1/2 top-[80%] -z-[1] h-[1280px] w-[1280px] -translate-x-1/2 rounded-full '>
        </div>
      </div>
      {/* Section Spacer */}
    </section>
  );
};

export default CoreValue;

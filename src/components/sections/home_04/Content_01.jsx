import { Link } from 'react-router-dom';

const Content_01 = () => {
  return (
    <section id='section-content-1'>
      {/* Section Spacer */}
      <div className="relative z-[999] py-10 sm:py-16 md:py-20 lg:py-24 xl:py-[180px] bg-cover rounded-xl p-4 sm:p-6 md:p-8 lg:p-12 xl:p-16 -mt-16 sm:-mt-24 md:-mt-36 lg:-mt-96">
        {/* Section Container */}
        <div className='bg-gradient-to-b from-[#cfc1f1] via-[#301979] to-[#000000] p-6 sm:p-8 md:p-12 lg:p-16 rounded-t-[20px] sm:rounded-t-[30px] md:rounded-t-[40px] lg:rounded-t-[50px]'>
          <div className='grid items-center gap-4 sm:gap-6 md:gap-8 lg:gap-12 xl:gap-x-[60px]'>
            <div className='jos' data-jos_animation='fade-right'>
              {/* Section Content Block */}
              <div className='mb-4 sm:mb-6 text-center md:text-left'>
                <h2 className='font-body text-[20px] sm:text-[24px] md:text-[28px] lg:text-[36px] font-medium leading-tight tracking-tight text-center'>
                  About Us
                </h2>
              </div>
              {/* Section Content Block */}
              <p className='jos font-body mb-0 text-xs sm:text-sm md:text-base lg:text-[15px] leading-[1.5] text-center md:text-center'>
                At Orbyte AI, we specialize in creating cutting-edge AI solutions tailored to transform business operations. Our personalized GPT models enhance productivity, boost profitability, and drive secure innovation. With a focus on contract lifecycle management and comprehensive organizational support, we empower businesses to achieve their goals with unmatched efficiency and precision. Experience the future of business excellence with Orbyte AI.
              </p>
              <div className='text-center mt-4 sm:mt-6 md:mt-8'>
                <Link
                    rel='noopener noreferrer'
                    to='/about'
                    className='inline-block h-full bg-gradient-to-r from-[#9178F1] via-[#7555EE] to-[#4c33a9] p-2 sm:p-3 md:p-4 py-1.5 sm:py-2.5 md:py-3 text-xs sm:text-sm md:text-base text-white border-none rounded-full transition-shadow shadow-purple-900 duration-300 ease-in-out hover:shadow-lg shadow-md'
                >
                  Learn more
                </Link>
              </div>
            </div>
          </div>
        </div>
        {/* Section Container */}
      </div>
      {/* Section Spacer */}
    </section>
  );
};

export default Content_01;

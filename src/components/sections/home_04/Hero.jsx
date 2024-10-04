import { Link } from 'react-router-dom';

const Hero = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <section id='hero-section'>
      <div className='relative z-[1] overflow-hidden text-center text-white bg-[#000000] pb-10 pr-5 pl-5 rounded-3xl'>
        {/* Section Spacer */}
        <div className="pb-10 pt-20 md:pb-[265px] md:pt-40 lg:pt-44 xl:pt-[150px] rounded-3xl p-5 md:p-10">
          {/* Section Container */}
          <div className='bg-gradient-to-t from-[#cfc1f1] via-[#301979] to-[#000000] p-10 md:p-20 rounded-b-[30px] md:rounded-b-[70px]'>
            <h2 className='jos font-body mb-6 text-[24px] md:text-[50px] leading-none text-white -top-10'>
              Empowering Business Operations with AI Solutions
            </h2>
            <div className='mx-auto max-w-[90%] md:max-w-[1090px]'>
              <p className='leading-[1.5] md:leading-[1.33] font-body text-[12px] md:text-[15px]'>
                At Orbyte AI, we are at the forefront of revolutionizing business operations with our cutting-edge AI solutions. Our personalized GPT models are crafted to elevate productivity, boost profitability, and foster secure innovation.
              </p>
            </div>
            <div className='mt-8 md:mt-12 flex justify-center'>
              <Link
                rel='noopener noreferrer'
                to='/'
                className='inline-block h-full bg-gradient-to-r from-[#9178F1] via-[#7555EE] to-[#4c33a9] p-2 md:p-4 py-1.5 md:py-3 text-xs md:text-base text-white border-none rounded-full transition-shadow shadow-purple-800 duration-300 ease-in-out hover:shadow-purple-800 shadow-md'
              >
                Unlock Magic Dashboard!
              </Link>
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

export default Hero;

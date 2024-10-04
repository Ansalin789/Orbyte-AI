import { Link } from 'react-router-dom';

const Testimonial = () => {
  return (
    <section id='testimonial-section'>
      {/* Section Spacer */}
      <div className='pb-20 xl:pb-[100px] bg-gradient-to-t from-[#221236] to-[#000000]'>
        {/* Section Container */}
        <div className='global-container'>
          <div className='mb-10 flex flex-wrap items-center justify-between gap-8 md:mb-16 lg:mb-20'>
            {/* Section Content Block */}
            <div className='jos max-w-[480px] lg:max-w-2xl xl:max-w-[840px]'>
              <h2 className='font-spaceGrotesk text-4xl font-medium leading-[1.06] -tracking-[2px] text-white sm:text-[44px] lg:text-[56px] xl:text-[70px]'>
                What people are saying about OrionAI
              </h2>
            </div>
            {/* Section Content Block */}
            <Link
              rel='noopener noreferrer'
              to='#'
              className='button inline-block h-full rounded border-none bg-violet-900 py-3 text-base text-white after:border-none after:bg-black'
            >
              <b>Note :</b> Read All Reviews
            </Link>
          </div>
        </div>
        {/* Section Container */}
        {/* Testimonial List */}
        <div className='horizontal-slide-from-right-to-left global-container align-middle justify-center grid w-[200%] grid-flow-col gap-6'>
          {/* Testimonial Item */}
          <div className='flex w-[415px] flex-col gap-y-8 rounded-[10px] border-[1px] border-colorCodGray p-[30px] text-white'>
            <div className='block'>
              <img
                src='assets/img/th-4/icon-green-rating.svg'
                alt='rating'
                width={146}
                height={25}
              />
            </div>
            <p>
            "I have had the pleasure of using Orbyte AI's innovative AI solutions, and they are truly transformative. The level of automation and precision their tools bring to contract lifecycle management is unparalleled. Orbyte AI's commitment to excellence and innovation is evident in every aspect of their product, making them an invaluable partner in driving efficiency and productivity."
            </p>
            <div className='flex items-center gap-x-4'>
              <div className='h-[60px] w-[60px] overflow-hidden rounded-full'>
                <img
                  src='/public/assets/img/th-4/profilee.png'
                  alt='testimonial-img'
                  width={60}
                  height={60}
                  className='h-full w-full object-cover object-center'
                />
              </div>
              <div className='flex flex-col gap-y-1'>
                <span className='block text-lg font-semibold leading-[1.6]'>
                John Doe
                
                </span>
                <span className='block text-sm font-light leading-[1.4]'>
                CEO, TechCo
                </span>
              </div>
            </div>
          </div>
          {/* Testimonial Item */}
          {/* Testimonial Item */}
          <div className='flex w-[415px] flex-col gap-y-8 rounded-[10px] border-[1px] border-colorCodGray p-[30px] text-white'>
            <div className='block'>
              <img
                src='assets/img/th-4/icon-green-rating.svg'
                alt='rating'
                width={146}
                height={25}
              />
            </div>
            <p>
            "I have had the pleasure of using Orbyte AI's innovative AI solutions, and they are truly transformative. The level of automation and precision their tools bring to contract lifecycle management is unparalleled. Orbyte AI's commitment to excellence and innovation is evident in every aspect of their product, making them an invaluable partner in driving efficiency and productivity."
            </p>
            <div className='flex items-center gap-x-4'>
              <div className='h-[60px] w-[60px] overflow-hidden rounded-full'>
                
              </div>
              <div className='flex flex-col gap-y-1'>
                <span className='block text-lg font-semibold leading-[1.6]'>
                   
                </span>
                <span className='block text-sm font-light leading-[1.4]'>
                  
                </span>
              </div>
            </div>
          </div>
          {/* Testimonial Item */}
          {/* Testimonial Item */}
          <div className='flex w-[415px] flex-col gap-y-8 rounded-[10px] border-[1px] border-colorCodGray p-[30px] text-white'>
            <div className='block'>
              <img
                src='assets/img/th-4/icon-green-rating.svg'
                alt='rating'
                width={146}
                height={25}
              />
            </div>
            <p>
            “OrionAI's automation solutions have streamlined our processes, driving efficiency and cost savings across our organization.”
            </p>
            <div className='flex items-center gap-x-4'>
              <div className='h-[60px] w-[60px] overflow-hidden rounded-full'>
                <img
                  src='/public/assets/img/th-4/profilee.png'
                  alt='testimonial-img'
                  width={60}
                  height={60}
                  className='h-full w-full object-cover object-center'
                />
              </div>
              <div className='flex flex-col gap-y-1'>
                <span className='block text-lg font-semibold leading-[1.6]'>
                Alex Johnson
                
                </span>
                <span className='block text-sm font-light leading-[1.4]'>
                CTO, GlobalTech
                </span>
              </div>
            </div>
          </div>
        </div>
        {/* Testimonial List */}
      </div>
    </section>
  );
};

export default Testimonial;

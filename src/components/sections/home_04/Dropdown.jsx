import { Link } from 'react-router-dom';

const Dropdown = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <section id='hero-section'>
      <div className='relative z-[1] overflow-hidden text-center text-white bg-[#000000] pb-10 pr-5 pl-5 rounded-3xl' >
        {/* Section Spacer */}
        <div className="pb-20 pt-28 md:pb-[265px] md:pt-40 lg:pt-44 xl:pt-[150px] rounded-3xl p-10" >
          {/* Section Container */}
          <div className='bg-gradient-to-t from-[#cfc1f1] via-[#301979] to-[#000000] p-28 rounded-b-[70px]'>
          <ul className='accordion tab-content flex flex-col gap-y-6 m-20' id='process-accordian'>
              <li className={`jos accordion-item rounded-[40px] bg-gradient-to-r from-[#9178F1] via-[#7555EE] to-[#4c33a9] p-4 py-3 text-base text-white border-none transition-shadow shadow-purple-800 duration-300 ease-in-out hover:shadow-purple-800 shadow-md ${activeIndex == 0 ? 'active' : ''}`} data-jos_delay='0.1'>
                <div onClick={() => handleAccordion(0)} className='accordion-header flex items-center justify-between text-xl leading-[1.2] -tracking-[1px] lg:text-3xl'>
                  <div className='-mb-2 ml-10 flex items-center gap-x-6'>
                    <img src='assets/img/th-4/icon-green-process-accordion-1.svg' alt='icon-green-process-accordion' width={36} height={50} className='h-[30px] w-auto' />
                    <h5 className='font-body text-white text-[30px]'>
                      Expertise and Innovation
                    </h5>
                  </div>
                  <div className='accordion-icon is-chevron'>
                    <img src='assets/img/th-4/icon-white-cheveron-down.svg' className=' mt-4' alt='chevron' width={20} height={20} />
                    <img src='assets/img/th-4/icon-white-cheveron-up.svg' alt='chevron' width={20} height={20} className='absolute inset-0' />
                  </div>
                </div>
                  <div className='accordion-content disappear font-body translate-y-3 py-2 text-lg leading-[1.42] lg:text-[16px]'>
                    <p>
                      Our team combines deep industry expertise with advanced AI technology to deliver solutions that enhance efficiency, accuracy, and decision-making. We continuously implement the latest AI advancements to ensure our products lead the market.
                    </p>
                  </div>
              </li>
              <li className={`jos accordion-item rounded-[40px] bg-gradient-to-r from-[#9178F1] via-[#7555EE] to-[#4c33a9] p-4 py-3 text-base text-white border-none transition-shadow shadow-purple-800 duration-300 ease-in-out hover:shadow-purple-800 shadow-md ${activeIndex == 1 ? 'active' : ''}`} data-jos_delay='0.1'>
                <div onClick={() => handleAccordion(1)} className='accordion-header flex items-center justify-between text-xl leading-[1.2] -tracking-[1px] lg:text-3xl'>
                  <div className='mb-3 flex items-center gap-x-6'>
                    <img src='assets/img/th-4/icon-green-process-accordion-2.svg' alt='icon-green-process-accordion' width={36} height={50} className='h-[50px] w-auto' />
                    <h5 className='font-body text-white text-[20px]'>
                      Proven Success
                    </h5>
                  </div>
                  <div className='accordion-icon is-chevron'>
                    <img src='assets/img/th-4/icon-white-cheveron-down.svg' alt='chevron' width={20} height={20} />
                    <img src='assets/img/th-4/icon-white-cheveron-up.svg' alt='chevron' width={20} height={20} className='absolute inset-0' />
                  </div>
                </div>
                <div className='accordion-content font-body disappear translate-y-3 text-lg leading-[1.42] lg:text-[21px]'>
                  <p>
                  With a track record of successful implementations, our clients experience significant efficiency gains, cost-effectiveness, and enhanced compliance through our AI-driven solutions.
                  </p>
                </div>
              </li>
              <li className={`jos accordion-item rounded-[40px] bg-gradient-to-r from-[#9178F1] via-[#7555EE] to-[#4c33a9] p-4 py-3 text-base text-white border-none transition-shadow shadow-purple-800 duration-300 ease-in-out hover:shadow-purple-800 shadow-md ${activeIndex == 2 ? 'active' : ''}`} data-jos_delay='0.1'>
                <div onClick={() => handleAccordion(2)} className='accordion-header flex items-center justify-between text-xl leading-[1.2] -tracking-[1px] lg:text-3xl'>
                  <div className='mb-3 flex items-center gap-x-6'>
                    <img src='assets/img/th-4/icon-green-process-accordion-3.svg' alt='icon-green-process-accordion' width={36} height={50} className='h-[50px] w-auto' />
                    <h5 className='font-body text-white text-[30px]'>
                      Commitment to Excellence : 
                    </h5>
                  </div>
                  <div className='accordion-icon is-chevron'>
                    <img src='assets/img/th-4/icon-white-cheveron-down.svg' alt='chevron' width={20} height={20} />
                    <img src='assets/img/th-4/icon-white-cheveron-up.svg' alt='chevron' width={20} height={20} className='absolute inset-0' />
                  </div>
                </div>
                <div className='accordion-content disappear font-body translate-y-3 text-lg leading-[1.42] lg:text-[21px]'>
                  <p>
                    We are dedicated to delivering exceptional value with high-quality products and unparalleled customer support, consistently exceeding our clients' expectations.
                  </p>
                </div>
              </li>
              </ul>
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

export default Dropdown;

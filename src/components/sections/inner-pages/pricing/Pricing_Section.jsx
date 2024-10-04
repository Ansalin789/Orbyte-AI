import { Link } from 'react-router-dom';
import useTabs from '../../../../hooks/useTabs';

const Pricing_Section = () => {
  const [activeTab, handleTab] = useTabs();
  return (
    <section className='pricing-section'>
      {/* Section Spacer */}
      <div className='pb-20 xl:pb-[150px]'>
        {/* Section Container */}
        <div>
          {/* Section Content Block */}
          <div className='jos mb-10 text-center lg:mb-12'>
            <div className='mx-auto pt-16 heroaa text-white'>
              <h2 className='text-[40px] font-body'>Find a flexible plan that fits your business</h2>
            </div>
          </div>
          {/* Section Content Block */}
          {/* Pricing Block */}
            {/* Tab buttons */}
            {/* Pricing Block */}
            <div className='mt-12 lg:mt-16 xl:mt-20 ml-[500px] justify-center align-middle'>
              {/* Price List */}
              {activeTab === 0 && (
                <ul
                  className='justify-center align-middle w-[380px]'
                >
                  {/* Price Item */}
                  <li
                    className='jos group flex flex-col rounded-[60px] bg-[#cd8ff3] p-[20px] transition-all duration-300 ease-linear justify-center align-middle'
                    data-jos_animation='flip'
                    data-jos_delay={0}
                  >
                    <h3 className='font-body text-[28px] font-medium leading-[1.28] tracking-tighter text-black ml-28'>
                    Pro Plan
                    </h3>
                    <span className='text-[16px] font-body text-black ml-10'>
                    Optimal choice for every business
                    </span>
                    <div className='my-5 h-[1px] w-full bg-[#487275]' />
                    {/* Price Info List */}
                    <ul className='mb-10 flex flex-col gap-y-3'>
                      
                      <li className='flex ml-4 items-center gap-x-3 font-body text-black'>
                        <div className='relative h-[12px] w-[12px]'>
                          <img
                            src='assets/img/th-1/icon-black-badge-check.svg'
                            alt='icon-black-badge-check'
                            width={24}
                            height={24}
                            className='h-full w-full object-cover bg-[#cd8ff3]'
                          />
                          <img
                            src='assets/img/th-1/icon-black-badge-check.svg'
                            alt='icon-black-badge-check'
                            width={24}
                            height={24}
                            className='absolute inset-0 left-0 top-0 h-full w-full object-cover opacity-0 group-hover:opacity-100 bg-[#cd8ff3]'
                          />
                        </div>
                        <p className='text-[15px]'>Based on requirement</p>
                      </li>
                      <li className='flex ml-4 items-center gap-x-3 font-body text-black'>
                        <div className='relative h-[12px] w-[12px]'>
                          <img
                            src='assets/img/th-1/icon-black-badge-check.svg'
                            alt='icon-black-badge-check'
                            width={24}
                            height={24}
                            className='h-full w-full object-cover bg-[#cd8ff3]'
                          />
                          <img
                            src='assets/img/th-1/icon-black-badge-check.svg'
                            alt='icon-black-badge-check'
                            width={24}
                            height={24}
                            className='absolute inset-0 left-0 top-0 h-full w-full object-cover opacity-0 group-hover:opacity-100 bg-[#cd8ff3]'
                          />
                        </div>
                        <p className='text-[15px]'>24x7 support</p>
                      </li>
                      <li className='flex ml-4 items-center gap-x-3 font-body text-black'>
                        <div className='relative h-[12px] w-[12px]'>
                          <img
                            src='assets/img/th-1/icon-black-badge-check.svg'
                            alt='icon-black-badge-check'
                            width={24}
                            height={24}
                            className='h-full w-full object-cover bg-[#cd8ff3]'
                          />
                          <img
                            src='assets/img/th-1/icon-black-badge-check.svg'
                            alt='icon-black-badge-check'
                            width={24}
                            height={24}
                            className='absolute inset-0 left-0 top-0 h-full w-full object-cover opacity-0 group-hover:opacity-100 bg-[#cd8ff3]'
                          />
                        </div>
                        <p className='text-[15px]'>Multilingual assistant</p>
                      </li>
                      <li className='flex ml-4 items-center gap-x-3 font-body text-black'>
                        <div className='relative h-[12px] w-[12px]'>
                          <img
                            src='assets/img/th-1/icon-black-badge-check.svg'
                            alt='icon-black-badge-check'
                            width={24}
                            height={24}
                            className='h-full w-full object-cover bg-[#cd8ff3]'
                          />
                          <img
                            src='assets/img/th-1/icon-black-badge-check.svg'
                            alt='icon-black-badge-check'
                            width={24}
                            height={24}
                            className='absolute inset-0 left-0 top-0 h-full w-full object-cover opacity-0 group-hover:opacity-100 bg-[#cd8ff3]'
                          />
                        </div>
                        <p className='text-[15px]'>Priority Integration support</p>
                      </li>
                      <li className='flex ml-4 items-center gap-x-3 font-body text-black'>
                        <div className='relative h-[12px] w-[12px]'>
                          <img
                            src='assets/img/th-1/icon-black-badge-check.svg'
                            alt='icon-black-badge-check'
                            width={24}
                            height={24}
                            className='h-full w-full object-cover bg-[#cd8ff3]'
                          />
                          <img
                            src='assets/img/th-1/icon-black-badge-check.svg'
                            alt='icon-black-badge-check'
                            width={24}
                            height={24}
                            className='absolute inset-0 left-0 top-0 h-full w-full object-cover opacity-0 group-hover:opacity-100 bg-[#cd8ff3]'
                          />
                        </div>
                        <p className='text-[15px]'>Custom Analytics and Reporting</p>
                      </li>
                    </ul>
                    {/* Price Info List */}
                    <Link
                      to='/'
                      className='font-body text-xl border border-gray-500 mt-auto rounded-[50px] bg-transparent py-2 text-center text-black hover:text-[#4d3457] w-1/2 ml-20'
                    >
                      Get Started
                    </Link>
                  </li>
                  {/* Price Item */}
                </ul>
              )}
              {/* Price List */}

            </div>
            {/* Pricing Block */}
          
        </div>
        {/* Section Container */}
      </div>
      {/* Section Spacer */}
    </section>
  );
};

export default Pricing_Section;

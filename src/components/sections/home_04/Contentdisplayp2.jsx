import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './CSS/ContentDisplay.css';

// import image1 from '../../../../public/assets/img/th-4/pactProSlider/Custom AI (1).png';
import useTabs from '../../../hooks/useTabs';

const ContentDisplayp2 = () => {
    const [activeTab, handleTab] = useTabs();
    const content = [
        { percentage: '70%', heading: 'Reduce time and effort by using AI-driven templates' },
    ];

    // const images = [image1];

    const [currentContentIndex, setCurrentContentIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentContentIndex((prevIndex) => (prevIndex + 1) % content.length);
        }, 3000); // Change content every 3 seconds

        return () => clearInterval(interval);
    }, [content.length]);

    return (
        <div className='bg-black mt-7 mb-32'>
            <div className="global-container p-4 md:p-10">
                <div className="flex flex-col md:flex-row rounded-[20px] md:rounded-[30px] bg-[#280B84]">
                    <div className="flex flex-col md:w-1/2 p-4 md:ml-20 items-center md:items-start">
                        <div className='group flex flex-col rounded-[20px] md:rounded-[30px] bg-[#280B84] p-4 transition-all duration-300 ease-linear'>
                            <h3 className='font-body text-[20px] md:text-[28px] font-medium leading-[1.28] tracking-tighter text-white'>
                                Pro Plan
                            </h3>
                            <span className='text-[16px] md:text-[19px] font-body text-white'>
                                Optimal choice for every business
                            </span>
                            <div className='my-3 md:my-5 h-[1px] w-full bg-[#487275]' />
                            {/* Price Info List */}
                            <ul className='mb-6 md:mb-10 flex flex-col gap-y-2 md:gap-y-3'>
                                <li className='flex items-center gap-x-3 font-body text-white'>
                                    <div className='relative h-[12px] w-[20px]'>
                                        <img
                                            src='assets/img/th-1/icon-white-checkmark-filled.svg'
                                            alt='icon-black-badge-check'
                                            width={24}
                                            height={24}
                                            className='h-full w-full object-cover bg-[#280B84]'
                                        />
                                    </div>
                                    <p className='text-[16px] md:text-[19px]'>Based on requirement</p>
                                </li>
                                <li className='flex items-center gap-x-3 font-body text-white'>
                                    <div className='relative h-[12px] w-[20px]'>
                                        <img
                                            src='assets/img/th-1/icon-white-checkmark-filled.svg'
                                            alt='icon-black-badge-check'
                                            width={24}
                                            height={24}
                                            className='h-full w-full object-cover bg-[#280B84]'
                                        />
                                    </div>
                                    <p className='text-[16px] md:text-[19px]'>24x7 support</p>
                                </li>
                                <li className='flex items-center gap-x-3 font-body text-white'>
                                    <div className='relative h-[12px] w-[20px]'>
                                        <img
                                            src='assets/img/th-1/icon-white-checkmark-filled.svg'
                                            alt='icon-black-badge-check'
                                            width={24}
                                            height={24}
                                            className='h-full w-full object-cover bg-[#280B84]'
                                        />
                                    </div>
                                    <p className='text-[16px] md:text-[19px]'>Multilingual assistant</p>
                                </li>
                                <li className='flex items-center gap-x-3 font-body text-white'>
                                    <div className='relative h-[12px] w-[20px]'>
                                        <img
                                            src='assets/img/th-1/icon-white-checkmark-filled.svg'
                                            alt='icon-black-badge-check'
                                            width={24}
                                            height={24}
                                            className='h-full w-full object-cover bg-[#280B84]'
                                        />
                                    </div>
                                    <p className='text-[16px] md:text-[19px]'>Priority Integration support</p>
                                </li>
                                <li className='flex items-center gap-x-3 font-body text-white'>
                                    <div className='relative h-[12px] w-[20px]'>
                                        <img
                                            src='assets/img/th-1/icon-white-checkmark-filled.svg'
                                            alt='icon-black-badge-check'
                                            width={24}
                                            height={24}
                                            className='h-full w-full object-cover bg-[#280B84]'
                                        />
                                    </div>
                                    <p className='text-[16px] md:text-[19px]'>Custom Analytics and Reporting</p>
                                </li>
                            </ul>
                            <Link
                                to='/'
                                className='font-body text-[16px] md:text-xl border border-gray-500 mt-auto rounded-[50px] bg-transparent py-2 text-center text-white hover:text-[#af6fd4] w-full md:w-1/2'
                            >
                                Get Started
                            </Link>
                        </div>
                    </div>
                    <div className="mt-8 md:mt-10 p-4">
                        <img
                            src='assets/img/th-4/Create (1).png'
                            alt="Content"
                            className="jos w-full align-middle md:w-[650px] object-cover rounded-b-[20px] md:rounded-r-[30px]"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContentDisplayp2;

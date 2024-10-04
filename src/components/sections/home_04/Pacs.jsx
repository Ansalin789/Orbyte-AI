import React from 'react';
import { Link } from 'react-router-dom';
import Service_Section from '../inner-pages/service/service_section/Service_Section';
import { motion } from 'framer-motion';

const Pacs = () => {
  return (
    <section className='p-4 md:p-10 lg:p-20 style-divider mt-10 md:-mt-80'>
      <div className='jos animation rounded-[30px] md:rounded-[100px] p-4 md:p-10 lg:p-20'>
        <h2 className='font-body text-[20px] sm:text-[24px] md:text-[28px] lg:text-[36px] font-medium leading-tight tracking-tight text-center py-6 md:py-10' data-jos_delay='0.2'>
          Our Products
        </h2>

        <div className="flex justify-center items-center w-full">
          <svg viewBox="0 0 500 500" className="w-full max-w-[800px] h-auto">
            <defs>
              <linearGradient id="outerGradient" gradientUnits="userSpaceOnUse">
                <stop offset="0%" stopColor="#5E8AFF" />
                <stop offset="100%" stopColor="#8F7FFF" />
              </linearGradient>
              <linearGradient id="innerGradient" gradientUnits="userSpaceOnUse">
                <stop offset="0%" stopColor="#A2AFFF" />
                <stop offset="100%" stopColor="#C8CFFF" />
              </linearGradient>
              <linearGradient id="centerGradient" gradientUnits="userSpaceOnUse">
                <stop offset="0%" stopColor="#C8CFFF" />
                <stop offset="100%" stopColor="#E2E5FF" />
              </linearGradient>
            </defs>
            <path
              id="outer-arc"
              d="M 50 250 A 200 200 0 0 1 450 250"
              fill="none"
              stroke="#616CFF"
              strokeWidth="40"
            />
            <motion.text
              className="fill-black text-xs"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 1.5 }}
            >
              <textPath href="#outer-arc" startOffset="3%" className="text-[10px] md:text-[12px] lg:text-[10px] font-body">
                Vast Data Mesh Architecture
              </textPath>
            </motion.text>
            <motion.text
              className="fill-black text-xs"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 1.5 }}
            >
              <textPath href="#outer-arc" startOffset="34%" className="text-[10px] md:text-[12px] lg:text-[10px] font-body">
                Document Lifecycle with Knowledge Graph
              </textPath>
            </motion.text>
            <motion.text
              className="fill-black text-xs"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 1.5 }}
            >
              <textPath href="#outer-arc" startOffset="75%" className="text-[10px] md:text-[12px] lg:text-[10px] font-body">
                Industry Expertise & Translation
              </textPath>
            </motion.text>

            <path
              id="inner-arc"
              d="M 100 250 A 150 150 0 0 1 400 250"
              fill="none"
              stroke="#C7A9FE"
              strokeWidth="40"
            />
            <motion.text
              className="fill-black text-xs"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 1.5 }}
            >
              <textPath href="#inner-arc" startOffset="3%" className="text-[10px] md:text-[12px] lg:text-[10px] font-body">
                AI Document Review
              </textPath>
            </motion.text>
            <motion.text
              className="fill-black text-xs"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 1.5 }}
            >
              <textPath href="#inner-arc" startOffset="38%" className="text-[10px] md:text-[12px] lg:text-[10px] font-body">
                Document Optimization
              </textPath>
            </motion.text>
            <motion.text
              className="fill-black text-xs"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 1.5 }}
            >
              <textPath href="#inner-arc" startOffset="75%" className="text-[10px] md:text-[12px] lg:text-[10px] font-body">
                Conversation Search
              </textPath>
            </motion.text>

            <path
              id="center-arc"
              d="M 150 250 A 100 100 0 0 1 350 250"
              fill="none"
              stroke="#AE00BD"
              strokeWidth="57"
            />
            <motion.text
              className="fill-white text-lg"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 3 }}
            >
              <textPath href="#center-arc" startOffset="29%" className="text-[18px] md:text-[20px] lg:text-[16px] font-body">
                Extraction Agents
              </textPath>
            </motion.text>

            <path id="path-data-layer" d="M 60 270 A 150 220 0 0 1 240 80" fill="none" />
            <motion.text
              className="fill-white text-lg font-normal"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 3 }}
            >
              <textPath href="#path-data-layer" startOffset="24%" className="text-[16px] md:text-[18px] lg:text-[16px] font-body">
                Data Layer
              </textPath>
            </motion.text>

            <path id="path-ai-assistant" d="M 180 80 A 250 350 0 0 1 320 81" fill="none" />
            <motion.text
              className="fill-white text-lg font-normal"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 3 }}
            >
              <textPath href="#path-ai-assistant" startOffset="18%" className="text-[16px] md:text-[18px] lg:text-[16px] font-body">
                AI Assistant
              </textPath>
            </motion.text>

            <path id="path-risk-assessment" d="M 375 120 A 170 140 1 0 1 403 300" fill="none" />
            <motion.text
              className="fill-white text-lg font-normal"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 3 }}
            >
              <textPath href="#path-risk-assessment" startOffset="5%" className="text-[16px] md:text-[18px] lg:text-[16px] font-body">
                Risk Assessment
              </textPath>
            </motion.text>

            <path id="path-create" d="M 120 220 A 170 220 0 0 1 240 80" fill="none" />
            <motion.text
              className="fill-white text-lg font-normal"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 3 }}
            >
              <textPath href="#path-create" className="text-[16px] md:text-[18px] lg:text-[16px] font-body">
                Create
              </textPath>
            </motion.text>

            <path id="path-manage" d="M 220 118 A 400 800 0 0 1 320 128" fill="none" />
            <motion.text
              className="fill-white text-lg font-normal"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 3 }}
            >
              <textPath href="#path-manage" className="text-[16px] md:text-[18px] lg:text-[16px] font-body">
                Manage
              </textPath>
            </motion.text>

            <path id="path-store" d="M 340 152 A 250 190 1 0 1 375 200" fill="none" />
            <motion.text
              className="fill-white text-lg font-normal"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 3 }}
            >
              <textPath href="#path-store" startOffset="30%" className="text-[16px] md:text-[18px] lg:text-[16px] font-body">
                Store
              </textPath>
            </motion.text>
          </svg>
        </div>
        <div className="global-container -mt-[100px] md:-mt-[300px] grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          <div className='jos order-1 flex flex-col gap-y-4 rounded-[30px] border p-6 md:p-[30px] text-white transition-all duration-300' data-jos_delay='0.3'>
            <center>
              <img src="assets/img/th-4/2.png" alt="Pact Pro" className="w-[80px] md:w-[120px]" />
            </center>
            {/* <h4 className="text-center font-body heroa">Pact Pro</h4> */}
            <p className='text-center font-body text-sm md:text-[15px]'>
              In the fast-paced world of business, managing contracts & tenders efficiently is crucial. PactPro is your ultimate AI-powered solution for contract lifecycle management, designed to simplify, automate, and enhance your contract processes.
            </p>
            <center>
              <button className='btn'>
                <Link
                  rel='noopener noreferrer'
                  to='/pactpro'
                  className='text-sm md:text-base p-3 inline-block h-full rounded-full border bg-gradient-to-r from-[#9178F1] via-[#7555EE] to-[#4c33a9] py-2 border-none transition-shadow duration-300 ease-in-out hover:shadow-purple-800 shadow-md text-white bg-[#46256e]'
                >
                  Explore Now
                </Link>
              </button>
            </center>
          </div>
          
          <div className='jos order-2 flex flex-col gap-y-4 rounded-[30px] border p-6 md:p-[30px] text-white transition-all duration-300' data-jos_delay='0.6'>
            <center>
              <img src="assets/img/th-4/1.png" alt="Ofizz Pro" className="w-[80px] md:w-[120px]" />
            </center>
            {/* <h4 className="text-center font-body heroa">Ofizz Pro</h4> */}
            <p className='text-center font-body text-sm md:text-[15px]'>
              Meet Ofizz, the AI office assistant designed to support your daily administrative tasks and streamline HR processes. Ofizz is your go-to solution for managing company handbooks, HR policies, and more, enabling you to maintain a well-organized workplace.
            </p>
            <center>
              <button className='btn'>
                <Link
                  rel='noopener noreferrer'
                  to='/ofizzpro'
                  className='text-sm md:text-base p-3 inline-block h-full rounded-full border bg-gradient-to-r from-[#9178F1] via-[#7555EE] to-[#4c33a9] py-2 border-none transition-shadow duration-300 ease-in-out hover:shadow-purple-800 shadow-md text-white bg-[#46256e]'
                >
                  Explore Now
                </Link>
              </button>
            </center>
          </div>
          
          <div className='jos order-3 flex flex-col gap-y-4 rounded-[30px] border p-6 md:p-[30px] text-white transition-all duration-300' data-jos_delay='0.8'>
            <center>
              <img src="assets/img/th-4/Insight pro.png" alt="Insight Pro" className="w-[50px] mt-5 md:w-[90px]" />
            </center>
            {/* <h4 className="text-center font-body heroa">Insight Pro</h4> */}
            <p className='text-center font-body text-sm md:text-[15px] p-4'>
              Insight Pro is your AI-powered data analytics and insights solution. It provides data analysis, predictive modeling, and actionable insights to drive informed decision-making.
            </p>
            <center>
              <button className='btn'>
                <Link
                  rel='noopener noreferrer'
                  to='/'
                  className='text-sm md:text-base p-3 inline-block h-full rounded-full border bg-gradient-to-r from-[#9178F1] via-[#7555EE] to-[#4c33a9] py-2 border-none transition-shadow duration-300 ease-in-out  hover:shadow-purple-800 shadow-md text-white bg-[#46256e]'
                >
                  Coming Soon
                </Link>
              </button>
            </center>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pacs;

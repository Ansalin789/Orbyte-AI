import React from 'react';
import CountUp from 'react-countup';
import { useInView } from 'react-intersection-observer';

const Container = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <div ref={ref} className="grid -mt-10 grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 max-w-[1250px] mx-auto p-5">
      {/* Top Left Card */}
      <div className="bg-[#000] text-white p-8 rounded-3xl flex flex-col justify-center items-center col-span-1 lg:col-span-4">
        {/* Add content here if needed */}
      </div>

      {/* Middle Left Card */}
      <div className="bg-[#1E2024] text-white p-8 rounded-3xl flex flex-col justify-center items-center col-span-1">
        <p className="text-base font-light">up to</p>
        <h3 className="text-5xl font-body">
          {inView && <CountUp start={0} end={30} suffix="%" duration={8} />}
        </h3>
        <p className="text-center text-sm mt-4 font-light">
          Reduction in administrative costs
        </p>
      </div>

      {/* Top Right Card */}
      <div className="bg-[#616CFF] text-white p-8 rounded-3xl flex flex-col justify-center items-center col-span-1 lg:col-span-2">
        <p className="text-base font-light">up to</p>
        <h3 className="text-5xl font-body">
          {inView && <CountUp start={0} end={60} suffix="%" duration={8} />}
        </h3>
        <p className="text-base font-light">Increase in profitability</p>
      </div>

      {/* Middle Right Card */}
      <div className="bg-[#8340FF] text-white p-8 rounded-3xl flex flex-col justify-center items-center col-span-1">
        <p className="text-base font-light">up to</p>
        <h3 className="text-5xl font-body">
          {inView && <CountUp start={0} end={80} suffix="%" duration={8} />}
        </h3>
        <p className="text-base font-light">Boost in productivity</p>
      </div>

      {/* Bottom Left Card */}
      <div className="bg-[#8340FF] text-white p-8 rounded-3xl flex flex-col justify-center items-center col-span-1">
        <p className="text-base font-light">up to</p>
        <h3 className="text-5xl font-body">
          {inView && <CountUp start={0} end={65} suffix="%" duration={8} />}
        </h3>
        <p className="text-base text-center font-light">
          Cost Benefit
        </p>
      </div>

      {/* Bottom Right Card */}
      <div className="bg-[#C3B7F2] text-black p-8 rounded-2xl flex flex-col justify-center items-center col-span-1 lg:col-span-3">
        <p className="text-base font-light">more than</p>
        <h3 className="text-5xl font-body">
          {inView && <CountUp start={0} end={50} suffix="%" duration={8} />}
        </h3>
        <p className="text-base font-light text-center">
          Organizations will support supplier contract negotiations through AI-enabled contract risk analysis and editing tools by 2027.
        </p>
      </div>
    </div>
  );
}

export default Container;

const Content_02a = () => {
  return (
    <div className="grid -mt-10 pb-20 xl:pb-[150px] grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 max-w-[1250px] mx-auto p-5">
      {/* Top Left Card */}
      <div className="bg-[#000] text-white p-8 rounded-3xl flex flex-col justify-center items-center col-span-1 lg:col-span-4">
        {/* Add content here if needed */}
      </div>

      {/* Middle Left Card */}
      <div className="bg-[#1E2024] text-white p-8 rounded-3xl flex flex-col justify-center items-center col-span-1">
        <p className="text-xl font-body">Efficiency</p>
        <p className="text-center text-sm mt-4 font-body">
        Automate routine tasks to save time and reduce costs.
        </p>
      </div>

      {/* Top Right Card */}
      <div className="bg-[#616CFF] text-white p-8 rounded-3xl flex flex-col justify-center items-center col-span-1 lg:col-span-2">
        <p className="text-xl font-body text-white">Accuracy</p>
        <p className="text-center text-sm mt-4 font-body">Ensure compliance and reduce risks with intelligent contract analysis</p>
      </div>

      {/* Middle Right Card */}
      <div className="bg-[#8340FF] text-white p-8 rounded-3xl flex flex-col justify-center items-center col-span-1">
        <p className="text-xl font-body text-white">Visibility</p>
        <p className="text-center text-sm mt-4 font-body">Gain full visibility into contract obligations and performance.</p>
      </div>
    </div>
  );
};

export default Content_02a;

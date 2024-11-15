import { useState } from 'react';
import swal from 'sweetalert';
import Contact_Form from '../contact/contact_section/section_part/Contact_From';

const Content_01a = () => {
  const [showModal, setShowModal] = useState(false);

  const toggleModal = () => {
    setShowModal(!showModal);
  };

  return (
    <section id='content-section-1'>
      {/* Section Spacer */}

        <div className='relative z-[1] overflow-hidden text-center text-white bg-[#000000] pb-10 pr-5 pl-5 rounded-3xl'>
        {/* Section Spacer */}
        <div className="pb-10 pt-20 md:pb-[10px] md:pt-40 lg:pt-44 xl:pt-[110px] rounded-3xl p-5 md:p-10">
          {/* Section Container */}
          <div className='bg-gradient-to-t from-[#84c3eb] via-[#303ac3] to-[#000000] p-10 md:p-20 rounded-b-[30px] md:rounded-b-[70px]'>
            <h1 className='jos font-body mb-6 text-[24px] md:text-[50px] leading-none text-white -top-10'>
            Streamline HR and Operational Efficiency with OfizzPro
            </h1>
            <div className='mx-auto max-w-[90%] md:max-w-[1090px]'>
              <p className='leading-[1.5] md:leading-[1.33] font-body text-[12px] md:text-[15px]'>
              Enhance your organizational efficiency with AI-driven documentation, dynamic knowledge management, and workflow automation. Leverage cutting-edge AI technology to streamline the creation and maintenance of SOPs and HR manuals, ensuring up-to-date and easily accessible information through dynamic knowledge extraction.
              </p>
            </div>
            <div className="pt-16 align-middle text-center">
                  <button
                    className='inline-block h-full bg-gradient-to-r from-[#7980a4] via-[#3e46b7] to-[#261046] p-4 py-3 text-base text-white border-none rounded-full transition-shadow shadow-[#3e46b7] duration-300 ease-in-out hover:shadow-[#3e46b7] shadow-md font-body'
                    onClick={toggleModal}
                  >
                    Request a Demo
                  </button>
                </div>
          </div>
          {/* Section Container */}
        </div>
        {/* Background Gradient */}
        <div className='absolute left-1/2 top-[80%] -z-[1] h-[1280px] w-[1280px] -translate-x-1/2 rounded-full '>
        </div>
      </div>
        {/* Section Spacer */}
        
        {showModal && (
          <div className='fixed inset-0 z-50 flex items-center justify-center bg-black'>
            <div className='relative p-8 rounded-lg'>
              <button
                className='absolute top-2 right-2 text-gray-500'
                onClick={toggleModal}
              >
                &times;
              </button>
              <Contact_Form/>
            </div>
          </div>
        )}
    </section>
  );
};

export default Content_01a;

import { Link } from 'react-router-dom';

const Contact_Info = () => {
  return (
    <div className='order-2 flex flex-col md:order-1 mt-10'>
      {/* Section Content Block */}
      <div className='mb-6 text-left lg:mb-12 xl:mb-6'>
        <div className='mx-auto md:mx-0 md:max-w-none font-body'>
          <h2 className='text-2xl sm:text-3xl md:text-4xl lg:text-[40px] font-body'>
            Get in touch with us directly
          </h2>
        </div>
      </div>
      {/* Section Content Block */}
      <div className='text-base leading-[1.4] sm:text-lg lg:text-[21px]'>
        <p className='mb-6 sm:mb-7 last:mb-0 font-body text-[15px] sm:text-[16px]'>
          We are here to help you! Tell us how we can help &amp; we'll be in
          touch with an expert within the next 24 hours.
        </p>
        <ul className='mt-10 sm:mt-12 flex flex-col gap-y-6 sm:gap-y-8 lg:gap-y-12'>
          <li className='flex flex-col gap-y-3 sm:gap-y-4 text-base sm:text-[18px] lg:text-[21px] font-body'>
            Send us an email:
            <a
              href='mailto:info@orbyte.ai'
              className='text-[16px] sm:text-[18px] font-body leading-loose hover:text-[#ac44d8]'
            >
              info@orbyte.ai
            </a>
          </li>
          <li className='flex flex-col gap-y-3 sm:gap-y-4 text-xl sm:text-2xl font-bold'>
            Follow us:
            <ul className='mt-auto flex gap-x-[10px] sm:gap-x-[15px]'>
              <li>
                <Link
                  rel='noopener noreferrer'
                  target='_blank'
                  to='https://www.linkedin.com/company/orbyteai/'
                  className='group relative flex h-[28px] sm:h-[30px] w-[28px] sm:w-[30px] items-center justify-center rounded-full bg-black'
                >
                  <img
                    src='assets/img/th-1/linkedin-icon-white.svg'
                    alt='linkedin'
                    width={14}
                    height={14}
                    className=''
                  />
                  <img
                    src='assets/img/th-1/linkedin-icon-black.svg'
                    alt='linkedin'
                    width={14}
                    height={14}
                    className='absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 opacity-0'
                  />
                </Link>
              </li>
              <li>
                <Link
                  rel='noopener noreferrer'
                  target='_blank'
                  to='https://x.com/orbyteAI'
                  className='group relative flex h-[28px] sm:h-[30px] w-[28px] sm:w-[30px] items-center justify-center rounded-full bg-black'
                >
                  <img
                    src='assets/img/th-4/xtw.png'
                    alt='twitter'
                    width={35}
                    height={14}
                    className=''
                  />
                  <img
                    src='assets/img/th-4/xtw.png'
                    alt='twitter'
                    width={35}
                    height={14}
                    className='absolute'
                  />
                </Link>
              </li>
              <li>
                <Link
                  rel='noopener noreferrer'
                  target='_blank'
                  to='#'
                  className='group relative flex h-[28px] sm:h-[30px] w-[28px] sm:w-[30px] items-center justify-center rounded-full bg-black'
                >
                  <img
                    src='assets/img/th-4/instaorion-Photorooms.png'
                    alt='instagram'
                    width={33}
                    height={14}
                    className=''
                  />
                  <img
                    src='assets/img/th-4/instaorion-Photorooms.png'
                    alt='instagram'
                    width={33}
                    height={14}
                    className='absolute'
                  />
                </Link>
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Contact_Info;

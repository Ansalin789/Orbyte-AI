import { Link } from 'react-router-dom';

const Cta = () => {
  return (
    <section id='cta-section' className='bg-gradient-to-t from-[#000000] to-[#221236]'>
      <div className='global-container'>
        <div className='rounded-[10px] bg-violet-950 px-5 py-[60px] md:py-20 xl:py-[100px]'>
          {/* Section Content Block */}
          <div className='jos mx-auto max-w-[500px] text-center lg:max-w-2xl xl:max-w-[840px]'>
            <h2 className='font-spaceGrotesk text-4xl font-medium leading-[1.06] -tracking-[2px] text-white sm:text-[44px] lg:text-[56px] xl:text-[70px]'>
              Protect your organization with the power of AI
            </h2>
          </div>
          {/* Section Content Block */}
          <div
            className='jos mt-8 flex flex-wrap justify-center gap-6 md:mt-[50px]'
            data-jos_animation='fade'
          >
            <Link
              rel='noopener noreferrer'
              to='/contact'
              className='button inline-block h-full rounded border-2 border-transparent bg-black py-3 text-base text-white after:border-colorViolet after:bg-violet-900 hover:text-white'
            >
              Get Started Now
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Cta;

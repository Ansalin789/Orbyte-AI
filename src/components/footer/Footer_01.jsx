import { Link } from 'react-router-dom';

const Footer_01 = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <footer className='relative z-[1] -mt-[169px] overflow-hidden rounded-tl-[30px] rounded-tr-[30px] bg-black lg:rounded-tl-[50px] lg:rounded-tr-[50px]'>
      <div className='global-container'>
        <div className=' w-full bg-[#DBD6CF]' />
        <div className='lg grid grid-cols-1 gap-10 py-[60px] md:grid-cols-[1fr_auto_auto] xl:grid-cols-[1fr_auto_auto_1fr] xl:gap-20 xl:py-[100px]'> 
          <div className='flex flex-col gap-y-6'>
            <Link to='/' className='align-middle justify-center text-start -ml-5'>
              <img
                src='assets/img/th-4/orbytlogo.png'
                alt='logo'
                width={160}
                height={50}
              />
            </Link>
            <p className='text-white font-body text-[18px]'>GET IN TOUCH</p>
            <h4 className='text-white font-body'>Let's Discuss Your AI Strategy</h4>
            <p className='text-white font-body'>
            Reach out to us to explore how our AI solutions can transform your business. We'd love to hear from you.
            </p>
          </div>
          <div className='flex flex-col gap-y-6'>
            <h4 className='text-[20px] capitalize text-white font-body'>
              Primary Pages
            </h4>
            <ul className='flex flex-col gap-y-[10px] capitalize font-body'>
              <li>
                <Link
                  to='/'
                  className='transition-all duration-300 ease-linear text-white hover:text-colorViolet '
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to='/'
                  className='transition-all duration-300 ease-linear text-white hover:text-colorViolet'
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  to='/'
                  className='transition-all duration-300 ease-linear text-white hover:text-colorViolet'
                >
                  Services
                </Link>
              </li>
              <li>
                <Link
                  to='/'
                  className='transition-all duration-300 ease-linear text-white hover:text-colorViolet'
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          <div className='flex flex-col gap-y-6'>
            <h4 className='text-[20px] capitalize text-white font-body'>
              Utility pages
            </h4>
            <ul className='flex flex-col gap-y-[10px] capitalize font-body'>
              <li>
                <Link
                  to='/'
                  className='transition-all duration-300 ease-linear text-white hover:text-colorViolet'
                >
                  Signup
                </Link>
              </li>
              <li>
                <Link
                  to='/'
                  className='transition-all duration-300 ease-linear text-white hover:text-colorViolet'
                >
                  Login
                </Link>
              </li>
            </ul>
          </div>
          <div className='flex flex-col gap-y-6'>
            <h4 className='text-[20px] capitalize text-white font-body'>
              Subscribe to our newsletter
            </h4>
            <form onSubmit={handleSubmit}>
              <div className='relative h-[50px] max-w-[300px]'>
                <input
                  type='email'
                  name='newsletter-email'
                  id='newsletter-email'
                  placeholder='Enter your email'
                  className='p-y-[18px] h-full w-full rounded-[50px] border-[1px] border-black px-[24px] pr-20 outline-none'
                  required=''
                />
                <button
                  type='submit'
                  className='absolute right-[5px] top-[50%] inline-block h-10 -translate-y-[50%] rounded-[50px] bg-black px-6 transition-all hover:bg-violet-900'
                >
                  <img
                    src='assets/img/th-1/arrow-right-large.svg'
                    alt='newsletter'
                  />
                </button>
              </div>
            </form>
          </div>
        </div>
        <div className='h-[1px] w-full bg-[#340d35]' />
            <div className='py-9 text-center font-body text-white'>
              <p>
              🚀 by OrionAI Business Intelligence Pvt Ltd. All rights reserved.
              </p>
            </div>
      </div>
    </footer>
  );
};

export default Footer_01;

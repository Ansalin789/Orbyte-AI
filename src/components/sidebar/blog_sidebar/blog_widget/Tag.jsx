import { Link } from 'react-router-dom';

const Tag = () => {
  return (
    <div className='rounded-[10px] border border-[#EAEDF0] p-8'>
      <div className='relative mb-[30px] inline-block pb-[10px] text-lg font-normal after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-full after:bg-black'>
      Tags
      </div>
      {/* Blog Tags Post List */}
      <ul className='flex flex-wrap gap-x-2 gap-y-4'>
        <li>
          <Link
            to='#'
            className='inline-block rounded-[55px] bg-black bg-opacity-5 px-2 py-1 hover:text-white'
          >
            #AI
          </Link>
        </li>
        <li>
          <Link
            to='#'
            className='inline-block rounded-[55px] bg-black bg-opacity-5 px-2 py-1 hover:text-white'
          >
            #Drafting
          </Link>
        </li>
        <li>
          <Link
            to='#'
            className='inline-block rounded-[55px] bg-black bg-opacity-5 px-2 py-1 hover:text-white'
          >
            #Secure
          </Link>
        </li>
        <li>
          <Link
            to='#'
            className='inline-block rounded-[55px] bg-black bg-opacity-5 px-2  py-1 hover:text-white'
          >
            #Technology
          </Link>
        </li>
        <li>
          <Link
            to='#'
            className='inline-block rounded-[55px] bg-black bg-opacity-5 px-2 py-1 hover:text-white'
          >
            #PDF
          </Link>
        </li>
      </ul>
      {/* Blog Tags Post List */}
    </div>
  );
};

export default Tag;

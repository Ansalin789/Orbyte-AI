import { Link } from 'react-router-dom';
import { SlCalender } from "react-icons/sl";


const Post = () => {
  return (
    <div className='rounded-[10px] border border-[#EAEDF0] p-8'>
      <div className='relative mb-[30px] inline-block pb-[10px] text-lg font-normal after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-full after:bg-black'>
        Recent Posts
      </div>
      {/* Blog Recent Post List */}
      <ul className='flex flex-col gap-y-6'>
        <li className='group flex flex-col items-center gap-x-4 gap-y-4 sm:flex-row'>
          <Link
            to='#'
            className='inline-block h-[150px] w-full overflow-hidden rounded-[5px] sm:h-[100px] sm:w-[150px]'
          >
            <img
              src='assets/img/th-1/blog-main-3.jpg'
              alt='blog-recent-img-1'
              width={150}
              height={130}
              className='h-full w-full scale-100 object-cover transition-all duration-300 group-hover:scale-105'
            />
          </Link>
          <div className='flex w-full flex-col gap-y-3 sm:w-auto sm:flex-1'>
            <Link
              to='#'
              className='flex items-center gap-[2px] text-sm'
            >
              <div className='h-6 w-6'>
              <SlCalender />
              </div>
              August 25, 2024
            </Link>
            <Link
              to='#'
              className='text-base font-body'
            >
              The Role of AI in Streamlining Contract...
            </Link>
          </div>
        </li>
        <li className='group flex flex-col items-center gap-x-4 gap-y-4 sm:flex-row'>
          <Link
            to='#'
            className='inline-block h-[150px] w-full overflow-hidden rounded-[5px] sm:h-[100px] sm:w-[150px]'
          >
            <img
              src='assets/img/th-1/blog-main-4.jpg'
              alt='blog-recent-img-3'
              width={150}
              height={130}
              className='h-full w-full scale-100 object-cover transition-all duration-300 group-hover:scale-105'
            />
          </Link>
          <div className='flex w-full flex-col gap-y-3 sm:w-auto sm:flex-1'>
            <Link
              to='#'
              className='flex items-center gap-[10px] text-sm'
            >
              <div className='h-6 w-6'>
              <SlCalender />
              </div>
              September 03, 2024
            </Link>
            <Link
              to='#'
              className='text-base font-body '
            >
              Phrase gives AI-generated content...
            </Link>
          </div>
        </li>
      </ul>
      {/* Blog Recent Post List */}
    </div>
  );
};

export default Post;

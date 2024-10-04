import { Link } from 'react-router-dom';
import Team_Social from './Member_Social';

// eslint-disable-next-line react/prop-types
const Member = ({
  img,
  name,
  info,
}) => {
  return (
    <>
    <li
      className='jos design'
      data-jos_animation='flip'
      data-jos_delay='0.1'
    >
      <div className='size'>
        <img
          src={img}
          alt='team-member-img-1'
          width={100}
          height={100}
          className='object-cover rounded-xl'
        />
      </div>
      <div className='content mt-12'>
        <br />
        <span className='font-body text-[16px] -mt-20'>{name}</span>
        <span className='font-body text-[14px] -ml-8 ss'>{info}</span>
        <div className='mt-3 flex flex-col justify-between gap-3 xxl:flex-row xxl:flex-wrap xxl:items-center'>
          
          <div>
            <img src="assets/img/th-4/ps.png" width={30} className='mt-10'  alt="" />
          </div>
          <div>
            <img src="assets/img/th-4/india.png" width={30} className='mt-10'  alt="" />
          </div>
          <div>
            <img src="assets/img/th-4/PikPng.com_reuters-logo-png_4714437.png"  width={30} className='mt-10'  alt="" />
          </div>
        </div>
      </div>
    </li>
    </>
    
  );
};

export default Member;

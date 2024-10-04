// eslint-disable-next-line react/prop-types
const Testimonial = ({ review, linkedin, name, info, rating }) => {
  return (
    <div
      className='jos flex flex-col gap-y-2 text-sm md:text-[13px] rounded-[20px] md:rounded-[30px] border bg-[#E8DDFF] p-3 md:p-[20px] text-black'
      data-jos_animation='fade-left'
      data-jos_delay='0.1'
    >
      {/* <div className='block'>
        <img src={rating} alt='rating' width={146} height={25} />
      </div> */}

      <div className='h-[40px] w-[40px] md:h-[60px] md:w-[60px] overflow-hidden rounded-full flex-shrink-0 mx-auto'>
        <img
          src="assets/img/th-4/icon-quote.svg"
          alt='testimonial-img'
          className='h-full w-full object-cover object-center'
        />
      </div>

      <p className="font-body text-[11px] md:text-[13px] leading-[1.6] text-center">
        {review}
      </p>

      <div className='flex flex-col items-center gap-y-2'>
        <span className='text-sm md:text-lg font-semibold leading-[1.6] text-black'>
          {name}
        </span>
        <span className='text-xs md:text-sm font-body leading-[1.4]'>{info}</span>
        {/* <span className='block text-xs md:text-sm font-light leading-[1.4]'>{linkedin}</span> */}
      </div>
    </div>
  );
};

export default Testimonial;

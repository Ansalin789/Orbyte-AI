import React from 'react'
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const Carousel = () => {
    const settings = {
        dots: true, // Show dots for navigation
        infinite: true, // Infinite scrolling
        speed: 500, // Speed of the transition
        slidesToShow: 3, // Number of slides to show at once
        slidesToScroll: 1, // Number of slides to scroll at once
        autoplay: true, // Enable automatic sliding
        autoplaySpeed: 1500, // Time interval between slides (in milliseconds)
        arrows: false,
      };
    
      return (
        <div className='global-container'>
          <h2 className='font-body text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-medium leading-[1.06] tracking-tight text-white text-center py-20' data-jos_delay='0.2'>
            Our Clients
        </h2>
        <div className="slider-container">
          <Slider {...settings}>
            <div>
              <img src="/public/assets/img/th-4/l1.png" alt="Client 1" />
            </div>
            <div>
              <img src="/public/assets/img/th-4/l2.png" alt="Client 2" />
            </div>
            <div>
              <img src="/public/assets/img/th-4/l3.png" alt="Client 3" />
            </div>
            <div>
              <img src="/public/assets/img/th-4/l4.png" alt="Client 4" />
            </div>
            <div>
              <img src="/public/assets/img/th-4/l5.png" alt="Client 5" />
            </div>
          </Slider>
        </div>
        </div>
      );
    };

export default Carousel
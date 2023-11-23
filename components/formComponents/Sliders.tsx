import Image from 'next/image';
import React from 'react';
import logo2 from '@/public/svg/logo2.svg';
import bgImage from '@/public/svg/formBg.svg';
import Slider from 'react-slick';
// import '@/styles/slider.css';

const Sliders = () => {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };

  return (
    <div className='formBg h-screen w-full' style={{ backgroundImage: `url(${bgImage.src})`, objectFit: "cover", objectPosition: "center", backgroundRepeat: "no-repeat" }}>
      <div>
        <div className='flex items-center gap-10'>
          <Image src={logo2} alt='logo' width={50} height={50} />
          <p className='text-white'>GAZET</p></div>
          <div className='sliderContainer'>
<Slider>
  
</Slider>
          </div>
      </div>
    </div>
  );
};
export default Sliders;
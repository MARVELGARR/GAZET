import Image from 'next/image';
import React from 'react';
import logo2 from '@/public/svg/logo2.svg';
import bgImage from '@/public/svg/formBg.svg';
import Slider from 'react-slick';
import '@/app/globals.css';
import { sliderData } from '@/data/data';
// import 'slick-carousel/slick/slick.css';
// import "slick-carousel/slick/slick-theme.css";

const Sliders = () => {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3
  };

  return (
    <div className='formBg overflow-hidden relative hidden md:flex justify-center' style={{ backgroundImage: `url(${bgImage.src})`, height: "100vh", width: "45%", objectFit: "cover", objectPosition: "center", backgroundRepeat: "no-repeat" }}>
      <div className='px-3'>
        <div className='flex items-center gap-10 my-10'>
          <Image src={logo2} alt='logo' width={50} height={50} />
          <p className='text-white text-lg font-bold'>GAZET</p>
        </div>
        <div className='w-full flex justify-center transform translate-y-1/2'>
          <div className='bg-white bg-opacity-50 backdrop-blur-lg rounded-xl px-5 py-10 w-full'>
            <h1 className='text-white font-semibold text-3xl text-center mb-10'>Your  business imagination is our piority</h1>
            <div>
              <p className='text-bold text-white'>Ifeoluwapo Ruth</p>
              <p className='text-white'>Product Designer - Payment, Gazet</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Sliders;
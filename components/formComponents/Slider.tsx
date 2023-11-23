import Image from 'next/image';
import React from 'react';
import logo from '@/public/svg/logo.svg';
import bgImage from '@/public/svg/formBg.svg';
// import '@/styles/slider.css';

const Slider = () => {
  return (
    <div style={{ backgroundImage: `url(${bgImage})` }} className='formBg h-screen w-full'>
      <Image src={logo} alt="Logo" width={100} height={100} />
    </div>
  );
};

export default Slider;

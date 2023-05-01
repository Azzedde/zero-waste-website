import React from 'react';
import {

  FaFacebookSquare,

  FaInstagram,
  FaTwitterSquare,
  FaYoutubeSquare,
} from 'react-icons/fa';

const Footer = () => {
  return (
    <section className='flex max-w-[1240px] mx-auto py-16 px-4 text-[#03af59] justify-center items-center' id='contact'>
      <div>
        <h1 className='w-full text-5xl font-bold self-center text-black '>Zero Waste.</h1>
        <p className='py-4 text-3xl font-bold text-center'>Follow Us</p>
        <div className='flex justify-between md:w-[75%] my-6 ml-5 '>
            <FaFacebookSquare size={30} />
            <FaInstagram size={30} />
            <FaTwitterSquare size={30} />
            <FaYoutubeSquare size={30} />
        </div>
      </div>

    </section>
  );
};

export default Footer;
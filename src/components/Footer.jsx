import React from 'react';
import {

  FaFacebookSquare,

  FaInstagram,
  FaTwitterSquare,
  FaYoutubeSquare,
} from 'react-icons/fa';
import {HashLink as Link} from 'react-router-hash-link'

const Footer = () => {
  return (
    <section className='flex max-w-[1240px] mx-auto py-16 px-4 text-[#03af59] justify-center items-center' id='contact'>
      <div>
        <h1 className='w-full text-5xl font-bold self-center text-black '>Zero Waste.</h1>
        <p className='py-4 text-3xl font-bold text-center'>Follow Us</p>
        <div className='flex justify-between md:w-[75%] my-6 ml-5 '>
            <FaFacebookSquare size={30} />
           <Link to='https://www.instagram.com/zer0.w4ste/'><FaInstagram size={30} /></Link> 
           <Link to='https://twitter.com/Zer0W4ste0' > <FaTwitterSquare size={30} /></Link>
           <Link to='https://www.youtube.com/channel/UCZmqHlJYmgs4wjBpWW1bcRg'> <FaYoutubeSquare size={30} /> </Link>
        </div>
      </div>

    </section>
  );
};

export default Footer;
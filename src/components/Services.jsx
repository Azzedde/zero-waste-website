import React from 'react';
import Single from '../images/Intermediate.png'
import Double from '../images/gain.png'
import Triple from '../images/earth.png'

const Services = () => {
  return (
    <section className='w-full py-[5rem] px-4 bg-white' id='services'>
    
        



      <div className='max-w-[1240px] mx-auto grid md:grid-cols-3 gap-8'>
          <div className='w-full shadow-xl flex flex-col p-4 my-3 rounded-lg hover:scale-105 duration-300'>
              <img className='w-20 mx-auto mt-[-3rem] bg-white' src={Single} alt="/" />
              <h2 className='text-2xl font-bold text-center py-8'>We are a bridge</h2>
              <p className='font-bold text-justify'>We connect sellers with buyers to reduce food waste and promote sustainability. This benefits businesses and offers a chance for buyers to purchase affordable high-quality food that would otherwise go to waste.</p>

          </div>
          <div className='w-full shadow-xl bg-gray-100 flex flex-col p-4 md:my-0 my-8 rounded-lg hover:scale-105 duration-300'>
              <img className='w-20 mx-auto mt-[-3rem] bg-transparent' src={Double} alt="/" />
              <h2 className='text-2xl font-bold text-center py-8'>Gain Profit</h2>
                <p className='font-bold text-justify' >Zero Waste helps users earn money by selling recyclable materials and unwanted items like clothes, books, and home furnishings. We connect users with companies that want to recycle these materials, giving them a new life while reducing waste and earning profits.</p>
              
          </div>
          <div className='w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300'>
              <img className='w-20 mx-auto mt-[-3rem] bg-white' src={Triple} alt="/" />
              <h2 className='text-2xl font-bold text-center py-8'>We protect Earth</h2>
                <p className='font-bold text-justify ' >We promote sustainable farming by providing expired products and wastes to farmers for high-quality compost. This enriches soil and reduces the need for chemical fertilizers, benefiting the environment. Together, we support a healthier and more sustainable ecosystem through farming and recycling.</p>
          </div>
      </div>
    </section>
  );
};

export default Services;
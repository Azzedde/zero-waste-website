import React from "react";
import Eco from '../images/eco-friend.jpg'
import AnchorLink from "react-anchor-link-smooth-scroll";
const About = () => {
    return(

        <section className="w-full bg-[#03af59] py-16 px-4" id="about">
            <div className='max-w-[1240px] mx-auto grid md:grid-cols-2'>
            
        <div className='flex flex-col justify-center py-4 m-4 p-4 my-4'>
          
          <h1 className='md:text-5xl sm:text-3xl text-2xl font-bold py-2 text-white'>Zero Waste </h1>
          
          <div className="left-1/3 w-1/2 border-b-2 border-solid"></div>
          <br />
          <br />
          <p className="text-white text-3xl"> Protect Environment, Get rid of your Wastes and Gain Profit !</p>
          <br />
          <br />
          <AnchorLink href="#services"> <button className='bg-[#c6d8e7] self-center text-[#03af59] w-[200px] rounded-md font-medium my-6 mx-auto md:mx-0 py-3'>Read More</button> </AnchorLink>
        </div>
        <img className='w-[500px] mx-auto my-4' src={Eco} alt='/' />
            </div>



        </section>
    )



};





export default About;
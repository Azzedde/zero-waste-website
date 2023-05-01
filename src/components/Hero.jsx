import React from 'react'
import Typed from 'react-typed'

import AnchorLink from "react-anchor-link-smooth-scroll";

const Hero = () => {
    return(
        <section className='text-black' id='home'>
            <div className='max-w[800px] mt-[-96px] w-full h-screen mx-auto text-center flex flex-col justify-center '>
            <p className= 'text-xl  text-[#03af59] font-bold p-3 '>Waste not, want not</p>
            <h1 className='md:text-7xl sm:txt-6xl text-4xl font-bold md:py-6  '>Zero Waste</h1>
            <div className='flex justify-center items-center '>
                <p className='md:text-3xl sm:text-2xl text-xl font-bold'> Efficient and Reliable for </p>
                <Typed className='md:text-3xl sm:text-2xl text-xl font-bold pl-2 text-gray-500' strings={['Dealing with your wastes', 'Finding you good deals','Protecting Earth']} typeSpeed={60} backSpeed={60} loop />
                
            </div>
            
           <AnchorLink href='#about' > <button className='bg-[#03af59] w-[200px] rounded-md font-medium my-6 mx-auto py-3 text-white' href='#' >Discover!</button> </AnchorLink>
            </div>

        </section>
    )
}

export default Hero
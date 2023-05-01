import React from "react";
import Waste from '../images/waste.jpg'

import {HashLink as Link} from 'react-router-hash-link'
const Concerns = () => {
    return(

        <section className="w-full bg-[#03af59] py-16 px-4" id="concerns">
            <div className='max-w-[1240px] mx-auto grid md:grid-cols-2'>
            <img className='w-[500px] mx-auto my-4' src={Waste} alt='/' />
        <div className='flex flex-col justify-center'>
          
          <h1 className='md:text-4xl sm:text-3xl text-2xl font-bold py-2 text-white'>We fight against Waste </h1>
          <p className="text-white text-justify">
          One of the biggest concerns with food waste is the environmental impact. As food decomposes in landfills, it releases methane, a potent greenhouse gas that contributes to climate change. According to the Food and Agriculture Organization of the United Nations (FAO), if food waste were a country, it would be the third-largest emitter of greenhouse gases after China and the United States.
          </p>
          <p className="text-white text-justify">Our objective is to fight food waste and promote sustainable practices that benefit both the environment and society. We believe that everyone has a role to play in reducing food waste, from individuals to businesses and governments
</p>
          <Link to="https://www.epa.gov/report-environment/wastes" ><button className='bg-[#c6d8e7] text-[#03af59] w-[200px] rounded-md font-medium my-6 mx-auto md:mx-0 py-3'>Read More</button></Link>
        </div>

            </div>



        </section>
    )



};





export default Concerns;
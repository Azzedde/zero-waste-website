import React from "react";
import Recycle from '../images/recycle.jpg'


const Concerns = () => {
    return(

        <section className="w-full bg-[#03af59] py-2 px-4" id="concerns">
            <div className='max-w-[1240px] mx-auto grid md:grid-cols-2'>
            
        <div className='flex flex-col justify-center'>
          
          <h1 className='md:text-4xl sm:text-3xl text-2xl font-bold py-2 text-white'>We Promote Recycling </h1>
          <p className="text-white text-justify">
          Recycling is an essential activity that helps to preserve the environment by reducing the amount of waste that goes to landfills and incinerators. Recycling also conserves natural resources, reduces energy consumption, and reduces greenhouse gas emissions.          </p>
          <p className="text-white text-justify">By recycling materials such as paper, plastics, metals, and glass, we can reduce the need to extract raw materials from the earth, which can lead to deforestation, habitat destruction, and soil erosion. Recycling also conserves energy, as it takes less energy to recycle materials than it does to manufacture new ones from scratch.
</p>
          
        </div>
        <img className='w-[500px] mx-auto my-4' src={Recycle} alt='/' />
            </div>



        </section>
    )



};





export default Concerns;
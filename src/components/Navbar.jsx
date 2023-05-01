import React, {useState} from "react";
import {AiOutlineClose,AiOutlineMenu} from "react-icons/ai";
import Logo from '../images/logo.png'
import AnchorLink from "react-anchor-link-smooth-scroll";
const Navbar = () => {
    const [nav, setNav] = useState(false);
    const handleNav = () => {
        setNav(!nav);
    };

    return (
        <div className="flex justify-between items-center h-24 max-v-[1240px] mx-auto px-4 text-black">
           <img className='w-[200px] mx-auto my-4 ml-3' src={Logo} alt='/' />
            <ul className="hidden md:flex ">
                <AnchorLink href="#home"><li className="text-xl p-4  font-bold">Home</li></AnchorLink>
                <AnchorLink href="#about"><li className="text-xl p-4  font-bold">About</li></AnchorLink>
                <AnchorLink href="#services"><li className="text-xl p-4  font-bold">Services</li></AnchorLink>
                <AnchorLink href="#concerns"><li className="text-xl p-4  font-bold">Concerns</li></AnchorLink>
                <AnchorLink href="#contact"><li className="text-xl p-4  font-bold">Contact</li></AnchorLink>
            </ul>
            <div onClick={handleNav} className="block md:hidden">
                {nav ? <AiOutlineClose size={20}/> : <AiOutlineMenu className="text-3xl "/>}
                
            </div>
            <ul className={nav ? 'fixed left-0 top-0 w-[60%] h-full border-r border-r-gray-500 bg-[#c6d8e7] ease-in-out duration-500' : 'ease-in-out duration-500 fixed left-[-100%]'}>
        <h1 className='w-full text-3xl font-bold text-[#03af59] m-4'>Zero Waste</h1>
        <AnchorLink href="#home"><li className="text-xl p-4  font-bold border-b border-gray-600">Home</li></AnchorLink>
                <AnchorLink href="#about"><li className="text-xl p-4  font-bold border-b border-gray-600">About</li></AnchorLink>
                <AnchorLink href="#services"><li className="text-xl p-4  font-bold border-b border-gray-600">Services</li></AnchorLink>
                <AnchorLink href="#concerns"><li className="text-xl p-4  font-bold border-b border-gray-600">Concerns</li></AnchorLink>
                <AnchorLink href="#contact"><li className="text-xl p-4  font-bold border-b border-gray-600">Contact</li></AnchorLink>
          
      </ul>
            
        </div>
    );
};
export default Navbar;
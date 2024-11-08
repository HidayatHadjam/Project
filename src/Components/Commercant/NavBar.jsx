
import GrosMarket from "../../Images/GrosMarket.svg"
import React, { useState } from "react";
import { AiOutlineHeart, AiOutlineShoppingCart,AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';
const NavBar = () => {
    const [activeLink, setActiveLink] = useState(null);

    const handleClick = (index) => {
    setActiveLink(index);
  };
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

    return ( 

<div className="flex justify-between bg-[#243645] items-center h-19 mx-auto px-4 text-white">
      <img src={GrosMarket} className="w-25 h-14 pl-6 pt-4 pb-4" alt="Logo GrosMarket" />
      <ul className="hidden md:flex pt-4 pb-4">
        <a href="/" className='hover:underline' onClick={() => handleClick(0)}>
          <li className={`pl-8 ${activeLink === 0 ?  'text-[#FFC300]' : 'text-white'}`}>
            Acceuil
          </li>
        </a>
        <a href="/services" className='hover:underline' onClick={() => handleClick(1)}>
          <li className={`pl-8 ${activeLink === 1 ? 'text-[#FFC300]' : 'text-white'}`}>
            Services
          </li>
        </a>
        <a href="/se connecter" className='hover:underline' onClick={() => handleClick(2)}>
          <li className={`pl-8 ${activeLink === 2 ? 'text-[#FFC300]' : 'text-white'}`}>
            Se connecter
          </li>
        </a>
 
        <a href="/favoris"  onClick={() => handleClick(3)} ><li className={`pl-8 pr-6 ${activeLink === 3? 'text-[#FFC300]' : 'text-white'}`}>
        <AiOutlineHeart className="w-6 h-7" />
            </li></a>
        <a href="/panier"  onClick={() => handleClick(4)}><li className={` pr-6 ${activeLink === 4? 'text-[#FFC300]' : 'text-white'}`}> <AiOutlineShoppingCart className="w-6 h-7" /></li></a>
      </ul>
      
      <div onClick={handleNav} className='block md:hidden'>
          {nav ? <AiOutlineClose size={20}/> : <AiOutlineMenu size={20} />}
      </div>
   <ul className={nav ? 'bg-[#243645] z-19 fixed items-center justify-center z-10 left-0 top-0 w-[47%] h-full  ease-in-out duration-400' : 'ease-in-out duration-400 fixed left-[-100%]'}>
<a href="/" className='hover:underline'><li className="pt-10 pl-8 pb-6">Acceuil</li></a>
<a href="/services" className='hover:underline' ><li className="pl-8 pb-8">Services</li></a>
<a href="/se connecter" className='hover:underline'><li className="pl-8 pb-8">Se connecter</li></a>
<a href="/favoris"><li className="pl-8 pb-8"><AiOutlineHeart  className="w-6 h-7" /></li></a>
<a href="/panier"><li className="pl-8 pb-8"><AiOutlineShoppingCart  className="w-6 h-7" /></li></a>   </ul>






</div>

     );
}
 
export default NavBar;
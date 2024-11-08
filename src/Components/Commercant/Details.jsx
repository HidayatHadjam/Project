import React from 'react';
import { useLocation } from 'react-router-dom';
import profile from '../../Images/profile.svg';
import { FaStar } from 'react-icons/fa';
import { AiOutlineHeart } from 'react-icons/ai';
import Navbar from "./NavBar";
import Footer from "./Footer";

function Details() {
  const location = useLocation();
  const { product } = location.state || {};

  return (
<div> <Navbar/>
    <div className='px-6 mb-12 mt-10 py-6 max-w-4xl mx-auto'>
      <div className="flex flex-col md:flex-row gap-16">
        {/* Images Section */}
        <div className="md:w-1/2 flex flex-col">
          <div className="flex mb-4 items-center">
            <img src={profile} className='w-12 h-12 rounded-full shadow-md' alt="Profile" />
            <span className='text-xl font-semibold text-gray-800 pl-3'>Hadjam Hidayat</span>
          </div>
          {/* Grande image */}
          <img
            src={product.image} // Grande image
            className="w-full h-[250px] object-cover rounded-lg shadow-lg"
            alt="Main product image"
          />
     
        </div>

        {/* Product Info Section */}
        <div className="md:w-1/2 flex flex-col gap-4">
          <h1 className='text-2xl font-bold text-gray-900'>{product.title}</h1>
          <div className="rating flex items-center space-x-1 text-[#FFC300]">
            {[...Array(5)].map((_, index) => (
              <FaStar key={index} />
            ))}
          </div>
          <h2 className='text-xl font-semibold text-gray-700'>{product.price} DA</h2>
          <div className="border-t border-gray-300 my-4"></div>
          <p className='text-gray-600'>{product.description}</p>
          <div className="flex gap-4 mt-4">
            <button className='text-black border border-black-100 rounded-md px-4 py-2 flex items-center gap-2 shadow-md hover:bg-[#FFC300] transition'>
              <AiOutlineHeart size={20} />
              Ajouter aux favoris
            </button>
            <button className='bg-[#FFC300] text-white rounded-md px-4 py-2 flex items-center gap-2 shadow-md hover:transition'>
              Ajouter au panier
            </button>
          </div>
        </div>
      </div>
    </div>
    <Footer/></div>
  );
}

export default Details;
import React from 'react';
import Marketing from '../../Images/Marketing.svg';
import Shooting from '../../Images/Shooting.svg';
import Consuling from '../../Images/Consulting.svg';
import Navbar from "./NavBar";
import Footer from "./Footer";

import {Link} from "react-router-dom";

function Services() {
  return (
    <div className="">
        <Navbar/>
      {/* Container for all services */}
      <div className="w-[80%] mt-10 mx-auto mb-10 space-y-12">
        
        {/* Marketing Service */}
        <div className="flex flex-col md:flex-row items-center">
          <div className="flex-1 p-4 md:w-1/2 text-center md:text-left">
            <h1 className="font-bold text-2xl mb-2">Marketing</h1>
            <p className="mb-4">
              Augmentez votre visibilité avec nos stratégies de marketing personnalisées. Notre équipe de spécialistes travaille à concevoir des campagnes efficaces et adaptées à vos besoins, tout en maximisant votre retour sur investissement.
            </p>
            <Link to="/services/form" >   <button className="bg-white text-[#FFC300] rounded-xl h-8 px-4 border-2 border-[#FFC300]">
              Réserver
            </button> </Link >
          </div>
          <div className="flex-1 p-4 w-[80%]">
            <img src={Marketing} alt="marketing" className=" w-full pl-20 md:w-[70%] h-62 pl-20 object-cover" />
          </div>
        </div>

        {/* Shooting Service */}
        <div className="flex flex-col md:flex-row items-center">
          <div className="flex-1 p-4 md:w-1/2">
            <img src={Shooting} alt="shooting" className="w-full pl-0  md:w-[60%] h-70 pl-30 object-cover" />
          </div>
          <div className="flex-1 p-4 md:w-1/2 text-center md:text-left">
            <h1 className="font-bold text-2xl mb-2">Tournage Professionnel</h1>
            <p className="mb-4">
              Capturez l'essence de vos produits grâce à notre service de tournage professionnel. Nous créons des visuels de haute qualité qui mettent en valeur vos produits sous leur meilleur jour, renforçant ainsi votre image de marque et attirant plus de clients potentiels.
            </p>
            <Link to="/services/form" >   <button className="bg-white text-[#FFC300] rounded-xl h-8 px-4 border-2 border-[#FFC300]">
              Réserver
            </button> </Link >
          </div>

        </div>

        {/* Consulting Service */}
        <div className="flex flex-col md:flex-row items-center">
          <div className="flex-1 p-4 md:w-1/2 text-center md:text-left">
            <h1 className="font-bold text-2xl mb-2">Conseil</h1>
            <p className="mb-4">
              Obtenez des conseils d'experts pour optimiser vos opérations commerciales. Notre équipe de consultants expérimentés vous accompagne dans l'élaboration de stratégies efficaces, tout en restant compétitif sur le marché.
            </p>
            <Link to="/services/form" >  <button className="bg-white text-[#FFC300] rounded-xl h-8 px-4 border-2 border-[#FFC300]">
              Réserver
            </button></Link >
          </div>
          <div className="flex-1 p-4 md:w-1/2">
            <img src={Consuling} alt="consulting" className="w-full pl-0  md:w-[65%] pl-20 pb-5 h-70 object-cover" />
          </div>
        </div>

      </div>
      <Footer/>
    </div>
  );
}

export default Services;

import React from "react";
import GrosMaket from "../../Images/GrosMarket.svg";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaPhoneAlt, FaEnvelope, FaMapMarked } from 'react-icons/fa';
import { AiOutlineEnvironment } from "react-icons/ai";
import { AiOutlineMail, AiOutlinePhone } from 'react-icons/ai';
const Footer = () => {
    return (
        <div className="bg-[#243645] text-white py-8 md:px-4 sm: pl-[29%]">
            <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
                <div className="column">
                <img src={GrosMaket} alt="logo" />
                <ul className="flex pt-5">
                     <li><a href="" ><FaFacebook className="text-[#D9D9D9] w-10 h-10 pl-5 "/></a></li>
                     <li><a href=""><FaInstagram className="text-[#D9D9D9] w-10 h-10 pl-5 " /></a></li>
                     <li><a href=""><FaLinkedin className="text-[#D9D9D9] w-10 h-10 pl-5 "/></a></li>
                     <li><a href=""><FaTwitter className="text-[#D9D9D9] w-10 h-10 pl-5"/></a></li>
                </ul>

                </div>
                <div className="column">
                    <h2 className="text-xl font-bold mb-4">A PROPOS DE NOUS</h2>
                    <div className="flex items-center mb-2">
                        <AiOutlineEnvironment className="mr-2" />
                        <a href="#about-us" className="hover:underline text-[#D9D9D9]">Cité Rabia, Bab Ezzouar</a>
                    </div>
                    <div className="flex items-center mb-2">
                        <AiOutlineMail className="mr-2" />
                        <a href="mailto:grosmarket@gmail.com" className="hover:underline text-[#D9D9D9]">grosmarket@gmail.com</a>
                    </div>
                    <div className="flex items-center mb-2">
                        <AiOutlinePhone className="mr-2" />
                        <a href="tel:+213555608082" className="hover:underline text-[#D9D9D9]">+213555608082</a>
                    </div>
                </div>
                <div className="column">
                    <h2 className="text-xl font-bold mb-4">INFORMATION</h2>
                    <a href="/" className="block mb-2 hover:underline text-[#D9D9D9]">Accueil</a>
                    <a href="#categories" className="block mb-2 hover:underline text-[#D9D9D9]">Catégories</a>
                    <a href="/services" className="block mb-2 hover:underline text-[#D9D9D9]">Services</a>
                </div>
                <div className="column">
                    <h2 className="text-xl font-bold mb-4">NOS PAGES</h2>
                    <a href="#account" className="block mb-2 hover:underline text-[#D9D9D9]">Mon compte</a>
                    <a href="#order-history" className="block mb-2 hover:underline text-[#D9D9D9]">Historique des commandes</a>
                    <a href="#order-tracking" className="block mb-2 hover:underline text-[#D9D9D9]">Suivi de commande</a>
                    <a href="/services" className="block mb-2 hover:underline text-[#D9D9D9]">Services</a>
                </div>
               
            </div>
      
        </div>
    );
}

export default Footer;
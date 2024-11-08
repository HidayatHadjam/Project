import React, { useState } from "react";
import Dashboard from "../../Images/Dashboard.svg";
import Produits from "../../Images/Produits.svg";
import Commandes from "../../Images/Commandes.svg";
import { FaBox, FaShoppingCart } from 'react-icons/fa'; 

const Sidebar = () => {
    // État pour le bouton actif
    const [activeLink, setActiveLink] = useState('dashboard');

    return (
        <div className="flex flex-col h-screen w-[20%] bg-[#FAFAFA] shadow-md">
            <div className="border-t border-gray-300">
            </div>

            <nav className="flex-1 pt-8">
                <ul className="space-y-2">
                
                    <li>
                        <a
                            href="/Liste"
                            className={`flex items-center mx-auto p-4 text-gray-600 w-[85%] h-12 transition-colors duration-200 ${activeLink === 'products' ? 'bg-[#243645] text-white border border-[#243645] rounded-lg' : 'hover:bg-[#243645] hover:text-white rounded-lg'}`}
                            onClick={() => setActiveLink('products')}
                        >
                            <FaBox size={40} 
                                className={`h-5 w-[40%] ${activeLink === 'products' ? 'text-white' : 'text-blue'}`} 
                            />
                            <span className="text-sm font-bold ml-3">Produits</span>
                        </a>
                    </li>
                    <li>
                        <a
                            href="/commandes"
                            className={`flex items-center mx-auto p-4 text-gray-600 w-[85%] h-12 transition-colors duration-200 ${activeLink === 'orders' ? 'bg-[#243645] text-white border border-[#243645] rounded-lg' : 'hover:bg-[#243645] hover:text-white rounded-lg'}`}
                            onClick={() => setActiveLink('orders')}
                        >
                            <FaShoppingCart size={40} 
                                className={`h-6 w-[40%] ${activeLink === 'orders' ? 'text-white' : 'text-blue'}`} 
                            />
                            <span className="text-sm font-bold ml-3">Commandes</span>
                        </a>
                    </li>
                   
                </ul>
            </nav>
        </div>
    );
};

export default Sidebar;
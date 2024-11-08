import React from 'react';
import GrosMaket from "../../Images/GrosMarket_dark_v.svg";
import SearchIcon from '../../Images/search_fournisseur.svg'; 
import ProfileIcon from '../../Images/Ctegories.svg'; 
import NotificationIcon from '../../Images/Notification.svg'; // Assurez-vous que ce chemin est correct

const Header = () => {
    return (
        <header className="flex items-center justify-between p-4 bg-[#FAFAFA] shadow-md">
            {/* Logo */}
            <div className="flex items-center">
                <img src={GrosMaket} alt="Logo" className="h-10 w-[50%] ml-5" />
            </div>
            
            {/* Conteneur pour la barre de recherche, les notifications et le profil */}
            <div className="flex items-center space-x-4">
                {/* Barre de recherche */}
                <div className="flex items-center border rounded-lg bg-gray-100 w-[60%] h-8 max-w-md">
                    <input
                        type="text"
                        placeholder="Rechercher"
                        className="flex-1 px-4 py-2 border-none bg-transparent outline-none text-gray-700 "
                    />
                    <button className="p-2">
                        <img src={SearchIcon} alt="Search" className="h-5 w-5 text-gray-500" />
                    </button>
                </div>

                {/* Notifications */}
                <button className="p-2">
                    <img src={NotificationIcon} alt="Notifications" className="h-6 w-6 text-gray-500" />
                </button>

                {/* Profil */}
                <button className="flex items-center px-3 py-2 border rounded-lg bg-gray-100 text-gray-700 h-8 hover:bg-gray-200">
                    <span className="ml-2">Profile</span>
                    <img src={ProfileIcon} alt="Profile" className="h-6 w-4 text-gray-500 ml-2" />
                </button>
            </div>
        </header>
    );
};

export default Header;
import React from "react";
import Bg from "../../Images/Bg.svg";
import SearchBar from '../Commercant/SearchBar';



const Landing = ({ onSearch }) => {
    return (
        <div className="relative block w-full h-screen">
            <img src={Bg} alt="Example" className="w-full h-full object-cover" />
            <div className="absolute top-0 left-0 w-full h-full flex flex-col justify-center items-center ">
                <div className="text-white pt-6 flex flex-col justify-center text-3xl font-bold mb-8 text-center">
                    <span className="pt-6">Découvrez la Quantité,</span>
                    <span>  Profitez de la Qualité !</span>
                </div>
                <SearchBar onSearch={onSearch} />
            </div>
        </div>
    );
}

export default Landing;


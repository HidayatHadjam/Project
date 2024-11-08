import React, { useState } from "react";
import { FaSearch } from "react-icons/fa";

const SearchBar = ({ onSearch }) => {
    const [inputValue, setInputValue] = useState('');

    const handleInputChange = (e) => {
        setInputValue(e.target.value);
        onSearch(e.target.value);
    };

    return (
        <div className="flex shadow-sm rounded-lg max-w-2xl pt-24 md:w-full sm:w-[75%]">
            <input
                type="text"
                value={inputValue}
                onChange={handleInputChange}
                className="flex-grow h-10 px-4 text-gray-7c00 border border-gray-300 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-[#FFC300] placeholder:text-sm placeholder:font-normal"
                placeholder="Rechercher un produit"
            />
            <FaSearch className="text-gray-500 bg-[#FFC300] p-2 w-10 h-10 cursor-pointer rounded-r-lg" />
        </div>
    );
}

export default SearchBar;
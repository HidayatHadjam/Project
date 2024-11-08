import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { FaStar } from 'react-icons/fa';
import { AiOutlineHeart } from 'react-icons/ai';

const Produits = ({ selectedCategory, searchTerm }) => {
    const [produits, setProduits] = useState([]);

    const getProducts = () => {
        axios
            .get("https://fakestoreapi.com/products")
            .then(function(response) {
                console.log(response.data);
                setProduits(response.data.slice(8));
            })
            .catch(function(error) {
                console.log(error);
            });
    };

    useEffect(() => {
        getProducts();
    }, []);

    const [hoveredProduct, setHoveredProduct] = useState(null);
    const [currentPage, setCurrentPage] = useState(1);

    // Adjust products per page: 12 for the first page, 8 for subsequent pages
    const productsPerPage = currentPage === 1 ? 12 : 8;

    // Filter products based on search term and selected category
    const filteredProducts = produits.filter(product => {
        const matchesSearchTerm = searchTerm 
            ? product.title && product.title.toLowerCase().includes(searchTerm.toLowerCase())
            : true;
        const matchesCategory = selectedCategory 
            ? product.category && product.category.id === selectedCategory 
            : true;
        return matchesSearchTerm && matchesCategory;
    });

    // Calculate start and end indexes for the current page
    const indexOfLastProduct = currentPage * productsPerPage;
    const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
    const currentProducts = filteredProducts.slice(indexOfFirstProduct, indexOfLastProduct);

    // Function to change page
    const paginate = (pageNumber) => setCurrentPage(pageNumber);

    return (
        <div className="p-8">
            <h2 className="text-black mb-6 font-bold text-2xl text-center">Nos Produits</h2>
            <div className="w-[90%] mx-auto">
                <h2 className="text-black mb-6 font-semibold text-2xl">Explorez Nos Produits</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10">
                    {currentProducts.map(product => (
                        <a
                            key={product.id}
                            href={`/details/${product.id}`}
                            className="block relative mb-4"
                            onMouseEnter={() => setHoveredProduct(product.id)}
                            onMouseLeave={() => setHoveredProduct(null)}
                        >
                            <div className="bg-[#243645] bg-opacity-5 shadow-sm rounded-sm overflow-hidden relative">
                                <img
                                    src={product.images[0]}
                                    alt={product.title}
                                    className={`product-image h-41 w-full object-cover mx-auto ${hoveredProduct === product.id ? 'h-42 ' : 'h-42 '}`}
                                />
                                <div className={`absolute bottom-0 left-0 w-full text-center ${hoveredProduct === product.id ? 'opacity-100' : 'opacity-0'} transition-opacity duration-300 ease-in-out`}>
                                    <button className="bg-[#243645] text-white px-2 py-1 rounded-bl-sm rounded-br-sm transition-colors duration-300 w-full">
                                        Ajouter au panier
                                    </button>
                                </div>
                                <div className="absolute top-0 right-1 mt-2 mr-2 w-8 h-8 bg-white rounded-full flex items-center justify-center shadow-md">
                                    <AiOutlineHeart className="text-black" />
                                </div>
                            </div>
                            <div className="p-2 bg-white shadow-md flex flex-col justify-between flex-grow h-30">
                                <h5 className="font-medium text-[#243645] text-opacity-80 mb-1 h-12 overflow-hidden">{product.title}</h5>
                                <div className="flex items-center justify-between mr-[8%] md:flex items-center justify-between mr-[20%]">
                                    <p className="font-medium text-[#243645] text-opacity-60">{product.price} DA</p>
                                    <div className="flex items-center space-x-1">
                                        {[...Array(5)].map((_, index) => (
                                            <FaStar key={index} className="text-[#FFC300]" />
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </a>
                    ))}
                </div>
                {/* Pagination */}
                <div className="flex justify-center mt-4">
                    {[...Array(Math.ceil(filteredProducts.length / productsPerPage))].map((_, index) => (
                        <button
                            key={index}
                            onClick={() => paginate(index + 1)}
                            className={`px-3 py-1 mx-1 rounded-md ${currentPage === index + 1 ? 'bg-gray-800 text-white' : 'bg-gray-200 text-gray-800 hover:bg-gray-300 hover:text-gray-900'}`}
                        >
                            {index + 1}
                        </button>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Produits;

import React, { useRef } from 'react';
import { FaHeart, FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import product1Image from '../../Images/item.svg';
import product2Image from '../../Images/item.svg';
import product4Image from '../../Images/item.svg';
import product6Image from '../../Images/item.svg';
import product7Image from '../../Images/item.svg';
import { AiOutlineHeart } from 'react-icons/ai';
import product8Image from '../../Images/item.svg';

const Offres = () => {
    const scrollRef = useRef(null); // Référence au conteneur de défilement

    const handleScrollLeft = () => {
        if (scrollRef.current) {
            scrollRef.current.scrollBy({ left: -200, behavior: 'smooth' });
        }
    };

    const handleScrollRight = () => {
        if (scrollRef.current) {
            scrollRef.current.scrollBy({ left: 200, behavior: 'smooth' });
        }
    };

    const itemWidth = '25rem'; // Largeur ajustée des éléments

    const items = [
        { id: 1, name: 'Television', price: 10955, oldPrice: 15000, image: product1Image, description: 'Description of Product1', discount: '-25%' },
        { id: 2, name: 'Chaussures', price: 15555, oldPrice: 20000, image: product2Image, description: 'Description of Product 2', discount: '-20%' },
        { id: 3, name: 'Casque', price: 20000, oldPrice: 25000, image: product7Image, description: 'Description of Product 3', discount: '-15%' },
        { id: 4, name: 'Petrin', price: 3000, oldPrice: 5000, image: product4Image, description: 'Description of Product 1', discount: '-40%' },
        { id: 5, name: 'Vêtements', price: 15555, oldPrice: 18000, image: product8Image, description: 'Description of Product 2', discount: '-14%' },
        { id: 6, name: 'Pièce', price: 20000, oldPrice: 22000, image: product6Image, description: 'Description of Product 3', discount: '-9%' },
        { id: 7, name: 'Casque', price: 20000, oldPrice: 25000, image: product7Image, description: 'Description of Product 3', discount: '-15%' },
        { id: 8, name: 'Petrin', price: 3000, oldPrice: 5000, image: product4Image, description: 'Description of Product 1', discount: '-40%' },
        { id: 9, name: 'Vêtements', price: 15555, oldPrice: 18000, image: product8Image, description: 'Description of Product 2', discount: '-14%' },
    ];

    return (
        <div className="overflow-hidden relative pb-10">
            <h2 className='text-2xl font-bold text-[#243645] mb-4 text-center'>Nos Offres </h2>
            <div className="flex items-center justify-between">
                <button onClick={handleScrollLeft} className="bg-gray-400 ml-4 text-white rounded-full p-2 shadow-lg">
                    <FaChevronLeft className="w-4 h-4" />
                </button>
                <div ref={scrollRef} className="flex gap-6 overflow-x-auto whitespace-nowrap p-6" style={{ overflowX: 'hidden' }}>
                    {items.map(item => (
                        <div key={item.id} style={{ width: itemWidth }} className="inline-block border border-gray-300 rounded-lg bg-white text-left relative">
                            <div className="w-full h-[200px] bg-[#FFC300] rounded overflow-hidden relative">
                                <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
                                <div className="absolute top-0 right-1 mt-2 mr-2 w-8 h-8 bg-white rounded-full flex items-center justify-center shadow-md">
                                    <AiOutlineHeart className="text-black" />
                                </div>
                                <div className="absolute top-2 left-2 bg-red-500 text-white text-xs px-2 py-1 rounded">{item.discount}</div>
                            </div>
                            <h3 className="text-lg ml-3 font-semibold mt-3">{item.name}</h3>
                            <div className="mt-1 ml-3">
                                <p className="text-gray-800 font-medium">{item.price} DA</p>
                            </div>
                            <div className="flex ml-3 mr-3 mb-3 items-center">
                                <p className="text-red-300 line-through">{item.oldPrice} DA</p>
                                <div className="flex items-center ml-2">
                                    {Array(5).fill().map((_, i) => (
                                        <svg key={i} className="w-4 h-4 text-yellow-500" fill="currentColor" viewBox="0 0 20 20">
                                            <path d="M9.049 2.927C9.432 2.14 10.568 2.14 10.951 2.927L12.342 5.855L15.481 6.33C16.341 6.456 16.684 7.54 16.121 8.152L13.974 10.358L14.465 13.45C14.611 14.312 13.724 14.944 12.959 14.58L10 13.142L7.041 14.58C6.276 14.944 5.389 14.312 5.535 13.45L6.026 10.358L3.879 8.152C3.316 7.54 3.659 6.456 4.519 6.33L7.658 5.855L9.049 2.927Z" />
                                        </svg>
                                    ))}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
                <button onClick={handleScrollRight} className="bg-gray-400 mr-5 text-white rounded-full p-2 shadow-lg">
                    <FaChevronRight className="w-4  h-4" />
                </button>
            </div>
        </div>
    );
}

export default Offres;

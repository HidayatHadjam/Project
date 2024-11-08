import React, { useRef, useState, useEffect } from 'react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

const Categories = ({ onCategoryChange }) => {
  const [categories, setCategories] = useState([]);
  const scrollRef = useRef(null);

  useEffect(() => {
    fetch('https://api.escuelajs.co/api/v1/categories')
      .then(response => response.json())
      .then(data => {
        const formattedData = data.map(category => ({
          id: category.id,
          name: category.name,
          image: category.image,
        }));
        setCategories(formattedData);
      })
      .catch(error => console.error('Error fetching categories:', error));
  }, []);

  const scrollLeft = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: -200, behavior: 'smooth' });
    }
  };

  const scrollRight = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: 200, behavior: 'smooth' });
    }
  };

  return (
    <div className='p-4'>
      <div className='w-[100%] mx-auto'>
        <h1 className='text-black pl-20 font-semibold text-2xl text-left'>Filtrer Par Catégorie</h1>
        <div className="relative pl-3 pt-5">
          <button
            onClick={scrollLeft}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-gray-400 text-white rounded-full p-2 shadow-lg"
          >
            <FaChevronLeft className='w-4 h-4' />
          </button>
          <div className="overflow-hidden relative px-4 mx-16">
            <div ref={scrollRef} className="flex overflow-x-auto hide-scrollbar space-x-4 space-y-">
              {categories.map(category => (
                <div key={category.id} className="flex-shrink-0 w-40">
                  <a
                    href="#"
                    onClick={(e) => {
                      e.preventDefault();  // Prevent default anchor behavior
                      onCategoryChange(category.id);  // Call the callback function
                    }}
                    className="block relative bg-white rounded-lg shadow-md p-5 border border-gray-300 text-center transition-all duration-300 hover:-translate-y-1 hover:border-[#FFC300]"
                    style={{
                      transition: 'border-color 0.3s ease-in-out',
                      boxShadow: '0 2px 5px rgba(0, 0, 0, 0.1)', // Ajout d'une légère ombre pour améliorer la visibilité
                      borderTop: '3px solid transparent', // Ajout du bord supérieur transparent
                    }}
                  >
                    <img src={category.image} alt={category.name} className='w-8 h-8 mb-2 mx-auto' />
                    <span className="block mt-2">{category.name}</span>
                  </a>
                </div>
              ))}
            </div>
          </div>
          <button
            onClick={scrollRight}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-gray-400 text-white rounded-full p-2 shadow-lg z-10"
          >
            <FaChevronRight className='w-4 h-4' />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Categories;

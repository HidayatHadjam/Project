import React, { useState } from "react";
import Landing from "../Components/Commercant/Landing";
import Categories from "../Components/Commercant/Categories";
import Produits from "../Components/Commercant/Produits";
import Offres from "../Components/Commercant/Offres";
import Navbar from "../Components/Commercant/NavBar";
import Footer from "../Components/Commercant/Footer";
const Acceuil = () => {
    const [searchTerm, setSearchTerm] = useState("");
    const [selectedCategory, setSelectedCategory] = useState(null);
    const handleSearch = (term) => {
      setSearchTerm(term);
      console.log("Searching for:", term);
      // Any other actions related to search, e.g., filtering products
  };
  const handleCategoryChange = (categoryId) => {
    setSelectedCategory(categoryId);
    // Here, you can also trigger any other actions, like fetching or filtering products based on `categoryId`
  };
    return (  
        <div>
           <Navbar/>
           <Landing onSearch={handleSearch} />
           <Categories onCategoryChange={handleCategoryChange} />
           <Produits selectedCategory={selectedCategory} searchTerm={searchTerm} />
           <Offres />
           <Footer/>
        </div>
    );
}
 
export default Acceuil;
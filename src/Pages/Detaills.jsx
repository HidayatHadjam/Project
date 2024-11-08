import React from 'react';
import Offres from '../Components/Offres';
import Details from '../Components/Details';
import SearchBar from '../Components/SearchBar';
import Navbar from "../Components/Commercant/NavBar";
import Footer from "../Components/Commercant/Footer";

function Detaills() {
  return (
    <div>
        <Navbar/>
        <SearchBar onSearch={onSearch} />
        <Details/>
        <Offres/> 
        <Footer/>    
    </div>
  )
}

export default Detaills;
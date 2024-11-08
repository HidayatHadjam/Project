// DashboardPage.js
import React from 'react';
import Header from '../../Components/Fournisseur/Header';
import Sidebar from '../../Components/Fournisseur/Sidebar';
import Ajouterr from '../../Components/Fournisseur/Ajouter_produit';

const Ajouter = () => {
    return (
      <div className="flex flex-col h-screen">
        <Header />
        <div className="flex flex-grow">
          <Sidebar className="h-full w-[100%]" />
          <div className="flex-grow ">
            <Ajouterr />
          </div>
        </div>
      </div>
    );
  };
  
  export default Ajouter;

import React from 'react';
import Header from '../../Components/Fournisseur/Header';
import Sidebar from '../../Components/Fournisseur/Sidebar';
import Commande from '../../Components/Fournisseur/Commandes';

const Commandes = () => {
    return (
      <div className="flex flex-col h-screen">
        <Header />
        <div className="flex flex-grow">
          <Sidebar className="h-full w-[100%]" />
          <div className="flex-grow ">
            <Commande />
          </div>
        </div>
      </div>
    );
  };
  
  export default Commandes;
import React from 'react'
import Header from '../../Components/Fournisseur/Header';
import Sidebar from '../../Components/Fournisseur/Sidebar';
import List from '../../Components/Fournisseur/List'


function Fournissseur() {
    return (
        <div className="flex flex-col h-screen">
          <Header />
          <div className="flex flex-grow">
            <Sidebar className="h-full w-[100%]" />
            <div className="flex-grow ">
              <List />
            </div>
          </div>
        </div>
      );
}

export default Fournissseur
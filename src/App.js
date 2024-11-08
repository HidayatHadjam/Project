import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Details from './Components/Commercant/Details';
import Favoris from './Components/Commercant/Favoris';
import Login from './Components/Commercant/Login';
import Services from './Components/Commercant/Services';
import Acceuil from './Pages/Acceuil';
import Formulaire from './Components/Commercant/Formulaire';
import Ajouter from './Pages/Fournisseur/Ajouter';
import List from './Pages/Fournisseur/Fournissseur';
import Panier from './Components/Commercant/Panier';
import Admin from './Components/Admin/Admin';
import Utilisateurs from './Components/Admin/Utilisateurs';
import Commandes from './Pages/Fournisseur/Commandes';
function App() {
  return (
   
<Router>
  <Routes>   
      {/* les routes de l'admin */}
    <Route path="/admin" element={<Admin/>} />
    <Route path="/fournisseurs" element={<Utilisateurs/>} />

         {/*les routes du fournisseur */}    
    <Route path="/ajouter_produit" element={<Ajouter/>} />
    <Route path="/Liste" element={<List/>} />
    <Route path="/commandes" element={<Commandes/>} />

         {/*les routes du e-commercant*/}
    <Route path="/panier" element={<Panier/>} />
    <Route path="/" element={<Acceuil />} />
    <Route path="/services" element={<Services />} />
    <Route path="/details/:id" element={<Details  />} />
    <Route path="/se connecter" element={<Login />} />
    <Route path="/services/form" element={<Formulaire />} />
    <Route path="/favoris" element={<Favoris  />} />
  </Routes>
  
</Router>

  );
}

export default App;

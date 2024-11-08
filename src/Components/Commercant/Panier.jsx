import React, { useState } from 'react';
import image from '../../Images/product7.jpeg'; 
import Navbar from "./NavBar";
import Footer from "./Footer";

function Panier() {
  const [produits, setProduits] = useState([
    {
      id: 1,
      titre: 'Nom du produit 1',
      quantite: 2,
      prixUnitaire: 50
    },
    {
      id: 2,
      titre: 'Nom du produit 2',
      quantite: 1,
      prixUnitaire: 200
    }
  ]);

  // Fonction pour incrémenter la quantité d'un produit
  const incrementQuantite = (id) => {
    setProduits(produits.map(produit =>
      produit.id === id
        ? { ...produit, quantite: produit.quantite + 1 }
        : produit
    ));
  };

  // Fonction pour décrémenter la quantité d'un produit
  const decrementQuantite = (id) => {
    setProduits(produits.map(produit =>
      produit.id === id && produit.quantite > 1
        ? { ...produit, quantite: produit.quantite - 1 }
        : produit
    ));
  };

  // Calcul du total
  const total = produits.reduce((acc, produit) => acc + produit.prixUnitaire * produit.quantite, 0);

  return (
    <div>
        <Navbar/>
      {/* Section d'en-tête */}
      <div className='text-center py-10'>
        <h1 className='font-semibold text-[#243645] text-2xl'>Mon Panier</h1>
        <h6 className='text-xl pt-3'>
          Vos articles sélectionnés sont juste ici ! Vérifiez votre panier avant de passer à la caisse.
        </h6>
      </div>

      {/* Section des articles du panier */}
      <div className='w-[80%] mx-auto'>
        {/* Ligne d'en-tête */}
        <div className='border border-black-100 shadow px-6 py-3 flex justify-between'>
          <p className='text-left'>Produit</p>
          <p className='text-right pr-6'>Prix</p>
          <p className='text-right'>Quantité</p>
          <p className='text-right'>Prix Total</p>
        </div>

        {/* Affichage des produits */}
        {produits.map((produit) => (
          <div key={produit.id} className='border border-black-100 shadow my-8 px-4 py-2 flex justify-between items-center'>
            <img src={image} alt={produit.titre} className='w-16 h-16 object-cover' />
            <div className='w-1/4 text-right pr-6'>{produit.prixUnitaire} DA</div>
            <div className='w-1/4 flex items-center justify-end'>
              <button
                onClick={() => decrementQuantite(produit.id)}
                className='bg-gray-100 text-black px-1 rounded-l'
              >
                &lt;
              </button>
              <span className='px-2'>{produit.quantite}</span>
              <button
                onClick={() => incrementQuantite(produit.id)}
                className='bg-gray-100 text-black px-1 rounded-r'
              >
                &gt;
              </button>
            </div>
            <div className='w-1/4 text-right'>{produit.prixUnitaire * produit.quantite} DA</div>
          </div>
        ))}

        {/* Affichage du total */}
        <div className='text-right  text-xl my-4'>
          Total : {total} DA
        </div>

        {/* Bouton Commander */}
        <div className='flex my-5 justify-end'>
          <button className='bg-[#FFC300] text-white font-semibold px-6 py-1 rounded'>
            Commande
          </button>
        </div>
      </div> <Footer/>
    </div>
  );
}

export default Panier;

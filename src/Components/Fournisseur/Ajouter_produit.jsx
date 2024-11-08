import React from 'react';
import image from '../../Images/image.svg';

function Ajouter_produit() {
  return (
    <div className="p-6  ml-[10%]">
      {/* En-tête */}
      <div className="mb-6">
        <h2 className="text-2xl font-bold">Ajouter un nouveau produit</h2>
        <h4 className="text-gray-600">Accueil / Produits</h4>
      </div>

      {/* Formulaire en deux colonnes */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Première colonne : champs du formulaire */}
        <form className="space-y-5">
          <div>
            <label htmlFor="nom" className="block text-sm font-medium mb-2 text-gray-700">Nom du produit :</label>
            <input type="text" id="nom" placeholder="Nom" className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm px-4 py-2 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
          </div>
          <div>
            <label htmlFor="description" className="block text-sm font-medium mb-2 text-gray-700">Description du produit :</label>
            <input type="text" id="description" placeholder="Description" className="mt-1 block w-full h-20 border border-gray-300 rounded-md shadow-sm px-4 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
          </div>
          <div>
            <label htmlFor="etat" className="block text-sm font-medium mb-2 text-gray-700">État du produit :</label>
            <input type="text" id="etat" placeholder="État" className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm px-4 py-2 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
          </div>
          <div className="flex gap-4">
            <div className="flex-1">
              <label htmlFor="modele" className="block text-sm font-medium mb-2 text-gray-700">Modèle du produit :</label>
              <input type="text" id="modele" placeholder="Modèle" className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm px-4 py-2 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
            </div>
            <div className="flex-1">
              <label htmlFor="stock" className="block text-sm font-medium mb-2 text-gray-700">Stock :</label>
              <input type="text" id="stock" placeholder="Stock" className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm px-4 py-2 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
            </div>
          </div>
          <div className="flex gap-4">
            <div className="flex-1">
              <label htmlFor="prix" className="block text-sm font-medium mb-2 text-gray-700">Prix unitaire :</label>
              <input type="text" id="prix" placeholder="Prix" className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm px-4 py-2 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
            </div>
            <div className="flex-1">
              <label htmlFor="adresse" className="block text-sm font-medium mb-2 text-gray-700">Adresse :</label>
              <input type="text" id="adresse" placeholder="Adresse" className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm px-4 py-2 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
            </div>
          </div>
        </form>

        {/* Deuxième colonne : rectangle d'importation d'images */}
        <div className="flex flex-col  justify-center  p-6">
          <div className="bg-gray-300 w-80 h-60 mb-4"></div>
          <h3 className="text-lg font-semibold  mb-3">Photos</h3>
          <div className=" border border-black border-dashed  w-80 px-16 py-8 rounded-lg">
            <img src={image} alt="Importer" className="w-8 h-8 mx-auto" />
            <span className="text-lg ">Importer des images</span>
          </div>
          <div className='flex mt-10 space-x-4'>
      <button className='bg-[#FFC300] text-white font-semobold px-4 py-1 rounded'>Enregistrer</button>
      <button className='bg-[#243645] text-white font-semibold px-4 py-1 rounded'>Modifier</button>
      <button className='border border-[#243645] text-[#243645] font-semibold px-4 py-1 rounded'>Annuler</button></div>

        </div>
      </div>
     
    </div>
  );
}

export default Ajouter_produit;

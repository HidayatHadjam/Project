import React from 'react';
import Ajouter from '../../Images/Ajouter.svg';
import CanonImage from '../../Images/Camera.svg';
import Fleche from '../../Images/Fleche.svg';
import {Link} from 'react-router-dom'

const products = [
  {
    id: 1,
    nom: 'Canon EOS R5',
    description: 'Appareil photo',
    image: CanonImage,
    prix: 20000,
    nb_commandes: 230,
  },
  {
    id: 2,
    nom: 'Canon EOS R5',
    description: 'Appareil photo',
    image: CanonImage,
    prix: 20000,
    nb_commandes: 230,
  },
  {
    id: 3,
    nom: 'Canon EOS R5',
    description: 'Appareil photo',
    image: CanonImage,
    prix: 20000,
    nb_commandes: 230,
  },
  {
    id: 4,
    nom: 'Canon EOS R5',
    description: 'Appareil photo',
    image: CanonImage,
    prix: 20000,
    nb_commandes: 230,
  },
  // Ajoutez d'autres produits ici
];

function List() {
  return (
    <div className="p-6  ml-[2%]">
      <div className="flex justify-between mx-6 mb-6">
        <div>
          <h2 className="text-2xl font-bold">Produits</h2>
          <h4 className="text-gray-600">Accueil / Produits</h4>
        </div>
        <div>
        <Link to='/Ajouter_produit'> <button className="text-white flex items-center rounded px-4 py-2 bg-[#243645] hover:bg-[#1e2a35] transition">
            <img src={Ajouter} className="pr-3" alt="Ajouter" />
            Ajouter un produit
          </button></Link>
        </div>
      </div>
      <div className="grid grid-cols-1 p-6 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {products.map((product) => (
          <div key={product.id} className="border border-gray-300 rounded-lg p-4 shadow-md">
            <div className="flex mb-4">
              <div className="flex-shrink-0 w-32 h-30 mr-4">
                <img src={product.image} alt={product.nom} className="w-h h-[80%] object-cover rounded" />
              </div>
              <div className="flex-1 flex pt-5 flex-col">
                <h3 className="text-xl font-semibold mb-2">{product.nom}</h3>
                <p className="text-gray-700 mb-2">{product.description}</p>
                <p className="text-gray-700 text-lg font-semibold mb-2">{product.prix} DA</p>
              </div>
            </div>
            <div className="flex justify-between border-t  pt-2 mt-4">
              <p className="text-gray-600 mr-2">Ventes</p>
              <div className="flex items-center">
                <img src={Fleche} alt="Flèche" className="mr-2" />
                <p>{product.nb_commandes}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default List;

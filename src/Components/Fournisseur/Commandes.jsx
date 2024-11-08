import React from 'react';
import list from '../../Images/List_down.svg'; 
import Calendrier from '../../Images/Calendrier.svg';
import Menu from '../../Images/Menu.svg'

const Commandes = () => {
    const commandes = [
        { id: '001', produit: 'Produit A', date: '2024-08-15', client: 'Client 1', etat: 'En cours', total: '1000 Da' },
        { id: '002', produit: 'Produit B', date: '2024-08-14', client: 'Client 2', etat: 'Livré', total: '2000 Da' },
        { id: '001', produit: 'Produit A', date: '2024-08-15', client: 'Client 1', etat: 'En cours', total: '1000 Da' },
        { id: '002', produit: 'Produit B', date: '2024-08-14', client: 'Client 2', etat: 'Livré', total: '2000 Da' },
        { id: '001', produit: 'Produit A', date: '2024-08-15', client: 'Client 1', etat: 'En cours', total: '1000 Da' },
        { id: '002', produit: 'Produit B', date: '2024-08-14', client: 'Client 2', etat: 'Livré', total: '2000 Da' },
        { id: '001', produit: 'Produit A', date: '2024-08-15', client: 'Client 1', etat: 'En cours', total: '1000 Da' },
        { id: '002', produit: 'Produit B', date: '2024-08-14', client: 'Client 2', etat: 'Livré', total: '2000 Da' }
    ];

    return (
        <div className=" p-4 ">
            <div className="flex justify-between items-center mb-4">
                <div>
                    <h1 className="text-xl font-bold">Commandes</h1>
                    <p className="text-sm">Acceuil &gt; Commandes</p>
                </div>
                <div className="flex items-center space-x-1 mt-6">
                    <img src={Calendrier} alt="Calendrier" className="h-6 w-4" />
                    <span>16 février - 16 Mars 2024</span>
                </div>
            </div>
            <div className="flex justify-end">
                <button className="bg-[#FFC300] text-white px-2 py-2 rounded-lg flex items-center mb-5">
                    <span className="ml-2">Changer le critère</span>
                    <img src={list} alt="List_down" className="h-6 w-4 ml-3" />
                </button>
            </div>

            {/* Rectangle avec les plus récents */}
            <div className="bg-[#F8F8F8] p-4 rounded shadow-md w-[99%] mx-auto">
                <div className="flex justify-between items-center mb-2">
                    <h2 className="text-lg font-bold">Les plus récents</h2>
                    <span>
                    <img src={Menu} alt="Menu" className="h-4 w-4" />
                    </span>
                </div>
                <hr className="mb-4" />
                <div className="flex items-center mb-2  border-b">
                    <input type="checkbox" className="mr-2 mx-auto" />
                    <span className="flex-1">Produit</span>
                    <span className="flex-1">ID</span>
                    <span className="flex-1">Date</span>
                    <span className="flex-1">Nom du client</span>
                    <span className="flex-1">Etat</span>
                    <span className="flex-1">Total</span>
                </div>

                {/* Liste dynamique */}
                <div>
                    {commandes.map((commande) => (
                        <div key={commande.id} className="flex items-center mb-2 border-b last:border-none pb-2">
                            <input type="checkbox" className="mr-2" />
                            <span className="flex-1">{commande.produit}</span>
                            <span className="flex-1">{commande.id}</span>
                            <span className="flex-1">{commande.date}</span>
                            <span className="flex-1">{commande.client}</span>
                            <span className="flex-1">{commande.etat}</span>
                            <span className="flex-1">{commande.total}</span>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Commandes;
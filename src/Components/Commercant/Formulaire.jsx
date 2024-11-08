import React from 'react';
import Navbar from "./NavBar";
import Footer from "./Footer";
function Formulaire() {
  return (
    <div> <Navbar/>
    <div className='bg-beige'>
    <div className='w-full my-20 md:w-[60%] mx-auto'>
      <h1 className='font-bold text-2xl mb-8'>Bénéficier des meilleurs services :</h1>
      <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
        <div className='flex flex-col'>
          <label htmlFor="nom" className='mb-2 text-sm font-medium'>Nom complet :</label>
          <input
            id="nom"
            type="text"
            placeholder='Nom'
            className='w-full placeholder-opacity-50 bg-[#F5F5F5] placeholder-black border border-gray-300 rounded-md py-2 px-3 text-sm'
          />
        </div>
        <div className='flex flex-col'>
          <label htmlFor="type" className='mb-2 text-sm font-medium'>Type :</label>
          <select
            id="type"
            className='w-full border border-gray-300 bg-[#F5F5F5] rounded-md py-2 px-3 text-sm'
            defaultValue=""
          >
            <option value="" disabled>Sélectionner le type</option>
            <option value="type1">Marketing</option>
            <option value="type2">Tournage professionnel</option>
            <option value="type3">Conseil</option>
          </select>
        </div>
        <div className='flex flex-col'>
          <label htmlFor="phone" className='mb-2 text-sm font-medium'>Numéro de téléphone :</label>
          <input
            id="phone"
            type="text"
            placeholder='Numéro'
            className='w-full placeholder-opacity-50 placeholder-black bg-[#F5F5F5] border border-gray-300 rounded-md py-2 px-3 text-sm'
          />
        </div>
        <div className='flex flex-col'>
          <label htmlFor="service" className='mb-2 text-sm font-medium'>Service :</label>
          <select
            id="service"
            className='w-full border border-gray-300 bg-[#F5F5F5] rounded-md py-2 px-3 text-sm'
            defaultValue=""
          >
            <option value="" disabled>Sélectionner le service</option>
            <option value="service1">Reels</option>
            <option value="service2">Teaser</option>
            <option value="service3">Photoshoot</option>
          </select>
        </div>
        <div className='flex flex-col'>
          <label htmlFor="email" className='mb-2 text-sm font-medium'>Email :</label>
          <input
            id="email"
            type="email"
            placeholder='Email'
            className='w-full placeholder-opacity-50 placeholder-black  bg-[#F5F5F5] border border-gray-300 rounded-md py-2 px-3 text-sm'
          />
        </div>
        <div className='flex flex-col md:flex-row md:space-x-4'>
          <div className='flex flex-col w-full md:w-1/2'>
            <label htmlFor="budget" className='mb-2 text-sm font-medium'>Budget :</label>
            <input
              id="budget"
              type="text"
              placeholder='Budget'
              className='w-full placeholder-opacity-50 placeholder-black bg-[#F5F5F5] border border-gray-300 rounded-md py-2 px-3 text-sm'
            />
          </div>
          <div className='flex flex-col w-full'>
            <label htmlFor="files" className='mb-2 text-sm font-medium'>Fichiers :</label>
            <label htmlFor="files" className='block  w-full'>
              <input
                id="files"
                type="file"
                className='block w-full text-sm file:py-2 file:px-4 file:border file:border-gray-300 file:rounded-md file:file:text-gray-700 file:cursor-pointer '
                multiple
              />
            </label>
          </div>
        </div>
        <div className='flex flex-col col-span-1 md:col-span-2 mb-8'>
          <label htmlFor="description" className='mb-2 text-sm font-medium'>Description du contenu :</label>
          <input
            id="description"
            type="text"
            placeholder='Donner une description détaillée'
            className='w-full pb-12 laceholder-opacity-50 bg-[#F5F5F5] placeholder-black border border-gray-300 rounded-md py-2 px-3 text-sm'
          />
        </div>
      </div>
      <div className='flex justify-center mt-6'>
        <button
          type='submit'
          className='bg-[#FFC300] text-white py-2 px-8 font-semibold rounded-md hover:bg-[#e0a800]'
        >
          Enregistrer
        </button>
      </div>
    </div>
    </div>
<Footer/>
    </div>
  );
}

export default Formulaire;

import React from 'react';
import Profilepic from '../../Images/Profilepic.svg';
import Profile from '../../Images/Profile2.svg';
import Dashboard from '../../Images/Dashboard.svg';
import Gestion from '../../Images/Gestion.svg';
import logo from '../../Images/GrosMarket2.svg';
import Rechercher from '../../Images/Rechercher.svg';
import Notif from '../../Images/Notificationn.svg';
import Graphe1 from '../../Images/Graphe1.svg';
import Graphe2 from '../../Images/Graphe2.svg';
import Graphe3 from '../../Images/Graphe3.svg';
import Photo from '../../Images/Photo.svg';
import {Link} from 'react-router-dom';

function Admin() {
  return (
    <div className='flex'>
      {/* Sidebar */}
      <div className='bg-[#243645] h-screen  w-full md:w-[20%] h-[110vh] p-4 flex flex-col items-center'>
        <div className='mb-6'>
          <img src={Profilepic} alt="Profile Pic" className='w-24 h-24 rounded-full' />
        </div>
        <div className='w-full'>
          <div className='flex items-center mb-4 p-2 hover:bg-[#1f2a33] rounded'>
            <img src={Profile} alt="Profile" className='w-5 h-5 mr-2' />
            <p className='text-white text-sm'>Profile</p>
          </div>
          <Link to="/admin" >
          <div className='flex items-center mb-4 p-2 hover:bg-[#1f2a33] rounded'>
            <img src={Dashboard} alt="Dashboard" className='w-5 h-5 mr-2' />
            <link rel="stylesheet" href="/admin" /><p className='text-white text-sm'>Dashboard</p>
          </div>
          </Link>
          <Link to="/fournisseurs">
          <div className='flex items-center mb-4 p-2 hover:bg-[#1f2a33] rounded'>
            <img src={Gestion} alt="Gestion" className='w-5 h-5 mr-2' />
            <p className='text-white text-sm'>Gestion des utilisateurs</p>
          </div>
          </Link>
        </div>
      </div>

      {/* Main Content */}
      <div className='flex flex-col w-full'>
        {/* Top Bar */}
        <div className='p-4 flex items-center justify-between'>
          <img src={logo} alt="Logo" className='w-30 h-auto' />
          <div className='flex items-center ml-4'>
            <div className='relative flex-grow'>
              <input
                type="text"
                placeholder="Rechercher..."
                className='py-1 pl-10 pr-12 rounded-sm bg-gray-100 border border-gray-300 shadow outline-none placeholder-gray-500'
              />
              <img src={Rechercher} alt="Search" className='absolute top-1/2 left-3 transform -translate-y-1/2 w-5 h-5' />
            </div>
            <img src={Notif} alt="Notifications" className='w-6 h-6 ml-4' />
          </div>
        </div>

        {/* Additional Content */}
        <div className='p-4 flex flex-col gap-8'>
          <div className='flex justify-center gap-12'>
            <img src={Graphe1} alt="Graphe 1" className='w-full sm:w-1/2 md:w-1/3 lg:w-1/3 h-auto' />
            <img src={Graphe2} alt="Graphe 2" className='w-full sm:w-1/2 md:w-1/3 lg:w-1/3 h-auto' />
          </div>
          <div className='flex  justify-center gap-12'>
            <img src={Graphe3} alt="Graphe 3" className='w-full sm:w-1/2 md:w-1/3 lg:w-1/3 h-auto' />
            <img src={Photo} alt="Photo" className='w-full sm:w-1/2 md:w-1/3 lg:w-1/3 h-auto rounded-xl' />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Admin;

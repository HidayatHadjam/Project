import React, { useState } from "react";
import { FaFacebook, FaGoogle, FaApple } from "react-icons/fa";
import {Link} from 'react-router-dom';
import Navbar from "./NavBar";
import Footer from "./Footer";

const Login = () => {
  const [isLogin, setIsLogin] = useState(true);

  const handleToggle = () => {
    setIsLogin(!isLogin);
  };

  return (
    <div><Navbar/>
    <div className="flex flex-col justify-center items-center min-h-screen ">
      <div className="flex flex-col w-full sm:w-[75%] md:w-[60%] lg:w-[50%] xl:w-[40%] justify-center items-center bg-gray-200 p-8 rounded-lg ">
        <div className="flex flex-col items-center mb-6">
          <h1 className="font-bold text-2xl mb-2">
            {isLogin ? "Bienvenue à GrosMarket" : "Créer un compte"}
          </h1>
          <p className="text-lg">{isLogin ? "Veuillez vous connecter" : "Veuillez remplir les informations ci-dessous"}</p>
        </div>
        <div className="flex flex-col items-center w-full max-w-md">
          {isLogin ? (
            <div className="w-full space-y-4">
              <input
                type="text"
                className="w-full p-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-yellow-500"
                placeholder="Email"
              />
              <input
                type="password"
                className="w-full p-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-yellow-500"
                placeholder="Mot de passe"
              />
              <Link to='/fournisseur'>
              <button className="w-full mt-5 text-white h-10 bg-yellow-400 rounded-lg hover:bg-yellow-500 focus:outline-none focus:ring-2 focus:ring-yellow-500">
                Se connecter
              </button></Link>
              <a href="#" className="block text-center text-blue-600 hover:underline" onClick={handleToggle}>
                Créer un compte
              </a>
            </div>
          ) : (
            <div className="w-full space-y-4">
              <input
                type="text"
                className="w-full p-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-yellow-500"
                placeholder="Nom d'utilisateur"
              />
              <input
                type="text"
                className="w-full p-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-yellow-500"
                placeholder="Email"
              />
              <input
                type="password"
                className="w-full p-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-yellow-500"
                placeholder="Mot de passe"
              />
              <Link to="/fournisseur">
              <button className="w-full mt-5 text-white h-10 bg-yellow-400 rounded-lg hover:bg-yellow-500 focus:outline-none focus:ring-2 focus:ring-yellow-500">
                S'inscrire
              </button></Link>
              <a href="#" className="block text-center text-blue-600 hover:underline" onClick={handleToggle}>
                Se connecter
              </a>
            </div>
          )}
        </div>
        <div className="flex gap-5 py-4">
          <FaApple className="w-6 h-6 text-gray-800 hover:text-gray-600" />
          <FaFacebook className="w-6 h-6 text-blue-600 hover:text-blue-400" />
          <FaGoogle className="w-6 h-6 text-red-600 hover:text-red-400" />
        </div>
      </div>
    </div>
    <Footer/>
    </div>
  );
};

export default Login;

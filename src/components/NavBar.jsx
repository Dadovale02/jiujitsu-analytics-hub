import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

export const NavBar = () => {
  const navigate = useNavigate();

  const handleGoBack = () => {
    navigate(-1);
  };

  return (
    <nav className="bg-red-900 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center">
          <button onClick={handleGoBack} className="mr-4 hover:text-red-300">
            <ArrowLeft size={24} />
          </button>
          <Link to="/" className="text-2xl font-bold">JiuJitsuData</Link>
        </div>
        <ul className="flex space-x-4">
          <li><Link to="/competitions" className="hover:text-red-300">Gare</Link></li>
          <li><Link to="/athletes" className="hover:text-red-300">Atleti</Link></li>
          <li><Link to="/teams" className="hover:text-red-300">Team</Link></li>
        </ul>
      </div>
    </nav>
  );
};

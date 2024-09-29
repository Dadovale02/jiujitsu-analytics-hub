import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { SearchBar } from './SearchBar';

export const NavBar = ({ onSearchResults }) => {
  const navigate = useNavigate();

  const handleGoBack = () => {
    navigate(-1);
  };

  return (
    <nav className="bg-navy text-white p-4">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
        <div className="flex items-center mb-4 md:mb-0">
          <button onClick={handleGoBack} className="mr-4 hover:text-bright-red">
            <ArrowLeft size={24} />
          </button>
          <Link to="/" className="text-2xl font-bold text-bright-red">JiuJitsuData</Link>
        </div>
        <div className="w-full md:w-auto md:flex-grow md:mx-4">
          <SearchBar onSearchResults={onSearchResults} />
        </div>
        <ul className="flex space-x-4 mt-4 md:mt-0">
          <li><Link to="/competitions" className="hover:text-bright-red">Gare</Link></li>
          <li><Link to="/athletes" className="hover:text-bright-red">Atleti</Link></li>
          <li><Link to="/teams" className="hover:text-bright-red">Team</Link></li>
        </ul>
      </div>
    </nav>
  );
};
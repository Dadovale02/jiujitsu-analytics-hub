import React from 'react';
import { Link } from 'react-router-dom';

export const NavBar = () => {
  return (
    <nav className="bg-red-900 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold">JiuJitsuData</Link>
        <ul className="flex space-x-4">
          <li><Link to="/competitions" className="hover:text-red-300">Gare</Link></li>
          <li><Link to="/athletes" className="hover:text-red-300">Atleti</Link></li>
          <li><Link to="/teams" className="hover:text-red-300">Team</Link></li>
        </ul>
      </div>
    </nav>
  );
};

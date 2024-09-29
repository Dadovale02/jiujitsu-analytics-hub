import React, { useState, useEffect } from 'react';
import { Search } from 'lucide-react';
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useNavigate } from 'react-router-dom';
import { searchData } from '../data/searchData';

export const SearchBar = ({ onSearchResults }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [results, setResults] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchSearchResults = () => {
      if (searchTerm.length > 0) {
        const filteredResults = searchData.filter(item =>
          item.name.toLowerCase().includes(searchTerm.toLowerCase())
        );
        setResults(filteredResults);
        onSearchResults(filteredResults);
      } else {
        setResults([]);
        onSearchResults([]);
      }
    };

    fetchSearchResults();
  }, [searchTerm, onSearchResults]);

  const handleResultClick = (url) => {
    navigate(url);
    setSearchTerm('');
    setResults([]);
    onSearchResults([]);
  };

  return (
    <div className="relative w-full max-w-xl">
      <div className="flex">
        <Input
          type="text"
          placeholder="Cerca atleti, team o gare..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full bg-white text-black placeholder-gray-500"
        />
        <Button type="submit" className="ml-2 bg-bright-red text-white hover:bg-red-600">
          <Search className="h-4 w-4" />
        </Button>
      </div>
      {results.length > 0 && (
        <ul className="absolute z-10 w-full bg-white border border-light-gray mt-1 rounded-md shadow-lg">
          {results.map(item => (
            <li 
              key={item.id} 
              className="px-4 py-2 hover:bg-light-gray cursor-pointer text-navy"
              onClick={() => handleResultClick(item.url)}
            >
              {item.name} - {item.type}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};
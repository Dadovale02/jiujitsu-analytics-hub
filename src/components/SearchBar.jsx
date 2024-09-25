import React, { useState } from 'react';
import { Search } from 'lucide-react';
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

const mockData = [
  { id: 1, name: "Gordon Ryan", type: "Athlete" },
  { id: 2, name: "Atos Jiu-Jitsu", type: "Team" },
  { id: 3, name: "IBJJF World Championship", type: "Competition" },
  // Add more mock data as needed
];

export const SearchBar = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [results, setResults] = useState([]);

  const handleSearch = (event) => {
    const value = event.target.value;
    setSearchTerm(value);

    if (value.length > 2) {
      const filtered = mockData.filter(item =>
        item.name.toLowerCase().includes(value.toLowerCase())
      );
      setResults(filtered);
    } else {
      setResults([]);
    }
  };

  return (
    <div className="relative">
      <div className="flex">
        <Input
          type="text"
          placeholder="Cerca atleti, team o gare..."
          value={searchTerm}
          onChange={handleSearch}
          className="w-full"
        />
        <Button type="submit" className="ml-2">
          <Search className="h-4 w-4" />
        </Button>
      </div>
      {results.length > 0 && (
        <ul className="absolute z-10 w-full bg-white border border-gray-300 mt-1 rounded-md shadow-lg">
          {results.map(item => (
            <li key={item.id} className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
              {item.name} - {item.type}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};
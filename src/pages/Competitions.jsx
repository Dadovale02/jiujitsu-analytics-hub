import React from 'react';
import { Link } from 'react-router-dom';
import { NavBar } from '../components/NavBar';
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";

const Competitions = () => {
  const competitions = [
    { name: "IBJJF World Championship", date: "Annuale", location: "California, USA", link: "/ibjjf-world" },
    { name: "ADCC World Championship", date: "Biennale", location: "Varie location", link: "/adcc-world" },
    { name: "Who's Number One", date: "Varie date", location: "Varie location", link: "/wno" },
  ];

  return (
    <div className="min-h-screen bg-navy-900 text-white">
      <NavBar />
      <main className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold text-center mb-8 text-red-500">Gare di Brazilian Jiu-Jitsu</h1>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {competitions.map((comp, index) => (
            <Link to={comp.link} key={index}>
              <Card className="bg-navy-800 text-white hover:bg-navy-700 transition-colors">
                <CardHeader>
                  <CardTitle className="text-red-500">{comp.name}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>Frequenza: {comp.date}</p>
                  <p>Luogo: {comp.location}</p>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </main>
    </div>
  );
};

export default Competitions;

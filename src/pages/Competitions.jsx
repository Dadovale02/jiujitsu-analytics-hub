import React from 'react';
import { NavBar } from '../components/NavBar';
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";

const Competitions = () => {
  const competitions = [
    { name: "IBJJF World Championship", date: "2023-06-01", location: "California, USA" },
    { name: "ADCC World Championship", date: "2023-09-15", location: "Las Vegas, USA" },
    { name: "European Championship", date: "2023-01-20", location: "Lisbon, Portugal" },
  ];

  return (
    <div className="min-h-screen bg-black text-red-500">
      <NavBar />
      <main className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold text-center mb-8 text-red-600">Gare di Brazilian Jiu-Jitsu</h1>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {competitions.map((comp, index) => (
            <Card key={index} className="bg-red-900 text-white">
              <CardHeader>
                <CardTitle>{comp.name}</CardTitle>
              </CardHeader>
              <CardContent>
                <p>Data: {comp.date}</p>
                <p>Luogo: {comp.location}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </main>
    </div>
  );
};

export default Competitions;
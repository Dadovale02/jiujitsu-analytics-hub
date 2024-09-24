import React from 'react';
import { NavBar } from '../components/NavBar';
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";

const Teams = () => {
  const teams = [
    { name: "Atos Jiu-Jitsu", location: "San Diego, USA", headCoach: "André Galvão" },
    { name: "Alliance", location: "São Paulo, Brazil", headCoach: "Fabio Gurgel" },
    { name: "Gracie Barra", location: "Rio de Janeiro, Brazil", headCoach: "Carlos Gracie Jr." },
  ];

  return (
    <div className="min-h-screen bg-black text-red-500">
      <NavBar />
      <main className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold text-center mb-8 text-red-600">Team di Brazilian Jiu-Jitsu</h1>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {teams.map((team, index) => (
            <Card key={index} className="bg-red-900 text-white">
              <CardHeader>
                <CardTitle>{team.name}</CardTitle>
              </CardHeader>
              <CardContent>
                <p>Sede: {team.location}</p>
                <p>Head Coach: {team.headCoach}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </main>
    </div>
  );
};

export default Teams;

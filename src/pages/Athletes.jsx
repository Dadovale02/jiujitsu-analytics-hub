import React from 'react';
import { NavBar } from '../components/NavBar';
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";

const Athletes = () => {
  const athletes = [
    { name: "Marcus Almeida", nickname: "Buchecha", team: "Checkmat", weight: "Peso Pesado" },
    { name: "Gordon Ryan", nickname: "The King", team: "New Wave Jiu-Jitsu", weight: "Peso Pesado" },
    { name: "Gabrieli Pessanha", nickname: "Gabi", team: "InFight", weight: "Peso Pesado Feminino" },
  ];

  return (
    <div className="min-h-screen bg-black text-red-500">
      <NavBar />
      <main className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold text-center mb-8 text-red-600">Atleti di Brazilian Jiu-Jitsu</h1>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {athletes.map((athlete, index) => (
            <Card key={index} className="bg-red-900 text-white">
              <CardHeader>
                <CardTitle>{athlete.name}</CardTitle>
              </CardHeader>
              <CardContent>
                <p>Soprannome: {athlete.nickname}</p>
                <p>Team: {athlete.team}</p>
                <p>Categoria: {athlete.weight}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </main>
    </div>
  );
};

export default Athletes;
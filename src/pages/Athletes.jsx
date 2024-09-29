import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { NavBar } from '../components/NavBar';
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";

const athletesData = [
  { id: 1, name: "Gordon Ryan", nickname: "The King", team: "New Wave Jiu-Jitsu", weight: "Peso Pesado", image: "/images.jpeg" },
  { id: 2, name: "Tye Ruotolo", nickname: "The Prodigy", team: "Atos Jiu-Jitsu", weight: "Peso Médio", image: "/Tye-Ruotolo.jpg" },
  { id: 3, name: "Kade Ruotolo", nickname: "The Phenom", team: "Atos Jiu-Jitsu", weight: "Peso Médio", image: "/Kade_Ruotolo.jpg" },
  { id: 4, name: "Levi Jones Leary", nickname: "The Savage", team: "Unity Jiu-Jitsu", weight: "Peso Leve", image: "/Levi-jones-leary.jpeg" },
  { id: 5, name: "Mica Galvao", nickname: "The Prodigy", team: "Manaus Jiu-Jitsu", weight: "Peso Médio", image: "/Mica-galvao.jpeg" },
  { id: 6, name: "Giancarlo Bodoni", nickname: "The Giant", team: "New Wave Jiu-Jitsu", weight: "Peso Pesado", image: "/Giancarlo-bodoni.jpg" },
  { id: 7, name: "Kaynan Duarte", nickname: "The Beast", team: "Atos Jiu-Jitsu", weight: "Peso Pesado", image: "/Kaynan-duarte.jpg" },
];

const AthleteDetails = ({ athlete }) => (
  <Card className="bg-light-gray text-navy">
    <CardHeader>
      <CardTitle className="text-bright-red">{athlete.name}</CardTitle>
    </CardHeader>
    <CardContent>
      <img 
        src={athlete.image} 
        alt={athlete.name} 
        className="w-64 h-64 rounded-full mb-4 mx-auto object-cover"
        onError={(e) => {
          e.target.onerror = null;
          e.target.src = "/placeholder.svg";
        }}
      />
      <p>Soprannome: <span className="text-lime">{athlete.nickname}</span></p>
      <p>Team: {athlete.team}</p>
      <p>Categoria: {athlete.weight}</p>
    </CardContent>
  </Card>
);

const Athletes = () => {
  const { id } = useParams();
  const athleteId = parseInt(id);

  return (
    <div className="min-h-screen bg-navy text-white">
      <NavBar />
      <main className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold text-center mb-8 text-bright-red">Atleti di Brazilian Jiu-Jitsu</h1>
        {athleteId ? (
          <AthleteDetails athlete={athletesData.find(a => a.id === athleteId)} />
        ) : (
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {athletesData.map((athlete) => (
              <Link key={athlete.id} to={`/athletes/${athlete.id}`}>
                <AthleteDetails athlete={athlete} />
              </Link>
            ))}
          </div>
        )}
      </main>
    </div>
  );
};

export default Athletes;
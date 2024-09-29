import React from 'react';
import { Link } from 'react-router-dom';
import { NavBar } from '../components/NavBar';
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";

const athletesData = [
  { id: 1, name: "Gordon Ryan", nickname: "The King", team: "New Wave Jiu-Jitsu", weight: "Heavyweight", image: "/images.jpeg" },
  { id: 2, name: "Tye Ruotolo", nickname: "The Prodigy", team: "Atos Jiu-Jitsu", weight: "Peso Médio", image: "/Tye-Ruotolo.jpg" },
  { id: 3, name: "Kade Ruotolo", nickname: "The Phenom", team: "Atos Jiu-Jitsu", weight: "Peso Médio", image: "/Kade_Ruotolo.jpg" },
  { id: 4, name: "Levi Jones Leary", nickname: "The Savage", team: "Unity Jiu-Jitsu", weight: "Peso Leve", image: "/Levi-jones-leary.jpeg" },
  { id: 5, name: "Mica Galvao", nickname: "The Prodigy", team: "Manaus Jiu-Jitsu", weight: "Peso Médio", image: "/Mica-galvao.jpeg" },
  { id: 6, name: "Giancarlo Bodoni", nickname: "The Giant", team: "New Wave Jiu-Jitsu", weight: "Peso Pesado", image: "/Giancarlo-bodoni.jpg" },
  { id: 7, name: "Kaynan Duarte", nickname: "The Beast", team: "Atos Jiu-Jitsu", weight: "Heavyweight", image: "/Kaynan-duarte.jpg" },
  { id: 8, name: "Felipe Pena", nickname: "The Commander", team: "Gracie Barra", weight: "Peso Pesado", image: "/placeholder.svg" },
  { id: 9, name: "Nick Rodriguez", nickname: "Nicky Rod", team: "B-Team Jiu-Jitsu", weight: "Heavyweight", image: "/placeholder.svg"},
  { id: 10, name: "Helena Crevar", nickname: "The Hurricane", team: "Atos Jiu-Jitsu", weight: "Peso Médio", image: "/placeholder.svg"},
  { id: 11, name: "Diogo Reis", nickname: "Baby Shark", team: "Dream Art", weight: "Peso Galo", image: "/placeholder.svg"}
];

const AthleteCard = ({ athlete }) => (
  <Link to={`/athletes/${athlete.id}`}>
    <Card className="bg-light-gray text-navy hover:bg-bright-red hover:text-white transition-colors">
      <CardHeader>
        <CardTitle className="text-bright-red">{athlete.name}</CardTitle>
      </CardHeader>
      <CardContent>
        <img 
          src={athlete.image} 
          alt={athlete.name} 
          className="w-32 h-32 rounded-full mb-4 mx-auto object-cover"
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
  </Link>
);

const Athletes = () => {
  return (
    <div className="min-h-screen bg-navy text-white">
      <NavBar />
      <main className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold text-center mb-8 text-bright-red">Atleti di Brazilian Jiu-Jitsu</h1>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {athletesData.map((athlete) => (
            <AthleteCard key={athlete.id} athlete={athlete} />
          ))}
        </div>
      </main>
    </div>
  );
};

export default Athletes;
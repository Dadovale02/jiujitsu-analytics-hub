import React from 'react';
import { Link } from 'react-router-dom';
import { NavBar } from '../components/NavBar';
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { athletesData } from '../data/athletesData';

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
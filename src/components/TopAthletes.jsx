import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const athletes = [
  { id: 1, name: "Gordon Ryan", nickname: "The King", team: "New Wave Jiu-Jitsu", weight: "Peso Pesado", image: "/images.jpeg" },
  { id: 2, name: "Tye Ruotolo", nickname: "The Prodigy", team: "Atos Jiu-Jitsu", weight: "Peso Médio", image: "/Tye-Ruotolo.jpg" },
  { id: 3, name: "Kade Ruotolo", nickname: "The Phenom", team: "Atos Jiu-Jitsu", weight: "Peso Médio", image: "/Kade_Ruotolo.jpg" },
  { id: 4, name: "Levi Jones Leary", nickname: "The Savage", team: "Unity Jiu-Jitsu", weight: "Peso Leve", image: "/Levi-jones-leary.jpeg" },
  { id: 5, name: "Mica Galvao", nickname: "The Prodigy", team: "Manaus Jiu-Jitsu", weight: "Peso Médio", image: "/Mica-galvao.jpeg" },
  { id: 6, name: "Giancarlo Bodoni", nickname: "The Giant", team: "New Wave Jiu-Jitsu", weight: "Peso Pesado", image: "/Giancarlo-bodoni.jpg" },
  { id: 7, name: "Kaynan Duarte", nickname: "The Beast", team: "Atos Jiu-Jitsu", weight: "Peso Pesado", image: "/Kaynan-duarte.jpg" },
];

export const TopAthletes = () => {
  return (
    <div className="w-full h-full relative">
      <h2 className="text-2xl font-bold mb-4 text-bright-red">Atleti più ricercati</h2>
      <Carousel className="w-full h-full">
        <CarouselContent>
          {athletes.map((athlete) => (
            <CarouselItem key={athlete.id} className="md:basis-1/3">
              <Link to={`/athletes/${athlete.id}`}>
                <Card className="bg-red-900 h-full">
                  <CardContent className="flex flex-col items-center p-6">
                    <img
                      src={athlete.image}
                      alt={athlete.name}
                      className="w-32 h-32 rounded-full mb-4 mx-auto object-cover"
                      onError={(e) => {
                        e.target.onerror = null;
                        e.target.src = "/placeholder.svg";
                      }}
                    />
                    <h3 className="text-xl font-semibold text-white">{athlete.name}</h3>
                    <p className="text-white">Team: {athlete.team}</p>
                    <p className="text-white">Categoria: {athlete.weight}</p>
                  </CardContent>
                </Card>
              </Link>
            </CarouselItem>
          ))}
        </CarouselContent>
        <div className="flex justify-center mt-4 space-x-2">
          <CarouselPrevious />
          <CarouselNext />
        </div>
      </Carousel>
    </div>
  );
};
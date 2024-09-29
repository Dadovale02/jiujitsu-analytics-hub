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
import useEmblaCarousel from 'embla-carousel-react';

const athletes = [
  { id: 1, name: "Gordon Ryan", image: "/gordon-ryan.jpg", wins: 95, losses: 5, team: "New Wave Jiu-Jitsu" },
  { id: 2, name: "Tye Ruotolo", image: "/placeholder.svg", wins: 80, losses: 10, team: "Atos Jiu-Jitsu" },
  { id: 3, name: "Kade Ruotolo", image: "/placeholder.svg", wins: 82, losses: 8, team: "Atos Jiu-Jitsu" },
  { id: 4, name: "Levi Jones Leary", image: "/placeholder.svg", wins: 75, losses: 15, team: "Unity Jiu-Jitsu" },
  { id: 5, name: "Mica Galvao", image: "/placeholder.svg", wins: 85, losses: 7, team: "Manaus Jiu-Jitsu" },
  { id: 6, name: "Giancarlo Bodoni", image: "/placeholder.svg", wins: 70, losses: 20, team: "New Wave Jiu-Jitsu" },
  { id: 7, name: "Kaynan Duarte", image: "/placeholder.svg", wins: 88, losses: 12, team: "Atos Jiu-Jitsu" },
  { id: 8, name: "Felipe Pena", image: "/placeholder.svg", wins: 90, losses: 10, team: "Gracie Barra" },
  { id: 9, name: "Nick Rodriguez", image: "/placeholder.svg", wins: 78, losses: 22, team: "B-Team Jiu-Jitsu" },
  { id: 10, name: "Helena Crevar", image: "/placeholder.svg", wins: 65, losses: 5, team: "Atos Jiu-Jitsu" },
  { id: 11, name: "Diogo Reis", image: "/placeholder.svg", wins: 72, losses: 8, team: "Dream Art" },
];

export const TopAthletes = () => {
  const [emblaRef] = useEmblaCarousel({ loop: true });

  return (
    <div className="w-full h-full relative">
      <h2 className="text-2xl font-bold mb-4 text-red-600">Atleti più ricercati</h2>
      <Carousel className="w-full h-full" ref={emblaRef}>
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
                    />
                    <h3 className="text-xl font-semibold text-white">{athlete.name}</h3>
                    <p className="text-white">Team: {athlete.team}</p>
                    <p className="text-white">Vittorie: {athlete.wins}</p>
                    <p className="text-white">Sconfitte: {athlete.losses}</p>
                  </CardContent>
                </Card>
              </Link>
            </CarouselItem>
          ))}
        </CarouselContent>
        <div className="absolute -bottom-12 left-0 right-0 flex justify-center space-x-2">
          <CarouselPrevious />
          <CarouselNext />
        </div>
      </Carousel>
    </div>
  );
};
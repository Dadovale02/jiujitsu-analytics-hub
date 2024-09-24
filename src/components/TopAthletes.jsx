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
  { id: 1, name: "Gordon Ryan", image: "/gordon-ryan.jpg" },
  { id: 2, name: "Tye Ruotolo", image: "/placeholder.svg" },
  { id: 3, name: "Kade Ruotolo", image: "/placeholder.svg" },
  { id: 4, name: "Levi Jones Leary", image: "/placeholder.svg" },
  { id: 5, name: "Mica Galvao", image: "/placeholder.svg" },
  { id: 6, name: "Giancarlo Bodoni", image: "/placeholder.svg" },
  { id: 7, name: "Kaynan Duarte", image: "/placeholder.svg" },
];

export const TopAthletes = () => {
  return (
    <div className="w-full">
      <h2 className="text-2xl font-bold mb-4 text-red-600">Top Searched Athletes</h2>
      <Carousel className="w-full max-w-xs mx-auto">
        <CarouselContent>
          {athletes.map((athlete) => (
            <CarouselItem key={athlete.id}>
              <Link to={`/athletes/${athlete.id}`}>
                <Card className="bg-red-900">
                  <CardContent className="flex flex-col items-center p-6">
                    <img
                      src={athlete.image}
                      alt={athlete.name}
                      className="w-32 h-32 rounded-full mb-4 mx-auto object-cover"
                    />
                    <h3 className="text-xl font-semibold text-white">{athlete.name}</h3>
                  </CardContent>
                </Card>
              </Link>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  );
};
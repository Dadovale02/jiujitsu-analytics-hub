import React from 'react';
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { BarChart, Bar, XAxis, YAxis, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const competitions = [
  {
    name: "IBJJF World Championship",
    data: [
      { name: 'Sottomissione', value: 400 },
      { name: 'Decisione', value: 300 },
      { name: 'Punti', value: 200 },
    ]
  },
  {
    name: "ADCC World Championship",
    data: [
      { name: 'Sottomissione', value: 350 },
      { name: 'Decisione', value: 250 },
      { name: 'Punti', value: 300 },
    ]
  },
  {
    name: "Who's Number One",
    data: [
      { name: 'Sottomissione', value: 450 },
      { name: 'Decisione', value: 200 },
      { name: 'Punti', value: 250 },
    ]
  }
];

const CompetitionStats = () => {
  return (
    <Card className="mt-8 relative">
      <CardHeader>
        <CardTitle>Statistiche Vittorie per Competizione</CardTitle>
      </CardHeader>
      <CardContent>
        <Carousel className="w-full">
          <CarouselContent>
            {competitions.map((competition, index) => (
              <CarouselItem key={index}>
                <h3 className="text-xl font-semibold mb-4">{competition.name}</h3>
                <ResponsiveContainer width="50%" height={200}>
                  <BarChart data={competition.data}>
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Bar dataKey="value" fill="#ef4444" />
                  </BarChart>
                </ResponsiveContainer>
              </CarouselItem>
            ))}
          </CarouselContent>
          <div className="flex justify-center mt-4 space-x-2">
            <CarouselPrevious />
            <CarouselNext />
          </div>
        </Carousel>
      </CardContent>
    </Card>
  );
};

export default CompetitionStats;
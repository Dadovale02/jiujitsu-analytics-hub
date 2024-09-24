import React from 'react';
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";

export const AthleteStats = () => {
  return (
    <Card className="bg-red-900 text-white">
      <CardHeader>
        <CardTitle>Statistiche Atleti</CardTitle>
      </CardHeader>
      <CardContent>
        <p>Numero totale di atleti: 5000</p>
        <p>Atleti professionisti: 500</p>
        <p>Atleti amatoriali: 4500</p>
        <p>Campione in carica (Peso Pesado): Gordon Ryan</p>
      </CardContent>
    </Card>
  );
};

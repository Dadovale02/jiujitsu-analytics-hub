import React from 'react';
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";

export const TeamStats = () => {
  return (
    <Card className="bg-red-900 text-white">
      <CardHeader>
        <CardTitle>Statistiche Team</CardTitle>
      </CardHeader>
      <CardContent>
        <p>Numero totale di team: 100</p>
        <p>Team con più titoli: Atos Jiu-Jitsu</p>
        <p>Team con più atleti: Gracie Barra</p>
        <p>Miglior team emergente: New Wave Jiu-Jitsu</p>
      </CardContent>
    </Card>
  );
};
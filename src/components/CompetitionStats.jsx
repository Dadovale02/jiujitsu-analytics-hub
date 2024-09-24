import React from 'react';
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";

export const CompetitionStats = () => {
  return (
    <Card className="bg-red-900 text-white">
      <CardHeader>
        <CardTitle>Statistiche Gare</CardTitle>
      </CardHeader>
      <CardContent>
        <p>Numero totale di gare: 150</p>
        <p>Gare internazionali: 50</p>
        <p>Gare nazionali: 100</p>
        <p>Prossima gara: IBJJF European Championship, 15 Gennaio 2024</p>
      </CardContent>
    </Card>
  );
};

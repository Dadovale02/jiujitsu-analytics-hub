import React from 'react';
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";

export const AthleteStats = () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Statistiche Atleti</CardTitle>
      </CardHeader>
      <CardContent>
        <p>Qui verranno visualizzate le statistiche relative agli atleti di Brazilian Jiu-Jitsu.</p>
        {/* Aggiungi qui grafici e tabelle con dati reali */}
      </CardContent>
    </Card>
  );
};
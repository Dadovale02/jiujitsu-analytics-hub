import React from 'react';
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";

export const CompetitionStats = () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Statistiche Gare</CardTitle>
      </CardHeader>
      <CardContent>
        <p>Qui verranno visualizzate le statistiche relative alle gare di Brazilian Jiu-Jitsu.</p>
        {/* Aggiungi qui grafici e tabelle con dati reali */}
      </CardContent>
    </Card>
  );
};
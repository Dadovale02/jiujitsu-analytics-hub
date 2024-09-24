import React from 'react';
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";

export const AllTimeStats = () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Statistiche All-Time</CardTitle>
      </CardHeader>
      <CardContent>
        <p>Qui verranno visualizzate le statistiche all-time del Brazilian Jiu-Jitsu, incluse le sottomissioni e i takedown più efficaci.</p>
        {/* Aggiungi qui grafici e tabelle con dati reali */}
      </CardContent>
    </Card>
  );
};
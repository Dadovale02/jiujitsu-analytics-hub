import React from 'react';
import { NavBar } from '../components/NavBar';
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";

const WNO = () => {
  const editions = Array.from({ length: 24 }, (_, i) => i + 1);

  return (
    <div className="min-h-screen bg-black text-red-500">
      <NavBar />
      <main className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold text-center mb-8 text-red-600">Who's Number One</h1>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {editions.map((edition) => (
            <Card key={edition} className="bg-red-900 text-white">
              <CardHeader>
                <CardTitle>Edizione {edition}</CardTitle>
              </CardHeader>
              <CardContent>
                <p>Luogo: Varie location</p>
                {/* Aggiungi qui ulteriori dettagli specifici per ogni edizione */}
              </CardContent>
            </Card>
          ))}
        </div>
      </main>
    </div>
  );
};

export default WNO;

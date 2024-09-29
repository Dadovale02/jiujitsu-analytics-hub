import React from 'react';
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { BarChart, Bar, XAxis, YAxis, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";

const data = [
  { name: 'Sottomissione', value: 400 },
  { name: 'Decisione', value: 300 },
  { name: 'Punti', value: 200 },
];

const Dashboard = () => {
  return (
    <Card className="mt-8">
      <CardHeader>
        <CardTitle>Statistiche Vittorie</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-3 gap-4 mb-4">
          <Button variant="outline" size="icon" className="justify-self-start">
            <ChevronLeft className="h-4 w-4" />
          </Button>
          <div className="col-span-1 text-center">Slide 1 di 3</div>
          <Button variant="outline" size="icon" className="justify-self-end">
            <ChevronRight className="h-4 w-4" />
          </Button>
        </div>
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={data}>
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="value" fill="#ef4444" />
          </BarChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  );
};

export default Dashboard;
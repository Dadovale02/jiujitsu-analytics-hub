import React from 'react';
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { BarChart, Bar, XAxis, YAxis, Tooltip, Legend, ResponsiveContainer } from 'recharts';

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
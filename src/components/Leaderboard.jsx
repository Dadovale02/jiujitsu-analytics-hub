import React from 'react';
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";

const athletes = [
  { rank: 1, name: 'Gordon Ryan', points: 1000, recentResult: 'Gold at ADCC 2022' },
  { rank: 2, name: 'André Galvão', points: 950, recentResult: 'Silver at IBJJF Worlds 2023' },
  { rank: 3, name: 'Marcus Almeida', points: 900, recentResult: 'Gold at IBJJF Euros 2023' },
  { rank: 4, name: 'Nicholas Meregali', points: 850, recentResult: 'Bronze at ADCC 2022' },
  { rank: 5, name: 'Felipe Pena', points: 800, recentResult: 'Silver at IBJJF Pans 2023' },
];

const Leaderboard = () => {
  return (
    <Card className="bg-navy text-white">
      <CardHeader>
        <CardTitle className="text-bright-red">Leaderboard Atleti</CardTitle>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow className="bg-light-gray">
              <TableHead className="text-navy">Rank</TableHead>
              <TableHead className="text-navy">Nome</TableHead>
              <TableHead className="text-navy">Punti</TableHead>
              <TableHead className="text-navy">Risultato Recente</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {athletes.map((athlete) => (
              <TableRow key={athlete.rank} className="hover:bg-bright-red hover:bg-opacity-20">
                <TableCell className="text-white">{athlete.rank}</TableCell>
                <TableCell className="text-white">{athlete.name}</TableCell>
                <TableCell className="text-white">{athlete.points}</TableCell>
                <TableCell className="text-white">{athlete.recentResult}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
};

export default Leaderboard;

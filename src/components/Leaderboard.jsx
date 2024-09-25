import React from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Typography } from '@mui/material';

const athletes = [
  { rank: 1, name: 'Gordon Ryan', points: 1000, recentResult: 'Gold at ADCC 2022' },
  { rank: 2, name: 'André Galvão', points: 950, recentResult: 'Silver at IBJJF Worlds 2023' },
  { rank: 3, name: 'Marcus Almeida', points: 900, recentResult: 'Gold at IBJJF Euros 2023' },
  { rank: 4, name: 'Nicholas Meregali', points: 850, recentResult: 'Bronze at ADCC 2022' },
  { rank: 5, name: 'Felipe Pena', points: 800, recentResult: 'Silver at IBJJF Pans 2023' },
];

const Leaderboard = () => {
  return (
    <Paper className="p-4 bg-navy-900 text-white">
      <Typography variant="h6" className="mb-4">Leaderboard Atleti</Typography>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow className="bg-navy-800">
              <TableCell className="text-white">Rank</TableCell>
              <TableCell className="text-white">Nome</TableCell>
              <TableCell className="text-white">Punti</TableCell>
              <TableCell className="text-white">Risultato Recente</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {athletes.map((athlete) => (
              <TableRow key={athlete.rank} className="hover:bg-navy-700">
                <TableCell className="text-white">{athlete.rank}</TableCell>
                <TableCell className="text-white">{athlete.name}</TableCell>
                <TableCell className="text-white">{athlete.points}</TableCell>
                <TableCell className="text-white">{athlete.recentResult}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Paper>
  );
};

export default Leaderboard;
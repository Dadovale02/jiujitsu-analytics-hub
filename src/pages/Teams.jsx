import React from 'react';
import { Link } from 'react-router-dom';
import { NavBar } from '../components/NavBar';
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { useQuery } from '@tanstack/react-query';
import { teamsData } from '../data/teamsData';

const fetchTeams = () => {
  // Simulate an API call
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(teamsData);
    }, 500);
  });
};

const Teams = () => {
  const { data: teams, isLoading, error } = useQuery({
    queryKey: ['teams'],
    queryFn: fetchTeams,
  });

  if (isLoading) return <div className="text-white">Loading...</div>;
  if (error) return <div className="text-white">Error: {error.message}</div>;

  return (
    <div className="min-h-screen bg-navy text-white">
      <NavBar />
      <main className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold text-center mb-8 text-bright-red">Team di Brazilian Jiu-Jitsu</h1>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {teams.map((team) => (
            <Link to={`/teams/${team.id}`} key={team.id}>
              <Card className="bg-light-gray text-navy hover:bg-bright-red hover:text-white transition-colors">
                <CardHeader>
                  <CardTitle className="text-bright-red">{team.name}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>Sede: {team.headquarters}</p>
                  <p>Anno di fondazione: {team.foundedYear}</p>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </main>
    </div>
  );
};

export default Teams;
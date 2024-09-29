import React from 'react';
import { Link } from 'react-router-dom';
import { NavBar } from '../components/NavBar';
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { teamsData } from '../data/teamsData';

const Teams = () => {
  return (
    <div className="min-h-screen bg-navy text-white">
      <NavBar />
      <main className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold text-center mb-8 text-bright-red">Team di Brazilian Jiu-Jitsu</h1>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {teamsData.map((team) => (
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
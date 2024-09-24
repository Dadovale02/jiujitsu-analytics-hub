import React from 'react';
import { Link } from 'react-router-dom';
import { NavBar } from '../components/NavBar';
import { CompetitionStats } from '../components/CompetitionStats';
import { AthleteStats } from '../components/AthleteStats';
import { TeamStats } from '../components/TeamStats';

const Index = () => {
  return (
    <div className="min-h-screen bg-black text-red-500">
      <NavBar />
      <main className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold text-center mb-8 text-red-600">JiuJitsuData</h1>
        <div className="space-y-12">
          <Link to="/competitions" className="block">
            <CompetitionStats />
          </Link>
          <Link to="/athletes" className="block">
            <AthleteStats />
          </Link>
          <Link to="/teams" className="block">
            <TeamStats />
          </Link>
        </div>
      </main>
    </div>
  );
};

export default Index;

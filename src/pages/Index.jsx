import React from 'react';
import { NavBar } from '../components/NavBar';
import { CompetitionStats } from '../components/CompetitionStats';
import { AthleteStats } from '../components/AthleteStats';
import { AllTimeStats } from '../components/AllTimeStats';

const Index = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      <NavBar />
      <main className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold text-center mb-8">JiuJitsuData</h1>
        <div className="space-y-12">
          <CompetitionStats />
          <AthleteStats />
          <AllTimeStats />
        </div>
      </main>
    </div>
  );
};

export default Index;

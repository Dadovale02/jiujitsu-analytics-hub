import React from 'react';
import { NavBar } from '../components/NavBar';
import { TopAthletes } from '../components/TopAthletes';
import BannerSection from '../components/BannerSection';
import Dashboard from '../components/Dashboard';

const Index = () => {
  return (
    <div className="min-h-screen bg-black text-red-500">
      <NavBar />
      <main className="container mx-auto px-4 py-8">
        <h1 className="text-6xl font-bold text-center mb-8 text-red-600">JiuJitsuData</h1>
        <TopAthletes />
        <div className="mt-12">
          <h2 className="text-3xl font-bold mb-4 text-red-600">Esplora le Statistiche</h2>
          <BannerSection />
        </div>
        <Dashboard />
      </main>
    </div>
  );
};

export default Index;

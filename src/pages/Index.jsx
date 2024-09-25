import React from 'react';
import { NavBar } from '../components/NavBar';
import { TopAthletes } from '../components/TopAthletes';
import BannerSection from '../components/BannerSection';
import Dashboard from '../components/Dashboard';
import InteractiveTimeline from '../components/InteractiveTimeline';
import Leaderboard from '../components/Leaderboard';

const Index = () => {
  return (
    <div className="min-h-screen bg-navy-900 text-white">
      <NavBar />
      <main className="container mx-auto px-4 py-8">
        <h1 className="text-6xl font-bold text-center mb-8 text-red-500">JiuJitsuData</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <TopAthletes />
          <div>
            <h2 className="text-3xl font-bold mb-4 text-red-500">Video in Evidenza</h2>
            <div className="aspect-w-16 aspect-h-9">
              <iframe
                src="https://www.youtube.com/embed/dQw4w9WgXcQ"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="w-full h-full"
              ></iframe>
            </div>
          </div>
        </div>
        <div className="mt-12">
          <h2 className="text-3xl font-bold mb-4 text-red-500">Esplora le Statistiche</h2>
          <BannerSection />
        </div>
        <Dashboard />
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8">
          <InteractiveTimeline />
          <Leaderboard />
        </div>
      </main>
    </div>
  );
};

export default Index;

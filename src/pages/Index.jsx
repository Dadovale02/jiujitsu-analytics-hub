import React from 'react';
import { NavBar } from '../components/NavBar';
import { TopAthletes } from '../components/TopAthletes';
import BannerSection from '../components/BannerSection';
import CompetitionStats from '../components/CompetitionStats';
import InteractiveTimeline from '../components/InteractiveTimeline';
import Leaderboard from '../components/Leaderboard';

const Index = () => {
  return (
    <div className="min-h-screen bg-white text-navy">
      <NavBar />
      <main className="container mx-auto px-4 py-8">
        <h1 className="text-6xl font-bold text-center mb-8 text-bright-red">JiuJitsuData</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="md:col-span-2">
            <h2 className="text-3xl font-bold mb-4 text-bright-red">Match in Evidenza</h2>
            <div className="aspect-w-16 aspect-h-9">
              <iframe
                src="https://www.youtube.com/embed/HkwFwGYtqfk?start=389"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="w-full h-[400px]"
              ></iframe>
            </div>
          </div>
          <div>
            <CompetitionStats />
          </div>
          <TopAthletes />
        </div>
        <div className="mt-12">
          <h2 className="text-3xl font-bold mb-4 text-bright-red">Esplora le Statistiche</h2>
          <BannerSection />
        </div>
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8">
          <InteractiveTimeline />
          <Leaderboard />
        </div>
      </main>
    </div>
  );
};

export default Index;
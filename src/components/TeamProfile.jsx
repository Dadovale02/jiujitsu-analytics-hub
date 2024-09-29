import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { NavBar } from './NavBar';
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Instagram, Facebook, Twitter, Globe } from 'lucide-react';

const TeamProfile = ({ teamsData }) => {
  const { id } = useParams();
  const team = teamsData.find(t => t.id === id);

  if (!team) {
    return <div className="text-white">Team non trovato</div>;
  }

  return (
    <div className="min-h-screen bg-navy text-white">
      <NavBar />
      <main className="container mx-auto px-4 py-8">
        <Card className="bg-light-gray text-navy">
          <CardHeader className="flex flex-col items-center">
            <img 
              src={team.logo} 
              alt={`${team.name} logo`} 
              className="w-32 h-32 rounded-full mb-4 mx-auto object-cover"
              onError={(e) => {
                e.target.onerror = null;
                e.target.src = "/placeholder.svg";
              }}
            />
            <CardTitle className="text-3xl font-bold text-bright-red">{team.name}</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-xl mb-4">Anno di Fondazione: {team.foundedYear} | Sede: {team.headquarters}</p>
            
            <h2 className="text-2xl font-semibold mt-6 mb-2 text-bright-red">Storia del Team</h2>
            <p>{team.history}</p>

            <h2 className="text-2xl font-semibold mt-6 mb-2 text-bright-red">Atleti Principali</h2>
            <ul className="list-disc list-inside">
              {team.mainAthletes.map((athlete, index) => (
                <li key={index}>
                  <Link to={`/athletes/${athlete.id}`} className="text-lime hover:underline">
                    {athlete.name}
                  </Link>
                </li>
              ))}
            </ul>

            <h2 className="text-2xl font-semibold mt-6 mb-2 text-bright-red">Risultati nelle Competizioni</h2>
            <ul className="list-disc list-inside">
              {team.achievements.map((achievement, index) => (
                <li key={index}>{achievement}</li>
              ))}
            </ul>

            <h2 className="text-2xl font-semibold mt-6 mb-2 text-bright-red">Tecniche Distintive</h2>
            <p>{team.distinctiveTechniques}</p>

            <h2 className="text-2xl font-semibold mt-6 mb-2 text-bright-red">Accademie Affiliate</h2>
            <ul className="list-disc list-inside">
              {team.affiliatedAcademies.map((academy, index) => (
                <li key={index}>{academy.name} - {academy.location}</li>
              ))}
            </ul>

            <h2 className="text-2xl font-semibold mt-6 mb-2 text-bright-red">Social Media e Sito Web</h2>
            <div className="flex space-x-4">
              {team.socialMedia.instagram && (
                <a href={`https://www.instagram.com/${team.socialMedia.instagram}`} target="_blank" rel="noopener noreferrer" className="text-bright-red hover:text-white">
                  <Instagram className="h-6 w-6" />
                </a>
              )}
              {team.socialMedia.facebook && (
                <a href={`https://www.facebook.com/${team.socialMedia.facebook}`} target="_blank" rel="noopener noreferrer" className="text-bright-red hover:text-white">
                  <Facebook className="h-6 w-6" />
                </a>
              )}
              {team.socialMedia.twitter && (
                <a href={`https://www.twitter.com/${team.socialMedia.twitter}`} target="_blank" rel="noopener noreferrer" className="text-bright-red hover:text-white">
                  <Twitter className="h-6 w-6" />
                </a>
              )}
              {team.website && (
                <a href={team.website} target="_blank" rel="noopener noreferrer" className="text-bright-red hover:text-white">
                  <Globe className="h-6 w-6" />
                </a>
              )}
            </div>
          </CardContent>
        </Card>
      </main>
    </div>
  );
};

export default TeamProfile;
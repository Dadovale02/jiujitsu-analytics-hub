import React from 'react';
import { useParams } from 'react-router-dom';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Instagram, Facebook, Twitter } from 'lucide-react';

const athletesData = [
  {
    id: 1,
    name: "Gordon Ryan",
    nickname: "The King",
    nationality: "American",
    image: "/images.jpeg",
    birthDate: "July 8, 1995",
    age: 28,
    weight: "99 kg",
    height: "188 cm",
    belt: "Black Belt",
    team: "New Wave Jiu-Jitsu",
    record: {
      wins: 137,
      losses: 9,
      draws: 3,
      submissions: 89
    },
    bio: "Gordon Ryan is an American Brazilian Jiu-Jitsu (BJJ) black belt competitor and instructor. He is widely regarded as one of the best grapplers of all time and has won multiple ADCC and IBJJF championships.",
    recentCompetitions: [
      { name: "ADCC 2022", result: "Gold", opponent: "André Galvão" },
      { name: "Who's Number One", result: "Win", opponent: "Felipe Pena" },
      { name: "IBJJF Pan American Championship", result: "Gold", opponent: "Various" }
    ],
    techniques: {
      submissions: ["Rear Naked Choke", "Triangle", "Armbar"],
      takedowns: ["Single Leg", "Double Leg"],
      sweeps: ["Butterfly Sweep", "X-Guard Sweep"]
    },
    socialMedia: {
      instagram: "gordonlovesjiujitsu",
      facebook: "gordonryanbjj",
      twitter: "gordonryan"
    }
  },
  // Add more athletes here...
];

const AthleteProfile = () => {
  const { id } = useParams();
  const athlete = athletesData.find(a => a.id === parseInt(id));

  if (!athlete) {
    return <div>Athlete not found</div>;
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <Card className="mb-8">
        <CardHeader>
          <div className="flex items-center">
            <img 
              src={athlete.image} 
              alt={athlete.name} 
              className="w-32 h-32 rounded-full mr-4 object-cover"
              onError={(e) => {
                e.target.onerror = null;
                e.target.src = "/placeholder.svg";
              }}
            />
            <div>
              <CardTitle className="text-3xl font-bold">{athlete.name}</CardTitle>
              <p className="text-xl text-gray-600">{athlete.nickname} | {athlete.nationality}</p>
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <h2 className="text-2xl font-semibold mb-2">Record di Combattimenti</h2>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Vittorie</TableHead>
                <TableHead>Sconfitte</TableHead>
                <TableHead>Pareggi</TableHead>
                <TableHead>Submission</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableCell>{athlete.record.wins}</TableCell>
                <TableCell>{athlete.record.losses}</TableCell>
                <TableCell>{athlete.record.draws}</TableCell>
                <TableCell>{athlete.record.submissions}</TableCell>
              </TableRow>
            </TableBody>
          </Table>

          <h2 className="text-2xl font-semibold mt-6 mb-2">Informazioni Personali</h2>
          <Table>
            <TableBody>
              <TableRow>
                <TableCell className="font-semibold">Data di Nascita</TableCell>
                <TableCell>{athlete.birthDate}</TableCell>
                <TableCell className="font-semibold">Età</TableCell>
                <TableCell>{athlete.age}</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-semibold">Peso</TableCell>
                <TableCell>{athlete.weight}</TableCell>
                <TableCell className="font-semibold">Altezza</TableCell>
                <TableCell>{athlete.height}</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-semibold">Cintura</TableCell>
                <TableCell>{athlete.belt}</TableCell>
                <TableCell className="font-semibold">Team</TableCell>
                <TableCell>{athlete.team}</TableCell>
              </TableRow>
            </TableBody>
          </Table>

          <h2 className="text-2xl font-semibold mt-6 mb-2">Biografia</h2>
          <p>{athlete.bio}</p>

          <h2 className="text-2xl font-semibold mt-6 mb-2">Gare Recenti</h2>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Gara</TableHead>
                <TableHead>Risultato</TableHead>
                <TableHead>Avversario</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {athlete.recentCompetitions.map((comp, index) => (
                <TableRow key={index}>
                  <TableCell>{comp.name}</TableCell>
                  <TableCell>{comp.result}</TableCell>
                  <TableCell>{comp.opponent}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>

          <h2 className="text-2xl font-semibold mt-6 mb-2">Statistiche Tecniche</h2>
          <Table>
            <TableBody>
              <TableRow>
                <TableCell className="font-semibold">Submission Preferite</TableCell>
                <TableCell>{athlete.techniques.submissions.join(", ")}</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-semibold">Takedown Preferiti</TableCell>
                <TableCell>{athlete.techniques.takedowns.join(", ")}</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-semibold">Sweep Preferiti</TableCell>
                <TableCell>{athlete.techniques.sweeps.join(", ")}</TableCell>
              </TableRow>
            </TableBody>
          </Table>

          <h2 className="text-2xl font-semibold mt-6 mb-2">Social Media</h2>
          <div className="flex space-x-4">
            <a href={`https://www.instagram.com/${athlete.socialMedia.instagram}`} target="_blank" rel="noopener noreferrer">
              <Instagram className="h-6 w-6" />
            </a>
            <a href={`https://www.facebook.com/${athlete.socialMedia.facebook}`} target="_blank" rel="noopener noreferrer">
              <Facebook className="h-6 w-6" />
            </a>
            <a href={`https://www.twitter.com/${athlete.socialMedia.twitter}`} target="_blank" rel="noopener noreferrer">
              <Twitter className="h-6 w-6" />
            </a>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default AthleteProfile;
import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { TrophyIcon, Users2Icon, UsersIcon } from 'lucide-react';

const BannerItem = ({ title, description, icon, link }) => (
  <Link to={link}>
    <Card className="bg-red-900 text-white hover:bg-red-800 transition-colors">
      <CardHeader>
        <CardTitle className="flex items-center">
          {icon}
          <span className="ml-2">{title}</span>
        </CardTitle>
      </CardHeader>
      <CardContent>
        <p>{description}</p>
      </CardContent>
    </Card>
  </Link>
);

const BannerSection = () => {
  const banners = [
    {
      title: "Gare",
      description: "Statistiche dettagliate per tipo di torneo e anno",
      icon: <TrophyIcon className="h-6 w-6" />,
      link: "/competitions"
    },
    {
      title: "Team",
      description: "Squadre più vittoriose e i loro atleti di punta",
      icon: <Users2Icon className="h-6 w-6" />,
      link: "/teams"
    },
    {
      title: "Atleti",
      description: "Filtra per record, categoria di peso, cintura e paese",
      icon: <UsersIcon className="h-6 w-6" />,
      link: "/athletes"
    }
  ];

  return (
    <div className="grid gap-6 md:grid-cols-3">
      {banners.map((banner, index) => (
        <BannerItem key={index} {...banner} />
      ))}
    </div>
  );
};

export default BannerSection;
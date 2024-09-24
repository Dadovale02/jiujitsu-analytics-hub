import { HomeIcon, TrophyIcon, UsersIcon, Users2Icon } from "lucide-react";
import Index from "./pages/Index.jsx";
import Competitions from "./pages/Competitions.jsx";
import Athletes from "./pages/Athletes.jsx";
import Teams from "./pages/Teams.jsx";

export const navItems = [
  {
    title: "Home",
    to: "/",
    icon: <HomeIcon className="h-4 w-4" />,
    page: <Index />,
  },
  {
    title: "Gare",
    to: "/competitions",
    icon: <TrophyIcon className="h-4 w-4" />,
    page: <Competitions />,
  },
  {
    title: "Atleti",
    to: "/athletes",
    icon: <UsersIcon className="h-4 w-4" />,
    page: <Athletes />,
  },
  {
    title: "Team",
    to: "/teams",
    icon: <Users2Icon className="h-4 w-4" />,
    page: <Teams />,
  },
];

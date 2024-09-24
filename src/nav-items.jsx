import { HomeIcon, TrophyIcon, UsersIcon, BarChartIcon } from "lucide-react";
import Index from "./pages/Index.jsx";

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
    page: <Index />, // Per ora reindirizza alla home
  },
  {
    title: "Atleti",
    to: "/athletes",
    icon: <UsersIcon className="h-4 w-4" />,
    page: <Index />, // Per ora reindirizza alla home
  },
  {
    title: "All-Time",
    to: "/all-time",
    icon: <BarChartIcon className="h-4 w-4" />,
    page: <Index />, // Per ora reindirizza alla home
  },
];

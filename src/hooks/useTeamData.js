import { useQuery } from '@tanstack/react-query';
import { teamsData } from '../data/teamsData';
import { athletesData } from '../data/athletesData';

const fetchTeamData = (teamId) => {
  // Simulate an API call
  return new Promise((resolve) => {
    setTimeout(() => {
      const team = teamsData.find(t => t.id === teamId);
      if (team) {
        // Update main athletes
        const updatedMainAthletes = athletesData
          .filter(athlete => athlete.team === team.name)
          .map(athlete => ({ id: athlete.id, name: athlete.name }));
        resolve({ ...team, mainAthletes: updatedMainAthletes });
      } else {
        resolve(null);
      }
    }, 500); // Simulate network delay
  });
};

export const useTeamData = (teamId) => {
  return useQuery({
    queryKey: ['team', teamId],
    queryFn: () => fetchTeamData(teamId),
  });
};
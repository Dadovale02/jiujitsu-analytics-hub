import React from 'react';
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";

const competitions = [
  { year: 2023, name: 'IBJJF World Championship', result: 'Gold' },
  { year: 2022, name: 'ADCC World Championship', result: 'Silver' },
  { year: 2021, name: 'Pan American Championship', result: 'Gold' },
  { year: 2020, name: 'European Championship', result: 'Bronze' },
];

const InteractiveTimeline = () => {
  return (
    <Card className="bg-navy-900 text-white">
      <CardHeader>
        <CardTitle>Risultati Atleti nelle Competizioni Annuali</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {competitions.map((comp, index) => (
            <div key={index} className="flex items-center space-x-4">
              <div className={`w-4 h-4 rounded-full ${comp.result === 'Gold' ? 'bg-lime-500' : comp.result === 'Silver' ? 'bg-gray-400' : 'bg-red-500'}`}></div>
              <div className="flex-1">
                <p className="font-bold">{comp.year}</p>
                <p>{comp.name}</p>
                <p className={comp.result === 'Gold' ? 'text-lime-500' : comp.result === 'Silver' ? 'text-gray-400' : 'text-red-500'}>
                  {comp.result}
                </p>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default InteractiveTimeline;

import React from 'react';
import { Timeline, TimelineItem, TimelineConnector, TimelineContent, TimelineDot, TimelineSeparator } from '@mui/lab';
import { Typography, Paper } from '@mui/material';

const competitions = [
  { year: 2023, name: 'IBJJF World Championship', result: 'Gold' },
  { year: 2022, name: 'ADCC World Championship', result: 'Silver' },
  { year: 2021, name: 'Pan American Championship', result: 'Gold' },
  { year: 2020, name: 'European Championship', result: 'Bronze' },
];

const InteractiveTimeline = () => {
  return (
    <Paper className="p-4 bg-navy-900 text-white">
      <Typography variant="h6" className="mb-4">Risultati Atleti nelle Competizioni Annuali</Typography>
      <Timeline position="alternate">
        {competitions.map((comp, index) => (
          <TimelineItem key={index}>
            <TimelineSeparator>
              <TimelineDot color={comp.result === 'Gold' ? 'success' : comp.result === 'Silver' ? 'primary' : 'secondary'} />
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent>
              <Paper elevation={3} className="p-2 bg-navy-800">
                <Typography variant="h6" component="h1">
                  {comp.year}
                </Typography>
                <Typography>{comp.name}</Typography>
                <Typography color={comp.result === 'Gold' ? 'lime' : comp.result === 'Silver' ? 'gray' : 'red'}>
                  {comp.result}
                </Typography>
              </Paper>
            </TimelineContent>
          </TimelineItem>
        ))}
      </Timeline>
    </Paper>
  );
};

export default InteractiveTimeline;
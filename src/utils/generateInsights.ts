import type { Scenario } from '../types';

const keywords = {
  '20 runs': 65,
  '6 balls': 60,
  '2 wickets': 55,
  '1 wicket': 45,
  '10 runs': 80,
  '5 balls': 75,
  '1 ball': 90,
  'India': 5,
  'CSK': 8,
  'Mumbai': -3
};

export const generateInsight = (input: string): Scenario => {
  // Mock probability calculation
  let probability = 50;
  const words = input.toLowerCase().split(' ');
  
  words.forEach(word => {
    Object.entries(keywords).forEach(([key, value]) => {
      if (word.includes(key)) probability += value;
    });
  });
  
  probability = Math.max(5, Math.min(95, probability));

  // Mock analysis generation
  const analyses = [
    "High-pressure finish! Need quick boundaries. Strike rate above 200 required.",
    "Tough ask but doable. One big over can change everything.",
    "Edge of the seat! Need to target weaker bowler in the attack.",
    "Very challenging. Need extraordinary batting to pull this off.",
    "Comfortable chase. Batsmen can play their natural game.",
    "Perfect scenario for a hero. Looking for a match-winning cameo."
  ];
  
  const analysis = analyses[Math.floor(Math.random() * analyses.length)];

  return {
    input,
    analysis,
    winProbability: Math.round(probability)
  };
};

import { useState } from 'react';
import InputSection from './components/InputSection';
import OutputSection from './components/OutputSection';
import type { Scenario } from './types';
import { generateInsight } from './utils/generateInsights';

function App() {
  const [insight, setInsight] = useState<Scenario | null>(null);
  const [isGenerating, setIsGenerating] = useState(false);

  const handleGenerate = async (scenarioInput: string) => {
    setIsGenerating(true);
    await new Promise(resolve => setTimeout(resolve, 1500)); // Simulate AI
    const newInsight = generateInsight(scenarioInput);
    setInsight(newInsight);
    setIsGenerating(false);
  };

  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50 py-12 px-4 align-center">
      <div className="w-full max-w-4xl mx-auto">
        <header className="text-center mb-12 w-full">
          <h1 className="text-5xl font-black bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 bg-clip-text text-transparent mb-4 w-full">
            Sports Fan 360 : Fan Insight Generator
          </h1>
          <p className="text-xl text-gray-600 max-w-md mx-auto">
            Enter a match scenario and get instant AI-powered analysis & win probability
          </p>
        </header>

        <div className="space-y-8 w-full">
          <InputSection 
            onGenerate={handleGenerate}
            disabled={isGenerating}
          />
          
          {insight && (
            <OutputSection 
              scenario={insight}
              onReset={() => setInsight(null)}
            />
          )}
        </div>
      </div>
    </div>
  );
}

export default App;

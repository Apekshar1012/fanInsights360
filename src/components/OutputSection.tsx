import { Brain, RefreshCw } from 'lucide-react';
import type { Scenario } from '../types';

interface Props {
  scenario: Scenario;
  onReset: () => void;
}

const OutputSection = ({ scenario, onReset }: Props) => {
  const { analysis, winProbability } = scenario;

  return (
    <div className="bg-white/80 backdrop-blur-xl rounded-3xl p-8 shadow-2xl border border-white/50 animate-in slide-in-from-bottom-4 duration-500">
      <div className="flex items-start justify-between mb-6">
        <div className="flex items-center gap-3 p-3 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-2xl text-white">
          <Brain size={28} />
          <div>
            <h2 className="font-bold text-xl">AI Match Analysis</h2>
            <p className="text-sm opacity-90">SportsFan360 Insights Engine</p>
          </div>
        </div>
        <button
          onClick={onReset}
          className="p-3 hover:bg-gray-100 rounded-2xl transition-all hover:rotate-180 group"
          aria-label="Generate new insight"
        >
          <RefreshCw size={24} className="group-hover:rotate-180 transition-all" />
        </button>
      </div>

      {/* Analysis */}
      <div className="mb-8 p-6 bg-gradient-to-r from-indigo-50 to-purple-50 rounded-2xl border-l-4 border-indigo-500">
        <p className="text-lg leading-relaxed text-gray-800 whitespace-pre-wrap">
          "{analysis}"
        </p>
      </div>

      {/* Win Probability */}
      <div className="grid md:grid-cols-2 gap-6 p-6 bg-gradient-to-r from-emerald-50 to-blue-50 rounded-2xl border border-emerald-200/50">
        <div>
          <p className="text-sm font-medium text-gray-600 mb-2">Input Scenario:</p>
          <p className="font-mono bg-white px-4 py-2 rounded-xl text-sm text-black border">{scenario.input}</p>
        </div>
        <div className="text-center">
          <div className="text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-blue-600 mb-2">
            {winProbability}%
          </div>
          <p className="text-sm font-medium text-gray-600">Win Probability</p>
          <div className="w-full bg-gray-200 rounded-full h-2 mt-2">
            <div 
              className="bg-gradient-to-r from-emerald-500 to-blue-500 h-2 rounded-full transition-all duration-1000"
              style={{ width: `${winProbability}%` }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default OutputSection;

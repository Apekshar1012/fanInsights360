import { useState } from 'react';
import { Sparkles, Send } from 'lucide-react';

interface Props {
  onGenerate: (scenario: string) => Promise<void>;
  disabled: boolean;
}

const InputSection = ({ onGenerate, disabled }: Props) => {
  const [scenario, setScenario] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!scenario.trim()) return;
    await onGenerate(scenario);
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white/70 backdrop-blur-xl text-black rounded-3xl p-8 shadow-2xl border border-white/50">
      <div className="relative">
        <Sparkles className="absolute left-4 top-1/2 -translate-y-1/2 text-indigo-500 w-6 h-6" />
        <textarea
          value={scenario}
          onChange={(e) => setScenario(e.target.value)}
          placeholder="e.g., 'India needs 20 runs in 6 balls, 2 wickets left' or 'CSK 180/3 in 15 overs chasing 200'"
          rows={4}
          disabled={disabled}
          className="w-full pl-12 pr-6 py-4 bg-white/50 border-2 border-indigo-200/50 rounded-2xl focus:border-indigo-400 focus:outline-none focus:ring-4 focus:ring-indigo-100/50 resize-none text-lg placeholder-gray-500 disabled:opacity-50 disabled:cursor-not-allowed transition-all"
        />
        <button
          type="submit"
          disabled={disabled || !scenario.trim()}
          className="absolute right-4 bottom-4 group disabled:opacity-50 disabled:cursor-not-allowed"
        >
          <Send 
            size={24} 
            className="transition-all group-hover:scale-110 group-hover:rotate-12 text-indigo-600 group-hover:text-indigo-700" 
          />
        </button>
      </div>
      
      {disabled && (
        <div className="mt-4 flex items-center gap-2 text-sm text-indigo-600 font-medium">
          <div className="w-2 h-2 bg-indigo-500 rounded-full animate-ping" />
          Generating insights...
        </div>
      )}
    </form>
  );
};

export default InputSection;

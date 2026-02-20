import { useState } from 'react';

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
  <form onSubmit={handleSubmit} className="relative group">
    <div className="bg-gradient-to-r from-gray-900/95 to-black/95 backdrop-blur-2xl border border-emerald-500/30 rounded-3xl p-1 shadow-2xl shadow-emerald-500/25 hover:shadow-emerald-400/40 transition-all duration-500">
      <div className="bg-gradient-to-b from-emerald-900/80 to-indigo-900/80 border border-emerald-400/20 rounded-3xl p-8 relative overflow-hidden">
        {/* Stadium Lights Effect */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_-10%,rgba(16,185,129,0.3),transparent)] opacity-50" />
        
        {/* Sport Emojis */}
        <div className="absolute top-4 left-4 flex gap-1 text-2xl">
          <span className="animate-pulse">🏏</span>
          <span className="animate-bounce delay-300">⚽</span>
        </div>
        
        <textarea
          value={scenario}
          onChange={(e) => setScenario(e.target.value)}
          placeholder="India needs 20 runs in 6 balls, 2 wickets left... OR Man City attacking in 90th minute..."
          rows={4}
          disabled={disabled}
          className="w-full h-[160px] bg-transparent/50 backdrop-blur-sm text-white placeholder-white/70 text-lg font-semibold p-6 rounded-2xl border-2 border-white/20 focus:border-emerald-400 focus:outline-none resize-none"
        />
        
        <button
          type="submit"
          disabled={disabled || !scenario.trim()}
          className="group/btn absolute bottom-6 right-6 bg-gradient-to-r from-emerald-500 to-amber-500 hover:from-emerald-400 hover:to-amber-400 text-black font-bold px-8 py-4 rounded-2xl shadow-2xl hover:shadow-emerald-500/50 transform hover:scale-105 hover:-rotate-3 transition-all duration-300 disabled:opacity-40"
        >
          {disabled ? (
            <>
              <div className="w-6 h-6 border-2 border-black/30 border-t-black rounded-full animate-spin inline-block mr-2" />
              LIVE ANALYSIS
            </>
          ) : (
            'GENERATE INSIGHT ⚡'
          )}
        </button>
      </div>
    </div>
  </form>
);

};

export default InputSection;

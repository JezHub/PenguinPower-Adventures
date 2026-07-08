import { Trophy, RefreshCw, Home, Star, Gift, Smile } from 'lucide-react';
import { Story } from '../data/stories';

interface StorySummaryProps {
  story: Story;
  visitedNodes: string[]; // List of node IDs visited in order
  nodeScores: Record<string, number>; // Mapping of nodeId -> star score (0 to 5)
  onReplayStory: () => void;
  onGoToHome: () => void;
}

export default function StorySummary({
  story,
  visitedNodes,
  nodeScores,
  onReplayStory,
  onGoToHome,
}: StorySummaryProps) {
  // Count how many 5-star pages they got!
  const totalPages = visitedNodes.length;
  const scoresArray = visitedNodes.map((id) => nodeScores[id] || 0);
  const fiveStarPagesCount = scoresArray.filter((score) => score === 5).length;
  const averageStars = totalPages > 0 
    ? (scoresArray.reduce((acc, curr) => acc + curr, 0) / totalPages).toFixed(1)
    : '0';

  // Determine if this is a victory or other ending
  const lastNodeId = visitedNodes[visitedNodes.length - 1];
  const lastNode = story.nodes[lastNodeId];
  const isVictory = lastNode?.endingType === 'victory';
  const isFunnyTrap = lastNode?.endingType === 'funny_trap';

  return (
    <div className="w-full max-w-3xl mx-auto px-4 py-8">
      {/* Celebration Header */}
      <div className="bg-[#FFFAF0] rounded-3xl border-4 border-black p-8 shadow-[8px_8px_0_0_#000] text-center mb-10 relative overflow-hidden">
        {/* Banner decorations */}
        <div className="absolute top-0 left-0 right-0 h-4 bg-gradient-to-r from-[#FF7675] via-[#F7D794] to-[#6C5CE7]" />
        
        <div className="text-6xl my-4 animate-bounce">
          {isVictory ? '🏆✨🎉' : isFunnyTrap ? '🥪💤🤪' : '🎒☃️❄️'}
        </div>

        <h2 className="text-3xl md:text-4xl font-black text-slate-900 mb-2 leading-snug">
          {isVictory ? 'Awesome Adventure Completed!' : 'You Got Into a Funny Adventure!'}
        </h2>
        <p className="text-[#6C5CE7] font-black text-lg md:text-xl uppercase tracking-wider">
          "{story.title}"
        </p>

        {/* Ending Specific Card */}
        <div className="my-6 p-6 bg-white rounded-2xl border-2 border-black text-left shadow-[4px_4px_0_0_#000]">
          <h4 className="font-black text-slate-900 text-lg mb-2 flex items-center gap-2">
            <Smile className="w-5 h-5 text-[#6C5CE7]" />
            Your Adventure Result:
          </h4>
          <p className="text-slate-800 font-bold text-sm md:text-base leading-relaxed">
            {lastNode?.text}
          </p>
        </div>

        {/* Reading Report Card */}
        <div className="bg-[#F7D794] rounded-2xl border-4 border-black p-6 grid grid-cols-1 md:grid-cols-3 gap-6 my-8 shadow-[4px_4px_0_0_#000]">
          <div className="text-center p-2">
            <div className="text-xs font-black text-slate-800 uppercase tracking-widest">Pages Read</div>
            <div className="text-4xl font-black text-slate-950 mt-1">{totalPages}</div>
            <p className="text-xs text-slate-800 font-bold mt-1">Excellent Practice!</p>
          </div>
          
          <div className="text-center p-2 border-y-2 md:border-y-0 md:border-x-2 border-dashed border-black/30">
            <div className="text-xs font-black text-slate-800 uppercase tracking-widest">5-Star Badges</div>
            <div className="text-4xl font-black text-slate-950 flex items-center justify-center gap-1 mt-1">
              {fiveStarPagesCount} <Star className="w-8 h-8 fill-[#F9D423] text-black inline" />
            </div>
            <p className="text-xs text-slate-800 font-bold mt-1">Flawless Pronunciation!</p>
          </div>

          <div className="text-center p-2">
            <div className="text-xs font-black text-slate-800 uppercase tracking-widest">Average Stars</div>
            <div className="text-4xl font-black text-[#6C5CE7] mt-1">{averageStars} / 5</div>
            <p className="text-xs text-slate-800 font-bold mt-1">Overall Reading Score</p>
          </div>
        </div>

        {/* Mummy Penguin's Feedback Box */}
        <div className="bg-[#FEA47F] p-6 rounded-2xl border-2 border-black text-left flex gap-4 items-start shadow-[4px_4px_0_0_#000]">
          <div className="text-4xl shrink-0">🍰</div>
          <div>
            <h4 className="font-black text-slate-950 mb-1">Mummy Penguin says:</h4>
            <p className="text-slate-900 font-bold text-sm leading-relaxed">
              "Oh, my dear little bookworm! I am incredibly proud of your reading today. You earned <span className="font-black text-[#6C5CE7] bg-white px-2 py-0.5 rounded border border-black shadow-[1px_1px_0_0_#000]">{fiveStarPagesCount} perfect 5-star awards</span>! I've baked you a giant virtual batch of peanut butter chocolate-chip muffins to reward your effort. Keep up the amazing work!"
            </p>
          </div>
        </div>

        {/* Journey History Path */}
        <div className="mt-8 text-left">
          <h3 className="font-black text-slate-900 text-lg mb-4 flex items-center gap-2">
            <Gift className="w-5 h-5 text-[#6C5CE7]" />
            Your Adventure Path Summary:
          </h3>
          <div className="space-y-3">
            {visitedNodes.map((nodeId, index) => {
              const node = story.nodes[nodeId];
              const score = nodeScores[nodeId] || 0;
              if (!node) return null;
              
              return (
                <div
                  key={nodeId}
                  className="bg-white p-4 rounded-xl border-2 border-black flex justify-between items-center shadow-[3px_3px_0_0_#000]"
                >
                  <div className="flex items-center gap-3">
                    <span className="bg-[#A29BFE] text-white font-black text-xs px-2.5 py-1 rounded-lg border-2 border-black">
                      Page {index + 1}
                    </span>
                    <span className="font-black text-slate-900 text-sm md:text-base">
                      {node.title}
                    </span>
                  </div>

                  <div className="flex gap-0.5">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star
                        key={i}
                        className={`w-4 h-4 ${
                          i < score
                            ? 'fill-[#F9D423] text-black'
                            : 'text-slate-200'
                        }`}
                      />
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Play Again controls */}
        <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
          <button
            id="btn-replay-story"
            onClick={onReplayStory}
            className="bg-[#55E6C1] hover:bg-[#40cfaa] text-black font-black text-lg py-4 px-6 rounded-2xl border-4 border-black shadow-[4px_4px_0_0_#000] hover:shadow-[2px_2px_0_0_#000] hover:translate-x-0.5 hover:translate-y-0.5 transition-all flex items-center justify-center gap-2 active:scale-95 cursor-pointer"
          >
            <RefreshCw className="w-5 h-5" />
            Try Another Path!
          </button>
          
          <button
            id="btn-home-from-summary"
            onClick={onGoToHome}
            className="bg-[#6C5CE7] hover:bg-[#5b4cc4] text-white font-black text-lg py-4 px-6 rounded-2xl border-4 border-black shadow-[4px_4px_0_0_#000] hover:shadow-[2px_2px_0_0_#000] hover:translate-x-0.5 hover:translate-y-0.5 transition-all flex items-center justify-center gap-2 active:scale-95 cursor-pointer"
          >
            <Home className="w-5 h-5" />
            Choose Another Story
          </button>
        </div>
      </div>
    </div>
  );
}

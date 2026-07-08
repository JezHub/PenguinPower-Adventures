import { BookOpen, Star, HelpCircle } from 'lucide-react';
import { Story } from '../data/stories';

interface StorySelectionProps {
  stories: Story[];
  onSelectStory: (storyId: string) => void;
}

export default function StorySelection({ stories, onSelectStory }: StorySelectionProps) {
  return (
    <div className="w-full max-w-5xl mx-auto px-4 py-8">
      {/* Hero Welcome Header */}
      <div className="text-center mb-10 relative">
        <div className="absolute -top-6 left-1/2 -translate-x-1/2 text-5xl animate-bounce">
          📚✨
        </div>
        <h1 className="text-4xl md:text-5xl font-black tracking-tight text-slate-900 mt-6 mb-3 font-sans">
          Penguinpower <span className="text-white bg-[#6C5CE7] px-4 py-1 rounded-2xl border-4 border-black inline-block rotate-1 shadow-[4px_4px_0_0_rgba(0,0,0,1)]">Reading</span> Adventures!
        </h1>
        <p className="text-lg md:text-xl text-slate-700 max-w-2xl mx-auto font-black leading-relaxed mt-4">
          Choose a funny story, practice your reading, and decide what the characters do! Can you solve the mysteries and earn 5 stars? ⭐️
        </p>
      </div>

      {/* Stories Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {stories.map((story, idx) => {
          // Playful rotating angles for comic-book charm
          const rotations = ['-rotate-1', 'rotate-1', '-rotate-2', 'rotate-2', 'rotate-0'];
          const rotateClass = rotations[idx % rotations.length];

          // Difficulty pill styles with Vibrant Palette theme colors
          const diffStyles = {
            Easy: 'bg-[#55E6C1] text-slate-950 border-black',
            Medium: 'bg-[#F7D794] text-slate-950 border-black',
            Fun: 'bg-[#FEA47F] text-slate-950 border-black',
          }[story.difficulty];

          return (
            <div
              key={story.id}
              id={`story-card-${story.id}`}
              className={`bg-white rounded-3xl border-4 border-black p-6 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between ${rotateClass}`}
            >
              <div>
                {/* Header Info */}
                <div className="flex justify-between items-start mb-4">
                  <div className="text-5xl p-2.5 bg-[#FAB1A0] rounded-2xl border-2 border-black shadow-[3px_3px_0px_0px_rgba(0,0,0,1)]">
                    {story.coverEmoji}
                  </div>
                  <span className={`text-xs font-black px-3 py-1.5 rounded-full border-2 shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] ${diffStyles}`}>
                    {story.difficulty} Mode
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-xl md:text-2xl font-black text-slate-900 mb-3 leading-snug">
                  {story.title}
                </h3>

                {/* Description */}
                <p className="text-slate-700 text-sm md:text-base font-bold mb-6 leading-relaxed line-clamp-4">
                  {story.description}
                </p>
              </div>

              {/* Card Footer / Action */}
              <button
                id={`btn-start-${story.id}`}
                onClick={() => onSelectStory(story.id)}
                className="w-full bg-[#6C5CE7] hover:bg-[#5b4ec7] text-white font-black text-lg py-4 px-6 rounded-2xl border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] hover:translate-x-0.5 hover:translate-y-0.5 transition-all flex items-center justify-center gap-3 active:scale-95 cursor-pointer"
              >
                <BookOpen className="w-5 h-5" />
                Start Story!
              </button>
            </div>
          );
        })}
      </div>

      {/* Meet the Penguinpower Crew Quick Cards */}
      <div className="mt-16 bg-[#FAB1A0] rounded-3xl border-4 border-black p-8 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] relative overflow-hidden">
        <div className="absolute right-4 top-4 text-7xl opacity-10 font-black">
          🐧🦏🦘🐆
        </div>
        <h3 className="text-2xl font-black text-slate-900 mb-6 flex items-center gap-2">
          <Star className="w-6 h-6 fill-yellow-400 text-yellow-500 animate-spin" />
          Meet the Adventure Crew!
        </h3>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          <div className="bg-[#55E6C1] p-4 rounded-2xl border-2 border-black shadow-[3px_3px_0px_0px_rgba(0,0,0,1)]">
            <div className="text-2xl font-black text-slate-950 mb-1">🐧 Penguin</div>
            <p className="text-xs text-slate-900 font-bold">The brave leader from Penguinpower! He can regenerate and has awesome special powers.</p>
          </div>
          <div className="bg-[#FEA47F] p-4 rounded-2xl border-2 border-black shadow-[3px_3px_0px_0px_rgba(0,0,0,1)]">
            <div className="text-2xl font-black text-slate-950 mb-1">🦏 Rhino</div>
            <p className="text-xs text-slate-900 font-bold">A super strong rhino who is completely obsessed with eating yummy sandwiches!</p>
          </div>
          <div className="bg-[#A29BFE] p-4 rounded-2xl border-2 border-black shadow-[3px_3px_0px_0px_rgba(0,0,0,1)]">
            <div className="text-2xl font-black text-slate-950 mb-1">🦘 Kanga</div>
            <p className="text-xs text-slate-900 font-bold">A super-genius kangaroo who invents crazy machines and says really silly things!</p>
          </div>
          <div className="bg-white p-4 rounded-2xl border-2 border-black shadow-[3px_3px_0px_0px_rgba(0,0,0,1)]">
            <div className="text-2xl font-black text-slate-950 mb-1">🐆 Leopard</div>
            <p className="text-xs text-slate-900 font-bold">The ultra-powerful mountain friend who protects the crew with mighty ice powers!</p>
          </div>
        </div>

        {/* Mummy Penguin & Friends Mention */}
        <div className="mt-8 pt-6 border-t-2 border-dashed border-black/20 text-sm text-slate-900 font-black flex flex-col sm:flex-row gap-4 justify-between items-center">
          <div>
            🍰 <strong className="text-slate-950">Mummy Penguin</strong> keeps everyone fed and cozy, while friends like <strong className="text-[#6C5CE7]">Waddle Wrecking Ball</strong>, <strong className="text-[#FF7675]">Surprise</strong>, and <strong className="text-emerald-800">Cheeky</strong> make everything hilarious!
          </div>
          <div className="bg-white text-slate-900 px-4 py-2 rounded-xl font-black text-xs border-2 border-black flex items-center gap-1.5 shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
            <HelpCircle className="w-4 h-4 text-[#6C5CE7]" /> Aimed at readers 7-10 years old!
          </div>
        </div>
      </div>
    </div>
  );
}

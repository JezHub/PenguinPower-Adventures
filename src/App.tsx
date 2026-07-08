import { useState, useEffect } from 'react';
import { BookOpen, Star, RefreshCw, Trophy, Home, HelpCircle } from 'lucide-react';
import { STORIES, Story } from './data/stories';
import StorySelection from './components/StorySelection';
import StoryCard from './components/StoryCard';
import StorySummary from './components/StorySummary';

type Screen = 'selection' | 'playing' | 'summary';

export default function App() {
  const [activeScreen, setActiveScreen] = useState<Screen>('selection');
  const [activeStory, setActiveStory] = useState<Story | null>(null);
  const [currentNodeId, setCurrentNodeId] = useState<string>('');
  const [visitedNodes, setVisitedNodes] = useState<string[]>([]);
  const [nodeScores, setNodeScores] = useState<Record<string, number>>({});

  // Global persistent statistics
  const [storiesCompleted, setStoriesCompleted] = useState<number>(0);
  const [perfectFiveStarPages, setPerfectFiveStarPages] = useState<number>(0);

  // Load global scores on mount
  useEffect(() => {
    const savedCompleted = localStorage.getItem('penguinpower_stories_completed');
    const savedPerfect = localStorage.getItem('penguinpower_perfect_pages');
    
    if (savedCompleted) {
      setStoriesCompleted(parseInt(savedCompleted, 10));
    }
    if (savedPerfect) {
      setPerfectFiveStarPages(parseInt(savedPerfect, 10));
    }
  }, []);

  // Save global stats helper
  const updateGlobalStats = (finalScores: Record<string, number>) => {
    // 1. Increment completed stories count
    const nextCompleted = storiesCompleted + 1;
    setStoriesCompleted(nextCompleted);
    localStorage.setItem('penguinpower_stories_completed', nextCompleted.toString());

    // 2. Count new perfect 5-star pages in this run
    const currentRunPerfectPages = Object.values(finalScores).filter((s) => s === 5).length;
    const nextPerfect = perfectFiveStarPages + currentRunPerfectPages;
    setPerfectFiveStarPages(nextPerfect);
    localStorage.setItem('penguinpower_perfect_pages', nextPerfect.toString());
  };

  const handleSelectStory = (storyId: string) => {
    const story = STORIES.find((s) => s.id === storyId);
    if (story) {
      setActiveStory(story);
      setCurrentNodeId(story.startNodeId);
      setVisitedNodes([story.startNodeId]);
      setNodeScores({});
      setActiveScreen('playing');

      // Play start sound or reset any speech queue
      if ('speechSynthesis' in window) {
        window.speechSynthesis.cancel();
      }
    }
  };

  const handleChoiceSelected = (nextNodeId: string, starsEarned: number) => {
    if (!activeStory) return;

    // Save stars earned on the page they just completed
    const updatedScores = { ...nodeScores, [currentNodeId]: starsEarned };
    setNodeScores(updatedScores);

    if (nextNodeId) {
      // Advance to next page
      setCurrentNodeId(nextNodeId);
      setVisitedNodes((prev) => [...prev, nextNodeId]);
    } else {
      // It was an ending page, transition to summary screen
      updateGlobalStats(updatedScores);
      setActiveScreen('summary');
    }
  };

  const handleReplayStory = () => {
    if (!activeStory) return;
    setCurrentNodeId(activeStory.startNodeId);
    setVisitedNodes([activeStory.startNodeId]);
    setNodeScores({});
    setActiveScreen('playing');
  };

  const handleGoToHome = () => {
    setActiveStory(null);
    setCurrentNodeId('');
    setVisitedNodes([]);
    setNodeScores({});
    setActiveScreen('selection');
  };

  // Reset entire progress (useful for classrooms or family siblings)
  const handleResetAllProgress = () => {
    if (window.confirm("Do you want to reset all your reading stars and trophies to start brand new?")) {
      setStoriesCompleted(0);
      setPerfectFiveStarPages(0);
      localStorage.removeItem('penguinpower_stories_completed');
      localStorage.removeItem('penguinpower_perfect_pages');
      handleGoToHome();
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#FFFAF0] text-[#2D3436] pb-16 selection:bg-[#55E6C1]/30">
      
      {/* Vibrant Header Banner */}
      <header className="bg-[#6C5CE7] border-b-4 border-black py-4 px-6 shadow-[0_4px_0_0_rgba(0,0,0,1)] text-white relative z-30">
        <div className="max-w-5xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          
          {/* Logo Brand */}
          <div
            onClick={handleGoToHome}
            className="flex items-center gap-3 cursor-pointer group"
          >
            <div className="bg-[#FF7675] px-4 py-2 border-2 border-black rounded-xl transform rotate-[-2deg] shadow-[3px_3px_0_0_#000] group-hover:rotate-1 transition-all duration-300 flex items-center gap-2">
              <span className="text-white font-black text-xl md:text-2xl uppercase italic tracking-tighter">
                Penguinpower Tales
              </span>
              <span className="text-2xl">🐧</span>
            </div>
            <div className="hidden md:block">
              <p className="text-[10px] uppercase tracking-widest font-black text-[#F7D794] leading-tight">
                Choose Your Own Adventure
              </p>
              <p className="text-[10px] text-white/85 font-bold mt-0.5">
                Practice Voice Reading!
              </p>
            </div>
          </div>

          {/* Persistent Kids Achievements Dashboard */}
          <div className="flex items-center gap-3">
            
            {/* Completed Stories Badge */}
            <div className="bg-[#55E6C1] text-black px-4 py-1.5 rounded-2xl border-2 border-black shadow-[2px_2px_0_0_#000] flex items-center gap-2">
              <Trophy className="w-5 h-5 text-slate-900" />
              <div>
                <div className="text-[9px] font-black text-slate-700 uppercase tracking-widest leading-none">Completed</div>
                <div className="text-sm font-black text-slate-900 leading-none mt-0.5">{storiesCompleted} Stories</div>
              </div>
            </div>

            {/* Perfect Pages Count */}
            <div className="bg-[#F7D794] text-black px-4 py-1.5 rounded-2xl border-2 border-black shadow-[2px_2px_0_0_#000] flex items-center gap-2">
              <Star className="w-5 h-5 fill-slate-900 text-slate-900" />
              <div>
                <div className="text-[9px] font-black text-slate-700 uppercase tracking-widest leading-none">Perfects</div>
                <div className="text-sm font-black text-slate-900 leading-none mt-0.5">{perfectFiveStarPages} Pages</div>
              </div>
            </div>

            {/* Home Trigger button if in-game */}
            {activeScreen !== 'selection' && (
              <button
                id="btn-nav-home"
                onClick={handleGoToHome}
                className="bg-[#FEA47F] hover:bg-[#ff9368] text-slate-950 p-2.5 rounded-2xl border-2 border-black shadow-[2px_2px_0_0_#000] active:scale-95 transition-all cursor-pointer"
                title="Go back to Home"
              >
                <Home className="w-5 h-5" />
              </button>
            )}
          </div>
          
        </div>
      </header>

      {/* Main Screen Router */}
      <main className="flex-grow">
        {activeScreen === 'selection' && (
          <StorySelection
            stories={STORIES}
            onSelectStory={handleSelectStory}
          />
        )}

        {activeScreen === 'playing' && activeStory && (
          <StoryCard
            node={activeStory.nodes[currentNodeId]}
            onChoiceSelected={handleChoiceSelected}
            currentPageNumber={visitedNodes.length}
            storyTitle={activeStory.title}
          />
        )}

        {activeScreen === 'summary' && activeStory && (
          <StorySummary
            story={activeStory}
            visitedNodes={visitedNodes}
            nodeScores={nodeScores}
            onReplayStory={handleReplayStory}
            onGoToHome={handleGoToHome}
          />
        )}
      </main>

      {/* Chunky Dark Footer & Reset controls */}
      <footer className="w-full bg-black py-8 px-6 mt-16 border-t-4 border-black text-white">
        <div className="max-w-5xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-6 text-xs text-slate-400 font-bold">
          <div>
            Penguinpower CYOA Reading Adventures is customized with 80s book nostalgia for 7-10 year olds.
          </div>
          <div className="flex gap-4">
            <button
              onClick={handleResetAllProgress}
              className="text-white/80 hover:text-[#FF7675] transition-colors cursor-pointer flex items-center gap-1.5"
            >
              <RefreshCw className="w-3.5 h-3.5" />
              Reset All Stars & Achievements
            </button>
          </div>
        </div>
      </footer>
    </div>
  );
}

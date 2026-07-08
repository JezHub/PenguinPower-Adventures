import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  Mic,
  MicOff,
  Volume2,
  Sparkles,
  Star,
  Lock,
  Unlock,
  HelpCircle,
  AlertCircle,
  CheckCircle,
  RefreshCw,
  VolumeX,
  ChevronDown,
  ChevronUp,
} from 'lucide-react';
import { StoryNode } from '../data/stories';

interface StoryCardProps {
  node: StoryNode;
  onChoiceSelected: (nextNodeId: string, starsEarned: number) => void;
  currentPageNumber: number;
  storyTitle: string;
}

let sharedAudioCtx: AudioContext | null = null;

function getSharedAudioContext() {
  if (typeof window === 'undefined') return null;
  if (!sharedAudioCtx) {
    const AudioContextClass = window.AudioContext || (window as any).webkitAudioContext;
    if (AudioContextClass) {
      sharedAudioCtx = new AudioContextClass();
    }
  }
  if (sharedAudioCtx && sharedAudioCtx.state === 'suspended') {
    sharedAudioCtx.resume().catch(() => {});
  }
  return sharedAudioCtx;
}

// Cute Web Audio API Synthesizer to guarantee audio feedback works perfectly
// even when browsers block SpeechSynthesis inside cross-origin iframes.
export function playWebAudioChime(type: 'click' | 'lineComplete' | 'pageComplete') {
  if (typeof window === 'undefined') return;
  const ctx = getSharedAudioContext();
  if (!ctx) return;
  
  try {
    if (type === 'click') {
      // Cute, short high-pitched synth pluck sound
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      
      osc.type = 'sine'; // pure sweet sound
      // Pentatonic notes scale C5-A5 for a beautiful harmonious feel
      const notes = [523.25, 587.33, 659.25, 698.46, 783.99, 880.00];
      const randomFreq = notes[Math.floor(Math.random() * notes.length)];
      osc.frequency.setValueAtTime(randomFreq, ctx.currentTime);
      
      gain.gain.setValueAtTime(0.12, ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.0001, ctx.currentTime + 0.15);
      
      osc.connect(gain);
      gain.connect(ctx.destination);
      osc.start();
      osc.stop(ctx.currentTime + 0.16);
    } else if (type === 'lineComplete') {
      // Upward magical cartoon arpeggio for finished rows
      const notes = [523.25, 659.25, 783.99, 1046.50]; // C5, E5, G5, C6
      notes.forEach((freq, idx) => {
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();
        osc.type = 'triangle';
        osc.frequency.setValueAtTime(freq, ctx.currentTime + idx * 0.08);
        
        gain.gain.setValueAtTime(0.08, ctx.currentTime + idx * 0.08);
        gain.gain.exponentialRampToValueAtTime(0.0001, ctx.currentTime + idx * 0.08 + 0.25);
        
        osc.connect(gain);
        gain.connect(ctx.destination);
        osc.start(ctx.currentTime + idx * 0.08);
        osc.stop(ctx.currentTime + idx * 0.08 + 0.28);
      });
    } else if (type === 'pageComplete') {
      // Dreamy celebratory chord arpeggio for page unlocks
      const notes = [523.25, 659.25, 783.99, 1046.50, 1318.51]; // C major chord sparkles
      notes.forEach((freq, idx) => {
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();
        osc.type = 'sine';
        osc.frequency.setValueAtTime(freq, ctx.currentTime + idx * 0.06);
        
        gain.gain.setValueAtTime(0.1, ctx.currentTime + idx * 0.06);
        gain.gain.exponentialRampToValueAtTime(0.0001, ctx.currentTime + idx * 0.06 + 0.5);
        
        osc.connect(gain);
        gain.connect(ctx.destination);
        osc.start(ctx.currentTime + idx * 0.06);
        osc.stop(ctx.currentTime + idx * 0.06 + 0.55);
      });
    }
  } catch (err) {
    console.error('Web Audio API play error:', err);
  }
}

// Warm, kid-friendly voices that ship on macOS / Windows / Chrome. Preferring
// one of these makes the read-aloud sound pleasant instead of robotic.
const FRIENDLY_VOICE_NAMES =
  /samantha|victoria|karen|moira|ava|allison|susan|zira|google us english/i;

// Custom Child-friendly Text-to-Speech with Chrome/Safari bug workarounds
export function speakWord(word: string, isMuted: boolean) {
  if (isMuted || typeof window === 'undefined' || !('speechSynthesis' in window)) return;

  // Clean word from surrounding punctuation
  const clean = word.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()?"']/g, '').trim();
  if (!clean) return;

  const synth = window.speechSynthesis;

  const buildAndSpeak = () => {
    try {
      const utterance = new SpeechSynthesisUtterance(clean);

      // Child-friendly pacing & voice settings
      utterance.lang = 'en-US';
      utterance.volume = 1.0;
      utterance.rate = 0.85;
      utterance.pitch = 1.15;

      // Prefer a warm English voice when the browser exposes one.
      const voices = synth.getVoices();
      const friendly =
        voices.find((v) => /^en/i.test(v.lang) && FRIENDLY_VOICE_NAMES.test(v.name)) ||
        voices.find((v) => /^en/i.test(v.lang));
      if (friendly) utterance.voice = friendly;

      // Keep a reference so Chrome/Safari don't garbage-collect mid-utterance.
      const w = window as any;
      if (!w._activeSpeechUtterances) w._activeSpeechUtterances = [];
      w._activeSpeechUtterances.push(utterance);
      if (w._activeSpeechUtterances.length > 50) w._activeSpeechUtterances.shift();

      const cleanup = () => {
        const arr = w._activeSpeechUtterances;
        if (!arr) return;
        const idx = arr.indexOf(utterance);
        if (idx > -1) arr.splice(idx, 1);
      };

      utterance.onend = cleanup;
      utterance.onerror = (e) => {
        // 'interrupted' / 'canceled' just mean we started a new word on purpose.
        if (e.error !== 'interrupted' && e.error !== 'canceled') {
          console.error('Speech synthesis error on word click:', e.error);
        }
        cleanup();
      };

      synth.speak(utterance);
    } catch (innerError) {
      console.error('Failed to speak word:', innerError);
    }
  };

  try {
    // Desktop Chrome can wedge itself into a paused state; nudge it awake.
    if (synth.paused) synth.resume();

    // If a previous word is still (or stuck) speaking, clear it first. Diagnostics
    // on desktop Chrome showed utterances queuing with speaking=true but never
    // firing onstart — i.e. wedged and silent — so we always cancel a lingering
    // one before starting the next.
    if (synth.speaking || synth.pending) {
      synth.cancel();
    }

    // Speak *synchronously*, still inside the click's user-activation window.
    // Desktop Chrome (Blink) only vocalizes speech started during a user gesture;
    // a word started from a setTimeout gets queued (speaking=true) but never
    // actually starts (no onstart) and stays silent — exactly what broke this on
    // the iMac while it kept working on the iPhone (WebKit doesn't enforce it).
    // Doing it in-gesture on every click keeps the engine unwedged.
    buildAndSpeak();
  } catch (err) {
    console.error('Failed to initialize speech synthesis for word click:', err);
  }
}

// Simple cleaner for matching words
function cleanWordForMatching(word: string): string {
  return word
    .toLowerCase()
    .replace(/[.,\/#!$%\^&\*;:{}=\-_`~()?"']/g, '')
    .replace(/-+/g, '') // remove hyphens for words like "super-sandwich"
    .trim();
}

function levenshteinDistance(a: string, b: string): number {
  const matrix: number[][] = [];
  for (let i = 0; i <= b.length; i++) {
    matrix[i] = [i];
  }
  for (let j = 0; j <= a.length; j++) {
    matrix[0][j] = j;
  }
  for (let i = 1; i <= b.length; i++) {
    for (let j = 1; j <= a.length; j++) {
      if (b.charAt(i - 1) === a.charAt(j - 1)) {
        matrix[i][j] = matrix[i - 1][j - 1];
      } else {
        matrix[i][j] = Math.min(
          matrix[i - 1][j - 1] + 1, // substitution
          matrix[i][j - 1] + 1,     // insertion
          matrix[i - 1][j] + 1      // deletion
        );
      }
    }
  }
  return matrix[b.length][a.length];
}

function isWordMatchedInTranscript(cleanTarget: string, transcript: string): boolean {
  if (!cleanTarget) return false;

  const transcriptTokens = transcript
    .toLowerCase()
    .split(/\s+/)
    .map(t => t.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()?"']/g, '').trim())
    .filter(Boolean);

  // 1. Direct exact match
  if (transcriptTokens.includes(cleanTarget)) {
    return true;
  }

  // 2. Combined adjacent tokens (e.g., target is "super-genius" -> cleanTarget is "supergenius" and user says "super genius")
  for (let i = 0; i < transcriptTokens.length - 1; i++) {
    const combined = transcriptTokens[i] + transcriptTokens[i + 1];
    if (combined === cleanTarget) {
      return true;
    }
  }

  // 3. Fuzzy matching for longer words (length >= 4)
  for (const token of transcriptTokens) {
    if (token.length >= 4 && cleanTarget.length >= 4) {
      const dist = levenshteinDistance(token, cleanTarget);
      // Allow up to 20% edit distance (e.g. 1 error for 5 chars, 2 errors for 10 chars, minimum 1)
      const maxAllowedDist = Math.floor(Math.max(token.length, cleanTarget.length) * 0.2);
      if (dist <= Math.max(1, maxAllowedDist)) {
        return true;
      }
    }
  }

  return false;
}

export default function StoryCard({
  node,
  onChoiceSelected,
  currentPageNumber,
  storyTitle,
}: StoryCardProps) {
  const [isMuted, setIsMuted] = useState(false);
  const [isRecording, setIsRecording] = useState(false);
  const [transcript, setTranscript] = useState('');
  const [accumulatedSpokenWords, setAccumulatedSpokenWords] = useState<Set<string>>(new Set());
  const [clickedWords, setClickedWords] = useState<Set<string>>(new Set());
  const [manuallyCompletedLines, setManuallyCompletedLines] = useState<Set<number>>(new Set());
  const [showMicHelp, setShowMicHelp] = useState(false);
  const [useSimulator, setUseSimulator] = useState(false);
  const [showFirstWordFinger, setShowFirstWordFinger] = useState(false);
  const [isSecurityBannerOpen, setIsSecurityBannerOpen] = useState(false);

  // References for Web Speech API
  const recognitionRef = useRef<any>(null);
  const isRecordingRef = useRef(false);
  const activeRecordingSessionRef = useRef(false);

  // Sound effects tracking refs
  const prevCompletedLinesRef = useRef(0);
  const prevUnlockedRef = useRef(false);

  // Split story text into individual words
  const words = node.text.split(/\s+/);
  
  // Pre-map words with their original global index for perfect matching and clicking
  const indexedWords = words.map((word, index) => ({ word, index }));

  // Group words into lines dynamically based on a visual weight score.
  // Each character contributes to the width, and each word has a fixed border/padding overhead.
  // This ensures lines fill up as much as possible on desktop without wrapping.
  const linesOfWords: { word: string; index: number }[][] = [];
  let currentLine: { word: string; index: number }[] = [];
  let currentVisualWidth = 0;
  const maxLineVisualWidth = 76; // Optimized limit that fills lines beautifully on desktop without wrapping!

  for (const item of indexedWords) {
    const wordLen = item.word.length;
    // Each word has an overhead weight of 4.2 for margins, borders, paddings and gaps.
    const wordWeight = wordLen + 4.2;

    if (currentLine.length > 0 && currentVisualWidth + wordWeight > maxLineVisualWidth) {
      linesOfWords.push(currentLine);
      currentLine = [item];
      currentVisualWidth = wordWeight;
    } else {
      currentLine.push(item);
      currentVisualWidth += wordWeight;
    }
  }
  if (currentLine.length > 0) {
    linesOfWords.push(currentLine);
  }

  // Check if a line is completed (at least 70% of words in the line are read or manually completed)
  const isLineCompleted = (lineItems: { word: string; index: number }[], lineIdx: number) => {
    if (manuallyCompletedLines.has(lineIdx)) return true;
    const lineTargetClean = lineItems
      .map((item) => cleanWordForMatching(item.word))
      .filter((w) => w.length > 0);
    if (lineTargetClean.length === 0) return true;
    const readCount = lineTargetClean.filter((w) => accumulatedSpokenWords.has(w)).length;
    return readCount >= lineTargetClean.length * 0.7;
  };

  // Calculate sequential completed lines to dynamically adjust visible lines
  let completedSeqCount = 0;
  for (let i = 0; i < linesOfWords.length; i++) {
    if (isLineCompleted(linesOfWords[i], i)) {
      completedSeqCount = i + 1;
    } else {
      break;
    }
  }

  // Reveal 2 lines at a time. Number of visible lines starts at 2 and reveals the next row as they progress
  const visibleLineCount = Math.min(linesOfWords.length, Math.max(2, completedSeqCount + 1));
  
  // Create a map of clean words on this page
  const targetCleanWords = words
    .map(cleanWordForMatching)
    .filter((w) => w.length > 0);
  
  const uniqueTargetWords = Array.from(new Set(targetCleanWords));

  // Determine which words have been read correctly
  const readWords = uniqueTargetWords.filter((w) => accumulatedSpokenWords.has(w));
  
  // Calculate match percentage
  const totalTargetCount = uniqueTargetWords.length;
  const matchPercentage = totalTargetCount > 0 
    ? Math.round((readWords.length / totalTargetCount) * 100) 
    : 100;

  // Calculate Star Score:
  // 90%+ is 5 stars, 80-89% is 4 stars, 70-79% is 3 stars, 30-69% is 2 stars, <30% is 1 star.
  let stars = 1;
  if (matchPercentage >= 90) stars = 5;
  else if (matchPercentage >= 80) stars = 4;
  else if (matchPercentage >= 70) stars = 3;
  else if (matchPercentage >= 30) stars = 2;

  // The page is unlocked if they got 70% matching, OR if they've fully completed/revealed all lines of the page!
  const isUnlocked = (matchPercentage >= 70) || (completedSeqCount === linesOfWords.length);

  // Real-time audio rewards for line completion & page unlock
  useEffect(() => {
    if (completedSeqCount > prevCompletedLinesRef.current) {
      if (!isMuted && prevCompletedLinesRef.current > 0) {
        playWebAudioChime('lineComplete');
      }
    }
    prevCompletedLinesRef.current = completedSeqCount;
  }, [completedSeqCount, isMuted]);

  useEffect(() => {
    if (isUnlocked && !prevUnlockedRef.current) {
      if (!isMuted && prevUnlockedRef.current === false) {
        // Prevent playing on mount if it's already unlocked
        const hasSomeSpoken = accumulatedSpokenWords.size > 0;
        if (hasSomeSpoken) {
          playWebAudioChime('pageComplete');
        }
      }
    }
    prevUnlockedRef.current = isUnlocked;
  }, [isUnlocked, isMuted, accumulatedSpokenWords.size]);

  // Reset page state when the node changes
  useEffect(() => {
    if (!activeRecordingSessionRef.current) {
      stopRecording();
    } else {
      // Clear current transcripts and spoken lists for the new page so they can practice again
      setTranscript('');
      setAccumulatedSpokenWords(new Set());
    }

    setClickedWords(new Set());
    setManuallyCompletedLines(new Set());
    prevCompletedLinesRef.current = 0;
    prevUnlockedRef.current = false;
    setShowFirstWordFinger(false);

    // Scroll back to the absolute top of the page immediately and smoothly
    window.scrollTo(0, 0);
    if (document.documentElement) {
      document.documentElement.scrollTop = 0;
    }
    if (document.body) {
      document.body.scrollTop = 0;
    }

    // Fallback smooth scroll in case images take a moment to size up
    setTimeout(() => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }, 50);
  }, [node.id]);

  // Set showFirstWordFinger based on recording state changes
  useEffect(() => {
    if (isRecording) {
      setShowFirstWordFinger(true);
      const timer = setTimeout(() => {
        setShowFirstWordFinger(false);
      }, 6000);
      return () => clearTimeout(timer);
    }
  }, [isRecording]);

  // Turn off the finger pointing to the first word if any word has been spoken or clicked
  useEffect(() => {
    if (accumulatedSpokenWords.size > 0 || clickedWords.size > 0) {
      setShowFirstWordFinger(false);
    }
  }, [accumulatedSpokenWords.size, clickedWords.size]);

  // Handle Speech Recognition Setup
  useEffect(() => {
    try {
      const SpeechRecognition =
        (window as any).SpeechRecognition || (window as any).webkitSpeechRecognition;

      if (SpeechRecognition) {
        const rec = new SpeechRecognition();
        rec.continuous = true;
        rec.interimResults = true;
        rec.lang = 'en-US';

        rec.onstart = () => {
          setIsRecording(true);
        };

        rec.onresult = (event: any) => {
          let interimTranscript = '';
          let finalTranscript = '';

          for (let i = event.resultIndex; i < event.results.length; ++i) {
            if (event.results[i].isFinal) {
              finalTranscript += event.results[i][0].transcript;
            } else {
              interimTranscript += event.results[i][0].transcript;
            }
          }

          const newSpeech = (finalTranscript + ' ' + interimTranscript).toLowerCase();
          setTranscript(newSpeech);

          // Process newly recognized words using our enhanced matching
          setAccumulatedSpokenWords((prev) => {
            const next = new Set(prev);
            uniqueTargetWords.forEach((target) => {
              if (isWordMatchedInTranscript(target, newSpeech)) {
                next.add(target);
              }
            });
            return next;
          });
        };

        rec.onerror = (event: any) => {
          console.error('Speech recognition error', event.error);
          if (event.error === 'not-allowed') {
            // If permission is denied, fallback to Simulator Mode automatically
            setUseSimulator(true);
          }
        };

        rec.onend = () => {
          // Auto-restart if we are supposed to still be recording
          if (isRecordingRef.current) {
            try {
              recognitionRef.current.start();
            } catch (e) {
              console.error('Failed to restart recording', e);
            }
          } else {
            setIsRecording(false);
          }
        };

        recognitionRef.current = rec;

        // Auto-resume recording across page transition if user already activated the mic
        if (activeRecordingSessionRef.current) {
          if (useSimulator) {
            setIsRecording(true);
          } else {
            isRecordingRef.current = true;
            try {
              rec.start();
            } catch (e) {
              console.error('Failed to auto-restart recording on page change', e);
            }
          }
        }
      } else {
        // No SpeechRecognition support in this browser (e.g. some Firefox configurations)
        setUseSimulator(true);
      }
    } catch (err) {
      console.error('Failed to initialize Speech Recognition:', err);
      // Fallback to simulator mode gracefully so Safari can load the page!
      setUseSimulator(true);
    }

    return () => {
      isRecordingRef.current = false;
      if (recognitionRef.current) {
        try {
          recognitionRef.current.abort();
        } catch (e) {}
      }
    };
  }, [node.id]);

  const startRecording = () => {
    activeRecordingSessionRef.current = true;
    if (useSimulator) {
      setIsRecording(true);
      return;
    }

    if (recognitionRef.current) {
      isRecordingRef.current = true;
      try {
        recognitionRef.current.start();
      } catch (e) {
        console.error('Error starting speech recognition', e);
      }
    }
  };

  const stopRecording = () => {
    activeRecordingSessionRef.current = false;
    isRecordingRef.current = false;
    setIsRecording(false);
    if (recognitionRef.current) {
      try {
        recognitionRef.current.stop();
      } catch (e) {}
    }
  };

  const toggleRecording = () => {
    if (isRecording) {
      stopRecording();
    } else {
      startRecording();
    }
  };

  // Click handler for words
  const handleWordClick = (word: string) => {
    const clean = cleanWordForMatching(word);
    setClickedWords((prev) => {
      const next = new Set(prev);
      next.add(clean);
      return next;
    });

    speakWord(word, isMuted);
  };

  // Handler to manually reveal/complete a line
  const handleManualReveal = (lineIdx: number) => {
    setManuallyCompletedLines((prev) => {
      const next = new Set(prev);
      next.add(lineIdx);
      return next;
    });

    // Play line Complete sound
    playWebAudioChime('lineComplete');
  };

  // Helper to simulate speech recognition levels
  const simulateReadScore = (percentage: number) => {
    const wordsToPick = Math.ceil((percentage / 100) * uniqueTargetWords.length);
    const shuffled = [...uniqueTargetWords].sort(() => 0.5 - Math.random());
    const selected = shuffled.slice(0, wordsToPick);
    
    setAccumulatedSpokenWords(new Set(selected));
    if (percentage === 100) {
      setTranscript("Wow! I read all the words beautifully with the Penguinpower crew!");
    } else {
      setTranscript(`I read about ${percentage}% of the words out loud!`);
    }
  };

  // Restart practice on the current page
  const handleResetPractice = () => {
    setAccumulatedSpokenWords(new Set());
    setClickedWords(new Set());
    setTranscript('');
    if (isRecording) {
      stopRecording();
    }
  };

  const presetStyle = node.illustrationPreset;

  return (
    <div className="w-full max-w-5xl mx-auto px-4 py-6">
      {/* Dynamic Sticky Header Panel */}
      <div className="sticky top-0 z-40 bg-[#FFFCF0] border-b-4 border-black py-4 px-6 shadow-[0_4px_0_0_rgba(0,0,0,0.15)] -mx-4 sm:-mx-6 mb-8 flex flex-col md:flex-row items-center justify-between gap-4">
        {/* Page & Star Progress */}
        <div className="flex items-center gap-3 shrink-0">
          <span className="bg-[#FF7675] text-white font-black px-4 py-2 rounded-full border-2 border-black text-sm shadow-[2px_2px_0_0_#000] shrink-0">
            Page {currentPageNumber}
          </span>
          <div className="flex flex-col items-start">
            <div className="flex gap-0.5">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star
                  key={i}
                  className={`w-5 h-5 ${
                    i < stars
                      ? 'fill-[#F9D423] text-black drop-shadow-[1px_1px_0px_rgba(0,0,0,1)] scale-110'
                      : 'text-slate-200'
                  } transition-all duration-300`}
                />
              ))}
            </div>
            <div className="text-[10px] font-black text-slate-500 uppercase tracking-wider mt-0.5">
              {matchPercentage}% Match ({readWords.length}/{totalTargetCount} words)
            </div>
          </div>
        </div>

        {/* Large Speak Button in the center */}
        <div className="flex-1 flex justify-center w-full md:w-auto relative">
          {/* Finger pointing to Start Reading if we haven't started yet! */}
          {!isRecording && accumulatedSpokenWords.size === 0 && clickedWords.size === 0 && (
            <motion.div
              initial={{ y: -12, x: "-50%" }}
              animate={{ y: [0, -14, 0], x: "-50%" }}
              transition={{ repeat: Infinity, duration: 1.2, ease: "easeInOut" }}
              className="absolute -top-16 left-1/2 z-50 pointer-events-none select-none text-5xl md:text-6xl"
              style={{
                filter: "drop-shadow(0 0 3px #ffffff) drop-shadow(0 0 3px #ffffff) drop-shadow(3px 3px 0px #000000)"
              }}
            >
              👇
            </motion.div>
          )}
          <button
            id="sticky-speak-button"
            onClick={toggleRecording}
            className={`w-full md:w-auto flex items-center justify-center gap-2.5 px-8 py-3.5 rounded-full border-4 border-black font-black text-sm md:text-base uppercase tracking-wider transition-all duration-300 relative cursor-pointer active:translate-y-1 active:shadow-none shadow-[4px_4px_0_0_#000] ${
              isRecording
                ? 'bg-red-500 hover:bg-red-600 text-white animate-pulse'
                : 'bg-[#FF7675] hover:bg-[#ff5d5a] text-white'
            }`}
          >
            {isRecording ? (
              <>
                <MicOff className="w-5 h-5 animate-pulse" />
                <span>STOP LISTENING</span>
              </>
            ) : (
              <>
                <Mic className="w-5 h-5" />
                <span>START READING</span>
              </>
            )}
          </button>
        </div>

        {/* Volume & Reset controls on the right */}
        <div className="flex items-center gap-3 shrink-0">
          <div className="flex items-center gap-2 bg-white px-3 py-1.5 rounded-2xl border-2 border-black shadow-[2px_2px_0_0_#000]">
            <button
              onClick={() => setIsMuted(!isMuted)}
              className="p-1 hover:bg-slate-100 rounded-lg transition-colors cursor-pointer"
              title={isMuted ? "Unmute sounds" : "Mute sounds"}
            >
              {isMuted ? <VolumeX className="w-5 h-5 text-red-500" /> : <Volume2 className="w-5 h-5 text-[#6C5CE7]" />}
            </button>
            <span className="text-[10px] font-black uppercase text-slate-700 select-none">
              {isMuted ? "Muted" : "Sounds On"}
            </span>
          </div>

          <button
            onClick={handleResetPractice}
            className="bg-[#FEA47F] hover:bg-[#ff9368] px-4 py-2.5 rounded-2xl border-2 border-black text-slate-950 font-black text-sm flex items-center gap-1.5 transition-all active:scale-95 shadow-[2px_2px_0_0_#000] cursor-pointer"
            title="Start reading again"
          >
            <RefreshCw className="w-4 h-4" /> 
            <span>Reset</span>
          </button>
        </div>
      </div>

      {isRecording && (
        <div className="bg-red-500 text-white font-black text-xs text-center py-2 -mx-4 sm:-mx-6 mb-6 animate-pulse uppercase tracking-widest border-y-4 border-black">
          🚨 Mummy Penguin is listening! Speak clearly into your microphone...
        </div>
      )}

      {/* Main Full-Width Content Container */}
      <div className="w-full flex flex-col gap-6">
        
        {/* Page Text & Reading Mechanics Card */}
        <div className="bg-[#FFFDF5] rounded-3xl border-4 border-black p-6 md:p-8 shadow-[8px_8px_0_0_#000] relative pt-8 overflow-hidden mt-8">
          
          {/* Red school margin line */}
          <div className="absolute left-8 md:left-10 top-0 bottom-0 w-[2px] bg-red-400 opacity-60 pointer-events-none" />

          {/* Header Block with Title and Chapter stacked on the left, and Practice Banner on the right */}
          <div className="flex flex-col md:flex-row md:items-stretch justify-between gap-4 mb-6 pl-6 md:pl-8 relative z-10">
            {/* Title & Chapter Block */}
            <div className="flex flex-col gap-2.5 items-start justify-center">
              <span className="bg-[#A29BFE] text-white px-4 py-2 rounded-full border-2 border-black font-black text-sm md:text-base uppercase shadow-[3px_3px_0_0_#000] select-none">
                📖 {storyTitle}
              </span>
              <span className="bg-[#55E6C1] text-black px-3.5 py-1.5 rounded-full border-2 border-black font-black text-xs md:text-sm uppercase shadow-[2px_2px_0_0_#000] select-none">
                🎬 Ch. {currentPageNumber}: {node.title}
              </span>
            </div>

            {/* Click to Hear Instruction Banner */}
            <div className="bg-[#A29BFE]/25 text-slate-950 text-xs font-black p-3 rounded-2xl border-2 border-black flex items-center gap-2.5 shadow-[3px_3px_0_0_#000] max-w-sm md:max-w-[200px] md:w-48 self-start md:self-auto">
              <Volume2 className="w-5 h-5 text-[#6C5CE7] shrink-0 animate-pulse" />
              <span className="leading-tight text-left">
                Click on any word card to practice its pronunciation!
              </span>
            </div>
          </div>

          {/* Interactive story text block as school lined paper */}
          <div className="space-y-1 pl-6 md:pl-8">
            {linesOfWords.map((lineWords, lineIdx) => {
              const isVisible = lineIdx < visibleLineCount;
              if (!isVisible) return null;

              const isLineFinished = isLineCompleted(lineWords, lineIdx);

              return (
                <div 
                  key={lineIdx} 
                  className="flex flex-wrap items-center gap-x-2 md:gap-x-2.5 gap-y-3.5 border-b-2 border-blue-200/80 pb-4 mb-4 select-none relative pr-6 lg:pr-24"
                >
                  {/* Notebook line number helper */}
                  <span className="absolute -left-5 top-3.5 text-[10px] font-black text-blue-300 select-none">
                    {lineIdx + 1}
                  </span>

                  {lineWords.map((item) => {
                    const globalIdx = item.index;
                    const clean = cleanWordForMatching(item.word);
                    const isCorrect = accumulatedSpokenWords.has(clean);
                    const isClicked = clickedWords.has(clean);

                    let wordStyles = 'bg-white text-slate-950 border-black hover:bg-slate-50';
                    if (isCorrect) {
                      wordStyles = 'bg-[#55E6C1] text-black border-black scale-105';
                    } else if (isClicked) {
                      wordStyles = 'bg-[#F7D794] text-black border-black';
                    }

                    return (
                      <div key={globalIdx} className="relative inline-block">
                        {globalIdx === 0 && showFirstWordFinger && (
                          <motion.div
                            initial={{ y: -10, x: "-50%" }}
                            animate={{ y: [0, -12, 0], x: "-50%" }}
                            transition={{ repeat: Infinity, duration: 1.2, ease: "easeInOut" }}
                            className="absolute -top-14 left-1/2 z-50 pointer-events-none select-none text-4xl md:text-5xl"
                            style={{
                              filter: "drop-shadow(0 0 3px #ffffff) drop-shadow(0 0 3px #ffffff) drop-shadow(3px 3px 0px #000000)"
                            }}
                          >
                            👇
                          </motion.div>
                        )}
                        <motion.button
                          id={`word-${clean}-${globalIdx}`}
                          onClick={() => handleWordClick(item.word)}
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.9, rotate: isCorrect ? 2 : -2 }}
                          className={`px-3 py-2 text-base md:text-lg font-black rounded-xl border-2 shadow-[2px_2px_0_0_#000] cursor-pointer transition-all ${wordStyles}`}
                        >
                          {item.word}
                        </motion.button>
                      </div>
                    );
                  })}

                  {/* Mini celebrate star or Reveal Next button */}
                  {isLineFinished ? (
                    <motion.span 
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      className="absolute right-2 md:right-3 top-3 text-lg md:text-xl inline-block animate-bounce select-none"
                      title="Awesome reading!"
                    >
                      ⭐
                    </motion.span>
                  ) : (
                    <>
                      {/* Desktop-only absolute positioned Reveal Next button */}
                      <motion.button
                        initial={{ opacity: 0.6 }}
                        whileHover={{ opacity: 1, scale: 1.05 }}
                        onClick={() => handleManualReveal(lineIdx)}
                        className="absolute right-3 top-2.5 hidden lg:inline-flex items-center gap-1.5 text-[10px] font-black text-[#6C5CE7] hover:text-white hover:bg-[#6C5CE7] bg-[#6C5CE7]/10 px-2.5 py-1 rounded-xl border border-[#6C5CE7]/40 transition-all cursor-pointer shadow-[2px_2px_0_0_#000] active:scale-95 select-none z-10"
                        title="Click to reveal the next line"
                      >
                        <span>Reveal Next</span>
                        <Sparkles className="w-3.5 h-3.5" />
                      </motion.button>

                      {/* Tablet-only inline Reveal Next button */}
                      <motion.button
                        initial={{ opacity: 0.8 }}
                        whileHover={{ opacity: 1, scale: 1.05 }}
                        onClick={() => handleManualReveal(lineIdx)}
                        className="hidden md:inline-flex lg:hidden items-center gap-1.5 text-[10px] font-black text-[#6C5CE7] hover:text-white hover:bg-[#6C5CE7] bg-[#6C5CE7]/10 px-3 py-1.5 rounded-xl border border-[#6C5CE7]/40 transition-all cursor-pointer shadow-[2px_2px_0_0_#000] active:scale-95 select-none"
                        title="Click to reveal the next line"
                      >
                        <span>Reveal Next</span>
                        <Sparkles className="w-3.5 h-3.5" />
                      </motion.button>
                    </>
                  )}

                  {/* Mobile-only bottom Reveal Next button */}
                  {!isLineFinished && (
                    <div className="w-full flex justify-end mt-2 pb-1 md:hidden">
                      <motion.button
                        initial={{ opacity: 0.8 }}
                        whileHover={{ opacity: 1, scale: 1.05 }}
                        onClick={() => handleManualReveal(lineIdx)}
                        className="inline-flex items-center gap-1.5 text-[10px] font-black text-[#6C5CE7] hover:text-white hover:bg-[#6C5CE7] bg-[#6C5CE7]/10 px-3 py-1.5 rounded-xl border border-[#6C5CE7]/40 transition-all cursor-pointer shadow-[2px_2px_0_0_#000] active:scale-95 select-none"
                        title="Click to reveal the next line"
                      >
                        <span>Reveal Next</span>
                        <Sparkles className="w-3.5 h-3.5" />
                      </motion.button>
                    </div>
                  )}
                </div>
              );
            })}

            {/* Progress Indicator for locked lines */}
            {visibleLineCount < linesOfWords.length && (
              <div className="flex items-center gap-2 text-slate-400 text-xs font-black pt-2 italic select-none">
                <span className="w-2.5 h-2.5 bg-[#FEA47F] rounded-full animate-pulse" />
                <span>Read or click the words above to reveal more of the story...</span>
              </div>
            )}
          </div>

          {/* Audio Speech Bubble Feedback */}
          <AnimatePresence>
            {transcript && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                className="bg-white border-2 border-black p-4 rounded-2xl relative shadow-[4px_4px_0_0_#000] mt-6 ml-6 md:ml-8"
              >
                <div className="absolute -top-3 left-8 w-6 h-6 bg-white border-t-2 border-l-2 border-black rotate-45" />
                <div className="text-xs font-black text-slate-500 uppercase tracking-widest mb-1">
                  What we heard you say:
                </div>
                <p className="text-slate-900 font-black italic text-sm md:text-base leading-relaxed">
                  "{transcript}"
                </p>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* CYOA Branching Choices Panel placed directly below the story notebook page */}
        <div className={`rounded-3xl border-4 border-black p-6 md:p-8 shadow-[8px_8px_0_0_#000] relative overflow-hidden transition-all duration-500 ${
          isUnlocked 
            ? 'bg-gradient-to-br from-[#FFFDF5] to-[#F1F0FF] border-[#6C5CE7] shadow-[8px_8px_0_0_#6C5CE7] ring-4 ring-[#55E6C1]/40' 
            : 'bg-white'
        }`}>
          {/* Banner header for section */}
          <div className={`absolute top-0 left-0 right-0 h-3 ${isUnlocked ? 'bg-[#55E6C1]' : 'bg-[#6C5CE7]'}`} />
          
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4 mb-6 pt-2">
            <div className="flex items-center gap-2">
              {isUnlocked ? (
                <span className="bg-[#55E6C1] text-black p-2 rounded-xl border-2 border-black flex items-center justify-center shadow-[1px_1px_0_0_#000] animate-bounce">
                  <Unlock className="w-5 h-5" />
                </span>
              ) : (
                <span className="bg-gray-200 text-slate-500 p-2 rounded-xl border-2 border-black flex items-center justify-center">
                  <Lock className="w-5 h-5" />
                </span>
              )}
              <div>
                <h3 className="font-black text-slate-900 text-lg leading-tight">
                  {isUnlocked ? 'Choose Your Adventure!' : 'Paths are Locked!'}
                </h3>
                <p className="text-xs text-slate-600 font-bold mt-0.5">
                  {isUnlocked 
                    ? 'Click a choice button to slide into your next adventure page!' 
                    : 'Speak into the mic or click words to reach 3 stars first!'}
                </p>
              </div>
            </div>

            {/* Glowing finger pointer banner for CYOA */}
            {isUnlocked ? (
              <motion.div
                animate={{ scale: [1, 1.05, 1], rotate: [0, -3, 3, 0] }}
                transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
                className="bg-[#55E6C1] text-black border-2 border-black px-3.5 py-1.5 rounded-xl font-black text-xs md:text-sm uppercase shadow-[3px_3px_0_0_#000] flex items-center gap-2 select-none animate-pulse"
              >
                <span className="text-xl">👇</span>
                <span>TAP A PATH BELOW!</span>
                <span className="text-xl">👇</span>
              </motion.div>
            ) : (
              <div className="bg-[#6C5CE7] border-2 border-black text-white px-3 py-1.5 rounded-xl text-xs font-black shadow-[2px_2px_0_0_#000]">
                👑 Target: 70% Accuracy to Unlock
              </div>
            )}
          </div>

          {/* Display Choices */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {node.choices && node.choices.length > 0 ? (
              node.choices.map((choice, i) => (
                <button
                  key={i}
                  id={`choice-${choice.nextNodeId}`}
                  onClick={() => isUnlocked && onChoiceSelected(choice.nextNodeId, stars)}
                  disabled={!isUnlocked}
                  className={`group text-left p-4 rounded-2xl border-4 border-black font-black text-sm md:text-base leading-snug shadow-[4px_4px_0_0_#000] transition-all flex items-center justify-between gap-3 ${
                    isUnlocked
                      ? 'bg-white text-slate-950 hover:bg-[#F9F8FF] hover:shadow-[2px_2px_0_0_#000] hover:translate-x-0.5 hover:translate-y-0.5 active:scale-95 cursor-pointer border-[#6C5CE7]'
                      : 'bg-[#F5F6FA] text-slate-400 opacity-50 cursor-not-allowed shadow-none border-dashed'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    {isUnlocked && (
                      <motion.span
                        animate={{ x: [0, 4, 0] }}
                        transition={{ repeat: Infinity, duration: 1.2, ease: "easeInOut" }}
                        className="text-lg shrink-0"
                      >
                        👉
                      </motion.span>
                    )}
                    <div className={`w-8 h-8 rounded-full border-2 border-black flex items-center justify-center font-black text-xs shrink-0 ${
                      isUnlocked ? (i === 0 ? 'bg-[#55E6C1]' : i === 1 ? 'bg-[#A29BFE]' : 'bg-[#FEA47F]') : 'bg-gray-300'
                    }`}>
                      {i + 1}
                    </div>
                    <span>{choice.text}</span>
                  </div>
                  {isUnlocked ? (
                    <Sparkles className="w-5 h-5 text-[#6C5CE7] shrink-0 animate-pulse" />
                  ) : (
                    <Lock className="w-4 h-4 text-slate-400 shrink-0" />
                  )}
                </button>
              ))
            ) : (
              /* Ending Button */
              <button
                id="btn-view-ending"
                onClick={() => isUnlocked && onChoiceSelected('', stars)}
                disabled={!isUnlocked}
                className={`w-full text-center p-5 rounded-2xl border-4 border-black font-black text-lg shadow-[4px_4px_0_0_#000] transition-all flex items-center justify-center gap-3 ${
                  isUnlocked
                    ? 'bg-[#FF7675] hover:bg-[#ff5d5a] text-white hover:shadow-[2px_2px_0_0_#000] hover:translate-x-0.5 hover:translate-y-0.5 active:scale-95 cursor-pointer border-[#6C5CE7]'
                    : 'bg-slate-100 text-slate-400 opacity-60 cursor-not-allowed shadow-none'
                }`}
              >
                {isUnlocked && (
                  <motion.span
                    animate={{ x: [0, 5, 0] }}
                    transition={{ repeat: Infinity, duration: 1 }}
                    className="text-xl"
                  >
                    👉
                  </motion.span>
                )}
                <span>{isUnlocked ? '🎉 Read the Adventure Ending!' : 'Speak to Unlock Ending!'}</span>
                {isUnlocked ? (
                  <CheckCircle className="w-5 h-5 shrink-0 animate-bounce" />
                ) : (
                  <Lock className="w-5 h-5 text-slate-400 shrink-0" />
                )}
              </button>
            )}
          </div>
        </div>

        {/* Practice Tool & Simulator Panel (including weaved device browser security banner) placed at the very bottom */}
        <div className="bg-[#F7D794] rounded-3xl border-4 border-black p-6 shadow-[8px_8px_0_0_#000]">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-4">
            <h4 className="font-black text-slate-950 text-base flex items-center gap-2">
              <HelpCircle className="w-5 h-5 text-slate-950" />
              Reading Tools & Device Compatibility
            </h4>

            {/* Mode switch for school/chromebook compatibility */}
            <button
              onClick={() => setUseSimulator(!useSimulator)}
              className={`text-xs font-black px-3 py-1.5 rounded-xl border-2 transition-all cursor-pointer ${
                useSimulator
                  ? 'bg-[#A29BFE] text-black border-black shadow-[2px_2px_0_0_#000]'
                  : 'bg-white text-slate-750 border-black shadow-[2px_2px_0_0_#000]'
              }`}
            >
              {useSimulator ? '🤖 Simulator Mode: ON' : '🎤 Microphone Mode'}
            </button>
          </div>

          {/* Iframe Browser Security Guidance Box */}
          <div className="bg-amber-50 text-amber-950 text-xs font-bold rounded-xl border-2 border-black mb-4 shadow-[2px_2px_0_0_#000] flex flex-col leading-snug overflow-hidden">
            <button
              onClick={() => setIsSecurityBannerOpen(!isSecurityBannerOpen)}
              className="w-full flex items-center justify-between p-3.5 hover:bg-amber-100/50 transition-colors cursor-pointer text-left focus:outline-none"
            >
              <div className="flex items-center gap-2">
                <span className="text-base select-none">💡</span>
                <span className="font-black text-amber-900">Hearing sound effects but no spoken words?</span>
              </div>
              {isSecurityBannerOpen ? (
                <ChevronUp className="w-4 h-4 text-amber-900 shrink-0" />
              ) : (
                <ChevronDown className="w-4 h-4 text-amber-900 shrink-0" />
              )}
            </button>
            
            <AnimatePresence initial={false}>
              {isSecurityBannerOpen && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.2, ease: "easeInOut" }}
                >
                  <p className="font-medium text-[11px] text-amber-800/90 leading-normal px-3.5 pb-3.5 pl-9 border-t border-amber-200 pt-2">
                    Browsers block robot speech-to-text systems inside preview frames. Click <span className="font-black underline text-indigo-700">"Open in New Tab"</span> in the top right of your screen to unlock full child-pacing vocal audio!
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {useSimulator ? (
            /* Simulator Tools */
            <div className="space-y-4">
              <p className="text-xs text-slate-900 font-bold">
                Mic blocked or typing on a school device? No problem! Click on the word cards above to hear and learn them, or simulate reading practice using these fun buttons!
              </p>
              <div className="flex flex-wrap gap-2">
                <button
                  onClick={() => simulateReadScore(40)}
                  className="bg-white hover:bg-slate-50 text-slate-950 font-black text-xs py-2 px-3 rounded-xl border-2 border-black shadow-[2px_2px_0_0_#000] active:scale-95 cursor-pointer"
                >
                  Simulate 40% (2 Stars)
                </button>
                <button
                  onClick={() => simulateReadScore(75)}
                  className="bg-white hover:bg-slate-50 text-slate-950 font-black text-xs py-2 px-3 rounded-xl border-2 border-black shadow-[2px_2px_0_0_#000] active:scale-95 cursor-pointer"
                >
                  Simulate 75% (3 Stars ⭐️)
                </button>
                <button
                  onClick={() => simulateReadScore(100)}
                  className="bg-white hover:bg-slate-50 text-slate-950 font-black text-xs py-2 px-3 rounded-xl border-2 border-black shadow-[2px_2px_0_0_#000] active:scale-95 cursor-pointer"
                >
                  Simulate 100% (5 Stars! ⭐️)
                </button>
              </div>
            </div>
          ) : (
            /* Microphone Tools */
            <div className="flex items-center gap-4">
              <div className="flex-1">
                <p className="text-xs text-slate-900 font-bold leading-relaxed">
                  Click the giant microphone in the sticky top panel to start recording. Read the story text out loud. You can speak, pause, look at a word, and speak again! We'll light up words you read.
                </p>
              </div>
              <button
                onClick={() => setShowMicHelp(!showMicHelp)}
                className="bg-white p-2.5 rounded-xl border-2 border-black text-slate-900 font-black text-xs cursor-pointer shadow-[2px_2px_0_0_#000]"
              >
                Help
              </button>
            </div>
          )}

          {/* Mic Help Expansion */}
          {showMicHelp && (
            <div className="mt-4 p-4 bg-white rounded-2xl border-2 border-black text-xs text-slate-900 font-bold space-y-1 shadow-[2px_2px_0_0_#000]">
              <p>1. Grant microphone access when your browser asks.</p>
              <p>2. Speak clearly, close to your device.</p>
              <p>3. If some words aren't matching, click them to hear them, and try saying them again.</p>
              <p>4. You need at least a 70% match to unlock the next chapter.</p>
            </div>
          )}
        </div>

      </div>
    </div>
  );
}

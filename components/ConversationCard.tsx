"use client";

import { Volume2 } from "lucide-react";

interface ConversationCardProps {
  hanzi: string;
  pinyin: string;
  burmese: string;
  showPinyin: boolean;
}

export default function ConversationCard({
  hanzi,
  pinyin,
  burmese,
  showPinyin,
}: ConversationCardProps) {
  const playAudio = () => {
    if ("speechSynthesis" in window) {
      // Cancel any ongoing speech
      window.speechSynthesis.cancel();
      
      const utterance = new SpeechSynthesisUtterance(hanzi);
      utterance.lang = "zh-CN";
      // Adjusting properties for better pronunciation
      utterance.rate = 0.8;
      utterance.pitch = 1;
      
      window.speechSynthesis.speak(utterance);
    } else {
      alert("Text-to-speech is not supported in this browser.");
    }
  };

  return (
    <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-md rounded-2xl p-6 shadow-sm border border-gray-100 dark:border-gray-700/50 hover:shadow-md transition-all duration-300 group">
      <div className="flex justify-between items-start gap-4">
        <div className="space-y-3 flex-1">
          <div className="flex flex-col gap-1">
            <h3 className="text-3xl font-bold text-gray-900 dark:text-gray-100 tracking-wide">
              {hanzi}
            </h3>
            
            <div
              className={`text-lg font-medium text-blue-600 dark:text-blue-400 transition-all duration-300 origin-top overflow-hidden ${
                showPinyin ? "opacity-100 max-h-12 scale-y-100" : "opacity-0 max-h-0 scale-y-0"
              }`}
            >
              {pinyin}
            </div>
          </div>
          
          <p className="text-gray-600 dark:text-gray-300 text-lg border-t border-gray-100 dark:border-gray-700/50 pt-3">
            {burmese}
          </p>
        </div>
        
        <button
          onClick={playAudio}
          className="p-3 rounded-full bg-blue-50 text-blue-600 dark:bg-blue-900/30 dark:text-blue-400 hover:bg-blue-100 dark:hover:bg-blue-900/50 transition-colors shadow-sm active:scale-95 flex-shrink-0"
          aria-label="Play audio"
        >
          <Volume2 className="w-6 h-6" />
        </button>
      </div>
    </div>
  );
}

"use client";

import { useState } from "react";
import { hskData, HSKLevel } from "@/lib/data";
import ConversationCard from "@/components/ConversationCard";
import { Eye, EyeOff, BookOpen, MonitorPlay, Code } from "lucide-react";

type TabId = 1 | 2 | 3 | 4 | 5 | "WEB" | "JS" | "TS" | "React" | "Next";

const tabs: { id: TabId; label: string }[] = [
  { id: 1, label: "HSK 1" },
  { id: 2, label: "HSK 2" },
  { id: 3, label: "HSK 3" },
  { id: 4, label: "HSK 4" },
  { id: 5, label: "HSK 5" },
  { id: "WEB", label: "Web Dev" },
  { id: "JS", label: "JS" },
  { id: "TS", label: "TS" },
  { id: "React", label: "React" },
  { id: "Next", label: "Next.js" }
];

export default function Home() {
  const [selectedTab, setSelectedTab] = useState<TabId>(1);
  const [showPinyin, setShowPinyin] = useState(true);

  // Filter conversations by the active tab
  let currentConversations: any[] = [];
  
  if (["JS", "TS", "React", "Next"].includes(selectedTab as string)) {
    Object.values(hskData).forEach((levelItems) => {
      const jsItems = levelItems.filter(item => item.category === "js_interview");
      
      jsItems.forEach(item => {
        const text = (item.hanzi + item.pinyin).toLowerCase();
        const isTs = /typescript|interface|type(?!script)|泛型|类型保护|any和unknown/i.test(text);
        const isReact = /react|hook|redux|fiber|zustand|状态提升|虚拟dom|组件/i.test(text);
        const isNext = /next\.js|ssr|ssg|react server components/i.test(text);

        if (isNext) {
          if (selectedTab === "Next") currentConversations.push(item);
        } else if (isReact) {
          if (selectedTab === "React") currentConversations.push(item);
        } else if (isTs) {
          if (selectedTab === "TS") currentConversations.push(item);
        } else {
          if (selectedTab === "JS") currentConversations.push(item);
        }
      });
    });
  } else if (selectedTab === "WEB") {
    Object.values(hskData).forEach((levelItems) => {
      currentConversations.push(...levelItems.filter(item => item.category === "web_dev"));
    });
  } else {
    currentConversations = (hskData[selectedTab as HSKLevel] || []).filter((item: any) => !item.category || item.category === "daily");
  }

  const getTitle = () => {
    if (selectedTab === "JS") return "JS Interview Questions";
    if (selectedTab === "TS") return "TypeScript Questions";
    if (selectedTab === "React") return "React.js Questions";
    if (selectedTab === "Next") return "Next.js Questions";
    if (selectedTab === "WEB") return "Web Developer Conversations";
    return `HSK ${selectedTab} Conversations`;
  };

  return (
    <main className="min-h-screen bg-slate-50 dark:bg-slate-900 text-slate-900 dark:text-slate-100 selection:bg-blue-200 dark:selection:bg-blue-900">
      {/* Header */}
      <header className="sticky top-0 z-10 backdrop-blur-md bg-white/70 dark:bg-slate-900/70 border-b border-slate-200 dark:border-slate-800 shadow-sm">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center gap-2">
              <BookOpen className="w-6 h-6 text-blue-600 dark:text-blue-400" />
              <h1 className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-600 dark:from-blue-400 dark:to-indigo-400">
                HSK Daily
              </h1>
            </div>

            <button
              onClick={() => setShowPinyin(!showPinyin)}
              className="flex items-center gap-2 px-4 py-2 rounded-full bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors text-sm font-medium"
            >
              {showPinyin ? (
                <>
                  <EyeOff className="w-4 h-4" /> Hide Pinyin
                </>
              ) : (
                <>
                  <Eye className="w-4 h-4" /> Show Pinyin
                </>
              )}
            </button>
          </div>
        </div>
      </header>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Main Tab Selector */}
        <div className="mb-10">
          <div className="flex shadow-sm rounded-xl overflow-x-auto ring-1 ring-slate-200 dark:ring-slate-800 bg-white/50 dark:bg-slate-800/50 p-1">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setSelectedTab(tab.id)}
                className={`flex-1 min-w-[80px] py-2.5 px-4 text-sm font-semibold text-center whitespace-nowrap rounded-lg transition-all duration-200 ${
                  selectedTab === tab.id
                    ? "bg-blue-600 text-white shadow-md shadow-blue-500/20"
                    : "text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-700/50"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Content Area */}
        <div className="space-y-6">
          <div className="mb-6 flex items-center justify-between">
            <h2 className="text-2xl font-bold tracking-tight">
              {getTitle()}
            </h2>
            <span className="bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded-full dark:bg-blue-900 dark:text-blue-300">
              {currentConversations.length} Items
            </span>
          </div>

          {currentConversations.length > 0 ? (
            <div className="grid gap-6">
              {currentConversations.map((entry, index) => (
                <ConversationCard
                  key={entry.id}
                  index={index + 1}
                  hanzi={entry.hanzi}
                  pinyin={entry.pinyin}
                  burmese={entry.burmese}
                  showPinyin={showPinyin}
                />
              ))}
            </div>
          ) : (
            <div className="text-center py-20 px-6 rounded-2xl border-2 border-dashed border-slate-200 dark:border-slate-800 bg-white/50 dark:bg-slate-900/50">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-slate-100 dark:bg-slate-800 mb-4 text-slate-400">
                <BookOpen className="w-8 h-8" />
              </div>
              <h3 className="text-lg font-medium text-slate-900 dark:text-slate-100 mb-1">
                Coming Soon
              </h3>
              <p className="text-slate-500 dark:text-slate-400">
                We are currently adding more content for this category. Check back later!
              </p>
            </div>
          )}
        </div>
      </div>
    </main>
  );
}

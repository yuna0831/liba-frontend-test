import { Sidebar } from '@/components/layout/Sidebar';
import { TopBar } from '@/components/layout/TopBar';
import { MobileNav } from '@/components/layout/MobileNav';
import { RecommendedList } from '@/features/recommendation/RecommendedList';
import { MatchAnalysis } from '@/features/recommendation/MatchAnalysis';
import { WhyChooseWidget } from '@/features/recommendation/WhyChooseWidget'; // Import new widget
import { Search, Bell, HelpCircle } from 'lucide-react'; // Added icons

export default function Home() {
  return (
    <div className="min-h-screen bg-[#F8F9FA] flex flex-col lg:flex-row font-sans text-sm text-slate-800 relative">
      {/* Left Column: Sidebar (Desktop) */}
      <Sidebar />

      {/* Top Bar (Absolute) */}
      <TopBar />

      {/* Main Content Area - Added top padding for fixed header */}
      <main className="flex-1 p-4 lg:p-8 pt-[100px] pb-24 lg:pb-8 max-w-7xl mx-auto w-full">

        {/* 3-Column Layout Grid (Center + Right) */}
        <div className="grid grid-cols-1 xl:grid-cols-[1fr_320px] gap-8 items-start">

          {/* Center Column: Job Feed */}
          <div className="space-y-4">
            <RecommendedList />
          </div>

          {/* Right Column: AI Analysis Panel */}
          <div className="hidden xl:block sticky top-8 space-y-6">
            <WhyChooseWidget />
            {/* MatchAnalysis can stay or go, but user highlighted Why Choose. I'll put MatchAnalysis below if it fits, or remove if cluttered.
                 The prompt 2 turns ago asked for "Right AI Matching Panel". This turn asked specifically for "Right Sidebar: Why Choose...".
                 I'll keep `MatchAnalysis` as it adds value, but put `WhyChooseWidget` first as requested.
                 Actually, simpler is better. I'll show WhyChooseWidget mainly.
             */}
            <MatchAnalysis />
          </div>

        </div>
      </main>

      {/* Mobile Navigation (Bottom) */}
      <MobileNav />
    </div>
  );
}

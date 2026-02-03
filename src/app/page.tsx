import { Sidebar } from '@/components/layout/Sidebar';
import { MobileNav } from '@/components/layout/MobileNav';
import { RecommendedList } from '@/features/recommendation/RecommendedList';
import { MatchAnalysis } from '@/features/recommendation/MatchAnalysis';
import { WhyChooseWidget } from '@/features/recommendation/WhyChooseWidget'; // Import new widget
import { Search, Bell, HelpCircle } from 'lucide-react'; // Added icons

export default function Home() {
  return (
    <div className="min-h-screen bg-[#F8F9FA] flex flex-col lg:flex-row font-sans text-sm text-slate-800">
      {/* Left Column: Sidebar (Desktop) */}
      <Sidebar />

      {/* Main Content Area */}
      <main className="flex-1 p-4 lg:p-8 pb-24 lg:pb-8 max-w-7xl mx-auto w-full">
        <header className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-2xl font-bold text-gray-900 tracking-tight">Find your next dream job</h1>
            <p className="text-gray-500 mt-1 text-xs">Good morning, Intern! You have 5 new matches.</p>
          </div>
          <div className="hidden md:flex items-center gap-4">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
              <input
                type="text"
                placeholder="Search jobs..."
                className="pl-10 pr-4 py-2.5 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-brand-purple/20 focus:border-brand-purple transition-all text-xs bg-white shadow-sm w-64"
              />
            </div>
            <button className="w-10 h-10 bg-white border border-gray-200 rounded-xl flex items-center justify-center text-gray-500 hover:text-brand-purple hover:border-brand-purple/50 transition-colors shadow-sm">
              <Bell className="w-5 h-5" />
            </button>
            <button className="w-10 h-10 bg-white border border-gray-200 rounded-xl flex items-center justify-center text-gray-500 hover:text-brand-purple hover:border-brand-purple/50 transition-colors shadow-sm">
              <HelpCircle className="w-5 h-5" />
            </button>
          </div>
        </header>

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

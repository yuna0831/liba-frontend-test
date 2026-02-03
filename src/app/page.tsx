import { Sidebar } from '@/components/layout/Sidebar';
import { TopBar } from '@/components/layout/TopBar';
import { MobileNav } from '@/components/layout/MobileNav';
import { JobReferenceLabel } from '@/components/layout/JobReferenceLabel';
import { TopMatchedButton } from '@/components/layout/TopMatchedButton';
import { RightSidebarPanel } from '@/components/layout/RightSidebarPanel';
import { RecommendedList } from '@/features/recommendation/RecommendedList';
import { MatchAnalysis } from '@/features/recommendation/MatchAnalysis';
import { WhyChooseWidget } from '@/features/recommendation/WhyChooseWidget';
import { Search, Bell, HelpCircle } from 'lucide-react';

export default function Home() {
  return (
    <div className="min-h-screen bg-[#F3F4F6] flex flex-col lg:flex-row font-sans text-sm text-slate-800 relative">
      <Sidebar />

      {/* 2. TopBar와 함께 위치 (absolute 기준점 공유) */}
      <TopBar />
      <JobReferenceLabel />
      <TopMatchedButton />

      {/* Future Job Box (Absolute Placeholder) */}
      <div className="absolute left-[241px] top-[157px] w-[870px] h-[739px] bg-[#FFFFFF]">
        <RecommendedList />
      </div>

      {/* Right Sidebar Panel (Absolute) */}
      <RightSidebarPanel />

      <main className="flex-1 p-4 lg:p-8 pt-[100px] pb-24 lg:pb-8 max-w-7xl mx-auto w-full">
        <div className="grid grid-cols-1 xl:grid-cols-[1fr_320px] gap-8 items-start">
          <div className="space-y-4">
            {/* Moved to Absolute Future Job Box */}
          </div>


        </div>
      </main>

      <MobileNav />
    </div>
  );
}
import { Sidebar } from '@/components/layout/Sidebar';
import { TopBar } from '@/components/layout/TopBar';
import { MobileNav } from '@/components/layout/MobileNav';
import { JobReferenceLabel } from '@/components/layout/JobReferenceLabel';
import { TopMatchedButton } from '@/components/layout/TopMatchedButton';
import { RightSidebarPanel } from '@/components/layout/RightSidebarPanel';
import { RecommendedList } from '@/features/recommendation/RecommendedList';

export default function Home() {
  return (
    // Outer Shell: Full width background
    <div className="min-h-screen bg-[#F3F4F6] flex justify-center font-sans text-sm text-slate-800 overflow-x-hidden">

      {/* 
        Hybrid Container: 
        - Max Width 1512px (MacBook)
        - Centered (mx-auto)
        - Flex Row for Sidebars + Content
      */}
      <div className="w-full max-w-[1512px] mx-auto flex shadow-xl bg-white min-h-screen relative">

        {/* 1. Left Sidebar: Fixed 219px */}
        <div className="hidden lg:block w-[219px] shrink-0 relative z-50">
          <Sidebar className="w-[219px] h-screen sticky top-0 border-r border-[#E5E7EB]" />
        </div>

        {/* 2. Main Content Wrapper: Flex-1 (Fills remaining space) */}
        <div className="flex-1 flex flex-col min-w-0 bg-[#F3F4F6] relative">

          {/* Top Bar: Fixed Height 80px */}
          <TopBar className="sticky top-0 z-40 w-full h-[80px] bg-white/95 backdrop-blur-sm shadow-sm" />

          {/* Main Content Area 
              - Padding Top: 22px (Total 102px - 80px TopBar)
              - Padding X: 32px (gap-8 equivalent)
          */}
          <main className="flex-1 w-full flex justify-between pt-[22px] px-8 gap-8">

            {/* Center Column: Flex-1 (Fluid Grid) */}
            <div className="flex-1 flex flex-col min-w-0">

              {/* Headers Container: Flex Justify Between */}
              <div className="relative mb-6 w-full">
                <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 w-full">

                  {/* Job Reference Label */}
                  <div className="flex-1 w-full sm:w-auto min-w-0">
                    <JobReferenceLabel className="w-full text-truncate shadow-none border-gray-200 h-[46px]" />
                  </div>

                  {/* Top Matched Button */}
                  <TopMatchedButton className="shrink-0 shadow-sm border border-transparent hover:border-[#B7FD33] h-[46px]" />
                </div>
              </div>

              {/* Job List: Flex-1 to fill height/width */}
              <div className="w-full bg-white shadow-sm rounded-xl overflow-hidden min-h-[500px] border border-gray-100 flex-1">
                <RecommendedList />
              </div>
            </div>

            {/* Right Sidebar Column: Fixed 290px
                 - Hidden on smaller screens (< xl)
                 - Sticky Top: 102px (Matches Sidebar Menu & Content Start)
             */}
            <div className="hidden xl:block w-[290px] shrink-0 relative">
              <div className="sticky top-[102px]">
                <RightSidebarPanel className="w-[290px] h-[790px]" />
              </div>
            </div>

          </main>
        </div>
      </div>

      {/* Mobile Nav */}
      <MobileNav />
    </div>
  );
}
import { Sidebar } from '@/components/layout/Sidebar';
import { TopBar } from '@/components/layout/TopBar';
import { MobileNav } from '@/components/layout/MobileNav';
import { JobReferenceLabel } from '@/components/layout/JobReferenceLabel';
import { TopMatchedButton } from '@/components/layout/TopMatchedButton';
import { RightSidebarPanel } from '@/components/layout/RightSidebarPanel';
import { RecommendedList } from '@/features/recommendation/RecommendedList';
// src/app/page.tsx (또는 Home 컴포넌트 파일)
export default function Home() {
  return (
    <div className="min-h-screen bg-[#F3F4F6] flex justify-center font-sans text-sm text-slate-800 overflow-x-hidden">
      <div className="w-full max-w-[1512px] mx-auto flex bg-white min-h-screen relative shadow-none">

        {/* 1. 왼쪽 사이드바 (219px) */}
        <div className="hidden lg:block w-[219px] shrink-0 z-50">
          <Sidebar className="w-[219px] h-screen sticky top-0 border-r border-[#E5E7EB]" />
        </div>

        {/* 2. 메인 영역 */}
        <div className="flex-1 flex flex-col min-w-0 bg-[#F3F4F6] relative">
          <TopBar className="sticky top-0 z-40 w-full h-[80px] bg-white shadow-sm" />

          <main className="flex-1 w-full pt-[22px] px-[20px]">
            {/* 중앙 컨테이너: 900px(카드) + 40px(간격) + 260px(사이드바) = 총 1200px 
                이 설정을 통해 사라졌던 오른쪽 사이드바가 화면 안으로 들어옵니다.
            */}
            <div className="w-full max-w-[1200px] mx-auto flex justify-between items-start">

              {/* 왼쪽: 잡카드 리스트 (900px로 조정 -> Mobile Responsive) */}
              <div className="flex flex-col w-full max-w-[900px] shrink-0">
                {/* Label(728) + Gap(10) + Button(162) = 900px */}
                <div className="flex flex-col md:flex-row items-start md:items-center gap-[10px] mb-[15px] w-full">
                  <JobReferenceLabel />
                  <TopMatchedButton />
                </div>

                <div className="w-full">
                  <RecommendedList />
                </div>
              </div>

              {/* 오른쪽: 사이드바 (260px로 슬림화 및 밀착) */}
              <div className="hidden xl:block w-[260px] shrink-0 ml-[40px]">
                <div className="sticky top-[102px]">
                  <RightSidebarPanel className="w-[260px] h-[790px] border-none shadow-none bg-transparent" />
                </div>
              </div>

            </div>
          </main>
        </div>
      </div>
      <MobileNav />
    </div>
  );
}
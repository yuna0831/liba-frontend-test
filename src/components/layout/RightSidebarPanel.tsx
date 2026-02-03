import React from 'react';

export function RightSidebarPanel({ className }: { className?: string }) {
    return (
        <div className={`w-[290px] h-[790px] bg-[#FFFFFF] rounded-[12px] overflow-hidden z-30 border border-[#E5E7EB] relative ${className}`}>

            {/* 1. Eclipse Background - Centered horizontally or adapted */}
            <div className="absolute left-1/2 -translate-x-1/2 top-[-38px] w-[136%] pb-[136%] rounded-full blur-[100px] pointer-events-none" style={{
                background: 'linear-gradient(180deg, rgba(0, 194, 255, 0.4) 0%, rgba(166, 139, 250, 0.5) 50%, rgba(255, 148, 228, 0.3) 100%)'
            }} />

            {/* 2. Header Section (Frame 29030) - Width 80% */}
            <div className="absolute top-[66px] left-[10%] w-[80%] z-10">
                <h3 className="font-[family-name:var(--font-inter)] text-[16px] font-semibold text-[#19212D] leading-[22px] mb-[12px]">
                    Ace Your Interviews with AI-Powered Mock Sessions!
                </h3>
                <p className="font-[family-name:var(--font-inter)] text-[14px] font-normal text-[#000000] leading-[20px]">
                    Struggling with interview nerves... shine!
                </p>
            </div>

            {/* 3. Features List Section - Width 88% */}
            <div className="absolute top-[262px] left-[6%] w-[88%] flex flex-col gap-[24px] z-10">

                {/* Item 1 */}
                <div className="flex flex-col gap-[4px]">
                    <h4 className="font-[family-name:var(--font-inter)] text-[14px] font-bold text-[#19212D]">
                        Job-Specific Simulations
                    </h4>
                    <p className="font-[family-name:var(--font-inter)] text-[14px] font-normal text-[#000000] leading-[20px]">
                        Practice with questions tailored...
                    </p>
                </div>

                {/* Item 2 */}
                <div className="flex flex-col gap-[4px]">
                    <h4 className="font-[family-name:var(--font-inter)] text-[14px] font-bold text-[#19212D]">
                        Actionable Feedback
                    </h4>
                    <p className="font-[family-name:var(--font-inter)] text-[14px] font-normal text-[#000000] leading-[20px]">
                        Get detailed analysis...
                    </p>
                </div>

                {/* Item 3 */}
                <div className="flex flex-col gap-[4px]">
                    <h4 className="font-[family-name:var(--font-inter)] text-[14px] font-bold text-[#19212D]">
                        Boost Success Rates
                    </h4>
                    <p className="font-[family-name:var(--font-inter)] text-[14px] font-normal text-[#000000] leading-[20px]">
                        Perfect your interview skills...
                    </p>
                </div>

            </div>

            {/* 4. Action Button - Width 80% */}
            <button className="absolute top-[666px] left-1/2 -translate-x-1/2 w-[80%] h-[45px] bg-[#19202B] rounded-[31px] flex items-center justify-center cursor-pointer transition-transform hover:scale-105 z-20 shadow-[0px_4px_4px_rgba(0,0,0,0.25)] border-none">
                <span className="font-[family-name:var(--font-inter)] text-[16px] font-medium text-white">
                    Mock Interview
                </span>
            </button>

        </div>
    );
}

import React, { useState, useEffect } from 'react';
import { Sparkles } from 'lucide-react';

/**
 * MatchRateCard: 110x81px 사이즈의 개별 매칭 카드 (Figma: Rectangle 9638)
 * 게이지가 12시 방향에서 시작해 시계 반대 방향(CCW)으로 차오름
 */
const MatchRateCard = ({ percentage, label, isUpgraded }: { percentage: number; label: string; isUpgraded: boolean }) => {
    const [currentPercent, setCurrentPercent] = useState(0);
    const radius = 18;
    const circumference = 2 * Math.PI * radius;

    useEffect(() => {
        if (isUpgraded) {
            const timer = setTimeout(() => setCurrentPercent(percentage), 300);
            return () => clearTimeout(timer);
        } else {
            setCurrentPercent(0);
        }
    }, [isUpgraded, percentage]);

    const offset = circumference - (currentPercent / 100) * circumference;

    return (
        <div
            className="flex flex-col items-center justify-center bg-white rounded-[5px] shadow-sm transition-all duration-500 relative"
            style={{ width: '110px', height: '81px' }}
        >
            <div className="relative w-[40px] h-[40px] flex items-center justify-center mb-1">
                {/* 시계 반대 방향 구현: scale-x-[-1]로 좌우 반전 */}
                <svg className="w-full h-full transform -rotate-90 scale-x-[-1]">
                    <circle
                        cx="20"
                        cy="20"
                        r={radius}
                        stroke="#F3F4F6"
                        strokeWidth="3.5"
                        fill="transparent"
                    />
                    <circle
                        cx="20"
                        cy="20"
                        r={radius}
                        stroke={isUpgraded ? "#A68BFA" : "#E5E7EB"}
                        strokeWidth="3.5"
                        fill="transparent"
                        strokeDasharray={circumference}
                        strokeDashoffset={offset}
                        strokeLinecap="round"
                        className="transition-all duration-1000 ease-out"
                    />
                </svg>
                <span className={`absolute font-['Inter'] font-semibold text-[11px] ${isUpgraded ? 'text-[#1F2937]' : 'text-gray-300'}`}>
                    {isUpgraded ? `${percentage}%` : '??%'}
                </span>
            </div>
            <span className={`font-['Inter'] font-medium text-[12px] leading-[18px] tracking-[-0.02em] ${isUpgraded ? 'text-black' : 'text-gray-400'}`}>
                {label}
            </span>
        </div>
    );
};

/**
 * RightSidebarVer2: 전체 사이드바 패널 컴포넌트 (290x788px)
 * Figma: Frame 1000004305
 */
export const RightSidebarVer2 = ({ className }: { className?: string }) => {
    const [isUpgraded, setIsUpgraded] = useState(false);

    return (
        <div
            className={`relative overflow-hidden bg-white rounded-[12px] border border-[#EDEDED] shadow-sm transition-all duration-500 ${className || ''}`}
            style={{ width: '290px', height: '788px' }}
        >
            {/* 1. Gemini-style Aurora Background */}
            <div className="absolute inset-0 pointer-events-none transition-opacity duration-1000"
                style={{
                    background: `
            linear-gradient(to right, 
                rgba(255, 255, 255, 1) 0%, 
                rgba(255, 255, 255, 0.8) 40%, 
                transparent 100%
            ),
            linear-gradient(to bottom, 
                rgba(224, 242, 255, ${isUpgraded ? 0.6 : 0.3}) 0%, 
                rgba(235, 224, 255, ${isUpgraded ? 0.5 : 0.2}) 40%, 
                rgba(255, 235, 235, ${isUpgraded ? 0.4 : 0.1}) 100%
            )
          `,
                    zIndex: 0
                }}
            />

            {/* Title Area: Why is this job a good fit for me? */}
            <h3
                className="absolute font-['Inter'] font-semibold text-[16px] text-[#19212D] z-[20]"
                style={{
                    width: '262px',
                    height: '21px',
                    left: '25px',
                    top: '28px',
                    lineHeight: '20px',
                    letterSpacing: '-0.02em'
                }}
            >
                Why is this job a good fit for me?
            </h3>

            {/* Main Content Area */}
            <div className={`relative z-[5] h-full flex flex-col transition-all duration-700 ${!isUpgraded ? 'blur-[0.5px] select-none' : 'blur-0'}`}>

                {/* 2. Match Rate Grid (Frame 5311): 262x183px, left 14px, top 60px */}
                <div
                    className="absolute grid grid-cols-2 gap-[10px]"
                    style={{ width: '262px', height: '183px', left: '14px', top: '60px', padding: '6px 20px' }}
                >
                    <MatchRateCard percentage={93} label="Education" isUpgraded={isUpgraded} />
                    <MatchRateCard percentage={80} label="Work Exp" isUpgraded={isUpgraded} />
                    <MatchRateCard percentage={93} label="Skills" isUpgraded={isUpgraded} />
                    <MatchRateCard percentage={44} label="Exp. Level" isUpgraded={isUpgraded} />
                </div>

                {/* Divider Line (Border line after grid) */}
                <div
                    className="absolute border-t border-[rgba(75,75,75,0.1)]"
                    style={{ width: '257px', left: '16px', top: '252px' }}
                />

                {/* 3. Detailed Analysis (Frame 29027): left 13px, top 271px */}
                <div
                    className="absolute flex flex-col"
                    style={{ width: '247px', height: '516px', left: '13px', top: '250px' }}
                >

                    {/* Section: Relevant Experience ✅ (Frame 29026) */}
                    <div className="flex flex-col items-start gap-[11px] py-[25px] relative" style={{ width: '247px', minHeight: '192px' }}>
                        <h4 className="font-['Inter'] font-semibold text-[14px] leading-[10px] tracking-[-0.02em] text-black px-[16px]">
                            Relevant Experience ✅
                        </h4>
                        <div className="flex items-start gap-[10px] px-[10px]">
                            <span className="text-black font-normal text-[20px] leading-[20px]">•</span>
                            <p className="font-['Inter'] font-normal text-[13px] leading-[20px] tracking-[-0.02em] text-black">
                                You have substantial experience as a UI/UX Designer, Interaction Designer, and User Research Specialist. Your role at Sohu aligns with designing interaction elements relevant to user experience design for digital products.
                            </p>
                        </div>
                    </div>

                    {/* Section: Seniority ✅ (Frame 29025) */}
                    <div className="flex flex-col items-start gap-[10px] py-[25px] relative" style={{ width: '236px', minHeight: '131px' }}>
                        <h4 className="font-['Inter'] font-semibold text-[14px] leading-[10px] tracking-[-0.02em] text-black px-[16px]">
                            Seniority ✅
                        </h4>
                        <div className="flex items-start gap-[10px] px-[10px]">
                            <span className="text-black font-normal text-[20px] leading-[20px]">•</span>
                            <p className="font-['Inter'] font-normal text-[13px] leading-[20px] tracking-[-0.02em] text-black">
                                You have amassed over eight years of relevant experience, meeting the mid-level seniority requirement for the role.
                            </p>
                        </div>
                    </div>

                    {/* Section: Education ⚠️ (Frame 29024) */}
                    <div className="flex flex-col items-start gap-[12px] py-[20px] relative" style={{ width: '247px', minHeight: '193px' }}>
                        <h4 className="font-['Inter'] font-semibold text-[14px] leading-[10px] tracking-[-0.02em] text-black px-[16px]">
                            Education ⚠️
                        </h4>
                        <div className="flex items-start gap-[10px] px-[10px]">
                            <span className="text-black font-normal text-[20px] leading-[20px]">•</span>
                            <p className="font-['Inter'] font-normal text-[13px] leading-[20px] tracking-[-0.02em] text-black">
                                While you hold a Master's degree from Politecnico di Milano in Digital and Interaction Design, it doesn't strictly align with the specified fields of Computer Science, Computer Engineering, or Information Science and Technology required by the job.
                            </p>
                        </div>
                    </div>

                </div>
            </div>

            {/* 4. Premium Lock Overlay */}
            {
                !isUpgraded && (
                    <div
                        className="absolute inset-0 flex flex-col items-center justify-end pb-[37px] z-[30]"
                        style={{
                            top: '54px',
                            background: 'linear-gradient(180deg, rgba(255, 255, 255, 0) -1.24%, rgba(255, 255, 255, 0.3) 22.39%, rgba(255, 255, 255, 1) 100%)',
                            backdropFilter: 'blur(18px)',
                            WebkitBackdropFilter: 'blur(18px)'
                        }}
                    >
                        {/* Texture Overlay */}
                        <div className="absolute inset-0 opacity-[0.02] pointer-events-none"
                            style={{ backgroundImage: `url("https://www.transparenttextures.com/patterns/carbon-fibre.png")` }} />

                        {/* Upgrade Button */}
                        <button
                            onClick={() => setIsUpgraded(true)}
                            className="flex flex-row justify-center items-center px-[18px] py-[8px] gap-[10px] bg-[#1F2937] rounded-[43px] shadow-2xl transition-all hover:bg-black hover:scale-105 active:scale-95 group"
                            style={{ width: '172px', height: '40px' }}
                        >
                            <span className="font-['Inter'] font-normal text-[16px] text-white">Upgrade to check</span>
                        </button>
                    </div>
                )
            }
        </div >
    );
};

export default function App() {
    return (
        <div className="min-h-screen bg-gray-100 flex items-center justify-center p-10 font-sans">
            <RightSidebarVer2 />
        </div>
    );
}
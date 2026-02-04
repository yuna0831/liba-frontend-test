'use client';

import React, { useState } from 'react';

/**
 * 개별 매칭 항목을 보여주는 원형 프로그레스 바 컴포넌트
 */
interface MatchCircleProps {
    percentage: number;
    label: string;
    color?: string;
}

const MatchCircle = ({ percentage, label, color = "#A68BFA" }: MatchCircleProps) => {
    const radius = 20;
    const circumference = 2 * Math.PI * radius;
    const offset = circumference - (percentage / 100) * circumference;

    return (
        <div className="flex flex-col items-center gap-[5px]" style={{ width: '80px', height: '69px' }}>
            <div className="relative w-[46px] h-[46px] flex items-center justify-center">
                <svg className="w-full h-full transform -rotate-90">
                    <circle
                        cx="23"
                        cy="23"
                        r={radius}
                        stroke="rgba(232, 232, 232, 0.88)"
                        strokeWidth="4"
                        fill="transparent"
                    />
                    <circle
                        cx="23"
                        cy="23"
                        r={radius}
                        stroke={color}
                        strokeWidth="4"
                        fill="transparent"
                        strokeDasharray={circumference}
                        strokeDashoffset={offset}
                        strokeLinecap="round"
                        className="transition-all duration-1000 ease-out"
                    />
                </svg>
                <span className="absolute font-['Inter'] font-semibold text-[12px] tracking-[-0.02em] text-[#1F2937]">
                    {percentage}%
                </span>
            </div>
            <span className="font-['Inter'] font-medium text-[12px] leading-[18px] tracking-[-0.02em] text-[#000000]">
                {label}
            </span>
        </div>
    );
};

export const RightSidebarVer2 = ({ className }: { className?: string }) => {
    // 업그레이드 여부 상태
    const [isUpgraded, setIsUpgraded] = useState(false);

    return (
        <div
            className={`relative overflow-hidden bg-white rounded-[16.77px] border border-[#EDEDED] shadow-sm ${className || ''}`}
            style={{ width: '290px', height: '787px' }}
        >
            {/* 1. Gemini-style Aurora Background */}
            {/* 왼쪽은 흰색을 유지하면서 오른쪽 영역에만 색상이 부드럽게 번지도록 설정 */}
            <div className="absolute inset-0 pointer-events-none"
                style={{
                    background: `
                        linear-gradient(to right, 
                            rgba(255, 255, 255, 1) 0%, 
                            rgba(255, 255, 255, 0.8) 40%, 
                            transparent 100%
                        ),
                        linear-gradient(to bottom, 
                            rgba(224, 242, 255, 0.6) 0%,   /* 상단: 푸릇한 파스텔 블루 */
                            rgba(235, 224, 255, 0.5) 40%,  /* 중간: 부드러운 보라 */
                            rgba(255, 235, 235, 0.4) 100%  /* 하단: 연한 핑크/레드 */
                        )
                    `,
                    zIndex: 0
                }}
            />

            {/* 제목 섹션 */}
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

            {/* 실제 내용 영역 (isUpgraded가 false일 때 블러처리됨) */}
            <div className={`relative z-[5] h-full ${!isUpgraded ? 'select-none' : ''}`}>

                {/* 매칭 지표 그리드 */}
                <div
                    className="absolute grid grid-cols-2 gap-x-[20px] gap-y-[15px]"
                    style={{ left: '35px', top: '75px' }}
                >
                    <MatchCircle percentage={93} label="Education" />
                    <MatchCircle percentage={80} label="Work Exp" />
                    <MatchCircle percentage={93} label="Skills" />
                    <MatchCircle percentage={44} label="Exp. Level" />
                </div>

                {/* 구분선 */}
                <div
                    className="absolute border-t border-[rgba(75,75,75,0.47)]"
                    style={{ width: '257px', left: '16px', top: '252px' }}
                />

                {/* 상세 분석 리스트 */}
                <div
                    className="absolute flex flex-col gap-[0px]"
                    style={{ left: '16px', top: '271px', width: '247px' }}
                >
                    <div className="py-[25px] flex flex-col gap-[11px]">
                        <h4 className="font-semibold text-[14px] leading-[20px] text-black px-[16px]">Relevant Experience ✅</h4>
                        <p className="text-[14px] leading-[20px] text-black font-normal px-[16px]">
                            You have substantial experience as a UI/UX Designer, Interaction Designer, and User Research Specialist.
                        </p>
                    </div>

                    <div className="py-[25px] flex flex-col gap-[10px]">
                        <h4 className="font-semibold text-[14px] leading-[20px] text-black px-[16px]">Seniority ✅</h4>
                        <p className="text-[14px] leading-[20px] text-black font-normal px-[16px]">
                            You have amassed over eight years of relevant experience, meeting the mid-level requirement.
                        </p>
                    </div>

                    <div className="py-[25px] flex flex-col gap-[12px]">
                        <h4 className="font-semibold text-[14px] leading-[20px] text-black px-[16px]">Education ⚠️</h4>
                        <p className="text-[14px] leading-[20px] text-black font-normal px-[16px]">
                            While you hold a Master's degree, it doesn't strictly align with the specified fields required.
                        </p>
                    </div>
                </div>
            </div>

            {/* 프리미엄 잠금 오버레이 (isUpgraded가 false일 때만 표시) */}
            {!isUpgraded && (
                <div
                    className="absolute inset-0 flex flex-col items-center justify-end pb-[37px] z-[10]"
                    style={{
                        top: '54px',
                        background: 'linear-gradient(180deg, rgba(255, 255, 255, 0) -1.24%, rgba(255, 255, 255, 0.2) 22.39%, rgba(255, 255, 255, 0.4) 100%)',
                        backdropFilter: 'blur(18px)',
                        WebkitBackdropFilter: 'blur(18px)'
                    }}
                >
                    {/* 텍스처 오버레이 (노이즈 효과) */}
                    <div
                        className="absolute inset-0 opacity-[0.02] pointer-events-none"
                        style={{ backgroundImage: `url("https://www.transparenttextures.com/patterns/carbon-fibre.png")` }}
                    />

                    {/* Upgrade to check 버튼 */}
                    <button
                        onClick={() => setIsUpgraded(true)}
                        className="flex flex-row justify-center items-center px-[18px] py-[8px] gap-[10px] bg-[#1F2937] rounded-[43px] shadow-lg transition-all hover:bg-black active:scale-95 group"
                        style={{
                            width: '172px',
                            height: '40px',
                        }}
                    >
                        <span
                            className="font-['Inter'] font-normal text-[16px] text-white"
                            style={{ lineHeight: '150%' }}
                        >
                            Upgrade to check
                        </span>
                    </button>
                </div>
            )}
        </div>
    );
};
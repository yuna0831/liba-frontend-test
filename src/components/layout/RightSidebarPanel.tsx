import React from 'react';

export function RightSidebarPanel({ className }: { className?: string }) {
    return (
        /* W: 290px, H: 790px, 깔끔한 카드 스타일 */
        <div className={`w-[290px] h-[790px] bg-[#FFFFFF] rounded-[12px] overflow-hidden z-30 border border-[#E5E7EB] relative ${className}`}>

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
                }}
            />

            {/* 은은한 광택감을 위한 블러 요소 추가 (이미지 우측 상단 느낌) */}
            <div className="absolute -right-10 -top-10 w-[250px] h-[250px] bg-[#D0E8FF] opacity-40 blur-[80px] rounded-full pointer-events-none" />

            {/* 2. Top Icon & Header (Frame 29030) */}
            <div className="absolute left-[30px] top-[23px] w-[30px] h-[30px]">
                <img src="/shining.png" alt="AI Icon" className="w-full h-full object-contain" />
            </div>

            {/* 3. Top Header Section (Frame 29030) */}
            <div className="absolute top-[66px] left-[30px] w-[255px] flex flex-col gap-[13px] z-10">
                <h3 className="w-[255px] font-['Inter'] font-semibold text-[16px] leading-[25px] tracking-[-0.02em] text-[#19212D]">
                    Ace Your Interviews with AI-Powered Mock Sessions!
                </h3>
                <p className="w-[232px] font-['Inter'] font-normal text-[14px] leading-[20px] tracking-[-0.02em] text-black">
                    Struggling with interview nerves or unsure how to prepare? Let our cutting-edge AI mock interviews help you shine!
                </p>
            </div>

            {/* 4. Middle Border Line (Y: 220px 고정) */}
            <div className="absolute left-[16.5px] top-[232px] w-[257px] h-[0.76px] bg-[rgba(75,75,75,0.47)] z-10" />



            {/* 5. Stars Icon (Generate B) - 피그마 절대 좌표 그대로 반영 */}
            <div className="absolute left-[128px] top-[288px] w-[22px] h-[22px] z-30">
                <img src="/stars.png" alt="stars" className="w-full h-full object-contain" />
            </div>

            {/* 6. Features Section (Frame 29028) */}
            <div className="absolute top-[262px] left-[30px] w-[247px] flex flex-col z-10">

                {/* 텍스트 위치 수정: Why Choose Our AI Mock Interviews? */}
                {/* 텍스트 뒤에 별 아이콘이 올 수 있도록 width를 확보하고 스타일을 적용했습니다. */}
                <h3 className="w-[236px] min-h-[57px] font-['Inter'] font-semibold text-[16px] leading-[25px] tracking-[-0.02em] text-[#19212D] font-feature-settings-['calt'_off] mb-[12px]">
                    Why Choose Our AI Mock <br /> Interviews?
                </h3>
                {/* Feature Items - 문단 간격 및 정렬 수정 */}
                <div className="flex flex-col gap-[20px]">
                    {[
                        {
                            title: 'Job-Specific Simulations:',
                            desc: 'Practice with questions tailored to your target role, ensuring relevance and preparation.'
                        },
                        {
                            title: 'Actionable Feedback',
                            desc: 'Get detailed analysis of your responses and practical, step-by-step improvement suggestions.'
                        },
                        {
                            title: 'Boost Success Rates:',
                            desc: 'Perfect your interview skills and increase your chances of landing the job you want.'
                        }
                    ].map((item, idx) => (
                        <div key={idx} className="flex flex-col relative">
                            {/* 제목: 왼쪽 정렬 (left: 30px 선상) */}
                            <h4 className="font-['Inter'] font-semibold text-[14px] leading-[20px] tracking-[-0.02em] text-black">
                                {item.title}
                            </h4>

                            {/* 상세 설명: 제목과 같은 선상에서 시작하도록 pl 제거 */}
                            <div className="relative mt-[2px]">
                                {/* 불렛 포인트: 문장 시작점 왼쪽 외곽으로 배치 */}
                                <div className="absolute left-[-12px] top-[8px] w-[4px] h-[4px] bg-black rounded-full" />
                                <p className="font-['Inter'] font-normal text-[14px] leading-[20px] tracking-[-0.02em] text-black">
                                    {item.desc}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* 7. Mock Interview Button - top: 666px */}
            <button
                className="absolute top-[666px] left-[28px] w-[234px] h-[45px] bg-[#19202B] rounded-[31px] flex items-center justify-center gap-[10px] hover:bg-[#2d3a4d] transition-all z-20 shadow-sm"
            >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M15 6v12a3 3 0 1 0 3-3H6a3 3 0 1 0 3 3V6a3 3 0 1 0-3 3h12a3 3 0 1 0-3-3" />
                </svg>
                <span className="font-['Inter'] font-medium text-[16px] leading-[20px] tracking-[-0.02em] text-white">
                    Mock Interview
                </span>
            </button>
        </div>
    );
}
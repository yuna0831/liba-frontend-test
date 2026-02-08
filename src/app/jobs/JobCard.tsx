'use client';

import { Link2, Heart, MapPin, Radio } from 'lucide-react';
import { MatchRateChart } from '@/app/jobs/MatchRateChart';
import { useState } from 'react';
import { useRouter } from 'next/navigation';

interface JobCardProps {
    title: string;
    company: string;
    location: string;
    type: string;
    salary: string;
    tags: string[];
    logo?: string;
    matchScore?: number;
    matchColor?: string;
    postedAt?: string;
    applicants?: number;
}

export function JobCard({ title, company, location, type, salary, tags, logo, matchScore, matchColor, postedAt, applicants }: JobCardProps) {
    const [isLiked, setIsLiked] = useState(false);
    const router = useRouter();

    const handleApplyClick = (e: React.MouseEvent) => {
        e.stopPropagation(); // 카드 전체 클릭 방지
        // 상세 페이지로 이동 (id나 title을 슬러그로 활용)
        router.push(`/jobs/detail`);
    };

    return (
        <div className="w-full max-w-[900px] bg-white rounded-[12.94px] border border-[#EDEDED] relative overflow-hidden group hover:shadow-md transition-shadow mb-[6px] flex flex-col">

            {/* 1. TOP SECTION */}
            <div className="p-[25px] pb-0 flex flex-col md:flex-row gap-[24px]">
                {/* Chart Section */}
                <div className="flex-none w-[107px] h-[107px] relative mx-auto md:mx-0">
                    <MatchRateChart percentage={matchScore || 64} size={107} color={matchColor || '#FFD035'} />
                    <span className="absolute font-[family-name:var(--font-inter)] font-normal text-[#1F2937] text-center"
                        style={{
                            width: '49px', height: '27px', left: 'calc(50% - 24.5px + 0.58px)', top: 'calc(50% - 13.5px + 16.2px)',
                            fontSize: '16.7729px', lineHeight: '27px', letterSpacing: '-0.02em', fontFeatureSettings: "'calt' off"
                        }}
                    >
                        Match
                    </span>
                </div>

                {/* Info Section */}
                <div className="flex-1 flex flex-col gap-2 md:block relative">
                    {/* 타이틀 및 우측 아이콘 */}
                    <div className="w-full flex justify-between items-start mb-2 md:mb-0">
                        <h3 className="text-[20px] md:text-[23px] font-semibold text-black leading-tight tracking-[-0.02em] font-[family-name:var(--font-inter)] line-clamp-2 md:line-clamp-1 max-w-full md:max-w-[650px]">
                            {title}
                        </h3>
                        <div className="flex items-center gap-[15px] pt-[6.8px] flex-shrink-0 ml-2">
                            {/* url.png 아이콘으로 교체 */}
                            <div className="w-[19.41px] h-[19.41px] cursor-pointer flex items-center justify-center">
                                <img
                                    src="/url.png"
                                    alt="link"
                                    className="w-full h-full object-contain"
                                />
                            </div>

                            {/* 하트 아이콘 (상태 유지) */}
                            <Heart
                                onClick={(e) => { e.stopPropagation(); setIsLiked(!isLiked); }}
                                className={`w-[19.41px] h-[19.41px] cursor-pointer transition-colors ${isLiked ? 'fill-red-500 text-red-500' : 'text-[#1F2937]'}`}
                            />
                        </div>
                    </div>

                    {/* [복구] 회사 정보 */}
                    <div className="flex items-center gap-[8px] md:absolute md:top-[38px] md:left-0 mb-2 md:mb-0">
                        <div className="w-[22px] h-[22px] bg-[#F3F4F6] rounded-sm flex items-center justify-center text-[11px] text-gray-400 font-bold overflow-hidden flex-shrink-0">
                            {logo ? <img src={logo} alt={company} className="w-full h-full object-cover" /> : company.charAt(0)}
                        </div>
                        <span className="text-[15.5px] font-medium text-[#A9A9A9] truncate">{company}</span>
                    </div>

                    {/* [복구] 위치 및 근무 형태 */}
                    <div className="flex flex-wrap items-center gap-[14px] md:absolute md:top-[68px] md:left-0">
                        <div className="flex items-center gap-[5px]">
                            <MapPin className="w-[15px] h-[15px] text-[#1F2937]" />
                            <span className="font-[family-name:var(--font-inter)] font-normal text-[#1F2937]" style={{ fontSize: '15.0957px', lineHeight: '130%' }}>
                                {location}
                            </span>
                        </div>
                        <div className="hidden md:block w-[6px] h-[6px] bg-[#734AE2] rounded-full" />

                        {/* On-site 섹션: wifi.png 아이콘 추가 */}
                        <div className="flex items-center gap-[8px]">
                            {/* wifi 아이콘 적용 */}
                            <div className="flex items-center justify-center" style={{ width: '17.25px', height: '17.25px' }}>
                                <img
                                    src="/wifi.png"
                                    alt="On-site icon"
                                    className="w-full h-full object-contain"
                                />
                            </div>
                            <span className="font-[family-name:var(--font-inter)] font-normal text-[#1F2937]" style={{ fontSize: '15.0957px', lineHeight: '130%' }}>
                                {type}
                            </span>
                        </div>
                    </div>
                </div>
            </div>

            {/* 2. MIDDLE SECTION (Tags & Salary) */}
            <div className="w-[calc(100%-50px)] mx-[25px] mt-[20px] pb-[15px] border-b-[1px] border-[#EDEDED] flex items-center md:mt-[7px] md:pb-[15px] md:h-[59px] md:border-b md:absolute md:top-[120px] md:left-0 md:w-full md:px-[25px] md:mx-0">
                {/* Desktop: absolute positioning adjustments were tricky with flex, simplified to block flow on mobile, structure on desktop */}
                {/* Re-implementing with flex structure that works for both */}
            </div>

            <div className="px-[25px] py-[15px] border-b border-[#EDEDED] mx-[25px] w-[calc(100%-50px)] md:mx-0 md:w-full md:px-[25px] md:py-[13px]">
                <div className="flex flex-wrap gap-[6.47px] w-full">
                    {tags && tags.map((tag, index) => (
                        <div key={index} className="px-[12.94px] py-[2.16px] border border-[#E8E8E8] rounded-[30.19px] bg-white flex items-center justify-center h-[30px]">
                            <span className="font-[family-name:var(--font-inter)] font-normal text-[#1F2937] text-[14px] leading-[22px] tracking-[-0.02em] whitespace-nowrap">
                                {tag}
                            </span>
                        </div>
                    ))}
                    {salary && (
                        <div className="px-[12.94px] py-[2.16px] border border-[#E8E8E8] rounded-[30.19px] bg-white flex items-center justify-center h-[30px]">
                            <span className="font-[family-name:var(--font-inter)] font-normal text-[#1F2937] text-[14px] leading-[22px] tracking-[-0.02em] whitespace-nowrap">
                                {salary}
                            </span>
                        </div>
                    )}
                </div>
            </div>

            {/* 3. BOTTOM SECTION (Actions) */}
            <div className="px-[25px] py-[15px] flex flex-col md:flex-row items-center justify-between gap-4 md:gap-0">
                <div className="flex items-center gap-[7.55px] w-full md:w-auto justify-between md:justify-start">
                    <div
                        className="flex items-center justify-center rounded-[34.5px] px-[12.94px]"
                        style={{ minWidth: '100px', height: '26.31px', background: 'rgba(115, 74, 226, 0.12)' }}
                    >
                        <span className="font-[family-name:var(--font-inter)] font-normal text-[#1F2937] text-[14px] leading-[22px] tracking-[-0.02em] whitespace-nowrap">
                            {postedAt || '2 hours ago'}
                        </span>
                    </div>
                    <span className="font-[family-name:var(--font-inter)] font-normal text-[#1F2937] text-[14px] leading-[22px] tracking-[-0.02em] whitespace-nowrap">
                        {applicants || 25} applicants
                    </span>
                </div>

                <div className="flex items-center gap-[10.78px] w-full md:w-auto">
                    <button
                        onClick={handleApplyClick}
                        className="flex items-center justify-center bg-white border border-[rgba(177,174,174,0.5)] rounded-[46.36px] hover:bg-gray-50 transition-colors flex-1 md:flex-none"
                        style={{ height: '43.13px', width: 'auto', minWidth: '84.82px' }}
                    >
                        <span className="text-[17.25px] font-medium text-[#1F2937]">Apply</span>
                    </button>
                    <button className="flex items-center justify-center bg-[#B9FD33] rounded-[46.36px] flex-[2] md:flex-none" style={{ height: '43.13px', width: 'auto', minWidth: '161.82px' }}>
                        <span className="text-[17.25px] font-medium text-[#1F2937] whitespace-nowrap px-4">Mock Interview</span>
                    </button>
                </div>
            </div>
        </div>
    );
}
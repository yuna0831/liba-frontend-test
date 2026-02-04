'use client';

import { Link2, Heart, MapPin, Radio } from 'lucide-react';
import { MatchRateChart } from '@/components/jobs/MatchRateChart';
import { useState } from 'react';

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

    return (
        <div className="w-[900px] h-[261px] bg-white rounded-[12.94px] border border-[#EDEDED] relative overflow-hidden group hover:shadow-md transition-shadow mb-[6px]">

            {/* 1. TOP SECTION (정보 복구됨) */}
            <div className="absolute w-[850px] h-[124px] left-[25px] top-[7px] flex items-center gap-[24px]">
                <div className="flex-none w-[107px] h-[107px] relative">
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

                <div className="relative flex-1 h-[89.5px]">
                    {/* 타이틀 및 우측 아이콘 */}
                    <div className="absolute top-[-2px] left-0 w-full flex justify-between items-start">
                        <h3 className="text-[23px] font-semibold text-black leading-tight tracking-[-0.02em] font-[family-name:var(--font-inter)] line-clamp-1 max-w-[650px]">
                            {title}
                        </h3>
                        <div className="flex items-center gap-[15px] pt-[6.8px]">
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
                    <div className="absolute top-[38px] left-0 flex items-center gap-[8px]">
                        <div className="w-[22px] h-[22px] bg-[#F3F4F6] rounded-sm flex items-center justify-center text-[11px] text-gray-400 font-bold overflow-hidden">
                            {logo ? <img src={logo} alt={company} className="w-full h-full object-cover" /> : company.charAt(0)}
                        </div>
                        <span className="text-[15.5px] font-medium text-[#A9A9A9]">{company}</span>
                    </div>

                    {/* [복구] 위치 및 근무 형태 */}
                    <div className="absolute top-[68px] left-0 flex items-center gap-[14px]">
                        <div className="flex items-center gap-[5px]">
                            <MapPin className="w-[15px] h-[15px] text-[#1F2937]" />
                            <span className="font-[family-name:var(--font-inter)] font-normal text-[#1F2937]" style={{ fontSize: '15.0957px', lineHeight: '130%' }}>
                                {location}
                            </span>
                        </div>
                        <div className="w-[6px] h-[6px] bg-[#734AE2] rounded-full" />

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
            <div className="absolute w-[850px] h-[59px] left-[25px] top-[131px] border-b-[1px] border-[#EDEDED] flex items-center">
                <div className="flex flex-row gap-[6.47px] w-full">
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
            <div className="absolute w-[850px] h-[69px] left-[25px] top-[190px] flex items-center justify-between">
                <div className="flex items-center gap-[7.55px]">
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

                <div className="flex items-center gap-[10.78px]">
                    <button className="flex items-center justify-center bg-white border border-[rgba(177,174,174,0.5)] rounded-[46.36px]" style={{ width: '84.82px', height: '43.13px' }}>
                        <span className="text-[17.25px] font-medium text-[#1F2937]">Apply</span>
                    </button>
                    <button className="flex items-center justify-center bg-[#B9FD33] rounded-[46.36px]" style={{ width: '161.82px', height: '43.13px' }}>
                        <span className="text-[17.25px] font-medium text-[#1F2937]">Mock Interview</span>
                    </button>
                </div>
            </div>
        </div>
    );
}
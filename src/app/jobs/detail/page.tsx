'use client';

import React, { useEffect, useState } from 'react';
import { Sidebar } from '@/components/layout/Sidebar';
import { TopBar } from '@/components/layout/TopBar';
import { MobileNav } from '@/components/layout/MobileNav';

import { RightSidebarVer2 } from '@/components/layout/RightSidebarVer2';
import { MatchRateChart } from '@/app/jobs/MatchRateChart';
import {
    ArrowLeft,
    MapPin,
    Clock,
    Briefcase,
    DollarSign,
    BarChart2,
    Radio
} from 'lucide-react';
import { useRouter } from 'next/navigation';

export default function JobDetailPage() {
    const router = useRouter();
    const [matchNum, setMatchNum] = useState(0);

    useEffect(() => {
        let start = 0;
        const end = 93;
        const duration = 1000;
        const timer = setInterval(() => {
            start += 2;
            if (start >= end) {
                setMatchNum(end);
                clearInterval(timer);
            } else {
                setMatchNum(start);
            }
        }, duration / (end / 2));
        return () => clearInterval(timer);
    }, []);

    return (
        <div className="min-h-screen bg-[#F3F4F6] flex justify-center font-sans text-sm text-slate-800 overflow-x-hidden">
            <div className="w-full max-w-[1512px] mx-auto flex bg-white min-h-screen relative shadow-none">

                <div className="hidden lg:block w-[219px] shrink-0 z-50">
                    <Sidebar className="w-[219px] h-screen sticky top-0 border-r border-[#E5E7EB]" />
                </div>

                <div className="flex-1 flex flex-col min-w-0 bg-[#F3F4F6] relative">
                    <TopBar className="sticky top-0 z-40 w-full h-[80px] bg-white shadow-sm" />

                    <main className="flex-1 w-full pt-[22px] px-[20px] pb-10">
                        <div className="max-w-[1200px] mx-auto flex flex-col xl:flex-row justify-between items-start gap-10 xl:gap-0">

                            <div className="flex flex-col w-full max-w-[900px] shrink-0 bg-white rounded-[16.77px] p-[20px] md:p-[30px] border border-[#EDEDED] min-h-[1000px] mb-10">

                                {/* 1. 상단 액션바: Applicants 태그 유지 */}
                                <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4 md:gap-0">
                                    <div className="flex items-center gap-[12px]">
                                        <button onClick={() => router.back()} className="p-2 hover:bg-gray-100 rounded-full transition-colors">
                                            <ArrowLeft className="w-6 h-6 text-[#1F2937]" />
                                        </button>
                                        <div className="flex flex-row items-center justify-center px-[12px] py-[3px] gap-[6px] bg-[#A68BFA] rounded-[31px]" style={{ width: '123px', height: '35px' }}>
                                            <span className="font-['Inter'] font-medium text-[16px] leading-[20px] tracking-[-0.02em] text-white whitespace-nowrap" style={{ fontFeatureSettings: "'calt' off" }}>
                                                27 applicants
                                            </span>
                                        </div>
                                    </div>

                                    <div className="flex items-center gap-[15px] self-end md:self-auto">
                                        <button className="flex items-center justify-center transition-opacity hover:opacity-70">
                                            <img src="/share.png" alt="share" style={{ width: '18.73px', height: '18.73px' }} className="object-contain" />
                                        </button>
                                        <button className="flex items-center justify-center transition-opacity hover:opacity-70">
                                            <img src="/heat.png" alt="heart" style={{ width: '18.73px', height: '18.73px' }} className="object-contain" />
                                        </button>
                                        <button className="flex flex-row justify-center items-center px-[18px] py-[8px] gap-[10px] bg-[#000000] rounded-[31px] transition-all hover:bg-zinc-800 active:scale-95 group" style={{ width: '143px', height: '40px' }}>
                                            <span className="font-['Inter'] font-medium text-[16px] leading-[20px] tracking-[-0.02em] text-white" style={{ fontFeatureSettings: "'calt' off" }}>
                                                Apply now
                                            </span>
                                            <div className="relative w-[16px] h-[16px] flex items-center justify-center">
                                                <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M1.5 12.5L12.5 1.5" stroke="white" strokeWidth="1.2" strokeLinecap="round" />
                                                    <path d="M5.5 1.5H12.5V8.5" stroke="white" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
                                                </svg>
                                            </div>
                                        </button>
                                    </div>
                                </div>

                                {/* 2. 헤더 섹션: 2 hours ago 스타일 수정 및 테두리 제거 */}
                                <div className="flex flex-col md:flex-row justify-between items-start mb-10 gap-6 md:gap-0">
                                    <div className="flex gap-6 w-full md:w-auto">
                                        <div className="flex items-center justify-center shrink-0" style={{ width: '90px', height: '90px' }}>
                                            <img src="/google_logo.png" alt="Google" style={{ width: '90px', height: '90px' }} className="object-contain" />
                                        </div>

                                        <div className="flex flex-col justify-center min-w-0 flex-1">
                                            {/* 2 hours ago: 배경 제거, 피그마 명세(14px, #1F2937) 반영 */}
                                            <div style={{ width: '76px', height: '22px' }} className="mb-1 flex items-center">
                                                <span className="font-['Inter'] font-normal text-[14px] leading-[22px] tracking-[-0.02em] text-[#1F2937]" style={{ fontFeatureSettings: "'calt' off" }}>
                                                    2 hours ago
                                                </span>
                                            </div>
                                            <h1 className="font-['Inter'] font-semibold text-[20px] md:text-[23px] leading-[30px] tracking-[-0.02em] text-black break-words" style={{ fontFeatureSettings: "'calt' off" }}>
                                                UX Designer
                                            </h1>
                                            <span className="font-['Inter'] font-medium text-[16px] leading-[20px] tracking-[-0.02em] text-[#A9A9A9] mt-1" style={{ fontFeatureSettings: "'calt' off" }}>
                                                Google
                                            </span>
                                            <div className="flex flex-wrap items-center gap-[12px] mt-2">
                                                <div className="flex items-center gap-[4px]">
                                                    <MapPin className="w-[14px] h-[14px] text-[#1F2937]" />
                                                    <span className="font-['Inter'] text-[14px] text-[#1F2937]">Ann Arbor, MI</span>
                                                </div>
                                                <div className="w-[6px] h-[6px] bg-[#734AE2] rounded-full" />
                                                <span className="font-['Inter'] text-[14px] text-[#1F2937]">3 days ago</span>
                                                <div className="w-[6px] h-[6px] bg-[#734AE2] rounded-full" />
                                                <div className="flex items-center gap-[6px]">
                                                    <img src="/wifi.png" className="w-[16px] h-[16px] object-contain" />
                                                    <span className="font-['Inter'] text-[14px] text-[#1F2937]">Remote</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="relative w-[110px] h-[110px] self-center md:self-start shrink-0">
                                        <MatchRateChart percentage={matchNum} size={110} color="#B9FD33" />
                                    </div>
                                </div>

                                {/* 3. 정보 그리드 및 배너 생략 (기존 스타일 유지) */}
                                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-[20px] py-[0px] w-full">
                                    <div className="flex items-center gap-[10px]">
                                        <MapPin className="w-[20px] h-[20px] text-[#717171]" />
                                        <span className="font-['Inter'] text-[14px] text-[#717171]">United States</span>
                                    </div>
                                    <div className="flex items-center gap-[10px]">
                                        <Briefcase className="w-[20px] h-[20px] text-[#717171]" />
                                        <span className="font-['Inter'] text-[14px] text-[#717171]">Internship</span>
                                    </div>
                                    <div className="flex items-center gap-[10px]">
                                        <Radio className="w-[20px] h-[20px] text-[#717171]" />
                                        <span className="font-['Inter'] text-[14px] text-[#717171]">Remote</span>
                                    </div>
                                    <div className="flex items-center gap-[10px]">
                                        <Clock className="w-[20px] h-[20px] text-[#717171]" />
                                        <span className="font-['Inter'] text-[14px] text-[#717171]">5+ years exp</span>
                                    </div>
                                    <div className="flex items-center gap-[10px]">
                                        <DollarSign className="w-[20px] h-[20px] text-[#717171]" />
                                        <span className="font-['Inter'] text-[14px] text-[#717171]">$90K/yr - $130K/yr</span>
                                    </div>
                                    <div className="flex items-center gap-[10px]">
                                        <BarChart2 className="w-[20px] h-[20px] text-[#717171]" />
                                        <span className="font-['Inter'] text-[14px] text-[#717171]">Mid Level</span>
                                    </div>
                                </div>

                                {/* 3. Job Description 섹션 (Frame 176 기반) */}
                                <div
                                    className="flex flex-row items-center py-[25px] px-0 gap-[38px] mt-[35px] w-full"
                                    style={{ minHeight: '98px' }}
                                >
                                    <p className="font-['Inter'] font-normal text-[14px] leading-[22px] tracking-[-0.02em] text-[#4B5563] w-full break-words">
                                        Job description Job description Job description Job description Job description
                                        Job description Job description Job description Job description Job description
                                        Job description Job description Job description Job description Job description
                                        Job description
                                    </p>
                                </div>

                                {/* AI Interview Banner (Frame 1000004320) */}
                                <div
                                    className="flex flex-col items-center p-[20px] md:p-[0px_26px_24px] gap-[15px] bg-[#B9FD33] rounded-[24px] self-stretch mb-[40px] w-full h-auto"
                                >
                                    {/* Upper Section (기존 동일) */}
                                    <div
                                        className="flex flex-col md:flex-row items-center p-[24px_0px] gap-[23px] border-b border-[rgba(14,16,17,0.24)] self-stretch w-full h-auto"
                                    >
                                        <div className="shrink-0" style={{ width: '48px', height: '48px' }}>
                                            <img src="/info_icon.png" alt="AI Icon" className="w-full h-full object-contain" />
                                        </div>
                                        <div className="flex flex-col justify-center items-start p-0 gap-[10px] w-full h-auto">
                                            <h3 className="font-['Inter'] font-semibold text-[18px] leading-[20px] tracking-[-0.02em] text-[#000000]">Maximize your interview success</h3>
                                            <p className="font-['Inter'] font-normal text-[14px] leading-[22px] tracking-[-0.02em] text-[rgba(14,16,17,0.6)] self-stretch">
                                                Our platform simulates real interview scenarios, helping you refine your responses and boost your confidence.
                                            </p>
                                        </div>
                                    </div>

                                    {/* Lower Section: 3-Column Features (Frame 1000004323) */}
                                    <div
                                        className="flex flex-col md:flex-row items-start p-0 gap-[23px] self-stretch mt-[0px] w-full h-auto"
                                    >
                                        {[
                                            {
                                                title: "Job-Specific Simulations:",
                                                desc: "Practice with questions tailored to your target role, ensuring relevance and preparation."
                                            },
                                            {
                                                title: "Actionable Feedback:",
                                                desc: "Get detailed analysis of your responses and practical, step-by-step improvement suggestions."
                                            },
                                            {
                                                title: "Boost Success Rates:",
                                                desc: "Perfect your interview skills and increase your chances of landing the job you want."
                                            }
                                        ].map((feature, idx) => (
                                            <div key={idx} className="flex flex-col items-start p-0 gap-[5px] w-full md:w-[241px]">
                                                {/* 한 줄 고정을 위해 width를 auto로 하거나 충분히 넓히고 whitespace-nowrap 추가 */}
                                                <h4
                                                    className="font-['Inter'] font-semibold text-[16px] text-[#1F2937] whitespace-nowrap"
                                                    style={{
                                                        height: '21px',
                                                        lineHeight: '130%',
                                                        fontFeatureSettings: "'calt' off"
                                                    }}
                                                >
                                                    {feature.title}
                                                </h4>

                                                <p
                                                    className="font-['Inter'] font-normal text-[14px] leading-[22px] tracking-[-0.02em] text-[rgba(14,16,17,0.6)] self-stretch h-auto"
                                                    style={{ fontFeatureSettings: "'calt' off" }}
                                                >
                                                    {feature.desc}
                                                </p>
                                            </div>
                                        ))}
                                    </div>
                                    {/* Start Interview Button */}
                                    <div className="flex justify-end w-full mt-[0px]">
                                        <button
                                            className="flex flex-row justify-center items-center p-[8px_18px] gap-[10px] bg-[#1F2937] rounded-[43px] transition-all hover:bg-black active:scale-95"
                                            style={{ width: '145px', height: '40px' }}
                                        >
                                            <span
                                                className="font-['Inter'] font-medium text-[16px] leading-[20px] tracking-[-0.02em] text-white"
                                                style={{ fontFeatureSettings: "'calt' off" }}
                                            >
                                                Start Interview
                                            </span>
                                        </button>
                                    </div>
                                </div>

                                {/* Qualification Section (Frame 178) */}
                                <div
                                    className="flex flex-col py-[12px] gap-[24px] self-stretch w-full"
                                >
                                    {/* Qualification Section Header (수정된 20px 스타일) */}
                                    <div className="flex flex-row items-center p-0 gap-[6px] w-full h-[26px]">
                                        <h2
                                            className="font-['Inter'] font-semibold text-[20px] text-black"
                                            style={{
                                                lineHeight: '130%',
                                                letterSpacing: '-0.5px', // 피그마 수치 반영
                                                height: '26px',
                                                fontFeatureSettings: "'calt' off"
                                            }}
                                        >
                                            Qualification
                                        </h2>
                                    </div>

                                    {/* Description Text */}
                                    <p
                                        className="font-['Inter'] font-normal text-[14px] leading-[22px] tracking-[-0.02em] text-[#000000] w-full h-auto"
                                        style={{ fontFeatureSettings: "'calt' off" }}
                                    >
                                        Discover how your skills align with the requirements of this position. Below is a detailed list of the essential skills needed for the role.
                                    </p>

                                    {/* Qualification Tags Container */}
                                    <div
                                        className="flex flex-row flex-wrap items-center content-start p-0 gap-[12px_8px] w-full"
                                    >
                                        {[
                                            "Accidental Death and Dismemberment (AD&D)",
                                            "Amazon Web Services (AWS)",
                                            "Analysis Skills",
                                            "DevOps",
                                            "Apache ActiveMQ",
                                            "Application Programming Interface (API)",
                                            "Call Center",
                                            "Change Control"
                                        ].map((tag, index) => (
                                            <div
                                                key={index}
                                                className="flex flex-row items-center px-[12px] py-[6px] bg-[#F3F4F6] rounded-[33px] shrink-0 max-w-full"
                                                style={{ height: '34px' }}
                                            >
                                                <span
                                                    className="font-['Inter'] font-normal text-[14px] leading-[22px] tracking-[-0.02em] text-[#1F2937] whitespace-nowrap truncate"
                                                    style={{ fontFeatureSettings: "'calt' off" }}
                                                >
                                                    {tag}
                                                </span>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                                {/* 2. Required Section (불릿 중앙 정렬 수정) */}
                                <div
                                    className="flex flex-col gap-[15px] self-stretch py-[24px] w-full"
                                >
                                    <div style={{ height: '23px' }}>
                                        <h3
                                            className="font-['Inter'] font-semibold text-[18px] text-[#000000]"
                                            style={{
                                                lineHeight: '20px',
                                                letterSpacing: '-0.02em',
                                                fontFeatureSettings: "'calt' off"
                                            }}
                                        >
                                            Required
                                        </h3>
                                    </div>

                                    <div className="flex flex-col justify-center items-start p-0 gap-[10px] w-full">
                                        {[
                                            "3+ years of design experience",
                                            "3+ years of delivering design solutions as a UX designer or interaction designer experience",
                                            "Have an available online portfolio",
                                            "Experience prototyping (HTML, XHTML, JavaScript, CSS, Flash or Flash Catalyst, or Axure)"
                                        ].map((item, index) => (
                                            <div key={index} className="flex flex-row items-start gap-[10px] self-stretch">
                                                {/* 불릿 기호를 텍스트 첫 줄의 leading 값과 맞추어 세로 중앙 정렬 */}
                                                <span className="text-black text-[20px] leading-[22px] flex items-center justify-center shrink-0">•</span>
                                                <p
                                                    className="font-['Inter'] font-normal text-[14px] leading-[22px] tracking-[-0.02em] text-[#000000]"
                                                    style={{ fontFeatureSettings: "'calt' off" }}
                                                >
                                                    {item}
                                                </p>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                                {/* 3. Preferred Section (Required 바로 밑에 위치) */}
                                <div
                                    className="flex flex-col gap-[15px] self-stretch py-[24px] w-full"
                                >
                                    {/* Preferred Title Section */}
                                    <div style={{ height: '23px' }}>
                                        <h3
                                            className="font-['Inter'] font-semibold text-[18px] text-[#000000]"
                                            style={{
                                                lineHeight: '20px',
                                                letterSpacing: '-0.02em',
                                                fontFeatureSettings: "'calt' off"
                                            }}
                                        >
                                            Preferred
                                        </h3>
                                    </div>

                                    {/* Preferred List (요청하신 불릿 스타일 적용) */}
                                    <div className="flex flex-col justify-center items-start p-0 gap-[10px] w-full">
                                        {[
                                            "2+ years of mass-market consumer web / mobile products experience",
                                            "Experience working in a collaborative team and working directly with developers for implementation of designs"
                                        ].map((item, index) => (
                                            <div key={index} className="flex flex-row items-start gap-[10px] self-stretch">
                                                {/* 요청하신 불릿 스타일: 20px 크기 + 22px leading 중앙 정렬 */}
                                                <span className="text-black text-[20px] leading-[22px] flex items-center justify-center shrink-0">•</span>
                                                <p
                                                    className="font-['Inter'] font-normal text-[14px] leading-[22px] tracking-[-0.02em] text-[#000000]"
                                                    style={{ fontFeatureSettings: "'calt' off" }}
                                                >
                                                    {item}
                                                </p>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                                {/* 4. Responsibilities Section (Frame 180) */}
                                <div
                                    className="flex flex-col py-[12px] gap-[24px] self-stretch mt-[40px] w-full"
                                >
                                    {/* Responsibilities Header (Qualification과 동일한 20px 스타일) */}
                                    <div className="flex flex-row items-center p-0 gap-[6px] w-full h-[26px]">
                                        <h2
                                            className="font-['Inter'] font-semibold text-[20px] text-black"
                                            style={{
                                                lineHeight: '130%',
                                                letterSpacing: '-0.5px',
                                                fontFeatureSettings: "'calt' off"
                                            }}
                                        >
                                            Responsibilities
                                        </h2>
                                    </div>

                                    {/* Responsibilities List (Frame 5325 기반) */}
                                    <div className="flex flex-col justify-center items-start p-0 gap-[10px] w-full">
                                        {[
                                            "Collaborate and work closely with product management, engineering, sales, and research from design concept to design solution, setting UX guidelines and driving cross-team collaboration and sharing, as well as establish best practices for interaction models and user interface designs throughout the team.",
                                            "Work in a start-up style environment, where iteration is encouraged and design acumen is demonstrated through design end-to-end product ownership.",
                                            "Communicate complex, interactive design concepts clearly and persuasively across different audiences and varying levels of the organization through excellent communication, presentation, interpersonal and analytical skills.",
                                            "Earn trust with product managers to develop shared vision and use research and data to identify opportunities and inform decisions."
                                        ].map((item, index) => (
                                            <div key={index} className="flex flex-row items-start gap-[10px] self-stretch">
                                                {/* 윤아님이 정해주신 완벽한 불릿 스타일 고정 */}
                                                <span className="text-black text-[20px] leading-[22px] flex items-center justify-center shrink-0">•</span>
                                                <p
                                                    className="font-['Inter'] font-normal text-[14px] leading-[22px] tracking-[-0.02em] text-[#000000]"
                                                    style={{ fontFeatureSettings: "'calt' off" }}
                                                >
                                                    {item}
                                                </p>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                                {/* 5. Benefits Section (Bold 적용 버전) */}
                                <div
                                    className="flex flex-col py-[12px] gap-[18px] self-stretch mt-[40px] w-full"
                                >
                                    {/* Benefits Header */}
                                    <div className="flex flex-row items-center p-0 gap-[6px] w-full h-[26px]">
                                        <h2
                                            className="font-['Inter'] font-semibold text-[20px] text-black"
                                            style={{
                                                lineHeight: '130%',
                                                letterSpacing: '-0.5px',
                                                fontFeatureSettings: "'calt' off"
                                            }}
                                        >
                                            Benefits
                                        </h2>
                                    </div>

                                    {/* Benefits Description (font-medium 적용으로 세미볼드 느낌 구현) */}
                                    <p
                                        className="font-['Inter'] font-medium text-[16px] leading-[20px] tracking-[-0.02em] text-[#000000] w-full h-auto"
                                        style={{
                                            fontFeatureSettings: "'calt' off",
                                            fontWeight: 500 // 명세상의 500 수치를 명시적으로 적용
                                        }}
                                    >
                                        We believe happy team members create amazing work. Here’s what we offer to make that happen:
                                    </p>

                                    {/* Benefits List (Bold 적용) */}
                                    <div className="flex flex-col justify-center items-start p-0 gap-[10px] w-full">
                                        {[
                                            { icon: "🏠", title: "Remote Flexibility", desc: "Work from wherever you’re most productive and happy." },
                                            { icon: "📈", title: "Equity Options", desc: "Become a shareholder through our stock options plan after 6 months." },
                                            { icon: "💳", title: "Meal Vouchers", desc: "Enjoy an €8/day meal voucher to make your lunch break even better." },
                                            { icon: "🍴", title: "Lunch at the Office", desc: "If you’re in Bologna, we have lunch together at the office, and it is on us!" },
                                            { icon: "⚕️", title: "Health Coverage", desc: "Comprehensive support through the Metasalute Health Assistance Fund." },
                                            { icon: "🎂", title: "Birthday Bliss", desc: "Celebrate your day with an extra day off, just for you." },
                                            { icon: "🧠", title: "Mental Wellness", desc: "Free access to iFeel, our psychological support platform." },
                                            { icon: "🌎", title: "International Environment", desc: "Grow your language skills while working with a diverse and global team." }
                                        ].map((item, index) => (
                                            <div key={index} className="flex flex-row items-start gap-[10px] self-stretch">
                                                <span className="text-black text-[20px] leading-[22px] flex items-center justify-center shrink-0">•</span>
                                                <p
                                                    className="font-['Inter'] font-normal text-[14px] leading-[22px] tracking-[-0.02em] text-[#000000]"
                                                    style={{ fontFeatureSettings: "'calt' off" }}
                                                >
                                                    {item.icon} <span className="font-bold">{item.title}:</span> {item.desc}
                                                </p>
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                {/* 6. Company Section (Frame 182) */}
                                <div
                                    className="flex flex-col py-[12px] gap-[18px] self-stretch mt-[40px] w-full"
                                >
                                    {/* Company Header (Qualification과 동일한 20px 스타일) */}
                                    <div className="flex flex-row items-center p-0 w-full h-[26px]">
                                        <h2
                                            className="font-['Inter'] font-semibold text-[20px] text-black"
                                            style={{ lineHeight: '130%', letterSpacing: '-0.5px' }}
                                        >
                                            Company
                                        </h2>
                                    </div>

                                    {/* Company Info Box (Frame 5325 기반) */}
                                    <div className="flex flex-col md:flex-row items-start md:items-center p-0 gap-[10px] w-full h-auto">
                                        {/* Company Logo Placeholder (Rectangle 567) */}
                                        <div
                                            className="bg-[#D9D9D9] rounded-[12px] shrink-0"
                                            style={{ width: '103px', height: '103px' }}
                                        />

                                        {/* Text & Social Container (Frame 1000004352) */}
                                        <div className="flex flex-col justify-between items-start p-0 h-full w-full min-h-[103px]">
                                            <div className="flex flex-col gap-[6px] w-full">
                                                <h3
                                                    className="font-['Inter'] font-semibold text-[23px] leading-[30px] tracking-[-0.02em] text-black"
                                                    style={{ fontFeatureSettings: "'calt' off" }}
                                                >
                                                    Company name
                                                </h3>

                                                {/* 4 Metadata Points with Purple Dots */}
                                                <div className="flex flex-row items-center gap-[6px] flex-wrap">
                                                    <div className="flex items-center gap-[6px] text-[#717171] text-[14px]">
                                                        <img src="/calendar.png" className="w-[16px] h-[16px] opacity-60" style={{ transform: 'matrix(-1, 0, 0, 1, 0, 0)' }} />
                                                        <span>Founded in 1979</span>
                                                    </div>
                                                    <div className="w-[6px] h-[6px] bg-[#734AE2] rounded-full mx-[8px]" />
                                                    <div className="flex items-center gap-[6px] text-[#717171] text-[14px]">
                                                        <img src="/map_pin.png" className="w-[16px] h-[16px] opacity-60" />
                                                        <span>Carlsbad, California, US</span>
                                                    </div>
                                                    <div className="w-[6px] h-[6px] bg-[#734AE2] rounded-full mx-[8px]" />
                                                    <div className="flex items-center gap-[6px] text-[#717171] text-[14px]">
                                                        <img src="/users.png" className="w-[18px] h-[18px] opacity-60" />
                                                        <span>1001-5000 employees</span>
                                                    </div>
                                                    <div className="w-[6px] h-[6px] bg-[#734AE2] rounded-full mx-[8px]" />
                                                    <div className="flex items-center gap-[6px] text-[#717171] text-[14px]">
                                                        <img src="/globe.png" className="w-[16px] h-[16px] opacity-60" />
                                                        <span>Website</span>
                                                    </div>
                                                </div>
                                            </div>

                                            {/* Social Icons (Frame 5329) */}
                                            <div className="flex flex-row gap-[8px] mt-[2px]">
                                                <div className="w-[24px] h-[24px] bg-[#1F2937] rounded-[2px] flex items-center justify-center cursor-pointer hover:bg-black transition-colors">
                                                    <img src="/x_icon.png" className="w-[14px] h-[14px]" />
                                                </div>
                                                <div className="w-[24px] h-[24px] bg-[#1F2937] rounded-[2px] flex items-center justify-center cursor-pointer hover:bg-black transition-colors">
                                                    <img src="/linkedin_icon.png" className="w-[16px] h-[16px]" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Company Overview Text (Frame 5326) */}
                                    <div className="w-full mt-[10px]" style={{ height: 'auto', minHeight: '132px' }}>
                                        <p
                                            className="font-['Inter'] font-normal text-[14px] leading-[22px] tracking-[-0.02em] text-black text-justify"
                                            style={{ fontFeatureSettings: "'calt' off" }}
                                        >
                                            Kforce has a client that is seeking a UI/UX Developer in Madison, WI. Overview: In brief, we a handful of AI-powered tools for our workforce which could use a facelift to improve the overall user experience. In an ideal scenario, we would love to bring on someone that has the skills to work directly in our codebases (engineering skills) while they make improvements to the UI/UX based on their knowledge of best practices. We currently have three tools that users are interacting with; one is an Edge browser extension (JavaScript), one is using Streamlit web application (python currently but we'd be open to migrating this to some React/Angular/other framework), and the other is a basic React web application.
                                        </p>
                                    </div>
                                </div>
                            </div>


                            <div className="w-full max-w-[900px] xl:w-[260px] shrink-0 xl:ml-[40px] flex justify-center xl:block">
                                <div className="xl:sticky xl:top-[102px]">
                                    <RightSidebarVer2 className="w-full max-w-[290px] xl:w-[260px] h-[790px] border-none shadow-none bg-transparent mx-auto" />
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
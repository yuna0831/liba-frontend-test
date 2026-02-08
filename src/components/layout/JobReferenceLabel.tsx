import React from 'react';
import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

interface JobReferenceLabelProps {
    className?: string;
}

export function JobReferenceLabel({ className }: JobReferenceLabelProps) {
    return (
        /* 레이아웃 너비는 이전의 900px 정렬 기준(728px)을 유지합니다 -> Mobile Responsive */
        <div className={twMerge(clsx(
            "w-full max-w-[728px] h-[40px] bg-[#A68BFA] border border-[#E8E8E8] rounded-[31px]",
            "flex justify-center items-center gap-[10px] px-[16px] py-[8px]",
            "z-10 shadow-sm cursor-pointer hover:bg-[#9778F5] transition-colors",
            className
        ))}>
            {/* Icon Box */}
            <div className="w-[16px] h-[16px] relative flex items-center justify-center">
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M2 8C2 4.68629 4.68629 2 8 2C11.3137 2 14 4.68629 14 8C14 11.3137 11.3137 14 8 14C5.5 14 3.35 12.45 2.45 10.25" stroke="white" strokeWidth="1.6" strokeLinecap="round" />
                    <path d="M1 5.5L2 8.5L5 7.5" stroke="white" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
            </div>

            {/* [수정] 피그마 정밀 텍스트 스타일 반영 */}
            <span className="font-[family-name:var(--font-inter)] text-[16px] font-medium leading-[20px] tracking-[-0.02em] text-white font-feature-settings-['calt'_off]">
                Change Job Reference
            </span>
        </div>
    );
}
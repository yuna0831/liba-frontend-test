'use client';

import { motion, useSpring, useTransform, useInView } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';

interface MatchRateChartProps {
    percentage: number;
    size?: number; // Figma: 107.83px
    color?: string; // Figma: #FFD035
}

export function MatchRateChart({ percentage, size = 107.83, color = '#FFD035' }: MatchRateChartProps) {
    const strokeWidth = 8;
    const radius = (size - strokeWidth) / 2;
    const circumference = 2 * Math.PI * radius;

    // 시계 반대 방향으로 채우기 위한 오프셋 계산
    const strokeDashoffset = circumference - (percentage / 100) * circumference;

    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });

    // Count-up animation
    const springValue = useSpring(0, { bounce: 0, duration: 1500 });
    const displayValue = useTransform(springValue, (value) => Math.round(value));
    const [displayPercent, setDisplayPercent] = useState(0);

    useEffect(() => {
        if (isInView) {
            springValue.set(percentage);
        }
    }, [isInView, percentage, springValue]);

    useEffect(() => {
        const unsubscribe = displayValue.on("change", (latest) => {
            setDisplayPercent(latest);
        });
        return () => unsubscribe();
    }, [displayValue]);

    return (
        <div
            ref={ref}
            className="relative flex items-center justify-center flex-none"
            style={{ width: `${size}px`, height: `${size}px` }}
        >
            {/* 1. -rotate-90: 12시 방향에서 시작하게 함
                2. scale-y-[-1]: y축을 반전시켜 시계 반대 방향(Counter-Clockwise)으로 애니메이션 진행
            */}
            <svg className="transform -rotate-90 scale-y-[-1] w-full h-full">
                {/* 배경 원 (Ellipse 244) */}
                <circle
                    className="text-[#F3F3F4]"
                    strokeWidth={strokeWidth}
                    stroke="currentColor"
                    fill="transparent"
                    r={radius}
                    cx={size / 2}
                    cy={size / 2}
                />
                {/* 진행률 원 (Ellipse 245) */}
                <motion.circle
                    strokeWidth={strokeWidth}
                    strokeDasharray={circumference}
                    strokeDashoffset={circumference}
                    strokeLinecap="round"
                    stroke={color}
                    fill="transparent"
                    r={radius}
                    cx={size / 2}
                    cy={size / 2}
                    initial={{ strokeDashoffset: circumference }}
                    animate={isInView ? { strokeDashoffset } : {}}
                    transition={{ duration: 1.5, ease: "easeOut" }}
                />
            </svg>

            {/* 중앙 텍스트 레이어 - 피그마 calc 수치 엄격 반영 */}
            <div className="absolute inset-0 pointer-events-none">
                {/* 64% 텍스트 - Count Effect */}
                <span
                    className="absolute font-[family-name:var(--font-inter)] font-semibold text-[#1F2937] text-center flex items-center justify-center"
                    style={{
                        width: '51px',
                        height: '28px',
                        left: 'calc(50% - 25.5px + 1.14px)',
                        top: 'calc(50% - 14px - 10.26px)',
                        fontSize: '23.9614px',
                        lineHeight: '27px',
                        letterSpacing: '-0.02em',
                        fontFeatureSettings: "'calt' off"
                    }}
                >
                    {displayPercent}%
                </span>

                {/* Match 텍스트 */}
                <span
                    className="absolute font-[family-name:var(--font-inter)] font-normal text-[#1F2937] text-center"
                    style={{
                        width: '49px',
                        height: '27px',
                        left: 'calc(50% - 24.5px + 0.58px)',
                        top: 'calc(50% - 13.5px + 16.2px)',
                        fontSize: '16.7729px',
                        lineHeight: '27px',
                        letterSpacing: '-0.02em',
                        fontFeatureSettings: "'calt' off"
                    }}
                >
                    Match
                </span>
            </div>
        </div>
    );
}
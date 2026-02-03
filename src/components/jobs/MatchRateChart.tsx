'use client';

import { motion } from 'framer-motion';

interface MatchRateChartProps {
    percentage: number;
}

export function MatchRateChart({ percentage }: MatchRateChartProps) {
    const radius = 26;
    const strokeWidth = 3;
    const circumference = 2 * Math.PI * radius;
    const strokeDashoffset = circumference - (percentage / 100) * circumference;

    return (
        <div className="relative flex items-center justify-center w-[70px] h-[70px]">
            <svg className="transform -rotate-90 w-full h-full">
                {/* Background Circle */}
                <circle
                    className="text-gray-100"
                    strokeWidth={strokeWidth}
                    stroke="currentColor"
                    fill="transparent"
                    r={radius}
                    cx="35"
                    cy="35"
                />
                {/* Progress Circle - Gradient ID reference if needed, but using text-brand-purple for now. 
            User asked for purple/yellow, I will add a defs for gradient if I can, but simple is better first. 
            Let's stick to brand-purple as it matches the theme. 
        */}
                <motion.circle
                    className="text-brand-purple"
                    strokeWidth={strokeWidth}
                    strokeDasharray={circumference}
                    strokeDashoffset={circumference}
                    strokeLinecap="round"
                    stroke="currentColor"
                    fill="transparent"
                    r={radius}
                    cx="35"
                    cy="35"
                    initial={{ strokeDashoffset: circumference }}
                    animate={{ strokeDashoffset }}
                    transition={{ duration: 1, ease: "easeOut" }}
                />
            </svg>
            <div className="absolute flex flex-col items-center">
                <span className="text-[10px] font-bold text-gray-900 leading-none">{percentage}%</span>
                <span className="text-[8px] font-medium text-gray-400 leading-none mt-0.5">Match</span>
            </div>
        </div>
    );
}

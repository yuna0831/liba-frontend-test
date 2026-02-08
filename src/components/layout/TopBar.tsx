import { Search, Bell, HelpCircle } from 'lucide-react';
import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

interface TopBarProps {
    className?: string;
}

export function TopBar({ className }: TopBarProps) {
    return (
        <div className={twMerge(clsx("w-full h-[80px] bg-[#FFFFFF] border-b border-[#E5E7EB] flex items-center px-4 md:px-[40px] z-50 overflow-x-auto", className))}>

            {/* Tabs Group */}
            <div className="flex items-center gap-[1px]">

                {/* Tab: Matched (Active) */}
                <button className="flex items-center justify-center w-[118px] h-[43px] rounded-[22px] border-[1.5px] border-[#CBBAFF] bg-white transition-colors">
                    <span className="font-[family-name:var(--font-inter)] text-[16px] font-medium leading-[20px] tracking-[-0.02em] text-[#19212C]">
                        Matched
                    </span>
                </button>

                {/* Divider 1 */}
                <div className="w-[42px] h-0 border-[0.76px] border-[#DFDFDF] rotate-90" />

                {/* Tab: Liked */}
                <button className="flex items-center justify-center px-[26px] py-[11px] rounded-[22px] gap-[8px] transition-colors">
                    <span className="font-[family-name:var(--font-inter)] text-[16px] font-medium leading-[20px] tracking-[-0.02em] text-[rgba(27,35,47,0.6)]">
                        Liked
                    </span>
                    {/* Badge (Width 20px) */}
                    <div className="w-[20px] h-[18px] bg-[#B7FD33] rounded-[17px] flex items-center justify-center">
                        <span className="font-[family-name:var(--font-inter)] text-[14px] font-medium text-[#171E29] text-center leading-none mt-[1px]">1</span>
                    </div>
                </button>

                {/* Divider 2 */}
                <div className="w-[42px] h-0 border-[0.76px] border-[#DFDFDF] rotate-90" />

                {/* Tab: Applied */}
                <button className="flex items-center justify-center px-[26px] py-[11px] rounded-[22px] gap-[8px] transition-colors">
                    <span className="font-[family-name:var(--font-inter)] text-[16px] font-medium leading-[20px] tracking-[-0.02em] text-[rgba(24,32,43,0.6)]">
                        Applied
                    </span>
                    {/* Badge (Width 21px) */}
                    <div className="w-[21px] h-[18px] bg-[#B7FD33] rounded-[17px] flex items-center justify-center">
                        <span className="font-[family-name:var(--font-inter)] text-[14px] font-medium text-[#171E29] text-center leading-none mt-[1px]">1</span>
                    </div>
                </button>

            </div>

        </div>
    );
}

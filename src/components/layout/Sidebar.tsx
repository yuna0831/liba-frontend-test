'use client';

import { Briefcase, FileText, Star } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

const NAV_ITEMS = [
  { icon: Briefcase, label: 'Jobs', href: '/jobs', active: true },
  { img: '/icons/monitor.png', label: 'AI Mock Interview', href: '/mock-interview' },
  { icon: FileText, label: 'Resume', href: '/resume', hasDivider: true },
  { img: '/icons/profile.png', label: 'Profile', href: '/profile' },
  { img: '/icons/setting.png', label: 'Setting', href: '/settings', hasDivider: true },
  { img: '/icons/subscription.png', label: 'Subscription', href: '/subscription' },
  { img: '/icons/credits.png', label: 'Extra Credits', href: '/credits' },
];

export function Sidebar() {
  return (
    <aside className="hidden lg:flex flex-col w-[219px] h-[900px] bg-[#FFFFFF] shadow-[1px_0_20px_rgba(0,0,0,0.02)] flex-shrink-0 relative">
      {/* Brand Logo Container (Frame 2087327261) */}
      <div className="absolute top-[9px] left-0 w-[219px] h-[61.15px] flex flex-col items-start px-[12px] py-[10px] gap-[10px] z-20">
        <div className="relative w-full h-full">
          <Image
            src="/icons/Jobnova.png"
            alt="JobNova"
            fill
            className="object-contain"
            priority
          />
        </div>
      </div>

      {/* Navigation Menu (Width 219px) - Absolute Position Top 102px */}
      <nav className="absolute top-[102px] left-0 flex flex-col w-[219px] h-auto space-y-[10px]">
        {NAV_ITEMS.map((item) => (
          <div key={item.label} className="flex flex-col items-center w-full">
            {/* Menu Button (Width 195px, Height 45px) */}
            <Link
              href={item.href}
              className={`flex items-center w-[195px] h-[45px] px-[12px] py-[11px] rounded-[31px] mx-auto transition-all duration-200 group relative ${item.active
                ? 'bg-[#A68BFA] text-white shadow-md shadow-[#A68BFA]/25'
                : 'text-[#19212D] hover:bg-gray-50'
                }`}
            >
              {/* Icon Area */}
              <span className="flex items-center justify-center w-[22px] h-[22px] flex-none order-first">
                {item.img ? (
                  <div className="relative w-full h-full">
                    <Image
                      src={item.img}
                      alt={item.label}
                      fill
                      className={`object-contain ${!item.active && 'opacity-100'}`}
                    />
                  </div>
                ) : (
                  item.icon && <item.icon className={`w-[22px] h-[22px] transition-transform group-hover:scale-105 ${item.active ? 'text-white' : 'text-[#19212D] group-hover:text-black'
                    }`} strokeWidth={1.5} />
                )}
              </span>

              {/* Gap */}
              <span className="w-[10px]" />

              {/* Text Area */}
              <div className={`flex items-center min-w-0 p-[3px] font-[family-name:var(--font-inter)]`}>
                <span className={`text-[16px] leading-[20px] tracking-[-0.02em] font-medium whitespace-nowrap ${item.active ? 'text-white' : 'text-[#19212D]'
                  }`}>
                  {item.label}
                </span>
              </div>
            </Link>

            {/* Divider */}
            {item.hasDivider && (
              <div className="w-[190px] h-0 border-t-[0.76px] border-[#DFDFDF] self-start ml-[14px] mt-[10px]" />
            )}
          </div>
        ))}
      </nav>

      {/* Upgrade Plan Banner (Frame 29003) */}
      <div className="absolute top-[617px] left-0 w-[219px] h-[255px] overflow-hidden group">

        {/* Rectangle 4175 (Inner Card) - Now Relative Container */}
        <div className="absolute top-[41px] left-1/2 -translate-x-1/2 w-[179px] h-[214px] rounded-[16px] bg-[linear-gradient(318.11deg,#CBBAFF_0%,#C89FF3_54%,#7248F1_100%)] overflow-hidden relative">

          {/* SVG Overlay */}
          <svg className="absolute top-0 left-0 w-full h-full opacity-30 pointer-events-none" viewBox="0 0 200 100" preserveAspectRatio="none">
            <defs>
              <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" style={{ stopColor: 'white', stopOpacity: 0.2 }} />
                <stop offset="100%" style={{ stopColor: 'white', stopOpacity: 0 }} />
              </linearGradient>
            </defs>
            <circle cx="0" cy="100" r="80" fill="url(#grad1)" />
            <circle cx="200" cy="0" r="60" fill="#D9FF41" opacity="0.4" />
          </svg>

          {/* Main Title (Global Top 67 - Box Top 41 = 26px / Global Left 39 - Box Left 20 = 19px) */}
          <h4 className="absolute left-[19px] top-[26px] w-[140px] h-[48px] font-[family-name:var(--font-inter)] text-[18px] font-medium leading-[24px] tracking-[-0.02em] text-white text-left whitespace-pre-wrap z-10">
            Upgrade Your{'\n'}Plan
          </h4>

          {/* Sub Text (Global Top 127 - Box Top 41 = 86px / Global Left 42 - Box Left 20 = 22px) */}
          <p className="absolute left-[22px] top-[86px] w-[137px] h-[57px] font-[family-name:var(--font-inter)] text-[14px] font-normal leading-[22px] tracking-[-0.02em] text-white text-left whitespace-pre-wrap z-10">
            Boost your success rate now!
          </p>

          {/* Subscription Button (Global Top 195 - Box Top 41 = 154px / Global Left 42 - Box Left 20 = 22px) */}
          <button className="absolute left-[22px] top-[154px] w-[135px] h-[40px] bg-white rounded-[33px] flex items-center justify-center cursor-pointer transition-transform hover:scale-105 z-10 shadow-sm">
            <span className="font-[family-name:var(--font-inter)] text-[16px] font-medium leading-[20px] tracking-[-0.02em] text-[#19212D]">
              Subscription
            </span>
          </button>
        </div>
      </div>


    </aside>
  );
}

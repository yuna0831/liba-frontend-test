'use client';

import { Home, Briefcase, MessageSquare, User } from 'lucide-react';
import Link from 'next/link';

const NAV_ITEMS = [
    { icon: Home, label: 'Home', href: '/' },
    { icon: Briefcase, label: 'Jobs', href: '/jobs' },
    { icon: MessageSquare, label: 'Messages', href: '/messages' },
    { icon: User, label: 'Profile', href: '/profile' },
];

export function MobileNav() {
    return (
        <nav className="fixed bottom-0 left-0 right-0 lg:hidden bg-white border-t border-gray-100 px-6 py-3 z-50">
            <div className="flex justify-between items-center max-w-md mx-auto">
                {NAV_ITEMS.map((item) => (
                    <Link
                        key={item.label}
                        href={item.href}
                        className="flex flex-col items-center gap-1 text-gray-400 hover:text-brand-purple transition-colors"
                    >
                        <item.icon className="w-6 h-6" />
                        <span className="text-[10px] font-medium">{item.label}</span>
                    </Link>
                ))}
            </div>
        </nav>
    );
}

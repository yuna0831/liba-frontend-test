'use client';

import { MapPin, Clock, ExternalLink, Heart } from 'lucide-react';
import { MatchRateChart } from '@/components/jobs/MatchRateChart';
import { useState } from 'react';

interface JobCardProps {
    title: string;
    company: string;
    location: string;
    type: string;
    salary: string;
    tags: string[];
    logoUrl?: string; // Not used yet but good to have
    matchScore?: number;
}

export function JobCard({ title, company, location, type, salary, tags, matchScore }: JobCardProps) {
    const [isLiked, setIsLiked] = useState(false);

    return (
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-5 hover:shadow-md transition-shadow cursor-pointer relative group">
            <div className="flex justify-between items-start">
                {/* Left Side Content */}
                <div className="flex-1 min-w-0 pr-4">
                    {/* Header: Title + Icons */}
                    <div className="flex items-center gap-2 mb-2">
                        <h3 className="font-bold text-lg text-gray-900 leading-tight truncate">{title}</h3>
                        <ExternalLink className="w-4 h-4 text-gray-400 hover:text-gray-600 cursor-pointer" />
                        <button onClick={(e) => { e.stopPropagation(); setIsLiked(!isLiked); }}>
                            <Heart className={`w-4 h-4 transition-colors ${isLiked ? 'text-brand-purple fill-brand-purple' : 'text-gray-400 hover:text-gray-600'}`} />
                        </button>
                    </div>

                    {/* Meta Row: Logo Placeholder + Company + Location + Type */}
                    <div className="flex items-center gap-2 text-xs text-gray-500 mb-4 flex-wrap">
                        <div className="w-5 h-5 bg-gray-100 rounded flex items-center justify-center text-[10px] font-bold text-gray-400">
                            {company.charAt(0)}
                        </div>
                        <span className="font-medium text-gray-700">{company}</span>
                        <span className="w-1 h-1 bg-gray-300 rounded-full" />
                        <span className="flex items-center gap-1">
                            <MapPin className="w-3 h-3" />
                            {location}
                        </span>
                        <span className="w-1 h-1 bg-gray-300 rounded-full" />
                        <span className="flex items-center gap-1">
                            <Clock className="w-3 h-3" />
                            {type}
                        </span>
                        <span className="w-1 h-1 bg-gray-300 rounded-full" />
                        <span className="font-medium text-gray-900">{salary}</span>
                    </div>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-2 mb-6">
                        {tags.map((tag) => (
                            <span key={tag} className="px-3 py-1 bg-white border border-gray-200 text-gray-600 rounded-full text-[11px] font-medium">
                                {tag}
                            </span>
                        ))}
                    </div>

                    {/* Footer Row: Time + Applicants + Buttons */}
                    <div className="flex items-center justify-between mt-auto">
                        <div className="flex items-center gap-3 text-[11px] text-gray-400 font-medium">
                            <span>1 hour ago</span>
                            <span className="w-1 h-1 bg-gray-300 rounded-full" />
                            <span>25 applicants</span>
                        </div>

                        <div className="flex gap-2">
                            <button className="px-4 py-2 bg-white border border-gray-200 text-gray-700 rounded-xl text-xs font-bold hover:bg-gray-50 transition-colors">
                                Apply Now
                            </button>
                            <button className="px-4 py-2 bg-brand-lime text-black rounded-xl text-xs font-bold hover:bg-[#ccee30] transition-colors border border-transparent shadow-sm">
                                Mock Interview
                            </button>
                        </div>
                    </div>
                </div>

                {/* Right Side: Match Chart */}
                {matchScore && (
                    <div className="flex-shrink-0 ml-2">
                        <MatchRateChart percentage={matchScore} />
                    </div>
                )}
            </div>
        </div>
    );
}

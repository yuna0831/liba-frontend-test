import { MatchRateChart } from '@/components/jobs/MatchRateChart';
import { Check, X } from 'lucide-react';

export function MatchAnalysis() {
    return (
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
            <h3 className="font-semibold text-gray-900 mb-6">AI Match Analysis</h3>

            <div className="flex flex-col items-center mb-8">
                <MatchRateChart percentage={92} />
                <p className="mt-4 text-center text-sm text-gray-500">
                    Your profile is a great match for this role!
                </p>
            </div>

            <div className="space-y-4">
                <div>
                    <h4 className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-3">Strong Matches</h4>
                    <ul className="space-y-2">
                        <li className="flex items-start gap-2 text-sm text-gray-600">
                            <div className="mt-0.5 p-1 bg-green-100 rounded-full">
                                <Check className="w-3 h-3 text-green-600" />
                            </div>
                            Frontend Architecture (React/Next.js)
                        </li>
                        <li className="flex items-start gap-2 text-sm text-gray-600">
                            <div className="mt-0.5 p-1 bg-green-100 rounded-full">
                                <Check className="w-3 h-3 text-green-600" />
                            </div>
                            UI System Design (Tailwind CSS)
                        </li>
                    </ul>
                </div>

                <div>
                    <h4 className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-3 mt-6">Missing Skills</h4>
                    <ul className="space-y-2">
                        <li className="flex items-start gap-2 text-sm text-gray-600">
                            <div className="mt-0.5 p-1 bg-red-100 rounded-full">
                                <X className="w-3 h-3 text-red-600" />
                            </div>
                            Python Backend Experience
                        </li>
                    </ul>
                </div>
            </div>

            <button className="w-full mt-8 py-3 bg-brand-purple text-white rounded-lg font-medium hover:bg-purple-700 transition-colors">
                Optimize Resume
            </button>
        </div>
    );
}

import { CheckCircle2 } from 'lucide-react';

export function WhyChooseWidget() {
    return (
        <div className="bg-gradient-to-br from-white to-gray-50 rounded-2xl p-6 border border-gray-100 shadow-sm relative overflow-hidden">
            {/* Background Decoration */}
            <div className="absolute top-0 right-0 w-24 h-24 bg-brand-lime/10 rounded-full blur-2xl -mr-8 -mt-8" />

            <h3 className="font-bold text-gray-900 mb-4 text-base relative z-10">Why Choose Our<br />AI Mock Interviews?</h3>

            <ul className="space-y-3 relative z-10">
                <li className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-brand-purple mt-0.5 flex-shrink-0" />
                    <span className="text-xs text-gray-600 leading-relaxed">
                        <strong className="text-gray-900 font-semibold">Instant Feedback:</strong> Get detailed analysis on your answers immediately.
                    </span>
                </li>
                <li className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-brand-purple mt-0.5 flex-shrink-0" />
                    <span className="text-xs text-gray-600 leading-relaxed">
                        <strong className="text-gray-900 font-semibold">Real-world Questions:</strong> Practice with questions from top tech companies.
                    </span>
                </li>
                <li className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-brand-purple mt-0.5 flex-shrink-0" />
                    <span className="text-xs text-gray-600 leading-relaxed">
                        <strong className="text-gray-900 font-semibold">Confidence Booster:</strong> Improve your speaking and technical articulation.
                    </span>
                </li>
            </ul>

            <button className="w-full mt-6 py-2.5 bg-brand-purple text-white rounded-xl text-xs font-bold hover:bg-purple-700 transition-colors shadow-sm relative z-10">
                Start Free Session
            </button>
        </div>
    );
}

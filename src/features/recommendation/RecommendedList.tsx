import { JobCard } from '@/components/jobs/JobCard';

export function RecommendedList() {
    const jobs = [
        {
            id: 1,
            title: 'Senior Frontend Engineer',
            company: 'TechCorp',
            location: 'San Francisco, CA',
            type: 'Full-time',
            salary: '$140k - $180k',
            tags: ['React', 'Next.js', 'TypeScript'],
            matchScore: 95
        },
        {
            id: 2,
            title: 'Product Designer',
            company: 'Creative Studio',
            location: 'Remote',
            type: 'Contract',
            salary: '$80 - $120 / hr',
            tags: ['Figma', 'UI/UX', 'Design System'],
            matchScore: 88
        },
        {
            id: 3,
            title: 'Full Stack Developer',
            company: 'StartupX',
            location: 'New York, NY',
            type: 'Full-time',
            salary: '$120k - $160k',
            tags: ['Node.js', 'React', 'AWS'],
            matchScore: 92
        }
    ];

    return (
        <div className="space-y-6">
            <div className="flex justify-between items-center">
                <h2 className="text-xl font-bold text-gray-900">Recommended Jobs</h2>
                <button className="text-brand-purple text-sm font-medium hover:underline">View All</button>
            </div>
            <div className="space-y-4">
                {jobs.map((job) => (
                    <JobCard key={job.id} {...job} />
                ))}
            </div>
        </div>
    );
}

import { JobCard } from '@/components/jobs/JobCard';
import { JOB_DATA } from '@/data/jobs';

export function RecommendedList() {
    return (
        <div className="w-full flex flex-col">
            <div className="flex flex-col w-full">
                {JOB_DATA.map((job) => (
                    <JobCard
                        key={job.id}
                        // 1. 여기서 이름을 정확히 맞춰줘야 JobCard에 전달됩니다.
                        title={job.title}
                        company={job.company}
                        location={job.location}

                        // 2. 데이터의 workType을 JobCard의 type으로 연결
                        type={job.workType}

                        // 3. 누락되었던 salary 필드 추가
                        salary={job.salary}

                        tags={job.tags}
                        logo={job.logo}
                        matchScore={job.matchRate}
                        matchColor={job.matchColor}
                        postedAt={job.postedAt}
                        applicants={job.applicants}
                    />
                ))}
            </div>
        </div>
    );
}
'use client';

import { JobCard } from '@/app/jobs/JobCard';
import { JOB_DATA } from '@/data/jobs';
import { motion } from 'framer-motion';

const container = {
    hidden: { opacity: 0 },
    show: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1
        }
    }
};

const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { type: 'spring', stiffness: 50, damping: 20 } }
};

export function RecommendedList() {
    return (
        <motion.div
            className="w-full flex flex-col"
            variants={container}
            initial="hidden"
            animate="show"
        >
            <div className="flex flex-col w-full">
                {JOB_DATA.map((job) => (
                    <motion.div key={job.id} variants={item}>
                        <JobCard
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
                    </motion.div>
                ))}
            </div>
        </motion.div>
    );
}
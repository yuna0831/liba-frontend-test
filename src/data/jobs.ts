// src/types/job.ts (또는 파일 상단)
export interface Job {
    id: number;
    title: string;
    company: string;
    logo: string;
    location: string;
    workType: string;
    matchRate: number;
    matchColor: string;
    tags: string[];     // 여기엔 ['Full time', 'Mid Level'] 같은 것만!
    salary: string;     // 연봉 정보 전용 필드
    postedAt: string;
    applicants: number;
}

// src/data/jobs.ts
// src/data/jobs.ts
export const JOB_DATA: Job[] = [
    {
        id: 1,
        title: "Web Application Developer",
        company: "Backd Business Funding",
        logo: "/logo/Backd_logo.png", // [확인] public/logo 폴더에 파일이 있는지 확인하세요.
        location: "Austin, Texas Metropolitan Area",
        workType: "On-site",
        matchRate: 64,
        matchColor: "#FFD035",
        // [수정] 연봉 정보는 컴포넌트에서 별도로 받으므로 tags에서 제외하거나 분리해야 합니다.
        tags: ["Full time", "0 of 3 skills match", "Mid Level"],
        salary: "$65/yr - $70/yr", // salary 필드를 따로 쓰는 게 안전합니다.
        postedAt: "1 hour ago",
        applicants: 25
    },
    {
        id: 2,
        title: "Software Engineer, Network Infrastructure",
        company: "Cursor AI", // [수정] 경로가 아니라 회사 이름이 들어가야 합니다.
        logo: "/logo/Cursor.png", // [수정] 경로 형식을 /logo/파일이름.png로 통일하세요.
        location: "Sunnyvale, CA",
        workType: "On-site",
        matchRate: 93,
        matchColor: "#B9FD33",
        tags: ["Full time", "5+ years exp", "Mid Level"],
        salary: "$161K/yr - $239K/yr",
        postedAt: "2 hours ago",
        applicants: 25
    },
    {
        id: 3,
        title: "Full-Stack Software Engineer (Web Developer)",
        company: "Simons Foundation",
        logo: "/logo/Simons_logo.png", // [수정] /logo와 Simons 사이에 /가 빠졌습니다.
        location: "New York, NY",
        workType: "On-site",
        matchRate: 93,
        matchColor: "#B9FD33",
        tags: ["Full time", "5+ years exp", "Mid Level"],
        salary: "$125K/yr - $140K/yr",
        postedAt: "1 hour ago",
        applicants: 25
    }
];
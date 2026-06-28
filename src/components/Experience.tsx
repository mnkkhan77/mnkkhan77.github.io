import { Briefcase, GraduationCap } from "lucide-react";

interface Job {
  role: string;
  company: string;
  period: string;
  location: string;
  points: string[];
}

const jobs: Job[] = [
  {
    role: "Backend Engineer",
    company: "Growth Loops Technology",
    period: "Sep 2025 – Present",
    location: "Remote, India",
    points: [
      "Built scalable REST APIs and backend services using NestJS, TypeScript, and Prisma ORM powering core product modules.",
      "Designed and implemented a real-time WebSocket chat system for an AI-integrated chatbot product.",
      "Delivered a full marketplace backend — product catalog, vendor onboarding, and end-to-end order management flows.",
      "Integrated AWS S3 with secure presigned-URL pipelines for production media upload and retrieval.",
      "Managed PostgreSQL schema design and Prisma migrations across production environments.",
    ],
  },
  {
    role: "Full Stack Engineer",
    company: "Cognizant Technology Solutions",
    period: "Dec 2021 – Apr 2024",
    location: "Kolkata, India",
    points: [
      "Built and maintained 10+ production REST APIs using Java and Spring Boot.",
      "Handled AWS EC2 deployments and CI/CD pipeline setup for production and staging environments.",
      "Developed responsive UI components in ReactJS, TypeScript, and MUI — improving rendering performance via memoisation and lazy loading.",
      "Worked with MySQL for schema design, query optimisation, and data migrations across enterprise-scale tables.",
      "Collaborated in cross-functional Agile teams, participating in code reviews and resolving production-critical issues.",
    ],
  },
];

interface Education {
  title: string;
  org: string;
  period: string;
  detail?: string;
}

const education: Education[] = [
  {
    title: "B.Tech — Computer Science & Engineering",
    org: "University Institute of Technology, Burdwan",
    period: "2017 – 2021",
  },
  {
    title: "Full Stack Java + Spring Boot Program",
    org: "AccioJob",
    period: "2024 – 2025",
    detail:
      "Intensive program covering Java, Spring Boot, microservices, system design, DSA, and full-stack development.",
  },
];

export default function Experience() {
  return (
    <section
      id="experience"
      className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-gray-800"
    >
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">Experience</h2>

        <div className="space-y-8">
          {jobs.map((job, index) => (
            <div
              key={index}
              className="bg-white dark:bg-gray-900 p-6 rounded-lg shadow-md"
            >
              <div className="flex items-start gap-4">
                <div className="hidden sm:flex w-10 h-10 rounded-lg bg-blue-100 dark:bg-blue-900 items-center justify-center shrink-0">
                  <Briefcase
                    className="text-blue-600 dark:text-blue-400"
                    size={20}
                  />
                </div>
                <div className="flex-1">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-1">
                    <h3 className="font-bold text-xl">
                      {job.role}{" "}
                      <span className="text-blue-600 dark:text-blue-400">
                        · {job.company}
                      </span>
                    </h3>
                    <span className="text-sm text-gray-500 dark:text-gray-400">
                      {job.period}
                    </span>
                  </div>
                  <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">
                    {job.location}
                  </p>
                  <ul className="space-y-2">
                    {job.points.map((point, pointIndex) => (
                      <li
                        key={pointIndex}
                        className="text-gray-600 dark:text-gray-300 flex gap-2"
                      >
                        <span className="text-blue-500 mt-1.5 shrink-0">•</span>
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>

        <h3 className="text-2xl font-bold text-center mt-16 mb-8">
          Education & Training
        </h3>
        <div className="grid md:grid-cols-2 gap-6">
          {education.map((item, index) => (
            <div
              key={index}
              className="bg-white dark:bg-gray-900 p-6 rounded-lg shadow-md"
            >
              <div className="flex items-start gap-3">
                <GraduationCap
                  className="text-blue-600 dark:text-blue-400 shrink-0 mt-1"
                  size={22}
                />
                <div>
                  <h4 className="font-semibold">{item.title}</h4>
                  <p className="text-gray-600 dark:text-gray-300">{item.org}</p>
                  <p className="text-sm text-gray-500 dark:text-gray-400 mb-2">
                    {item.period}
                  </p>
                  {item.detail && (
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      {item.detail}
                    </p>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

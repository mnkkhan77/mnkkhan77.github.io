import React from "react";
import { Code, Cloud, Server, Wrench } from "lucide-react";

interface SkillGroup {
  title: string;
  icon: React.ComponentType<{ size?: number; className?: string }>;
  skills: string[];
}

const skillGroups: SkillGroup[] = [
  {
    title: "Primary Stack",
    icon: Code,
    skills: [
      "Java",
      "Spring Boot",
      "REST APIs",
      "Microservices",
      "React",
      "MySQL",
    ],
  },
  {
    title: "Current Stack",
    icon: Server,
    skills: [
      "NestJS",
      "TypeScript",
      "Next.js",
      "Prisma ORM",
      "PostgreSQL",
      "WebSockets",
    ],
  },
  {
    title: "Cloud & DevOps",
    icon: Cloud,
    skills: [
      "AWS S3",
      "AWS EC2",
      "CI/CD Pipelines",
      "GitHub Actions",
      "GitLab",
      "Docker",
    ],
  },
  {
    title: "Other",
    icon: Wrench,
    skills: [
      "System Design",
      "API Architecture",
      "JWT Auth",
      "Query Optimisation",
      "Agile / JIRA",
    ],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">
          Technical Skills
        </h2>
        <div className="grid md:grid-cols-2 gap-6">
          {skillGroups.map((group, index) => (
            <div
              key={index}
              className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow"
            >
              <div className="flex items-center mb-4">
                <group.icon
                  className="text-blue-600 dark:text-blue-400 mr-3"
                  size={24}
                />
                <h3 className="font-semibold text-lg">{group.title}</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {group.skills.map((skill, skillIndex) => (
                  <span
                    key={skillIndex}
                    className="bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 px-3 py-1 rounded-full text-sm"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

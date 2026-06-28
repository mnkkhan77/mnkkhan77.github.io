import { ExternalLink, Github } from "lucide-react";

interface Project {
  title: string;
  description: string;
  technologies: string[];
  github: string;
  demo?: string;
  gradient: string;
}

const projects: Project[] = [
  {
    title: "Code Tracker",
    description:
      "Full-stack coding-activity tracker with a Java Spring Boot backend and React/TypeScript frontend, deployed as separate backend and frontend services. (2024–2025, 51+ commits)",
    technologies: ["Java", "Spring Boot", "TypeScript", "React"],
    github: "https://github.com/mnkkhan77/code-tracker",
    demo: "https://code-tracker-rho.vercel.app",
    gradient: "from-blue-500 to-cyan-500",
  },
  {
    title: "Job Portal",
    description:
      "Production-grade job portal with User, Recruiter, and Admin roles — JWT auth, role-based access control, recruiter workflows, and admin dashboards. (2024)",
    technologies: ["React", "Spring Boot", "MySQL", "JWT", "MUI"],
    github: "https://github.com/mnkkhan77/job-portal",
    demo: "https://epic-job-portal.vercel.app",
    gradient: "from-purple-500 to-indigo-500",
  },
  {
    title: "Hotel Management System",
    description:
      "Full-stack hotel management system with booking, guest management, service requests, and billing modules, deployed on AWS EC2. (2024)",
    technologies: ["Java", "Spring Boot", "React", "MySQL", "AWS EC2"],
    github: "https://github.com/mnkkhan77/hotel-management-system-book_my_space",
    gradient: "from-emerald-500 to-teal-500",
  },
  {
    title: "Movie App",
    description:
      "React app integrating the TMDb REST API with search, pagination, and dynamic routing. (2023)",
    technologies: ["ReactJS", "MUI", "TMDb REST API"],
    github: "https://github.com/mnkkhan77/epic-cinema",
    demo: "https://epic-cinema.vercel.app/",
    gradient: "from-rose-500 to-orange-500",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">
          Featured Projects
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow group flex flex-col"
            >
              <div
                className={`relative h-32 bg-gradient-to-br ${project.gradient} flex items-center justify-center`}
              >
                <span className="text-white text-xl font-bold text-center px-4 drop-shadow">
                  {project.title}
                </span>
              </div>
              <div className="p-6 flex flex-col flex-1">
                <h3 className="font-bold text-xl mb-2">{project.title}</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4 flex-1">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 px-3 py-1 rounded-full text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex space-x-4">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-2 text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                  >
                    <Github size={18} />
                    <span>Code</span>
                  </a>
                  {project.demo && (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center space-x-2 text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                    >
                      <ExternalLink size={18} />
                      <span>Live</span>
                    </a>
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
